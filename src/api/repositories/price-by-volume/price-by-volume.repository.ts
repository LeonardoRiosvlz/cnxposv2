import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreatePriceByVolumeDocument,
    UpdatePriceByVolumeDocument,
    DeletePriceByVolumeDocument,
    DeleteManyPriceByVolumeDocument,
    CreatePriceByVolumeMutationVariables,
    DeletePriceByVolumeMutationVariables,
    DeleteManyPriceByVolumeMutationVariables,
    UpdatePriceByVolumeMutationVariables,
} from 'api/graphql/schema/price-by-volume/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllPriceByVolumeDocument,
    GetOnePriceByVolumeDocument,
    GetPaginatedPriceByVolumeDocument,
    GetAllPriceByVolumeQueryVariables,
    GetOnePriceByVolumeQueryVariables,
    GetPaginatedPriceByVolumeQueryVariables,

} from 'api/graphql/schema/price-by-volume/generated/queries.generated';

import {PriceByVolume} from "./types/price-by-volume.types";

export class PriceByVolumeRepository extends GraphqlRepository<PriceByVolume> {


    constructor() {
        super({
            create: {query: CreatePriceByVolumeDocument},
            update: {query: UpdatePriceByVolumeDocument},
            delete: {query: DeletePriceByVolumeDocument},
            deleteMany: {query: DeleteManyPriceByVolumeDocument},
            findAll: {query: GetAllPriceByVolumeDocument},
            findOne: {query: GetOnePriceByVolumeDocument},
            findPaginated: {query: GetPaginatedPriceByVolumeDocument},
        });
    }


    async create(params: CreatePriceByVolumeMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeletePriceByVolumeMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyPriceByVolumeMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdatePriceByVolumeMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllPriceByVolumeQueryVariables): Promise<Array<PriceByVolume>> {
        return super.findAll(params);
    }

    findOne(params: GetOnePriceByVolumeQueryVariables): Promise<PriceByVolume> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedPriceByVolumeQueryVariables): Promise<IPaginatedEntity<PriceByVolume>> {
        return super.findPaginated(params);
    }

}
