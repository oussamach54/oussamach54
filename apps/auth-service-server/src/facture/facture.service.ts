import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FactureServiceBase } from "./base/facture.service.base";

@Injectable()
export class FactureService extends FactureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
