export class InvalidUserParamsError extends Error {
  constructor(name: string) {
    super(`Invalid user param - ${name}`);
  }
}
