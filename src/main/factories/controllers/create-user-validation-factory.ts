import { RequiredFieldValidation } from "@/validation/validators/required-field-validation";
import { ValidationComposite } from "@/validation/validators/validation-composite";
import { Validation } from "@/presentation/contracts/validation";

export const makeCreateUserValidation = (): ValidationComposite => {
  const validations: Validation[] = [];

  for (const field of ["name", "email", "password", "birthDate", "address"]) {
    validations.push(new RequiredFieldValidation(field));
  }

  return new ValidationComposite(validations);
};
