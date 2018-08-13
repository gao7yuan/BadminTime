import { User } from "./User";
/*
class EventTime {
    date: Date;
    startTime: string; // will modify later
    endTime: string;
}
*/
export class Event {
    _id: string;
    organizer: User;
    participants: [User];
    eventDate: string;
    address: string;
    intro: string;
}
export class EventPost {
  _id: string;
  userName: string;
  email: string;
  eventDate: string;
  address: string;
  intro: string;
}
