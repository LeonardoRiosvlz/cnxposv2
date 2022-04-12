import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateThirdPartyClassificationDocument = gql`
    mutation createThirdPartyClassification($input: CreateThirdPartyClassificationInput!) {
  createThirdPartyClassification(input: $input)
}
    `;
export type CreateThirdPartyClassificationMutationFn = Apollo.MutationFunction<CreateThirdPartyClassificationMutation, CreateThirdPartyClassificationMutationVariables>;
export type CreateThirdPartyClassificationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateThirdPartyClassificationMutation, CreateThirdPartyClassificationMutationVariables>
    } & TChildProps;
export function withCreateThirdPartyClassification<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateThirdPartyClassificationMutation,
  CreateThirdPartyClassificationMutationVariables,
  CreateThirdPartyClassificationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateThirdPartyClassificationMutation, CreateThirdPartyClassificationMutationVariables, CreateThirdPartyClassificationProps<TChildProps, TDataName>>(CreateThirdPartyClassificationDocument, {
      alias: 'createThirdPartyClassification',
      ...operationOptions
    });
};

/**
 * __useCreateThirdPartyClassificationMutation__
 *
 * To run a mutation, you first call `useCreateThirdPartyClassificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateThirdPartyClassificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createThirdPartyClassificationMutation, { data, loading, error }] = useCreateThirdPartyClassificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateThirdPartyClassificationMutation(baseOptions?: Apollo.MutationHookOptions<CreateThirdPartyClassificationMutation, CreateThirdPartyClassificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateThirdPartyClassificationMutation, CreateThirdPartyClassificationMutationVariables>(CreateThirdPartyClassificationDocument, options);
      }
export type CreateThirdPartyClassificationMutationHookResult = ReturnType<typeof useCreateThirdPartyClassificationMutation>;
export type CreateThirdPartyClassificationMutationResult = Apollo.MutationResult<CreateThirdPartyClassificationMutation>;
export type CreateThirdPartyClassificationMutationOptions = Apollo.BaseMutationOptions<CreateThirdPartyClassificationMutation, CreateThirdPartyClassificationMutationVariables>;
export const UpdateThirdPartyClassificationDocument = gql`
    mutation updateThirdPartyClassification($input: UpdateThirdPartyClassificationInput!) {
  updateThirdPartyClassification(input: $input)
}
    `;
export type UpdateThirdPartyClassificationMutationFn = Apollo.MutationFunction<UpdateThirdPartyClassificationMutation, UpdateThirdPartyClassificationMutationVariables>;
export type UpdateThirdPartyClassificationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateThirdPartyClassificationMutation, UpdateThirdPartyClassificationMutationVariables>
    } & TChildProps;
export function withUpdateThirdPartyClassification<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateThirdPartyClassificationMutation,
  UpdateThirdPartyClassificationMutationVariables,
  UpdateThirdPartyClassificationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateThirdPartyClassificationMutation, UpdateThirdPartyClassificationMutationVariables, UpdateThirdPartyClassificationProps<TChildProps, TDataName>>(UpdateThirdPartyClassificationDocument, {
      alias: 'updateThirdPartyClassification',
      ...operationOptions
    });
};

/**
 * __useUpdateThirdPartyClassificationMutation__
 *
 * To run a mutation, you first call `useUpdateThirdPartyClassificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateThirdPartyClassificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateThirdPartyClassificationMutation, { data, loading, error }] = useUpdateThirdPartyClassificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateThirdPartyClassificationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateThirdPartyClassificationMutation, UpdateThirdPartyClassificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateThirdPartyClassificationMutation, UpdateThirdPartyClassificationMutationVariables>(UpdateThirdPartyClassificationDocument, options);
      }
export type UpdateThirdPartyClassificationMutationHookResult = ReturnType<typeof useUpdateThirdPartyClassificationMutation>;
export type UpdateThirdPartyClassificationMutationResult = Apollo.MutationResult<UpdateThirdPartyClassificationMutation>;
export type UpdateThirdPartyClassificationMutationOptions = Apollo.BaseMutationOptions<UpdateThirdPartyClassificationMutation, UpdateThirdPartyClassificationMutationVariables>;
export const DeleteThirdPartyClassificationDocument = gql`
    mutation deleteThirdPartyClassification($input: DeleteThirdPartyClassificationInput!) {
  deleteThirdPartyClassification(input: $input)
}
    `;
export type DeleteThirdPartyClassificationMutationFn = Apollo.MutationFunction<DeleteThirdPartyClassificationMutation, DeleteThirdPartyClassificationMutationVariables>;
export type DeleteThirdPartyClassificationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteThirdPartyClassificationMutation, DeleteThirdPartyClassificationMutationVariables>
    } & TChildProps;
export function withDeleteThirdPartyClassification<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteThirdPartyClassificationMutation,
  DeleteThirdPartyClassificationMutationVariables,
  DeleteThirdPartyClassificationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteThirdPartyClassificationMutation, DeleteThirdPartyClassificationMutationVariables, DeleteThirdPartyClassificationProps<TChildProps, TDataName>>(DeleteThirdPartyClassificationDocument, {
      alias: 'deleteThirdPartyClassification',
      ...operationOptions
    });
};

/**
 * __useDeleteThirdPartyClassificationMutation__
 *
 * To run a mutation, you first call `useDeleteThirdPartyClassificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteThirdPartyClassificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteThirdPartyClassificationMutation, { data, loading, error }] = useDeleteThirdPartyClassificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteThirdPartyClassificationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteThirdPartyClassificationMutation, DeleteThirdPartyClassificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteThirdPartyClassificationMutation, DeleteThirdPartyClassificationMutationVariables>(DeleteThirdPartyClassificationDocument, options);
      }
export type DeleteThirdPartyClassificationMutationHookResult = ReturnType<typeof useDeleteThirdPartyClassificationMutation>;
export type DeleteThirdPartyClassificationMutationResult = Apollo.MutationResult<DeleteThirdPartyClassificationMutation>;
export type DeleteThirdPartyClassificationMutationOptions = Apollo.BaseMutationOptions<DeleteThirdPartyClassificationMutation, DeleteThirdPartyClassificationMutationVariables>;
export const DeleteManyThirdPartyClassificationDocument = gql`
    mutation deleteManyThirdPartyClassification($input: DeleteManyThirdPartyClassificationInput!) {
  deleteManyThirdPartyClassification(input: $input)
}
    `;
export type DeleteManyThirdPartyClassificationMutationFn = Apollo.MutationFunction<DeleteManyThirdPartyClassificationMutation, DeleteManyThirdPartyClassificationMutationVariables>;
export type DeleteManyThirdPartyClassificationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyThirdPartyClassificationMutation, DeleteManyThirdPartyClassificationMutationVariables>
    } & TChildProps;
export function withDeleteManyThirdPartyClassification<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyThirdPartyClassificationMutation,
  DeleteManyThirdPartyClassificationMutationVariables,
  DeleteManyThirdPartyClassificationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyThirdPartyClassificationMutation, DeleteManyThirdPartyClassificationMutationVariables, DeleteManyThirdPartyClassificationProps<TChildProps, TDataName>>(DeleteManyThirdPartyClassificationDocument, {
      alias: 'deleteManyThirdPartyClassification',
      ...operationOptions
    });
};

/**
 * __useDeleteManyThirdPartyClassificationMutation__
 *
 * To run a mutation, you first call `useDeleteManyThirdPartyClassificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyThirdPartyClassificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyThirdPartyClassificationMutation, { data, loading, error }] = useDeleteManyThirdPartyClassificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyThirdPartyClassificationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyThirdPartyClassificationMutation, DeleteManyThirdPartyClassificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyThirdPartyClassificationMutation, DeleteManyThirdPartyClassificationMutationVariables>(DeleteManyThirdPartyClassificationDocument, options);
      }
export type DeleteManyThirdPartyClassificationMutationHookResult = ReturnType<typeof useDeleteManyThirdPartyClassificationMutation>;
export type DeleteManyThirdPartyClassificationMutationResult = Apollo.MutationResult<DeleteManyThirdPartyClassificationMutation>;
export type DeleteManyThirdPartyClassificationMutationOptions = Apollo.BaseMutationOptions<DeleteManyThirdPartyClassificationMutation, DeleteManyThirdPartyClassificationMutationVariables>;
export type CreateThirdPartyClassificationMutationVariables = Types.Exact<{
  input: Types.CreateThirdPartyClassificationInput;
}>;


export type CreateThirdPartyClassificationMutation = Pick<Types.Mutation, 'createThirdPartyClassification'>;

export type UpdateThirdPartyClassificationMutationVariables = Types.Exact<{
  input: Types.UpdateThirdPartyClassificationInput;
}>;


export type UpdateThirdPartyClassificationMutation = Pick<Types.Mutation, 'updateThirdPartyClassification'>;

export type DeleteThirdPartyClassificationMutationVariables = Types.Exact<{
  input: Types.DeleteThirdPartyClassificationInput;
}>;


export type DeleteThirdPartyClassificationMutation = Pick<Types.Mutation, 'deleteThirdPartyClassification'>;

export type DeleteManyThirdPartyClassificationMutationVariables = Types.Exact<{
  input: Types.DeleteManyThirdPartyClassificationInput;
}>;


export type DeleteManyThirdPartyClassificationMutation = Pick<Types.Mutation, 'deleteManyThirdPartyClassification'>;
