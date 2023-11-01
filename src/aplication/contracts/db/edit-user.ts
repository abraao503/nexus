export type EditUserRepositoryParams = {
  name?: string;
  email?: string;
  birthDate?: Date;
  password?: string;
};

export interface EditUserRepository {
  editById: (id: string, user: EditUserRepositoryParams) => Promise<void>;
}
