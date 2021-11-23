import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateProductCategoryDocument,
    UpdateProductCategoryDocument,
    DeleteProductCategoryDocument,
    DeleteManyProductCategoryDocument,
    CreateProductCategoryMutationVariables,
    DeleteProductCategoryMutationVariables,
    DeleteManyProductCategoryMutationVariables,
    UpdateProductCategoryMutationVariables,
} from 'api/graphql/schema/product-category/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllProductCategoryDocument,
    GetOneProductCategoryDocument,
    GetPaginatedProductCategoryDocument,
    GetAllProductCategoryQueryVariables,
    GetOneProductCategoryQueryVariables,
    GetPaginatedProductCategoryQueryVariables,

} from 'api/graphql/schema/product-category/generated/queries.generated';

import {ProductCategory} from "./types/product-category.types";

export class ProductCategoryRepository extends GraphqlRepository<ProductCategory> {


    constructor() {
        super({
            create: {query: CreateProductCategoryDocument},
            update: {query: UpdateProductCategoryDocument},
            delete: {query: DeleteProductCategoryDocument},
            deleteMany: {query: DeleteManyProductCategoryDocument},
            findAll: {query: GetAllProductCategoryDocument},
            findOne: {query: GetOneProductCategoryDocument},
            findPaginated: {query: GetPaginatedProductCategoryDocument},
        });
    }


    async create(params: CreateProductCategoryMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteProductCategoryMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyProductCategoryMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateProductCategoryMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllProductCategoryQueryVariables): Promise<Array<ProductCategory>> {
        return super.findAll(params);
    }

    findOne(params: GetOneProductCategoryQueryVariables): Promise<ProductCategory> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedProductCategoryQueryVariables): Promise<IPaginatedEntity<ProductCategory>> {
        return super.findPaginated(params);
    }

}
