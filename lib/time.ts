import type { HoursEntry } from "@/lib/types";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

const parseTime = (value: string | null) => {
  if (!value) return null;
  const [hours, minutes] = value.split(":").map(Number);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return null;
  return hours * 60 + minutes;
};

const getLisbonParts = (date: Date, timeZone: string) => {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  const parts = formatter.formatToParts(date);
  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(
    parts.find((part) => part.type === "minute")?.value ?? "0"
  );

  return { weekday, minutes: hour * 60 + minute, hour, minute };
};

const formatTime = (minutes: number) => {
  const hrs = Math.floor(minutes / 60) % 24;
  const mins = minutes % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}`;
};

export const getOpenStatus = (
  weekSchedule: HoursEntry[],
  timeZone: string,
  lang: Lang
) => {
  if (!weekSchedule.length) {
    return { label: t(ui.labels.hoursUnavailable, lang), isOpen: null };
  }

  const { weekday, minutes } = getLisbonParts(new Date(), timeZone);
  const todayIndex = weekSchedule.findIndex((entry) => entry.day === weekday);

  if (todayIndex === -1) {
    return { label: t(ui.labels.hoursUnavailable, lang), isOpen: null };
  }

  const today = weekSchedule[todayIndex];
  const openMinutes = parseTime(today.open);
  const closeMinutes = parseTime(today.close);

  if (openMinutes === null || closeMinutes === null) {
    return { label: t(ui.labels.hoursUnavailable, lang), isOpen: null };
  }

  const closesNextDay = closeMinutes <= openMinutes;
  const closeValue = closesNextDay ? closeMinutes + 24 * 60 : closeMinutes;
  const nowValue = minutes + (minutes < openMinutes && closesNextDay ? 24 * 60 : 0);

  const isOpen = nowValue >= openMinutes && nowValue < closeValue;

  let nextOpenDay: string | undefined;
  let nextOpenAt: string | undefined;

  if (!isOpen) {
    if (minutes < openMinutes) {
      nextOpenDay = today.day;
      nextOpenAt = formatTime(openMinutes);
    } else {
      for (let offset = 1; offset <= weekSchedule.length; offset += 1) {
        const idx = (todayIndex + offset) % weekSchedule.length;
        const entry = weekSchedule[idx];
        const entryOpenMinutes = parseTime(entry.open);
        const entryCloseMinutes = parseTime(entry.close);
        if (entryOpenMinutes !== null && entryCloseMinutes !== null) {
          nextOpenDay = entry.day;
          nextOpenAt = formatTime(entryOpenMinutes);
          break;
        }
      }
    }
  }

  return {
    label: isOpen ? t(ui.labels.openNow, lang) : t(ui.labels.closedNow, lang),
    isOpen,
    closesAt: formatTime(closeMinutes),
    nextOpenDay,
    nextOpenAt
  };
};

export const formatHours = (entry: HoursEntry) => {
  if (!entry.open || !entry.close) {
    return "—";
  }
  return `${entry.open} – ${entry.close}`;
};
