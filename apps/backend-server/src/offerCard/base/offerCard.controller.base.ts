/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OfferCardService } from "../offerCard.service";
import { OfferCardCreateInput } from "./OfferCardCreateInput";
import { OfferCard } from "./OfferCard";
import { OfferCardFindManyArgs } from "./OfferCardFindManyArgs";
import { OfferCardWhereUniqueInput } from "./OfferCardWhereUniqueInput";
import { OfferCardUpdateInput } from "./OfferCardUpdateInput";

export class OfferCardControllerBase {
  constructor(protected readonly service: OfferCardService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OfferCard })
  async createOfferCard(
    @common.Body() data: OfferCardCreateInput
  ): Promise<OfferCard> {
    return await this.service.createOfferCard({
      data: {
        ...data,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        id: true,
        imageUrl: true,
        name: true,
        price: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [OfferCard] })
  @ApiNestedQuery(OfferCardFindManyArgs)
  async offerCards(@common.Req() request: Request): Promise<OfferCard[]> {
    const args = plainToClass(OfferCardFindManyArgs, request.query);
    return this.service.offerCards({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        imageUrl: true,
        name: true,
        price: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OfferCard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async offerCard(
    @common.Param() params: OfferCardWhereUniqueInput
  ): Promise<OfferCard | null> {
    const result = await this.service.offerCard({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        imageUrl: true,
        name: true,
        price: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: OfferCard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOfferCard(
    @common.Param() params: OfferCardWhereUniqueInput,
    @common.Body() data: OfferCardUpdateInput
  ): Promise<OfferCard | null> {
    try {
      return await this.service.updateOfferCard({
        where: params,
        data: {
          ...data,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          id: true,
          imageUrl: true,
          name: true,
          price: true,

          product: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: OfferCard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOfferCard(
    @common.Param() params: OfferCardWhereUniqueInput
  ): Promise<OfferCard | null> {
    try {
      return await this.service.deleteOfferCard({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          imageUrl: true,
          name: true,
          price: true,

          product: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
