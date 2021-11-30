import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateProductStructureDocument,
    UpdateProductStructureDocument,
    DeleteProductStructureDocument,
    DeleteManyProductStructureDocument,
    CreateProductStructureMutationVariables,
    DeleteProductStructureMutationVariables,
    DeleteManyProductStructureMutationVariables,
    UpdateProductStructureMutationVariables,
} from 'api/graphql/schema/product-structure/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllProductStructureDocument,
    GetOneProductStructureDocument,
    GetPaginatedProductStructureDocument,
    GetAllProductStructureQueryVariables,
    GetOneProductStructureQueryVariables,
    GetPaginatedProductStructureQueryVariables,

} from 'api/graphql/schema/product-structure/generated/queries.generated';

import {ProductStructure} from "./types/product-structure.types";

export class ProductStructureRepository extends GraphqlRepository<ProductStructure> {


    constructor() {
        super({
            create: {query: CreateProductStructureDocument},
            update: {query: UpdateProductStructureDocument},
            delete: {query: DeleteProductStructureDocument},
            deleteMany: {query: DeleteManyProductStructureDocument},
            findAll: {query: GetAllProductStructureDocument},
            findOne: {query: GetOneProductStructureDocument},
            findPaginated: {query: GetPaginatedProductStructureDocument},
        });
    }


    async create(params: CreateProductStructureMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteProductStructureMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyProductStructureMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateProductStructureMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllProductStructureQueryVariables): Promise<Array<ProductStructure>> {
        return super.findAll(params);
    }

    findOne(params: GetOneProductStructureQueryVariables): Promise<ProductStructure> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedProductStructureQueryVariables): Promise<IPaginatedEntity<ProductStructure>> {
        return super.findPaginated(params);
    }

}
