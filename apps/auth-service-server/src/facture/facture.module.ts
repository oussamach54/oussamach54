import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FactureModuleBase } from "./base/facture.module.base";
import { FactureService } from "./facture.service";
import { FactureController } from "./facture.controller";
import { FactureResolver } from "./facture.resolver";

@Module({
  imports: [FactureModuleBase, forwardRef(() => AuthModule)],
  controllers: [FactureController],
  providers: [FactureService, FactureResolver],
  exports: [FactureService],
})
export class FactureModule {}
