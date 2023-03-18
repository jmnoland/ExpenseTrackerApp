export class PaymentType {
    paymentTypeId: string;
    active: boolean;
    name: string;
    charge: number;
    archivedAt: Date | null;

    constructor(paymentTypeId: string, active: boolean, name: string, charge: number, archivedAt: Date | null) {
        this.paymentTypeId = paymentTypeId;
        this.active = active;
        this.name = name;
        this.charge = charge;
        this.archivedAt = archivedAt;
    }
}
