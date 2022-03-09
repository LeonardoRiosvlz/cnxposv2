import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateCompositionDocument,
    UpdateCompositionDocument,
    DeleteCompositionDocument,
    DeleteManyCompositionDocument,
    CreateCompositionMutationVariables,
    DeleteCompositionMutationVariables,
    DeleteManyCompositionMutationVariables,
    UpdateCompositionMutationVariables,
} from 'api/graphql/schema/composition/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllCompositionDocument,
    GetOneCompositionDocument,
    GetPaginatedCompositionDocument,
    GetAllCompositionQueryVariables,
    GetOneCompositionQueryVariables,
    GetPaginatedCompositionQueryVariables,

} from 'api/graphql/schema/composition/generated/queries.generated';

import {Composition} from "./types/composition.types";

export class CompositionRepository extends GraphqlRepository<Composition> {


    constructor() {
        super({
            create: {query: CreateCompositionDocument},
            update: {query: UpdateCompositionDocument},
            delete: {query: DeleteCompositionDocument},
            deleteMany: {query: DeleteManyCompositionDocument},
            findAll: {query: GetAllCompositionDocument},
            findOne: {query: GetOneCompositionDocument},
            findPaginated: {query: GetPaginatedCompositionDocument},
        });
    }


    async create(params: CreateCompositionMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteCompositionMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyCompositionMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateCompositionMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllCompositionQueryVariables): Promise<Array<Composition>> {
        return super.findAll(params);
    }

    findOne(params: GetOneCompositionQueryVariables): Promise<Composition> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedCompositionQueryVariables): Promise<IPaginatedEntity<Composition>> {
        return super.findPaginated(params);
    }

}
