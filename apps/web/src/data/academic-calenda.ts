export interface AcademicCalendarEvent {
  serial_number: number;
  dates: string;
  events: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

export async function getAcademicCalendar(): Promise<AcademicCalendarEvent[]> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/academic-calendar`, { cache: "no-store" });
    if (!response.ok) return [];

    const data: unknown = await response.json();
    if (!Array.isArray(data)) return [];

    return data.flatMap((row): AcademicCalendarEvent[] => {
      if (typeof row !== "object" || row === null) return [];

      const event = row as Record<string, unknown>;
      if (
        typeof event.serial_number !== "number" ||
        typeof event.dates !== "string" ||
        typeof event.events !== "string"
      ) {
        return [];
      }

      return [{
        serial_number: event.serial_number,
        dates: event.dates,
        events: event.events,
      }];
    }).sort((left, right) => left.serial_number - right.serial_number);
  } catch {
    return [];
  }
}