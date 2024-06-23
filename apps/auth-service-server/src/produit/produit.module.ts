import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProduitModuleBase } from "./base/produit.module.base";
import { ProduitService } from "./produit.service";
import { ProduitController } from "./produit.controller";
import { ProduitResolver } from "./produit.resolver";

@Module({
  imports: [ProduitModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProduitController],
  providers: [ProduitService, ProduitResolver],
  exports: [ProduitService],
})
export class ProduitModule {}
