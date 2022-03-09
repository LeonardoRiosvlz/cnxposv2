import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateTaxesAndCostsDocument,
    UpdateTaxesAndCostsDocument,
    DeleteTaxesAndCostsDocument,
    DeleteManyTaxesAndCostsDocument,
    CreateTaxesAndCostsMutationVariables,
    DeleteTaxesAndCostsMutationVariables,
    DeleteManyTaxesAndCostsMutationVariables,
    UpdateTaxesAndCostsMutationVariables,
} from 'api/graphql/schema/taxes-and-costs/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllTaxesAndCostsDocument,
    GetOneTaxesAndCostsDocument,
    GetPaginatedTaxesAndCostsDocument,
    GetAllTaxesAndCostsQueryVariables,
    GetOneTaxesAndCostsQueryVariables,
    GetPaginatedTaxesAndCostsQueryVariables,

} from 'api/graphql/schema/taxes-and-costs/generated/queries.generated';

import {TaxesAndCosts} from "./types/taxes-and-costs.types";

export class TaxesAndCostsRepository extends GraphqlRepository<TaxesAndCosts> {


    constructor() {
        super({
            create: {query: CreateTaxesAndCostsDocument},
            update: {query: UpdateTaxesAndCostsDocument},
            delete: {query: DeleteTaxesAndCostsDocument},
            deleteMany: {query: DeleteManyTaxesAndCostsDocument},
            findAll: {query: GetAllTaxesAndCostsDocument},
            findOne: {query: GetOneTaxesAndCostsDocument},
            findPaginated: {query: GetPaginatedTaxesAndCostsDocument},
        });
    }


    async create(params: CreateTaxesAndCostsMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteTaxesAndCostsMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyTaxesAndCostsMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateTaxesAndCostsMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllTaxesAndCostsQueryVariables): Promise<Array<TaxesAndCosts>> {
        return super.findAll(params);
    }

    findOne(params: GetOneTaxesAndCostsQueryVariables): Promise<TaxesAndCosts> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedTaxesAndCostsQueryVariables): Promise<IPaginatedEntity<TaxesAndCosts>> {
        return super.findPaginated(params);
    }

}
