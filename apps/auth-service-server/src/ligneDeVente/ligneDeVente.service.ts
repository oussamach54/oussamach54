import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LigneDeVenteServiceBase } from "./base/ligneDeVente.service.base";

@Injectable()
export class LigneDeVenteService extends LigneDeVenteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
