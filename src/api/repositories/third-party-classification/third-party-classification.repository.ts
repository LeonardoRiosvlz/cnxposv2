import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateThirdPartyClassificationDocument,
    UpdateThirdPartyClassificationDocument,
    DeleteThirdPartyClassificationDocument,
    DeleteManyThirdPartyClassificationDocument,
    CreateThirdPartyClassificationMutationVariables,
    DeleteThirdPartyClassificationMutationVariables,
    DeleteManyThirdPartyClassificationMutationVariables,
    UpdateThirdPartyClassificationMutationVariables,
} from 'api/graphql/schema/third-party-classification/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllThirdPartyClassificationDocument,
    GetOneThirdPartyClassificationDocument,
    GetPaginatedThirdPartyClassificationDocument,
    GetAllThirdPartyClassificationQueryVariables,
    GetOneThirdPartyClassificationQueryVariables,
    GetPaginatedThirdPartyClassificationQueryVariables,

} from 'api/graphql/schema/third-party-classification/generated/queries.generated';

import {ThirdPartyClassification} from "./types/third-party-classification.types";

export class ThirdPartyClassificationRepository extends GraphqlRepository<ThirdPartyClassification> {


    constructor() {
        super({
            create: {query: CreateThirdPartyClassificationDocument},
            update: {query: UpdateThirdPartyClassificationDocument},
            delete: {query: DeleteThirdPartyClassificationDocument},
            deleteMany: {query: DeleteManyThirdPartyClassificationDocument},
            findAll: {query: GetAllThirdPartyClassificationDocument},
            findOne: {query: GetOneThirdPartyClassificationDocument},
            findPaginated: {query: GetPaginatedThirdPartyClassificationDocument},
        });
    }


    async create(params: CreateThirdPartyClassificationMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteThirdPartyClassificationMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyThirdPartyClassificationMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateThirdPartyClassificationMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllThirdPartyClassificationQueryVariables): Promise<Array<ThirdPartyClassification>> {
        return super.findAll(params);
    }

    findOne(params: GetOneThirdPartyClassificationQueryVariables): Promise<ThirdPartyClassification> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedThirdPartyClassificationQueryVariables): Promise<IPaginatedEntity<ThirdPartyClassification>> {
        return super.findPaginated(params);
    }

}
