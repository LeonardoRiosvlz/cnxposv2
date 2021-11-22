import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateTaxesDocument,
    UpdateTaxesDocument,
    DeleteTaxesDocument,
    DeleteManyTaxesDocument,
    CreateTaxesMutationVariables,
    DeleteTaxesMutationVariables,
    DeleteManyTaxesMutationVariables,
    UpdateTaxesMutationVariables,
} from 'api/graphql/schema/taxes/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllTaxesDocument,
    GetOneTaxesDocument,
    GetPaginatedTaxesDocument,
    GetAllTaxesQueryVariables,
    GetOneTaxesQueryVariables,
    GetPaginatedTaxesQueryVariables,

} from 'api/graphql/schema/taxes/generated/queries.generated';

import {Taxes} from "./types/taxes.types";

export class TaxesRepository extends GraphqlRepository<Taxes> {


    constructor() {
        super({
            create: {query: CreateTaxesDocument},
            update: {query: UpdateTaxesDocument},
            delete: {query: DeleteTaxesDocument},
            deleteMany: {query: DeleteManyTaxesDocument},
            findAll: {query: GetAllTaxesDocument},
            findOne: {query: GetOneTaxesDocument},
            findPaginated: {query: GetPaginatedTaxesDocument},
        });
    }


    async create(params: CreateTaxesMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteTaxesMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyTaxesMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateTaxesMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllTaxesQueryVariables): Promise<Array<Taxes>> {
        return super.findAll(params);
    }

    findOne(params: GetOneTaxesQueryVariables): Promise<Taxes> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedTaxesQueryVariables): Promise<IPaginatedEntity<Taxes>> {
        return super.findPaginated(params);
    }

}
