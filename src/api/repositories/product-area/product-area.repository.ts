import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateProductAreaDocument,
    UpdateProductAreaDocument,
    DeleteProductAreaDocument,
    DeleteManyProductAreaDocument,
    CreateProductAreaMutationVariables,
    DeleteProductAreaMutationVariables,
    DeleteManyProductAreaMutationVariables,
    UpdateProductAreaMutationVariables,
} from 'api/graphql/schema/product-area/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllProductAreaDocument,
    GetOneProductAreaDocument,
    GetPaginatedProductAreaDocument,
    GetAllProductAreaQueryVariables,
    GetOneProductAreaQueryVariables,
    GetPaginatedProductAreaQueryVariables,

} from 'api/graphql/schema/product-area/generated/queries.generated';

import {ProductArea} from "./types/product-area.types";

export class ProductAreaRepository extends GraphqlRepository<ProductArea> {


    constructor() {
        super({
            create: {query: CreateProductAreaDocument},
            update: {query: UpdateProductAreaDocument},
            delete: {query: DeleteProductAreaDocument},
            deleteMany: {query: DeleteManyProductAreaDocument},
            findAll: {query: GetAllProductAreaDocument},
            findOne: {query: GetOneProductAreaDocument},
            findPaginated: {query: GetPaginatedProductAreaDocument},
        });
    }


    async create(params: CreateProductAreaMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteProductAreaMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyProductAreaMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateProductAreaMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllProductAreaQueryVariables): Promise<Array<ProductArea>> {
        return super.findAll(params);
    }

    findOne(params: GetOneProductAreaQueryVariables): Promise<ProductArea> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedProductAreaQueryVariables): Promise<IPaginatedEntity<ProductArea>> {
        return super.findPaginated(params);
    }

}
