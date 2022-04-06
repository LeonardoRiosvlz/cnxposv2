import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateSubgroupDocument,
    UpdateSubgroupDocument,
    DeleteSubgroupDocument,
    DeleteManySubgroupDocument,
    CreateSubgroupMutationVariables,
    DeleteSubgroupMutationVariables,
    DeleteManySubgroupMutationVariables,
    UpdateSubgroupMutationVariables,
} from 'api/graphql/schema/subgroup/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllSubgroupDocument,
    GetOneSubgroupDocument,
    GetPaginatedSubgroupDocument,
    GetAllSubgroupQueryVariables,
    GetOneSubgroupQueryVariables,
    GetPaginatedSubgroupQueryVariables,

} from 'api/graphql/schema/subgroup/generated/queries.generated';

import {Subgroup} from "./types/subgroup.types";

export class SubgroupRepository extends GraphqlRepository<Subgroup> {


    constructor() {
        super({
            create: {query: CreateSubgroupDocument},
            update: {query: UpdateSubgroupDocument},
            delete: {query: DeleteSubgroupDocument},
            deleteMany: {query: DeleteManySubgroupDocument},
            findAll: {query: GetAllSubgroupDocument},
            findOne: {query: GetOneSubgroupDocument},
            findPaginated: {query: GetPaginatedSubgroupDocument},
        });
    }


    async create(params: CreateSubgroupMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteSubgroupMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManySubgroupMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateSubgroupMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllSubgroupQueryVariables): Promise<Array<Subgroup>> {
        return super.findAll(params);
    }

    findOne(params: GetOneSubgroupQueryVariables): Promise<Subgroup> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedSubgroupQueryVariables): Promise<IPaginatedEntity<Subgroup>> {
        return super.findPaginated(params);
    }

}
