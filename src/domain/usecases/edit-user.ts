export type EditUserParams = {
  name?: string;
  email?: string;
  birthDate?: Date;
  password?: string;
};

export interface EditUser {
  edit: (id: string, user: EditUserParams) => Promise<void>;
}
