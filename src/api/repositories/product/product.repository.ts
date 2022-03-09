import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateProductDocument,
    UpdateProductDocument,
    DeleteProductDocument,
    DeleteManyProductDocument,
    CreateProductMutationVariables,
    DeleteProductMutationVariables,
    DeleteManyProductMutationVariables,
    UpdateProductMutationVariables,
} from 'api/graphql/schema/product/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllProductDocument,
    GetOneProductDocument,
    GetPaginatedProductDocument,
    GetAllProductQueryVariables,
    GetOneProductQueryVariables,
    GetPaginatedProductQueryVariables,

} from 'api/graphql/schema/product/generated/queries.generated';

import {Product} from "./types/product.types";

export class ProductRepository extends GraphqlRepository<Product> {


    constructor() {
        super({
            create: {query: CreateProductDocument},
            update: {query: UpdateProductDocument},
            delete: {query: DeleteProductDocument},
            deleteMany: {query: DeleteManyProductDocument},
            findAll: {query: GetAllProductDocument},
            findOne: {query: GetOneProductDocument},
            findPaginated: {query: GetPaginatedProductDocument},
        });
    }


    async create(params: CreateProductMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteProductMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyProductMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateProductMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllProductQueryVariables): Promise<Array<Product>> {
        return super.findAll(params);
    }

    findOne(params: GetOneProductQueryVariables): Promise<Product> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedProductQueryVariables): Promise<IPaginatedEntity<Product>> {
        return super.findPaginated(params);
    }

}
