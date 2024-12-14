import { Produit as TProduit } from "../api/produit/Produit";

export const PRODUIT_TITLE_FIELD = "id";

export const ProduitTitle = (record: TProduit): string => {
  return record.id?.toString() || String(record.id);
};
