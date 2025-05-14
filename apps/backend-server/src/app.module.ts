import { Module } from "@nestjs/common";
import { ProductModule } from "./product/product.module";
import { AccountModule } from "./account/account.module";
import { MarketplaceSyncModule } from "./marketplaceSync/marketplaceSync.module";
import { RoleModule } from "./role/role.module";
import { SubscriptionPlanModule } from "./subscriptionPlan/subscriptionPlan.module";
import { MarketplaceModule } from "./marketplace/marketplace.module";
import { OfferCardModule } from "./offerCard/offerCard.module";
import { UserModule } from "./user/user.module";
import { AiGenerationModule } from "./aigeneration/aigeneration.module";
import { OzonIntegrationModule } from "./ozonintegration/ozonintegration.module";
import { WbIntegrationModule } from "./wbintegration/wbintegration.module";
import { YandexMarketIntegrationModule } from "./yandexmarketintegration/yandexmarketintegration.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ProductModule,
    AccountModule,
    MarketplaceSyncModule,
    RoleModule,
    SubscriptionPlanModule,
    MarketplaceModule,
    OfferCardModule,
    UserModule,
    AiGenerationModule,
    OzonIntegrationModule,
    WbIntegrationModule,
    YandexMarketIntegrationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
