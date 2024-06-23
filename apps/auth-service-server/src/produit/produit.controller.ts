import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProduitService } from "./produit.service";
import { ProduitControllerBase } from "./base/produit.controller.base";

@swagger.ApiTags("produits")
@common.Controller("produits")
export class ProduitController extends ProduitControllerBase {
  constructor(
    protected readonly service: ProduitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
