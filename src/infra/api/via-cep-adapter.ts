import {
  GetAddressByCep,
  GetAddressByCepReturn,
} from "@/aplication/contracts/external/getAddressByCep";
import { Get } from "@/aplication/contracts/http/get";

type ViaCepResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export class ViaCepAdapter implements GetAddressByCep {
  private readonly url: string = "https://viacep.com.br/ws";

  constructor(private readonly getHttp: Get) {}

  async getAddressByCep(cep: string): Promise<GetAddressByCepReturn> {
    const response = (await this.getHttp.get(
      `${this.url}/${cep}/json`
    )) as ViaCepResponse;

    return {
      cep: response.cep,
      street: response.logradouro,
      complement: response.complemento,
      neighborhood: response.bairro,
      city: response.localidade,
      uf: response.uf,
    };
  }
}
