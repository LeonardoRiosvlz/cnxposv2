import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateTaxesDocument = gql`
    mutation createTaxes($input: CreateTaxesInput!) {
  createTaxes(input: $input)
}
    `;
export type CreateTaxesMutationFn = Apollo.MutationFunction<CreateTaxesMutation, CreateTaxesMutationVariables>;
export type CreateTaxesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateTaxesMutation, CreateTaxesMutationVariables>
    } & TChildProps;
export function withCreateTaxes<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTaxesMutation,
  CreateTaxesMutationVariables,
  CreateTaxesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTaxesMutation, CreateTaxesMutationVariables, CreateTaxesProps<TChildProps, TDataName>>(CreateTaxesDocument, {
      alias: 'createTaxes',
      ...operationOptions
    });
};

/**
 * __useCreateTaxesMutation__
 *
 * To run a mutation, you first call `useCreateTaxesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaxesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaxesMutation, { data, loading, error }] = useCreateTaxesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaxesMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaxesMutation, CreateTaxesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaxesMutation, CreateTaxesMutationVariables>(CreateTaxesDocument, options);
      }
export type CreateTaxesMutationHookResult = ReturnType<typeof useCreateTaxesMutation>;
export type CreateTaxesMutationResult = Apollo.MutationResult<CreateTaxesMutation>;
export type CreateTaxesMutationOptions = Apollo.BaseMutationOptions<CreateTaxesMutation, CreateTaxesMutationVariables>;
export const UpdateTaxesDocument = gql`
    mutation updateTaxes($input: UpdateTaxesInput!) {
  updateTaxes(input: $input)
}
    `;
export type UpdateTaxesMutationFn = Apollo.MutationFunction<UpdateTaxesMutation, UpdateTaxesMutationVariables>;
export type UpdateTaxesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateTaxesMutation, UpdateTaxesMutationVariables>
    } & TChildProps;
export function withUpdateTaxes<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateTaxesMutation,
  UpdateTaxesMutationVariables,
  UpdateTaxesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateTaxesMutation, UpdateTaxesMutationVariables, UpdateTaxesProps<TChildProps, TDataName>>(UpdateTaxesDocument, {
      alias: 'updateTaxes',
      ...operationOptions
    });
};

/**
 * __useUpdateTaxesMutation__
 *
 * To run a mutation, you first call `useUpdateTaxesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaxesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaxesMutation, { data, loading, error }] = useUpdateTaxesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTaxesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaxesMutation, UpdateTaxesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaxesMutation, UpdateTaxesMutationVariables>(UpdateTaxesDocument, options);
      }
export type UpdateTaxesMutationHookResult = ReturnType<typeof useUpdateTaxesMutation>;
export type UpdateTaxesMutationResult = Apollo.MutationResult<UpdateTaxesMutation>;
export type UpdateTaxesMutationOptions = Apollo.BaseMutationOptions<UpdateTaxesMutation, UpdateTaxesMutationVariables>;
export const DeleteTaxesDocument = gql`
    mutation deleteTaxes($input: DeleteTaxesInput!) {
  deleteTaxes(input: $input)
}
    `;
export type DeleteTaxesMutationFn = Apollo.MutationFunction<DeleteTaxesMutation, DeleteTaxesMutationVariables>;
export type DeleteTaxesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteTaxesMutation, DeleteTaxesMutationVariables>
    } & TChildProps;
export function withDeleteTaxes<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTaxesMutation,
  DeleteTaxesMutationVariables,
  DeleteTaxesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTaxesMutation, DeleteTaxesMutationVariables, DeleteTaxesProps<TChildProps, TDataName>>(DeleteTaxesDocument, {
      alias: 'deleteTaxes',
      ...operationOptions
    });
};

/**
 * __useDeleteTaxesMutation__
 *
 * To run a mutation, you first call `useDeleteTaxesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaxesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaxesMutation, { data, loading, error }] = useDeleteTaxesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTaxesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaxesMutation, DeleteTaxesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaxesMutation, DeleteTaxesMutationVariables>(DeleteTaxesDocument, options);
      }
export type DeleteTaxesMutationHookResult = ReturnType<typeof useDeleteTaxesMutation>;
export type DeleteTaxesMutationResult = Apollo.MutationResult<DeleteTaxesMutation>;
export type DeleteTaxesMutationOptions = Apollo.BaseMutationOptions<DeleteTaxesMutation, DeleteTaxesMutationVariables>;
export const DeleteManyTaxesDocument = gql`
    mutation deleteManyTaxes($input: DeleteManyTaxesInput!) {
  deleteManyTaxes(input: $input)
}
    `;
export type DeleteManyTaxesMutationFn = Apollo.MutationFunction<DeleteManyTaxesMutation, DeleteManyTaxesMutationVariables>;
export type DeleteManyTaxesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyTaxesMutation, DeleteManyTaxesMutationVariables>
    } & TChildProps;
export function withDeleteManyTaxes<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyTaxesMutation,
  DeleteManyTaxesMutationVariables,
  DeleteManyTaxesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyTaxesMutation, DeleteManyTaxesMutationVariables, DeleteManyTaxesProps<TChildProps, TDataName>>(DeleteManyTaxesDocument, {
      alias: 'deleteManyTaxes',
      ...operationOptions
    });
};

/**
 * __useDeleteManyTaxesMutation__
 *
 * To run a mutation, you first call `useDeleteManyTaxesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyTaxesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyTaxesMutation, { data, loading, error }] = useDeleteManyTaxesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyTaxesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyTaxesMutation, DeleteManyTaxesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyTaxesMutation, DeleteManyTaxesMutationVariables>(DeleteManyTaxesDocument, options);
      }
export type DeleteManyTaxesMutationHookResult = ReturnType<typeof useDeleteManyTaxesMutation>;
export type DeleteManyTaxesMutationResult = Apollo.MutationResult<DeleteManyTaxesMutation>;
export type DeleteManyTaxesMutationOptions = Apollo.BaseMutationOptions<DeleteManyTaxesMutation, DeleteManyTaxesMutationVariables>;
export type CreateTaxesMutationVariables = Types.Exact<{
  input: Types.CreateTaxesInput;
}>;


export type CreateTaxesMutation = Pick<Types.Mutation, 'createTaxes'>;

export type UpdateTaxesMutationVariables = Types.Exact<{
  input: Types.UpdateTaxesInput;
}>;


export type UpdateTaxesMutation = Pick<Types.Mutation, 'updateTaxes'>;

export type DeleteTaxesMutationVariables = Types.Exact<{
  input: Types.DeleteTaxesInput;
}>;


export type DeleteTaxesMutation = Pick<Types.Mutation, 'deleteTaxes'>;

export type DeleteManyTaxesMutationVariables = Types.Exact<{
  input: Types.DeleteManyTaxesInput;
}>;


export type DeleteManyTaxesMutation = Pick<Types.Mutation, 'deleteManyTaxes'>;
