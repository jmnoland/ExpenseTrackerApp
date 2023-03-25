import { ValidationError } from "./ValidationError";

export class GetResponse<T> {
    responseObject: T;
    successful: boolean;
    validationErrors: ValidationError[];

    constructor(responseObject: T, successful: boolean, validationErrors: ValidationError[]) {
        this.responseObject = responseObject;
        this.successful = successful;
        this.validationErrors = validationErrors;
    }
}
