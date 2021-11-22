import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateBanksDocument,
    UpdateBanksDocument,
    DeleteBanksDocument,
    DeleteManyBanksDocument,
    CreateBanksMutationVariables,
    DeleteBanksMutationVariables,
    DeleteManyBanksMutationVariables,
    UpdateBanksMutationVariables,
} from 'api/graphql/schema/banks/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllBanksDocument,
    GetOneBanksDocument,
    GetPaginatedBanksDocument,
    GetAllBanksQueryVariables,
    GetOneBanksQueryVariables,
    GetPaginatedBanksQueryVariables,

} from 'api/graphql/schema/banks/generated/queries.generated';

import {Banks} from "./types/banks.types";

export class BanksRepository extends GraphqlRepository<Banks> {


    constructor() {
        super({
            create: {query: CreateBanksDocument},
            update: {query: UpdateBanksDocument},
            delete: {query: DeleteBanksDocument},
            deleteMany: {query: DeleteManyBanksDocument},
            findAll: {query: GetAllBanksDocument},
            findOne: {query: GetOneBanksDocument},
            findPaginated: {query: GetPaginatedBanksDocument},
        });
    }


    async create(params: CreateBanksMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteBanksMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyBanksMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateBanksMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllBanksQueryVariables): Promise<Array<Banks>> {
        return super.findAll(params);
    }

    findOne(params: GetOneBanksQueryVariables): Promise<Banks> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedBanksQueryVariables): Promise<IPaginatedEntity<Banks>> {
        return super.findPaginated(params);
    }

}
