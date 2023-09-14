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
  "recensioni": (string | Review)[];
  "enabled": boolean;
  "accountNonLocked": boolean;
 "authorities": { authority: string }[];
  "credentialsNonExpired": boolean;
  "accountNonExpired": boolean;
}
