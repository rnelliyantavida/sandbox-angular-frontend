import { Time } from "@angular/common";

export class Shift{
    constructor(public shiftName: string, public startTime: Time, public endTime: Time){}
}