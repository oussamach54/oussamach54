import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LigneDeVenteResolverBase } from "./base/ligneDeVente.resolver.base";
import { LigneDeVente } from "./base/LigneDeVente";
import { LigneDeVenteService } from "./ligneDeVente.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LigneDeVente)
export class LigneDeVenteResolver extends LigneDeVenteResolverBase {
  constructor(
    protected readonly service: LigneDeVenteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
