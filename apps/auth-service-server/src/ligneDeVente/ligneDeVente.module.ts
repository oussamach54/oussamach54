import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LigneDeVenteModuleBase } from "./base/ligneDeVente.module.base";
import { LigneDeVenteService } from "./ligneDeVente.service";
import { LigneDeVenteController } from "./ligneDeVente.controller";
import { LigneDeVenteResolver } from "./ligneDeVente.resolver";

@Module({
  imports: [LigneDeVenteModuleBase, forwardRef(() => AuthModule)],
  controllers: [LigneDeVenteController],
  providers: [LigneDeVenteService, LigneDeVenteResolver],
  exports: [LigneDeVenteService],
})
export class LigneDeVenteModule {}
