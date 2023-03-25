
export class ValidationError {
    affectedField: string;
    message: string;

    constructor(affectedField: string, message: string) {
        this.affectedField = affectedField;
        this.message = message;
    }
}
