import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateThirdPartiesDocument,
    UpdateThirdPartiesDocument,
    DeleteThirdPartiesDocument,
    DeleteManyThirdPartiesDocument,
    CreateThirdPartiesMutationVariables,
    DeleteThirdPartiesMutationVariables,
    DeleteManyThirdPartiesMutationVariables,
    UpdateThirdPartiesMutationVariables,
} from 'api/graphql/schema/third-parties/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllThirdPartiesDocument,
    GetOneThirdPartiesDocument,
    GetPaginatedThirdPartiesDocument,
    GetAllThirdPartiesQueryVariables,
    GetOneThirdPartiesQueryVariables,
    GetPaginatedThirdPartiesQueryVariables,

} from 'api/graphql/schema/third-parties/generated/queries.generated';

import {ThirdParties} from "./types/third-parties.types";

export class ThirdPartiesRepository extends GraphqlRepository<ThirdParties> {


    constructor() {
        super({
            create: {query: CreateThirdPartiesDocument},
            update: {query: UpdateThirdPartiesDocument},
            delete: {query: DeleteThirdPartiesDocument},
            deleteMany: {query: DeleteManyThirdPartiesDocument},
            findAll: {query: GetAllThirdPartiesDocument},
            findOne: {query: GetOneThirdPartiesDocument},
            findPaginated: {query: GetPaginatedThirdPartiesDocument},
        });
    }


    async create(params: CreateThirdPartiesMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteThirdPartiesMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyThirdPartiesMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateThirdPartiesMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllThirdPartiesQueryVariables): Promise<Array<ThirdParties>> {
        return super.findAll(params);
    }

    findOne(params: GetOneThirdPartiesQueryVariables): Promise<ThirdParties> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedThirdPartiesQueryVariables): Promise<IPaginatedEntity<ThirdParties>> {
        return super.findPaginated(params);
    }

}
