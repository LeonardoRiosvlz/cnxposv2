import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateMonetaryDenominationDocument,
    UpdateMonetaryDenominationDocument,
    DeleteMonetaryDenominationDocument,
    DeleteManyMonetaryDenominationDocument,
    CreateMonetaryDenominationMutationVariables,
    DeleteMonetaryDenominationMutationVariables,
    DeleteManyMonetaryDenominationMutationVariables,
    UpdateMonetaryDenominationMutationVariables,
} from 'api/graphql/schema/monetary-denomination/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllMonetaryDenominationDocument,
    GetOneMonetaryDenominationDocument,
    GetPaginatedMonetaryDenominationDocument,
    GetAllMonetaryDenominationQueryVariables,
    GetOneMonetaryDenominationQueryVariables,
    GetPaginatedMonetaryDenominationQueryVariables,

} from 'api/graphql/schema/monetary-denomination/generated/queries.generated';

import {MonetaryDenomination} from "./types/monetary-denomination.types";

export class MonetaryDenominationRepository extends GraphqlRepository<MonetaryDenomination> {


    constructor() {
        super({
            create: {query: CreateMonetaryDenominationDocument},
            update: {query: UpdateMonetaryDenominationDocument},
            delete: {query: DeleteMonetaryDenominationDocument},
            deleteMany: {query: DeleteManyMonetaryDenominationDocument},
            findAll: {query: GetAllMonetaryDenominationDocument},
            findOne: {query: GetOneMonetaryDenominationDocument},
            findPaginated: {query: GetPaginatedMonetaryDenominationDocument},
        });
    }


    async create(params: CreateMonetaryDenominationMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteMonetaryDenominationMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyMonetaryDenominationMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateMonetaryDenominationMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllMonetaryDenominationQueryVariables): Promise<Array<MonetaryDenomination>> {
        return super.findAll(params);
    }

    findOne(params: GetOneMonetaryDenominationQueryVariables): Promise<MonetaryDenomination> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedMonetaryDenominationQueryVariables): Promise<IPaginatedEntity<MonetaryDenomination>> {
        return super.findPaginated(params);
    }

}
