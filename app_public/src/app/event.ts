export class Event {
    _id: string;
    organizer: string;
    participants: [string];
    eventDate: string;
    address: string;
    intro?: string;
}
export interface EventPost {
  eventDate: string;
  address?: string;
  intro?: string;
}
