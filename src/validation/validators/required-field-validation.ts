import { Validation } from "@/presentation/contracts/validation";
import { MissingParamError } from "@/presentation/errors/missing-param-error";

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  validate(input: any): Error | undefined {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName);
    }
  }
}
