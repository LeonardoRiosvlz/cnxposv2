import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateWarehouseDocument = gql`
    mutation createWarehouse($input: CreateWarehouseInput!) {
  createWarehouse(input: $input)
}
    `;
export type CreateWarehouseMutationFn = Apollo.MutationFunction<CreateWarehouseMutation, CreateWarehouseMutationVariables>;
export type CreateWarehouseProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateWarehouseMutation, CreateWarehouseMutationVariables>
    } & TChildProps;
export function withCreateWarehouse<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateWarehouseMutation,
  CreateWarehouseMutationVariables,
  CreateWarehouseProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateWarehouseMutation, CreateWarehouseMutationVariables, CreateWarehouseProps<TChildProps, TDataName>>(CreateWarehouseDocument, {
      alias: 'createWarehouse',
      ...operationOptions
    });
};

/**
 * __useCreateWarehouseMutation__
 *
 * To run a mutation, you first call `useCreateWarehouseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWarehouseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWarehouseMutation, { data, loading, error }] = useCreateWarehouseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWarehouseMutation(baseOptions?: Apollo.MutationHookOptions<CreateWarehouseMutation, CreateWarehouseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWarehouseMutation, CreateWarehouseMutationVariables>(CreateWarehouseDocument, options);
      }
export type CreateWarehouseMutationHookResult = ReturnType<typeof useCreateWarehouseMutation>;
export type CreateWarehouseMutationResult = Apollo.MutationResult<CreateWarehouseMutation>;
export type CreateWarehouseMutationOptions = Apollo.BaseMutationOptions<CreateWarehouseMutation, CreateWarehouseMutationVariables>;
export const UpdateWarehouseDocument = gql`
    mutation updateWarehouse($input: UpdateWarehouseInput!) {
  updateWarehouse(input: $input)
}
    `;
export type UpdateWarehouseMutationFn = Apollo.MutationFunction<UpdateWarehouseMutation, UpdateWarehouseMutationVariables>;
export type UpdateWarehouseProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateWarehouseMutation, UpdateWarehouseMutationVariables>
    } & TChildProps;
export function withUpdateWarehouse<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateWarehouseMutation,
  UpdateWarehouseMutationVariables,
  UpdateWarehouseProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateWarehouseMutation, UpdateWarehouseMutationVariables, UpdateWarehouseProps<TChildProps, TDataName>>(UpdateWarehouseDocument, {
      alias: 'updateWarehouse',
      ...operationOptions
    });
};

/**
 * __useUpdateWarehouseMutation__
 *
 * To run a mutation, you first call `useUpdateWarehouseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWarehouseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWarehouseMutation, { data, loading, error }] = useUpdateWarehouseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateWarehouseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWarehouseMutation, UpdateWarehouseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWarehouseMutation, UpdateWarehouseMutationVariables>(UpdateWarehouseDocument, options);
      }
export type UpdateWarehouseMutationHookResult = ReturnType<typeof useUpdateWarehouseMutation>;
export type UpdateWarehouseMutationResult = Apollo.MutationResult<UpdateWarehouseMutation>;
export type UpdateWarehouseMutationOptions = Apollo.BaseMutationOptions<UpdateWarehouseMutation, UpdateWarehouseMutationVariables>;
export const DeleteWarehouseDocument = gql`
    mutation deleteWarehouse($input: DeleteWarehouseInput!) {
  deleteWarehouse(input: $input)
}
    `;
export type DeleteWarehouseMutationFn = Apollo.MutationFunction<DeleteWarehouseMutation, DeleteWarehouseMutationVariables>;
export type DeleteWarehouseProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteWarehouseMutation, DeleteWarehouseMutationVariables>
    } & TChildProps;
export function withDeleteWarehouse<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteWarehouseMutation,
  DeleteWarehouseMutationVariables,
  DeleteWarehouseProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteWarehouseMutation, DeleteWarehouseMutationVariables, DeleteWarehouseProps<TChildProps, TDataName>>(DeleteWarehouseDocument, {
      alias: 'deleteWarehouse',
      ...operationOptions
    });
};

/**
 * __useDeleteWarehouseMutation__
 *
 * To run a mutation, you first call `useDeleteWarehouseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWarehouseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWarehouseMutation, { data, loading, error }] = useDeleteWarehouseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteWarehouseMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWarehouseMutation, DeleteWarehouseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWarehouseMutation, DeleteWarehouseMutationVariables>(DeleteWarehouseDocument, options);
      }
export type DeleteWarehouseMutationHookResult = ReturnType<typeof useDeleteWarehouseMutation>;
export type DeleteWarehouseMutationResult = Apollo.MutationResult<DeleteWarehouseMutation>;
export type DeleteWarehouseMutationOptions = Apollo.BaseMutationOptions<DeleteWarehouseMutation, DeleteWarehouseMutationVariables>;
export const DeleteManyWarehouseDocument = gql`
    mutation deleteManyWarehouse($input: DeleteManyWarehouseInput!) {
  deleteManyWarehouse(input: $input)
}
    `;
export type DeleteManyWarehouseMutationFn = Apollo.MutationFunction<DeleteManyWarehouseMutation, DeleteManyWarehouseMutationVariables>;
export type DeleteManyWarehouseProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyWarehouseMutation, DeleteManyWarehouseMutationVariables>
    } & TChildProps;
export function withDeleteManyWarehouse<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyWarehouseMutation,
  DeleteManyWarehouseMutationVariables,
  DeleteManyWarehouseProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyWarehouseMutation, DeleteManyWarehouseMutationVariables, DeleteManyWarehouseProps<TChildProps, TDataName>>(DeleteManyWarehouseDocument, {
      alias: 'deleteManyWarehouse',
      ...operationOptions
    });
};

/**
 * __useDeleteManyWarehouseMutation__
 *
 * To run a mutation, you first call `useDeleteManyWarehouseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyWarehouseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyWarehouseMutation, { data, loading, error }] = useDeleteManyWarehouseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyWarehouseMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyWarehouseMutation, DeleteManyWarehouseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyWarehouseMutation, DeleteManyWarehouseMutationVariables>(DeleteManyWarehouseDocument, options);
      }
export type DeleteManyWarehouseMutationHookResult = ReturnType<typeof useDeleteManyWarehouseMutation>;
export type DeleteManyWarehouseMutationResult = Apollo.MutationResult<DeleteManyWarehouseMutation>;
export type DeleteManyWarehouseMutationOptions = Apollo.BaseMutationOptions<DeleteManyWarehouseMutation, DeleteManyWarehouseMutationVariables>;
export type CreateWarehouseMutationVariables = Types.Exact<{
  input: Types.CreateWarehouseInput;
}>;


export type CreateWarehouseMutation = Pick<Types.Mutation, 'createWarehouse'>;

export type UpdateWarehouseMutationVariables = Types.Exact<{
  input: Types.UpdateWarehouseInput;
}>;


export type UpdateWarehouseMutation = Pick<Types.Mutation, 'updateWarehouse'>;

export type DeleteWarehouseMutationVariables = Types.Exact<{
  input: Types.DeleteWarehouseInput;
}>;


export type DeleteWarehouseMutation = Pick<Types.Mutation, 'deleteWarehouse'>;

export type DeleteManyWarehouseMutationVariables = Types.Exact<{
  input: Types.DeleteManyWarehouseInput;
}>;


export type DeleteManyWarehouseMutation = Pick<Types.Mutation, 'deleteManyWarehouse'>;
