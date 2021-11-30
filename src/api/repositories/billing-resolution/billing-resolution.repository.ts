import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateBillingResolutionDocument,
    UpdateBillingResolutionDocument,
    DeleteBillingResolutionDocument,
    DeleteManyBillingResolutionDocument,
    CreateBillingResolutionMutationVariables,
    DeleteBillingResolutionMutationVariables,
    DeleteManyBillingResolutionMutationVariables,
    UpdateBillingResolutionMutationVariables,
} from 'api/graphql/schema/billing-resolution/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllBillingResolutionDocument,
    GetOneBillingResolutionDocument,
    GetPaginatedBillingResolutionDocument,
    GetAllBillingResolutionQueryVariables,
    GetOneBillingResolutionQueryVariables,
    GetPaginatedBillingResolutionQueryVariables,

} from 'api/graphql/schema/billing-resolution/generated/queries.generated';

import {BillingResolution} from "./types/billing-resolution.types";

export class BillingResolutionRepository extends GraphqlRepository<BillingResolution> {


    constructor() {
        super({
            create: {query: CreateBillingResolutionDocument},
            update: {query: UpdateBillingResolutionDocument},
            delete: {query: DeleteBillingResolutionDocument},
            deleteMany: {query: DeleteManyBillingResolutionDocument},
            findAll: {query: GetAllBillingResolutionDocument},
            findOne: {query: GetOneBillingResolutionDocument},
            findPaginated: {query: GetPaginatedBillingResolutionDocument},
        });
    }


    async create(params: CreateBillingResolutionMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteBillingResolutionMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyBillingResolutionMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateBillingResolutionMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllBillingResolutionQueryVariables): Promise<Array<BillingResolution>> {
        return super.findAll(params);
    }

    findOne(params: GetOneBillingResolutionQueryVariables): Promise<BillingResolution> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedBillingResolutionQueryVariables): Promise<IPaginatedEntity<BillingResolution>> {
        return super.findPaginated(params);
    }

}
