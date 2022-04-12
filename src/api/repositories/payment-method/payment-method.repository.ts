import {GraphqlRepository} from 'api/graphql/gql-repository';
import {
    CreatePaymentMethodDocument,
    UpdatePaymentMethodDocument,
    DeletePaymentMethodDocument,
    DeleteManyPaymentMethodDocument,
    CreatePaymentMethodMutationVariables,
    DeletePaymentMethodMutationVariables,
    DeleteManyPaymentMethodMutationVariables,
    UpdatePaymentMethodMutationVariables,
} from 'api/graphql/schema/payment-method/generated/mutations.generated';


import {IPaginatedEntity} from 'api/interfaces/IPaginatedEntity';
import {
    GetAllPaymentMethodDocument,
    GetOnePaymentMethodDocument,
    GetPaginatedPaymentMethodDocument,
    GetAllPaymentMethodQueryVariables,
    GetOnePaymentMethodQueryVariables,
    GetPaginatedPaymentMethodQueryVariables,

} from 'api/graphql/schema/payment-method/generated/queries.generated';

import {PaymentMethod} from "./types/payment-method.types";

export class PaymentMethodRepository extends GraphqlRepository<PaymentMethod> {


    constructor() {
        super({
            create: {query: CreatePaymentMethodDocument},
            update: {query: UpdatePaymentMethodDocument},
            delete: {query: DeletePaymentMethodDocument},
            deleteMany: {query: DeleteManyPaymentMethodDocument},
            findAll: {query: GetAllPaymentMethodDocument},
            findOne: {query: GetOnePaymentMethodDocument},
            findPaginated: {query: GetPaginatedPaymentMethodDocument},
        });
    }


    async create(params: CreatePaymentMethodMutationVariables): Promise<void> {
        return super.create(params);
    }

    async delete(params: DeletePaymentMethodMutationVariables): Promise<void> {
        return super.delete(params);
    }

    async deleteMany(params: DeleteManyPaymentMethodMutationVariables): Promise<void> {
        return super.deleteMany(params);
    }

    update(params: UpdatePaymentMethodMutationVariables): Promise<void> {
        return super.update(params);
    }

    findAll(params: GetAllPaymentMethodQueryVariables): Promise<Array<PaymentMethod>> {
        return super.findAll(params);
    }

    findOne(params: GetOnePaymentMethodQueryVariables): Promise<PaymentMethod> {
        return super.findOne(params);
    }


    findPaginated(params: GetPaginatedPaymentMethodQueryVariables): Promise<IPaginatedEntity<PaymentMethod>> {
        return super.findPaginated(params);
    }

}
