import { Shift } from "./shift.model";

export class Clinic{
    constructor(public clinicName: string, public address: string, public shifts: Shift[]){}
}