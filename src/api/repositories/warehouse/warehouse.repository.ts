import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateWarehouseDocument,
    UpdateWarehouseDocument,
    DeleteWarehouseDocument,
    DeleteManyWarehouseDocument,
    CreateWarehouseMutationVariables,
    DeleteWarehouseMutationVariables,
    DeleteManyWarehouseMutationVariables,
    UpdateWarehouseMutationVariables,
} from 'api/graphql/schema/warehouse/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllWarehouseDocument,
    GetOneWarehouseDocument,
    GetPaginatedWarehouseDocument,
    GetAllWarehouseQueryVariables,
    GetOneWarehouseQueryVariables,
    GetPaginatedWarehouseQueryVariables,

} from 'api/graphql/schema/warehouse/generated/queries.generated';

import {Warehouse} from "./types/warehouse.types";

export class WarehouseRepository extends GraphqlRepository<Warehouse> {


    constructor() {
        super({
            create: {query: CreateWarehouseDocument},
            update: {query: UpdateWarehouseDocument},
            delete: {query: DeleteWarehouseDocument},
            deleteMany: {query: DeleteManyWarehouseDocument},
            findAll: {query: GetAllWarehouseDocument},
            findOne: {query: GetOneWarehouseDocument},
            findPaginated: {query: GetPaginatedWarehouseDocument},
        });
    }


    async create(params: CreateWarehouseMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteWarehouseMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyWarehouseMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateWarehouseMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllWarehouseQueryVariables): Promise<Array<Warehouse>> {
        return super.findAll(params);
    }

    findOne(params: GetOneWarehouseQueryVariables): Promise<Warehouse> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedWarehouseQueryVariables): Promise<IPaginatedEntity<Warehouse>> {
        return super.findPaginated(params);
    }

}
