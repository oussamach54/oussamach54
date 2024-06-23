/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Facture } from "./Facture";
import { FactureCountArgs } from "./FactureCountArgs";
import { FactureFindManyArgs } from "./FactureFindManyArgs";
import { FactureFindUniqueArgs } from "./FactureFindUniqueArgs";
import { DeleteFactureArgs } from "./DeleteFactureArgs";
import { FactureService } from "../facture.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Facture)
export class FactureResolverBase {
  constructor(
    protected readonly service: FactureService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Facture",
    action: "read",
    possession: "any",
  })
  async _facturesMeta(
    @graphql.Args() args: FactureCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Facture])
  @nestAccessControl.UseRoles({
    resource: "Facture",
    action: "read",
    possession: "any",
  })
  async factures(
    @graphql.Args() args: FactureFindManyArgs
  ): Promise<Facture[]> {
    return this.service.factures(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Facture, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Facture",
    action: "read",
    possession: "own",
  })
  async facture(
    @graphql.Args() args: FactureFindUniqueArgs
  ): Promise<Facture | null> {
    const result = await this.service.facture(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Facture)
  @nestAccessControl.UseRoles({
    resource: "Facture",
    action: "delete",
    possession: "any",
  })
  async deleteFacture(
    @graphql.Args() args: DeleteFactureArgs
  ): Promise<Facture | null> {
    try {
      return await this.service.deleteFacture(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
