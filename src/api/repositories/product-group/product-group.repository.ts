import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateProductGroupDocument,
    UpdateProductGroupDocument,
    DeleteProductGroupDocument,
    DeleteManyProductGroupDocument,
    CreateProductGroupMutationVariables,
    DeleteProductGroupMutationVariables,
    DeleteManyProductGroupMutationVariables,
    UpdateProductGroupMutationVariables,
} from 'api/graphql/schema/product-group/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllProductGroupDocument,
    GetOneProductGroupDocument,
    GetPaginatedProductGroupDocument,
    GetAllProductGroupQueryVariables,
    GetOneProductGroupQueryVariables,
    GetPaginatedProductGroupQueryVariables,

} from 'api/graphql/schema/product-group/generated/queries.generated';

import {ProductGroup} from "./types/product-group.types";

export class ProductGroupRepository extends GraphqlRepository<ProductGroup> {


    constructor() {
        super({
            create: {query: CreateProductGroupDocument},
            update: {query: UpdateProductGroupDocument},
            delete: {query: DeleteProductGroupDocument},
            deleteMany: {query: DeleteManyProductGroupDocument},
            findAll: {query: GetAllProductGroupDocument},
            findOne: {query: GetOneProductGroupDocument},
            findPaginated: {query: GetPaginatedProductGroupDocument},
        });
    }


    async create(params: CreateProductGroupMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteProductGroupMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyProductGroupMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateProductGroupMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllProductGroupQueryVariables): Promise<Array<ProductGroup>> {
        return super.findAll(params);
    }

    findOne(params: GetOneProductGroupQueryVariables): Promise<ProductGroup> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedProductGroupQueryVariables): Promise<IPaginatedEntity<ProductGroup>> {
        return super.findPaginated(params);
    }

}
