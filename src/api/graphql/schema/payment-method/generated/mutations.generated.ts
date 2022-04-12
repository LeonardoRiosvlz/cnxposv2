import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreatePaymentMethodDocument = gql`
    mutation createPaymentMethod($input: CreatePaymentMethodInput!) {
  createPaymentMethod(input: $input)
}
    `;
export type CreatePaymentMethodMutationFn = Apollo.MutationFunction<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>;
export type CreatePaymentMethodProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>
    } & TChildProps;
export function withCreatePaymentMethod<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreatePaymentMethodMutation,
  CreatePaymentMethodMutationVariables,
  CreatePaymentMethodProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables, CreatePaymentMethodProps<TChildProps, TDataName>>(CreatePaymentMethodDocument, {
      alias: 'createPaymentMethod',
      ...operationOptions
    });
};

/**
 * __useCreatePaymentMethodMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMethodMutation, { data, loading, error }] = useCreatePaymentMethodMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>(CreatePaymentMethodDocument, options);
      }
export type CreatePaymentMethodMutationHookResult = ReturnType<typeof useCreatePaymentMethodMutation>;
export type CreatePaymentMethodMutationResult = Apollo.MutationResult<CreatePaymentMethodMutation>;
export type CreatePaymentMethodMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>;
export const UpdatePaymentMethodDocument = gql`
    mutation updatePaymentMethod($input: UpdatePaymentMethodInput!) {
  updatePaymentMethod(input: $input)
}
    `;
export type UpdatePaymentMethodMutationFn = Apollo.MutationFunction<UpdatePaymentMethodMutation, UpdatePaymentMethodMutationVariables>;
export type UpdatePaymentMethodProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdatePaymentMethodMutation, UpdatePaymentMethodMutationVariables>
    } & TChildProps;
export function withUpdatePaymentMethod<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdatePaymentMethodMutation,
  UpdatePaymentMethodMutationVariables,
  UpdatePaymentMethodProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdatePaymentMethodMutation, UpdatePaymentMethodMutationVariables, UpdatePaymentMethodProps<TChildProps, TDataName>>(UpdatePaymentMethodDocument, {
      alias: 'updatePaymentMethod',
      ...operationOptions
    });
};

/**
 * __useUpdatePaymentMethodMutation__
 *
 * To run a mutation, you first call `useUpdatePaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePaymentMethodMutation, { data, loading, error }] = useUpdatePaymentMethodMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePaymentMethodMutation, UpdatePaymentMethodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePaymentMethodMutation, UpdatePaymentMethodMutationVariables>(UpdatePaymentMethodDocument, options);
      }
export type UpdatePaymentMethodMutationHookResult = ReturnType<typeof useUpdatePaymentMethodMutation>;
export type UpdatePaymentMethodMutationResult = Apollo.MutationResult<UpdatePaymentMethodMutation>;
export type UpdatePaymentMethodMutationOptions = Apollo.BaseMutationOptions<UpdatePaymentMethodMutation, UpdatePaymentMethodMutationVariables>;
export const DeletePaymentMethodDocument = gql`
    mutation deletePaymentMethod($input: DeletePaymentMethodInput!) {
  deletePaymentMethod(input: $input)
}
    `;
export type DeletePaymentMethodMutationFn = Apollo.MutationFunction<DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables>;
export type DeletePaymentMethodProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables>
    } & TChildProps;
export function withDeletePaymentMethod<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeletePaymentMethodMutation,
  DeletePaymentMethodMutationVariables,
  DeletePaymentMethodProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables, DeletePaymentMethodProps<TChildProps, TDataName>>(DeletePaymentMethodDocument, {
      alias: 'deletePaymentMethod',
      ...operationOptions
    });
};

/**
 * __useDeletePaymentMethodMutation__
 *
 * To run a mutation, you first call `useDeletePaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePaymentMethodMutation, { data, loading, error }] = useDeletePaymentMethodMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables>(DeletePaymentMethodDocument, options);
      }
export type DeletePaymentMethodMutationHookResult = ReturnType<typeof useDeletePaymentMethodMutation>;
export type DeletePaymentMethodMutationResult = Apollo.MutationResult<DeletePaymentMethodMutation>;
export type DeletePaymentMethodMutationOptions = Apollo.BaseMutationOptions<DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables>;
export const DeleteManyPaymentMethodDocument = gql`
    mutation deleteManyPaymentMethod($input: DeleteManyPaymentMethodInput!) {
  deleteManyPaymentMethod(input: $input)
}
    `;
export type DeleteManyPaymentMethodMutationFn = Apollo.MutationFunction<DeleteManyPaymentMethodMutation, DeleteManyPaymentMethodMutationVariables>;
export type DeleteManyPaymentMethodProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyPaymentMethodMutation, DeleteManyPaymentMethodMutationVariables>
    } & TChildProps;
export function withDeleteManyPaymentMethod<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyPaymentMethodMutation,
  DeleteManyPaymentMethodMutationVariables,
  DeleteManyPaymentMethodProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyPaymentMethodMutation, DeleteManyPaymentMethodMutationVariables, DeleteManyPaymentMethodProps<TChildProps, TDataName>>(DeleteManyPaymentMethodDocument, {
      alias: 'deleteManyPaymentMethod',
      ...operationOptions
    });
};

/**
 * __useDeleteManyPaymentMethodMutation__
 *
 * To run a mutation, you first call `useDeleteManyPaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyPaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyPaymentMethodMutation, { data, loading, error }] = useDeleteManyPaymentMethodMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyPaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyPaymentMethodMutation, DeleteManyPaymentMethodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyPaymentMethodMutation, DeleteManyPaymentMethodMutationVariables>(DeleteManyPaymentMethodDocument, options);
      }
export type DeleteManyPaymentMethodMutationHookResult = ReturnType<typeof useDeleteManyPaymentMethodMutation>;
export type DeleteManyPaymentMethodMutationResult = Apollo.MutationResult<DeleteManyPaymentMethodMutation>;
export type DeleteManyPaymentMethodMutationOptions = Apollo.BaseMutationOptions<DeleteManyPaymentMethodMutation, DeleteManyPaymentMethodMutationVariables>;
export type CreatePaymentMethodMutationVariables = Types.Exact<{
  input: Types.CreatePaymentMethodInput;
}>;


export type CreatePaymentMethodMutation = Pick<Types.Mutation, 'createPaymentMethod'>;

export type UpdatePaymentMethodMutationVariables = Types.Exact<{
  input: Types.UpdatePaymentMethodInput;
}>;


export type UpdatePaymentMethodMutation = Pick<Types.Mutation, 'updatePaymentMethod'>;

export type DeletePaymentMethodMutationVariables = Types.Exact<{
  input: Types.DeletePaymentMethodInput;
}>;


export type DeletePaymentMethodMutation = Pick<Types.Mutation, 'deletePaymentMethod'>;

export type DeleteManyPaymentMethodMutationVariables = Types.Exact<{
  input: Types.DeleteManyPaymentMethodInput;
}>;


export type DeleteManyPaymentMethodMutation = Pick<Types.Mutation, 'deleteManyPaymentMethod'>;
