export const TIME_SLOT_GROUPS = {
  morning: {
    label: "Morning",
    slots: [
      "08:00 AM",
      "08:30 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
    ],
  },
  afternoon: {
    label: "Afternoon",
    slots: [
      "12:00 PM",
      "12:30 PM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
    ],
  },
  evening: {
    label: "Evening",
    slots: [
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
} as const;

export type BookingDayOption = {
  offset: number;
  label: string;
  sub: string;
  dateIso: string;
  slotsCount: number;
};

function pad(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

export function getBookingDayOptions(count = 5): BookingDayOption[] {
  const out: BookingDayOption[] = [];
  const base = new Date();
  base.setHours(0, 0, 0, 0);

  for (let i = 0; i < count; i++) {
    const d = new Date(base);
    d.setDate(d.getDate() + i);
    const y = d.getFullYear();
    const m = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const dateIso = `${y}-${m}-${day}`;

    let label: string;
    if (i === 0) label = "Today";
    else if (i === 1) label = "Tomorrow";
    else label = d.toLocaleDateString("en-IN", { weekday: "short" });

    const sub =
      i <= 1
        ? d.toLocaleDateString("en-IN", { day: "numeric", month: "short" })
        : `${d.toLocaleDateString("en-IN", { weekday: "short" })}, ${d.toLocaleDateString("en-IN", { day: "numeric", month: "short" })}`;

    const slotsCount =
      TIME_SLOT_GROUPS.morning.slots.length +
      TIME_SLOT_GROUPS.afternoon.slots.length +
      TIME_SLOT_GROUPS.evening.slots.length;

    out.push({ offset: i, label, sub, dateIso, slotsCount });
  }

  return out;
}
