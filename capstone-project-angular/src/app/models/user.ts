import { Review } from "./rewiew";

export class User {
  "id": string;
  "username": string;
  "name": string;
  "surname": string;
  "email": string;
  "numeroTelefono": string;
  "role": string;
  "prenotazioni": any[];
  "gastronomie_preferite": any[];
  "recensioni":Review[];
}
