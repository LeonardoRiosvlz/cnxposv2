import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreatePreparationTypeDocument,
    UpdatePreparationTypeDocument,
    DeletePreparationTypeDocument,
    DeleteManyPreparationTypeDocument,
    CreatePreparationTypeMutationVariables,
    DeletePreparationTypeMutationVariables,
    DeleteManyPreparationTypeMutationVariables,
    UpdatePreparationTypeMutationVariables,
} from 'api/graphql/schema/preparation-type/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllPreparationTypeDocument,
    GetOnePreparationTypeDocument,
    GetPaginatedPreparationTypeDocument,
    GetAllPreparationTypeQueryVariables,
    GetOnePreparationTypeQueryVariables,
    GetPaginatedPreparationTypeQueryVariables,

} from 'api/graphql/schema/preparation-type/generated/queries.generated';

import {PreparationType} from "./types/preparation-type.types";

export class PreparationTypeRepository extends GraphqlRepository<PreparationType> {


    constructor() {
        super({
            create: {query: CreatePreparationTypeDocument},
            update: {query: UpdatePreparationTypeDocument},
            delete: {query: DeletePreparationTypeDocument},
            deleteMany: {query: DeleteManyPreparationTypeDocument},
            findAll: {query: GetAllPreparationTypeDocument},
            findOne: {query: GetOnePreparationTypeDocument},
            findPaginated: {query: GetPaginatedPreparationTypeDocument},
        });
    }


    async create(params: CreatePreparationTypeMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeletePreparationTypeMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyPreparationTypeMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdatePreparationTypeMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllPreparationTypeQueryVariables): Promise<Array<PreparationType>> {
        return super.findAll(params);
    }

    findOne(params: GetOnePreparationTypeQueryVariables): Promise<PreparationType> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedPreparationTypeQueryVariables): Promise<IPaginatedEntity<PreparationType>> {
        return super.findPaginated(params);
    }

}
