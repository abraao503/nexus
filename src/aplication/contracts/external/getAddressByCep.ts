export type GetAddressByCepReturn = {
  cep: string;
  street: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
};

export interface GetAddressByCep {
  getAddressByCep: (cep: string) => Promise<GetAddressByCepReturn>;
}
