import { Gastronomia } from "./gastronomia";

export interface Prenotazione {
gastronomia: string;
dataPrenotazione: string;
id: string;
nota: string;
oraPrenotazione: string;
gastronomiaDetail?: Gastronomia;
}
