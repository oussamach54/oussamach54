import { LigneDeVente as TLigneDeVente } from "../api/ligneDeVente/LigneDeVente";

export const LIGNEDEVENTE_TITLE_FIELD = "id";

export const LigneDeVenteTitle = (record: TLigneDeVente): string => {
  return record.id?.toString() || String(record.id);
};
