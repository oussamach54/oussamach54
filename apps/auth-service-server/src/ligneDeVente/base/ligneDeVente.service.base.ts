/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, LigneDeVente as PrismaLigneDeVente } from "@prisma/client";

export class LigneDeVenteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LigneDeVenteCountArgs, "select">
  ): Promise<number> {
    return this.prisma.ligneDeVente.count(args);
  }

  async ligneDeVentes(
    args: Prisma.LigneDeVenteFindManyArgs
  ): Promise<PrismaLigneDeVente[]> {
    return this.prisma.ligneDeVente.findMany(args);
  }
  async ligneDeVente(
    args: Prisma.LigneDeVenteFindUniqueArgs
  ): Promise<PrismaLigneDeVente | null> {
    return this.prisma.ligneDeVente.findUnique(args);
  }
  async createLigneDeVente(
    args: Prisma.LigneDeVenteCreateArgs
  ): Promise<PrismaLigneDeVente> {
    return this.prisma.ligneDeVente.create(args);
  }
  async updateLigneDeVente(
    args: Prisma.LigneDeVenteUpdateArgs
  ): Promise<PrismaLigneDeVente> {
    return this.prisma.ligneDeVente.update(args);
  }
  async deleteLigneDeVente(
    args: Prisma.LigneDeVenteDeleteArgs
  ): Promise<PrismaLigneDeVente> {
    return this.prisma.ligneDeVente.delete(args);
  }
}
