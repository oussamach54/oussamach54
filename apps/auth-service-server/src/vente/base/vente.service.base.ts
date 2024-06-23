/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Vente as PrismaVente } from "@prisma/client";

export class VenteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.VenteCountArgs, "select">): Promise<number> {
    return this.prisma.vente.count(args);
  }

  async ventes(args: Prisma.VenteFindManyArgs): Promise<PrismaVente[]> {
    return this.prisma.vente.findMany(args);
  }
  async vente(args: Prisma.VenteFindUniqueArgs): Promise<PrismaVente | null> {
    return this.prisma.vente.findUnique(args);
  }
  async createVente(args: Prisma.VenteCreateArgs): Promise<PrismaVente> {
    return this.prisma.vente.create(args);
  }
  async updateVente(args: Prisma.VenteUpdateArgs): Promise<PrismaVente> {
    return this.prisma.vente.update(args);
  }
  async deleteVente(args: Prisma.VenteDeleteArgs): Promise<PrismaVente> {
    return this.prisma.vente.delete(args);
  }
}
