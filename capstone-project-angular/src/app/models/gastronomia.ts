import { TipoGastronomia } from "../enum/tipo-gastronomia";

export interface Gastronomia {

  id: string;
  nome: string;
  indirizzo: string;
  telefono: string;
  prezzoMedio: number;
  tipoGastronomia: TipoGastronomia;
  imageUrl: string;
}
