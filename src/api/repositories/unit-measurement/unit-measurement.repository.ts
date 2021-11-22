import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateUnitMeasurementDocument,
    UpdateUnitMeasurementDocument,
    DeleteUnitMeasurementDocument,
    DeleteManyUnitMeasurementDocument,
    CreateUnitMeasurementMutationVariables,
    DeleteUnitMeasurementMutationVariables,
    DeleteManyUnitMeasurementMutationVariables,
    UpdateUnitMeasurementMutationVariables,
} from 'api/graphql/schema/unit-measurement/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllUnitMeasurementDocument,
    GetOneUnitMeasurementDocument,
    GetPaginatedUnitMeasurementDocument,
    GetAllUnitMeasurementQueryVariables,
    GetOneUnitMeasurementQueryVariables,
    GetPaginatedUnitMeasurementQueryVariables,

} from 'api/graphql/schema/unit-measurement/generated/queries.generated';

import {UnitMeasurement} from "./types/unit-measurement.types";

export class UnitMeasurementRepository extends GraphqlRepository<UnitMeasurement> {


    constructor() {
        super({
            create: {query: CreateUnitMeasurementDocument},
            update: {query: UpdateUnitMeasurementDocument},
            delete: {query: DeleteUnitMeasurementDocument},
            deleteMany: {query: DeleteManyUnitMeasurementDocument},
            findAll: {query: GetAllUnitMeasurementDocument},
            findOne: {query: GetOneUnitMeasurementDocument},
            findPaginated: {query: GetPaginatedUnitMeasurementDocument},
        });
    }


    async create(params: CreateUnitMeasurementMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteUnitMeasurementMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyUnitMeasurementMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateUnitMeasurementMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllUnitMeasurementQueryVariables): Promise<Array<UnitMeasurement>> {
        return super.findAll(params);
    }

    findOne(params: GetOneUnitMeasurementQueryVariables): Promise<UnitMeasurement> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedUnitMeasurementQueryVariables): Promise<IPaginatedEntity<UnitMeasurement>> {
        return super.findPaginated(params);
    }

}
