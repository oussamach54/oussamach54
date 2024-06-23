import { Vente as TVente } from "../api/vente/Vente";

export const VENTE_TITLE_FIELD = "id";

export const VenteTitle = (record: TVente): string => {
  return record.id?.toString() || String(record.id);
};
