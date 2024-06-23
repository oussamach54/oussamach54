import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LigneDeVenteService } from "./ligneDeVente.service";
import { LigneDeVenteControllerBase } from "./base/ligneDeVente.controller.base";

@swagger.ApiTags("ligneDeVentes")
@common.Controller("ligneDeVentes")
export class LigneDeVenteController extends LigneDeVenteControllerBase {
  constructor(
    protected readonly service: LigneDeVenteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
