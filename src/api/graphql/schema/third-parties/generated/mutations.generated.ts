import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateThirdPartiesDocument = gql`
    mutation createThirdParties($input: CreateThirdPartiesInput!) {
  createThirdParties(input: $input)
}
    `;
export type CreateThirdPartiesMutationFn = Apollo.MutationFunction<CreateThirdPartiesMutation, CreateThirdPartiesMutationVariables>;
export type CreateThirdPartiesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateThirdPartiesMutation, CreateThirdPartiesMutationVariables>
    } & TChildProps;
export function withCreateThirdParties<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateThirdPartiesMutation,
  CreateThirdPartiesMutationVariables,
  CreateThirdPartiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateThirdPartiesMutation, CreateThirdPartiesMutationVariables, CreateThirdPartiesProps<TChildProps, TDataName>>(CreateThirdPartiesDocument, {
      alias: 'createThirdParties',
      ...operationOptions
    });
};

/**
 * __useCreateThirdPartiesMutation__
 *
 * To run a mutation, you first call `useCreateThirdPartiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateThirdPartiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createThirdPartiesMutation, { data, loading, error }] = useCreateThirdPartiesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateThirdPartiesMutation(baseOptions?: Apollo.MutationHookOptions<CreateThirdPartiesMutation, CreateThirdPartiesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateThirdPartiesMutation, CreateThirdPartiesMutationVariables>(CreateThirdPartiesDocument, options);
      }
export type CreateThirdPartiesMutationHookResult = ReturnType<typeof useCreateThirdPartiesMutation>;
export type CreateThirdPartiesMutationResult = Apollo.MutationResult<CreateThirdPartiesMutation>;
export type CreateThirdPartiesMutationOptions = Apollo.BaseMutationOptions<CreateThirdPartiesMutation, CreateThirdPartiesMutationVariables>;
export const UpdateThirdPartiesDocument = gql`
    mutation updateThirdParties($input: UpdateThirdPartiesInput!) {
  updateThirdParties(input: $input)
}
    `;
export type UpdateThirdPartiesMutationFn = Apollo.MutationFunction<UpdateThirdPartiesMutation, UpdateThirdPartiesMutationVariables>;
export type UpdateThirdPartiesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateThirdPartiesMutation, UpdateThirdPartiesMutationVariables>
    } & TChildProps;
export function withUpdateThirdParties<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateThirdPartiesMutation,
  UpdateThirdPartiesMutationVariables,
  UpdateThirdPartiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateThirdPartiesMutation, UpdateThirdPartiesMutationVariables, UpdateThirdPartiesProps<TChildProps, TDataName>>(UpdateThirdPartiesDocument, {
      alias: 'updateThirdParties',
      ...operationOptions
    });
};

/**
 * __useUpdateThirdPartiesMutation__
 *
 * To run a mutation, you first call `useUpdateThirdPartiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateThirdPartiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateThirdPartiesMutation, { data, loading, error }] = useUpdateThirdPartiesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateThirdPartiesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateThirdPartiesMutation, UpdateThirdPartiesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateThirdPartiesMutation, UpdateThirdPartiesMutationVariables>(UpdateThirdPartiesDocument, options);
      }
export type UpdateThirdPartiesMutationHookResult = ReturnType<typeof useUpdateThirdPartiesMutation>;
export type UpdateThirdPartiesMutationResult = Apollo.MutationResult<UpdateThirdPartiesMutation>;
export type UpdateThirdPartiesMutationOptions = Apollo.BaseMutationOptions<UpdateThirdPartiesMutation, UpdateThirdPartiesMutationVariables>;
export const DeleteThirdPartiesDocument = gql`
    mutation deleteThirdParties($input: DeleteThirdPartiesInput!) {
  deleteThirdParties(input: $input)
}
    `;
export type DeleteThirdPartiesMutationFn = Apollo.MutationFunction<DeleteThirdPartiesMutation, DeleteThirdPartiesMutationVariables>;
export type DeleteThirdPartiesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteThirdPartiesMutation, DeleteThirdPartiesMutationVariables>
    } & TChildProps;
export function withDeleteThirdParties<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteThirdPartiesMutation,
  DeleteThirdPartiesMutationVariables,
  DeleteThirdPartiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteThirdPartiesMutation, DeleteThirdPartiesMutationVariables, DeleteThirdPartiesProps<TChildProps, TDataName>>(DeleteThirdPartiesDocument, {
      alias: 'deleteThirdParties',
      ...operationOptions
    });
};

/**
 * __useDeleteThirdPartiesMutation__
 *
 * To run a mutation, you first call `useDeleteThirdPartiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteThirdPartiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteThirdPartiesMutation, { data, loading, error }] = useDeleteThirdPartiesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteThirdPartiesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteThirdPartiesMutation, DeleteThirdPartiesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteThirdPartiesMutation, DeleteThirdPartiesMutationVariables>(DeleteThirdPartiesDocument, options);
      }
export type DeleteThirdPartiesMutationHookResult = ReturnType<typeof useDeleteThirdPartiesMutation>;
export type DeleteThirdPartiesMutationResult = Apollo.MutationResult<DeleteThirdPartiesMutation>;
export type DeleteThirdPartiesMutationOptions = Apollo.BaseMutationOptions<DeleteThirdPartiesMutation, DeleteThirdPartiesMutationVariables>;
export const DeleteManyThirdPartiesDocument = gql`
    mutation deleteManyThirdParties($input: DeleteManyThirdPartiesInput!) {
  deleteManyThirdParties(input: $input)
}
    `;
export type DeleteManyThirdPartiesMutationFn = Apollo.MutationFunction<DeleteManyThirdPartiesMutation, DeleteManyThirdPartiesMutationVariables>;
export type DeleteManyThirdPartiesProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyThirdPartiesMutation, DeleteManyThirdPartiesMutationVariables>
    } & TChildProps;
export function withDeleteManyThirdParties<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyThirdPartiesMutation,
  DeleteManyThirdPartiesMutationVariables,
  DeleteManyThirdPartiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyThirdPartiesMutation, DeleteManyThirdPartiesMutationVariables, DeleteManyThirdPartiesProps<TChildProps, TDataName>>(DeleteManyThirdPartiesDocument, {
      alias: 'deleteManyThirdParties',
      ...operationOptions
    });
};

/**
 * __useDeleteManyThirdPartiesMutation__
 *
 * To run a mutation, you first call `useDeleteManyThirdPartiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyThirdPartiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyThirdPartiesMutation, { data, loading, error }] = useDeleteManyThirdPartiesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyThirdPartiesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyThirdPartiesMutation, DeleteManyThirdPartiesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyThirdPartiesMutation, DeleteManyThirdPartiesMutationVariables>(DeleteManyThirdPartiesDocument, options);
      }
export type DeleteManyThirdPartiesMutationHookResult = ReturnType<typeof useDeleteManyThirdPartiesMutation>;
export type DeleteManyThirdPartiesMutationResult = Apollo.MutationResult<DeleteManyThirdPartiesMutation>;
export type DeleteManyThirdPartiesMutationOptions = Apollo.BaseMutationOptions<DeleteManyThirdPartiesMutation, DeleteManyThirdPartiesMutationVariables>;
export type CreateThirdPartiesMutationVariables = Types.Exact<{
  input: Types.CreateThirdPartiesInput;
}>;


export type CreateThirdPartiesMutation = Pick<Types.Mutation, 'createThirdParties'>;

export type UpdateThirdPartiesMutationVariables = Types.Exact<{
  input: Types.UpdateThirdPartiesInput;
}>;


export type UpdateThirdPartiesMutation = Pick<Types.Mutation, 'updateThirdParties'>;

export type DeleteThirdPartiesMutationVariables = Types.Exact<{
  input: Types.DeleteThirdPartiesInput;
}>;


export type DeleteThirdPartiesMutation = Pick<Types.Mutation, 'deleteThirdParties'>;

export type DeleteManyThirdPartiesMutationVariables = Types.Exact<{
  input: Types.DeleteManyThirdPartiesInput;
}>;


export type DeleteManyThirdPartiesMutation = Pick<Types.Mutation, 'deleteManyThirdParties'>;
