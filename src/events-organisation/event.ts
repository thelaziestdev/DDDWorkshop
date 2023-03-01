class FacilityDraft {

    readonly id: string;

    openingHours: Map<string, TimeRange>;


    constructor(openingHours: Map<string, TimeRange>) {
        this.id = '1' // TODO: get random
        this.openingHours = openingHours;
    }

    changeOpeningHours(openingHours: Map<string, TimeRange>) {
        this.openingHours = openingHours;
    }

    open(): Facility {
        return new Facility(this.id, this.openingHours);
    }
}

class Facility {

    readonly id: string;
    openingHours: Map<string, TimeRange>;
    status: FacilityStatus
    constructor(id: string, openingHours: Map<string, TimeRange>) {
        this.id = id;
        this.openingHours = openingHours;
        this.status = FacilityStatus.OPEN
    }

    changeOpeningHours(openingHours: Map<string, TimeRange>) {
        this.openingHours = openingHours;
    }

    closeTemporarily() {
        this.status = FacilityStatus.TEMPORARILY_CLOSED
    }

    closePermanently(): ClosedFacility {
        return new ClosedFacility(this.id);
    }

}

class ClosedFacility {
    readonly id: string;


    constructor(id: string) {
        this.id = id;
    }
}

enum FacilityStatus {
    OPEN, TEMPORARILY_CLOSED
}

class TimeRange {

    readonly from: string
    readonly to: string

}

class HappeningDraft {

    id: string;
    placeId: string;
    time: Date;

    constructor(placeId: string, time: Date) {
        this.id = '1' // TODO: get random
        this.placeId = placeId;
        this.time = time;
    }

    changeTime(time: Date) {
        this.time = time;
    }

    changePlace(placeId: string) {
        this.placeId = placeId;
    }

    publish(): Happening {
        return new Happening(this.id, this.placeId, this.time)
    }

}

class Happening {

    readonly id: string
    placeId: string;
    readonly time: Date;

    constructor(id: string, placeId: string, time: Date) {
        this.id = id;
        this.placeId = placeId;
        this.time = time;
    }

    cancel(): CanceledHappening {
        return new CanceledHappening(this.id, this.placeId, this.time);
    }

    archive(): CanceledHappening {
        if(this.isPastHappening()) {
            return new ArchivedHappening(this.id, this.placeId, this.time);
        }
        throw new Error('Not a past happening!')
    }

    changePlace(placeId: string) {
        this.placeId = placeId;
    }

    private isPastHappening(): boolean {
        // TODO: implement
        return false
    }

}

class CanceledHappening {

    readonly id: string
    readonly placeId: string;
    readonly time: Date;

    constructor(id: string, placeId: string, time: Date) {
        this.id = id;
        this.placeId = placeId;
        this.time = time;
    }
}

class ArchivedHappening {

    readonly id: string
    readonly placeId: string;
    readonly time: Date;

    constructor(id: string, placeId: string, time: Date) {
        this.id = id;
        this.placeId = placeId;
        this.time = time;
    }
}

class HappeningParticipation {

    readonly id: string
    readonly userId: string
    readonly happeningId: string
    readonly paidAmount: number;


    constructor(id: string, userId: string, happeningId: string, paidAmount: number) {
        this.id = '1' // TODO: get random
        this.userId = userId;
        this.happeningId = happeningId;
        this.paidAmount = paidAmount;
    }

    cancel(): CanceledHappeningParticipation {
        return new CanceledHappeningParticipation(this.id, this.userId, this.happeningId, this.paidAmount)
    }

}

class CanceledHappeningParticipation {

    readonly id: string
    readonly userId: string
    readonly happeningId: string
    readonly paidAmount: number;

    constructor(id: string, userId: string, happeningId: string, paidAmount: number) {
        this.id = id;
        this.userId = userId;
        this.happeningId = happeningId;
        this.paidAmount = paidAmount;
    }

}
