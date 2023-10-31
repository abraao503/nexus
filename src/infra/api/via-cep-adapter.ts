import { GetUfByCep } from "@/aplication/contracts/external/getUfByCep";
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

export class ViaCepAdapter implements GetUfByCep {
  private readonly url: string = "https://viacep.com.br/ws";

  constructor(private readonly getHttp: Get) {}

  async getUfByCep(cep: string): Promise<string> {
    const response = await this.getHttp.get(`${this.url}/${cep}/json`);

    return (response as ViaCepResponse).uf;
  }
}
