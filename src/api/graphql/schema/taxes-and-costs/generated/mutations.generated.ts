import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateTaxesAndCostsDocument = gql`
    mutation createTaxesAndCosts($input: CreateTaxesAndCostsInput!) {
  createTaxesAndCosts(input: $input)
}
    `;
export type CreateTaxesAndCostsMutationFn = Apollo.MutationFunction<CreateTaxesAndCostsMutation, CreateTaxesAndCostsMutationVariables>;
export type CreateTaxesAndCostsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateTaxesAndCostsMutation, CreateTaxesAndCostsMutationVariables>
    } & TChildProps;
export function withCreateTaxesAndCosts<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTaxesAndCostsMutation,
  CreateTaxesAndCostsMutationVariables,
  CreateTaxesAndCostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTaxesAndCostsMutation, CreateTaxesAndCostsMutationVariables, CreateTaxesAndCostsProps<TChildProps, TDataName>>(CreateTaxesAndCostsDocument, {
      alias: 'createTaxesAndCosts',
      ...operationOptions
    });
};

/**
 * __useCreateTaxesAndCostsMutation__
 *
 * To run a mutation, you first call `useCreateTaxesAndCostsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaxesAndCostsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaxesAndCostsMutation, { data, loading, error }] = useCreateTaxesAndCostsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaxesAndCostsMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaxesAndCostsMutation, CreateTaxesAndCostsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaxesAndCostsMutation, CreateTaxesAndCostsMutationVariables>(CreateTaxesAndCostsDocument, options);
      }
export type CreateTaxesAndCostsMutationHookResult = ReturnType<typeof useCreateTaxesAndCostsMutation>;
export type CreateTaxesAndCostsMutationResult = Apollo.MutationResult<CreateTaxesAndCostsMutation>;
export type CreateTaxesAndCostsMutationOptions = Apollo.BaseMutationOptions<CreateTaxesAndCostsMutation, CreateTaxesAndCostsMutationVariables>;
export const UpdateTaxesAndCostsDocument = gql`
    mutation updateTaxesAndCosts($input: UpdateTaxesAndCostsInput!) {
  updateTaxesAndCosts(input: $input)
}
    `;
export type UpdateTaxesAndCostsMutationFn = Apollo.MutationFunction<UpdateTaxesAndCostsMutation, UpdateTaxesAndCostsMutationVariables>;
export type UpdateTaxesAndCostsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateTaxesAndCostsMutation, UpdateTaxesAndCostsMutationVariables>
    } & TChildProps;
export function withUpdateTaxesAndCosts<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateTaxesAndCostsMutation,
  UpdateTaxesAndCostsMutationVariables,
  UpdateTaxesAndCostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateTaxesAndCostsMutation, UpdateTaxesAndCostsMutationVariables, UpdateTaxesAndCostsProps<TChildProps, TDataName>>(UpdateTaxesAndCostsDocument, {
      alias: 'updateTaxesAndCosts',
      ...operationOptions
    });
};

/**
 * __useUpdateTaxesAndCostsMutation__
 *
 * To run a mutation, you first call `useUpdateTaxesAndCostsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaxesAndCostsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaxesAndCostsMutation, { data, loading, error }] = useUpdateTaxesAndCostsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTaxesAndCostsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaxesAndCostsMutation, UpdateTaxesAndCostsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaxesAndCostsMutation, UpdateTaxesAndCostsMutationVariables>(UpdateTaxesAndCostsDocument, options);
      }
export type UpdateTaxesAndCostsMutationHookResult = ReturnType<typeof useUpdateTaxesAndCostsMutation>;
export type UpdateTaxesAndCostsMutationResult = Apollo.MutationResult<UpdateTaxesAndCostsMutation>;
export type UpdateTaxesAndCostsMutationOptions = Apollo.BaseMutationOptions<UpdateTaxesAndCostsMutation, UpdateTaxesAndCostsMutationVariables>;
export const DeleteTaxesAndCostsDocument = gql`
    mutation deleteTaxesAndCosts($input: DeleteTaxesAndCostsInput!) {
  deleteTaxesAndCosts(input: $input)
}
    `;
export type DeleteTaxesAndCostsMutationFn = Apollo.MutationFunction<DeleteTaxesAndCostsMutation, DeleteTaxesAndCostsMutationVariables>;
export type DeleteTaxesAndCostsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteTaxesAndCostsMutation, DeleteTaxesAndCostsMutationVariables>
    } & TChildProps;
export function withDeleteTaxesAndCosts<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTaxesAndCostsMutation,
  DeleteTaxesAndCostsMutationVariables,
  DeleteTaxesAndCostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTaxesAndCostsMutation, DeleteTaxesAndCostsMutationVariables, DeleteTaxesAndCostsProps<TChildProps, TDataName>>(DeleteTaxesAndCostsDocument, {
      alias: 'deleteTaxesAndCosts',
      ...operationOptions
    });
};

/**
 * __useDeleteTaxesAndCostsMutation__
 *
 * To run a mutation, you first call `useDeleteTaxesAndCostsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaxesAndCostsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaxesAndCostsMutation, { data, loading, error }] = useDeleteTaxesAndCostsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTaxesAndCostsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaxesAndCostsMutation, DeleteTaxesAndCostsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaxesAndCostsMutation, DeleteTaxesAndCostsMutationVariables>(DeleteTaxesAndCostsDocument, options);
      }
export type DeleteTaxesAndCostsMutationHookResult = ReturnType<typeof useDeleteTaxesAndCostsMutation>;
export type DeleteTaxesAndCostsMutationResult = Apollo.MutationResult<DeleteTaxesAndCostsMutation>;
export type DeleteTaxesAndCostsMutationOptions = Apollo.BaseMutationOptions<DeleteTaxesAndCostsMutation, DeleteTaxesAndCostsMutationVariables>;
export const DeleteManyTaxesAndCostsDocument = gql`
    mutation deleteManyTaxesAndCosts($input: DeleteManyTaxesAndCostsInput!) {
  deleteManyTaxesAndCosts(input: $input)
}
    `;
export type DeleteManyTaxesAndCostsMutationFn = Apollo.MutationFunction<DeleteManyTaxesAndCostsMutation, DeleteManyTaxesAndCostsMutationVariables>;
export type DeleteManyTaxesAndCostsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyTaxesAndCostsMutation, DeleteManyTaxesAndCostsMutationVariables>
    } & TChildProps;
export function withDeleteManyTaxesAndCosts<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyTaxesAndCostsMutation,
  DeleteManyTaxesAndCostsMutationVariables,
  DeleteManyTaxesAndCostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyTaxesAndCostsMutation, DeleteManyTaxesAndCostsMutationVariables, DeleteManyTaxesAndCostsProps<TChildProps, TDataName>>(DeleteManyTaxesAndCostsDocument, {
      alias: 'deleteManyTaxesAndCosts',
      ...operationOptions
    });
};

/**
 * __useDeleteManyTaxesAndCostsMutation__
 *
 * To run a mutation, you first call `useDeleteManyTaxesAndCostsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyTaxesAndCostsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyTaxesAndCostsMutation, { data, loading, error }] = useDeleteManyTaxesAndCostsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyTaxesAndCostsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyTaxesAndCostsMutation, DeleteManyTaxesAndCostsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyTaxesAndCostsMutation, DeleteManyTaxesAndCostsMutationVariables>(DeleteManyTaxesAndCostsDocument, options);
      }
export type DeleteManyTaxesAndCostsMutationHookResult = ReturnType<typeof useDeleteManyTaxesAndCostsMutation>;
export type DeleteManyTaxesAndCostsMutationResult = Apollo.MutationResult<DeleteManyTaxesAndCostsMutation>;
export type DeleteManyTaxesAndCostsMutationOptions = Apollo.BaseMutationOptions<DeleteManyTaxesAndCostsMutation, DeleteManyTaxesAndCostsMutationVariables>;
export type CreateTaxesAndCostsMutationVariables = Types.Exact<{
  input: Types.CreateTaxesAndCostsInput;
}>;


export type CreateTaxesAndCostsMutation = Pick<Types.Mutation, 'createTaxesAndCosts'>;

export type UpdateTaxesAndCostsMutationVariables = Types.Exact<{
  input: Types.UpdateTaxesAndCostsInput;
}>;


export type UpdateTaxesAndCostsMutation = Pick<Types.Mutation, 'updateTaxesAndCosts'>;

export type DeleteTaxesAndCostsMutationVariables = Types.Exact<{
  input: Types.DeleteTaxesAndCostsInput;
}>;


export type DeleteTaxesAndCostsMutation = Pick<Types.Mutation, 'deleteTaxesAndCosts'>;

export type DeleteManyTaxesAndCostsMutationVariables = Types.Exact<{
  input: Types.DeleteManyTaxesAndCostsInput;
}>;


export type DeleteManyTaxesAndCostsMutation = Pick<Types.Mutation, 'deleteManyTaxesAndCosts'>;
