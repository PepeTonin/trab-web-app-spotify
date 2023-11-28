import axios from "axios";
import { XMLParser } from "fast-xml-parser";

export async function buscaLocalidades(localidade: string) {
  const url = `http://servicos.cptec.inpe.br/XML/listaCidades?city=${localidade}`;
  const response = await axios.get(url);
  const xmlData = response.data;
  const parser = new XMLParser();
  const json = parser.parse(xmlData);
  return json.cidades.cidade;
}

export async function buscaPrevisaoTempo7Dias(id: string) {
  const url = `http://servicos.cptec.inpe.br/XML/cidade/7dias/${id}/previsao.xml`;
  const response = await axios.get(url);
  const xmlData = response.data;
  const parser = new XMLParser();
  const json = parser.parse(xmlData);
  return json.cidade.previsao;
}
