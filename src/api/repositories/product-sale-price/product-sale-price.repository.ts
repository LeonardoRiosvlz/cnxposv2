import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateProductSalePriceDocument,
    UpdateProductSalePriceDocument,
    DeleteProductSalePriceDocument,
    DeleteManyProductSalePriceDocument,
    CreateProductSalePriceMutationVariables,
    DeleteProductSalePriceMutationVariables,
    DeleteManyProductSalePriceMutationVariables,
    UpdateProductSalePriceMutationVariables,
} from 'api/graphql/schema/product-sale-price/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllProductSalePriceDocument,
    GetOneProductSalePriceDocument,
    GetPaginatedProductSalePriceDocument,
    GetAllProductSalePriceQueryVariables,
    GetOneProductSalePriceQueryVariables,
    GetPaginatedProductSalePriceQueryVariables,

} from 'api/graphql/schema/product-sale-price/generated/queries.generated';

import {ProductSalePrice} from "./types/product-sale-price.types";

export class ProductSalePriceRepository extends GraphqlRepository<ProductSalePrice> {


    constructor() {
        super({
            create: {query: CreateProductSalePriceDocument},
            update: {query: UpdateProductSalePriceDocument},
            delete: {query: DeleteProductSalePriceDocument},
            deleteMany: {query: DeleteManyProductSalePriceDocument},
            findAll: {query: GetAllProductSalePriceDocument},
            findOne: {query: GetOneProductSalePriceDocument},
            findPaginated: {query: GetPaginatedProductSalePriceDocument},
        });
    }


    async create(params: CreateProductSalePriceMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteProductSalePriceMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyProductSalePriceMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateProductSalePriceMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllProductSalePriceQueryVariables): Promise<Array<ProductSalePrice>> {
        return super.findAll(params);
    }

    findOne(params: GetOneProductSalePriceQueryVariables): Promise<ProductSalePrice> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedProductSalePriceQueryVariables): Promise<IPaginatedEntity<ProductSalePrice>> {
        return super.findPaginated(params);
    }

}
