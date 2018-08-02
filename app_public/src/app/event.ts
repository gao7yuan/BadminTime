import { User } from "./User";

class EventTime {
    date: Date;
    startTime: string; // will modify later
    endTime: string;
}

export class Event {
    _id: string;
    organizer: User;
    participants: [User];
    eventTime: EventTime;
    address: string;
    intro: String;
}