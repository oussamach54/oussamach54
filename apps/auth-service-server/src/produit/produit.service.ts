import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProduitServiceBase } from "./base/produit.service.base";

@Injectable()
export class ProduitService extends ProduitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
