import { Gastronomia } from "./gastronomia";

export class Review {
  "id": string;
  "valutazione": number;
  "commento": string;
  "data": string;
  "user": string;
  "gastronomia": Gastronomia;
}
