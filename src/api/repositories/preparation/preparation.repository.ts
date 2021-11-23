import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreatePreparationDocument,
    UpdatePreparationDocument,
    DeletePreparationDocument,
    DeleteManyPreparationDocument,
    CreatePreparationMutationVariables,
    DeletePreparationMutationVariables,
    DeleteManyPreparationMutationVariables,
    UpdatePreparationMutationVariables,
} from 'api/graphql/schema/preparation/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllPreparationDocument,
    GetOnePreparationDocument,
    GetPaginatedPreparationDocument,
    GetAllPreparationQueryVariables,
    GetOnePreparationQueryVariables,
    GetPaginatedPreparationQueryVariables,

} from 'api/graphql/schema/preparation/generated/queries.generated';

import {Preparation} from "./types/preparation.types";

export class PreparationRepository extends GraphqlRepository<Preparation> {


    constructor() {
        super({
            create: {query: CreatePreparationDocument},
            update: {query: UpdatePreparationDocument},
            delete: {query: DeletePreparationDocument},
            deleteMany: {query: DeleteManyPreparationDocument},
            findAll: {query: GetAllPreparationDocument},
            findOne: {query: GetOnePreparationDocument},
            findPaginated: {query: GetPaginatedPreparationDocument},
        });
    }


    async create(params: CreatePreparationMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeletePreparationMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyPreparationMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdatePreparationMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllPreparationQueryVariables): Promise<Array<Preparation>> {
        return super.findAll(params);
    }

    findOne(params: GetOnePreparationQueryVariables): Promise<Preparation> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedPreparationQueryVariables): Promise<IPaginatedEntity<Preparation>> {
        return super.findPaginated(params);
    }

}
