import { Facture as TFacture } from "../api/facture/Facture";

export const FACTURE_TITLE_FIELD = "id";

export const FactureTitle = (record: TFacture): string => {
  return record.id?.toString() || String(record.id);
};
