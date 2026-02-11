import type { HoursEntry } from "@/lib/types";

const MINUTES_IN_DAY = 24 * 60;

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

  return { weekday, minutes: hour * 60 + minute };
};

export const getOpenStatus = (
  weekSchedule: HoursEntry[],
  timeZone: string
) => {
  if (!weekSchedule.length) {
    return { label: "Hours unavailable", isOpen: null };
  }

  const { weekday, minutes } = getLisbonParts(new Date(), timeZone);
  const today = weekSchedule.find((entry) => entry.day === weekday);

  if (!today) {
    return { label: "Hours unavailable", isOpen: null };
  }

  const openMinutes = parseTime(today.open);
  const closeMinutes = parseTime(today.close);

  if (openMinutes === null || closeMinutes === null) {
    return { label: "Hours unavailable", isOpen: null };
  }

  const isOvernight = openMinutes > closeMinutes;
  const isOpen = isOvernight
    ? minutes >= openMinutes || minutes < closeMinutes
    : minutes >= openMinutes && minutes < closeMinutes;

  return { label: isOpen ? "Open now" : "Closed now", isOpen };
};

export const formatHours = (entry: HoursEntry) => {
  if (!entry.open || !entry.close) {
    return "—";
  }
  return `${entry.open} – ${entry.close}`;
};
