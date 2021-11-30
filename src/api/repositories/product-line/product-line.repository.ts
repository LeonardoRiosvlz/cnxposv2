import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateProductLineDocument,
    UpdateProductLineDocument,
    DeleteProductLineDocument,
    DeleteManyProductLineDocument,
    CreateProductLineMutationVariables,
    DeleteProductLineMutationVariables,
    DeleteManyProductLineMutationVariables,
    UpdateProductLineMutationVariables,
} from 'api/graphql/schema/product-line/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllProductLineDocument,
    GetOneProductLineDocument,
    GetPaginatedProductLineDocument,
    GetAllProductLineQueryVariables,
    GetOneProductLineQueryVariables,
    GetPaginatedProductLineQueryVariables,

} from 'api/graphql/schema/product-line/generated/queries.generated';

import {ProductLine} from "./types/product-line.types";

export class ProductLineRepository extends GraphqlRepository<ProductLine> {


    constructor() {
        super({
            create: {query: CreateProductLineDocument},
            update: {query: UpdateProductLineDocument},
            delete: {query: DeleteProductLineDocument},
            deleteMany: {query: DeleteManyProductLineDocument},
            findAll: {query: GetAllProductLineDocument},
            findOne: {query: GetOneProductLineDocument},
            findPaginated: {query: GetPaginatedProductLineDocument},
        });
    }


    async create(params: CreateProductLineMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteProductLineMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyProductLineMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateProductLineMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllProductLineQueryVariables): Promise<Array<ProductLine>> {
        return super.findAll(params);
    }

    findOne(params: GetOneProductLineQueryVariables): Promise<ProductLine> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedProductLineQueryVariables): Promise<IPaginatedEntity<ProductLine>> {
        return super.findPaginated(params);
    }

}
