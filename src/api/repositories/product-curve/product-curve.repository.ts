import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreateProductCurveDocument,
    UpdateProductCurveDocument,
    DeleteProductCurveDocument,
    DeleteManyProductCurveDocument,
    CreateProductCurveMutationVariables,
    DeleteProductCurveMutationVariables,
    DeleteManyProductCurveMutationVariables,
    UpdateProductCurveMutationVariables,
} from 'api/graphql/schema/product-curve/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllProductCurveDocument,
    GetOneProductCurveDocument,
    GetPaginatedProductCurveDocument,
    GetAllProductCurveQueryVariables,
    GetOneProductCurveQueryVariables,
    GetPaginatedProductCurveQueryVariables,

} from 'api/graphql/schema/product-curve/generated/queries.generated';

import {ProductCurve} from "./types/product-curve.types";

export class ProductCurveRepository extends GraphqlRepository<ProductCurve> {


    constructor() {
        super({
            create: {query: CreateProductCurveDocument},
            update: {query: UpdateProductCurveDocument},
            delete: {query: DeleteProductCurveDocument},
            deleteMany: {query: DeleteManyProductCurveDocument},
            findAll: {query: GetAllProductCurveDocument},
            findOne: {query: GetOneProductCurveDocument},
            findPaginated: {query: GetPaginatedProductCurveDocument},
        });
    }


    async create(params: CreateProductCurveMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeleteProductCurveMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyProductCurveMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdateProductCurveMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllProductCurveQueryVariables): Promise<Array<ProductCurve>> {
        return super.findAll(params);
    }

    findOne(params: GetOneProductCurveQueryVariables): Promise<ProductCurve> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedProductCurveQueryVariables): Promise<IPaginatedEntity<ProductCurve>> {
        return super.findPaginated(params);
    }

}
