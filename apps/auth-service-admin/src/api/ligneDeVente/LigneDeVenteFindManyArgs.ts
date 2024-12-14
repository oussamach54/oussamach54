import { LigneDeVenteWhereInput } from "./LigneDeVenteWhereInput";
import { LigneDeVenteOrderByInput } from "./LigneDeVenteOrderByInput";

export type LigneDeVenteFindManyArgs = {
  where?: LigneDeVenteWhereInput;
  orderBy?: Array<LigneDeVenteOrderByInput>;
  skip?: number;
  take?: number;
};
