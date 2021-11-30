import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateCompanyDocument,
    UpdateCompanyDocument,
    DeleteCompanyDocument,
    DeleteManyCompanyDocument,
    CreateCompanyMutationVariables,
    DeleteCompanyMutationVariables,
    DeleteManyCompanyMutationVariables,
    UpdateCompanyMutationVariables,
} from 'api/graphql/schema/company/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllCompanyDocument,
    GetOneCompanyDocument,
    GetPaginatedCompanyDocument,
    GetAllCompanyQueryVariables,
    GetOneCompanyQueryVariables,
    GetPaginatedCompanyQueryVariables,

} from 'api/graphql/schema/company/generated/queries.generated';

import {Company} from "./types/company.types";

export class CompanyRepository extends GraphqlRepository<Company> {


    constructor() {
        super({
            create: {query: CreateCompanyDocument},
            update: {query: UpdateCompanyDocument},
            delete: {query: DeleteCompanyDocument},
            deleteMany: {query: DeleteManyCompanyDocument},
            findAll: {query: GetAllCompanyDocument},
            findOne: {query: GetOneCompanyDocument},
            findPaginated: {query: GetPaginatedCompanyDocument},
        });
    }


    async create(params: CreateCompanyMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteCompanyMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyCompanyMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateCompanyMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllCompanyQueryVariables): Promise<Array<Company>> {
        return super.findAll(params);
    }

    findOne(params: GetOneCompanyQueryVariables): Promise<Company> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedCompanyQueryVariables): Promise<IPaginatedEntity<Company>> {
        return super.findPaginated(params);
    }

}
