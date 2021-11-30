import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateBillingResolutionDocument = gql`
    mutation createBillingResolution($input: CreateBillingResolutionInput!) {
  createBillingResolution(input: $input)
}
    `;
export type CreateBillingResolutionMutationFn = Apollo.MutationFunction<CreateBillingResolutionMutation, CreateBillingResolutionMutationVariables>;
export type CreateBillingResolutionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateBillingResolutionMutation, CreateBillingResolutionMutationVariables>
    } & TChildProps;
export function withCreateBillingResolution<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateBillingResolutionMutation,
  CreateBillingResolutionMutationVariables,
  CreateBillingResolutionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateBillingResolutionMutation, CreateBillingResolutionMutationVariables, CreateBillingResolutionProps<TChildProps, TDataName>>(CreateBillingResolutionDocument, {
      alias: 'createBillingResolution',
      ...operationOptions
    });
};

/**
 * __useCreateBillingResolutionMutation__
 *
 * To run a mutation, you first call `useCreateBillingResolutionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBillingResolutionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBillingResolutionMutation, { data, loading, error }] = useCreateBillingResolutionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBillingResolutionMutation(baseOptions?: Apollo.MutationHookOptions<CreateBillingResolutionMutation, CreateBillingResolutionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBillingResolutionMutation, CreateBillingResolutionMutationVariables>(CreateBillingResolutionDocument, options);
      }
export type CreateBillingResolutionMutationHookResult = ReturnType<typeof useCreateBillingResolutionMutation>;
export type CreateBillingResolutionMutationResult = Apollo.MutationResult<CreateBillingResolutionMutation>;
export type CreateBillingResolutionMutationOptions = Apollo.BaseMutationOptions<CreateBillingResolutionMutation, CreateBillingResolutionMutationVariables>;
export const UpdateBillingResolutionDocument = gql`
    mutation updateBillingResolution($input: UpdateBillingResolutionInput!) {
  updateBillingResolution(input: $input)
}
    `;
export type UpdateBillingResolutionMutationFn = Apollo.MutationFunction<UpdateBillingResolutionMutation, UpdateBillingResolutionMutationVariables>;
export type UpdateBillingResolutionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateBillingResolutionMutation, UpdateBillingResolutionMutationVariables>
    } & TChildProps;
export function withUpdateBillingResolution<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateBillingResolutionMutation,
  UpdateBillingResolutionMutationVariables,
  UpdateBillingResolutionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateBillingResolutionMutation, UpdateBillingResolutionMutationVariables, UpdateBillingResolutionProps<TChildProps, TDataName>>(UpdateBillingResolutionDocument, {
      alias: 'updateBillingResolution',
      ...operationOptions
    });
};

/**
 * __useUpdateBillingResolutionMutation__
 *
 * To run a mutation, you first call `useUpdateBillingResolutionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBillingResolutionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBillingResolutionMutation, { data, loading, error }] = useUpdateBillingResolutionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBillingResolutionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBillingResolutionMutation, UpdateBillingResolutionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBillingResolutionMutation, UpdateBillingResolutionMutationVariables>(UpdateBillingResolutionDocument, options);
      }
export type UpdateBillingResolutionMutationHookResult = ReturnType<typeof useUpdateBillingResolutionMutation>;
export type UpdateBillingResolutionMutationResult = Apollo.MutationResult<UpdateBillingResolutionMutation>;
export type UpdateBillingResolutionMutationOptions = Apollo.BaseMutationOptions<UpdateBillingResolutionMutation, UpdateBillingResolutionMutationVariables>;
export const DeleteBillingResolutionDocument = gql`
    mutation deleteBillingResolution($input: DeleteBillingResolutionInput!) {
  deleteBillingResolution(input: $input)
}
    `;
export type DeleteBillingResolutionMutationFn = Apollo.MutationFunction<DeleteBillingResolutionMutation, DeleteBillingResolutionMutationVariables>;
export type DeleteBillingResolutionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteBillingResolutionMutation, DeleteBillingResolutionMutationVariables>
    } & TChildProps;
export function withDeleteBillingResolution<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteBillingResolutionMutation,
  DeleteBillingResolutionMutationVariables,
  DeleteBillingResolutionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteBillingResolutionMutation, DeleteBillingResolutionMutationVariables, DeleteBillingResolutionProps<TChildProps, TDataName>>(DeleteBillingResolutionDocument, {
      alias: 'deleteBillingResolution',
      ...operationOptions
    });
};

/**
 * __useDeleteBillingResolutionMutation__
 *
 * To run a mutation, you first call `useDeleteBillingResolutionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBillingResolutionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBillingResolutionMutation, { data, loading, error }] = useDeleteBillingResolutionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteBillingResolutionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBillingResolutionMutation, DeleteBillingResolutionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBillingResolutionMutation, DeleteBillingResolutionMutationVariables>(DeleteBillingResolutionDocument, options);
      }
export type DeleteBillingResolutionMutationHookResult = ReturnType<typeof useDeleteBillingResolutionMutation>;
export type DeleteBillingResolutionMutationResult = Apollo.MutationResult<DeleteBillingResolutionMutation>;
export type DeleteBillingResolutionMutationOptions = Apollo.BaseMutationOptions<DeleteBillingResolutionMutation, DeleteBillingResolutionMutationVariables>;
export const DeleteManyBillingResolutionDocument = gql`
    mutation deleteManyBillingResolution($input: DeleteManyBillingResolutionInput!) {
  deleteManyBillingResolution(input: $input)
}
    `;
export type DeleteManyBillingResolutionMutationFn = Apollo.MutationFunction<DeleteManyBillingResolutionMutation, DeleteManyBillingResolutionMutationVariables>;
export type DeleteManyBillingResolutionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyBillingResolutionMutation, DeleteManyBillingResolutionMutationVariables>
    } & TChildProps;
export function withDeleteManyBillingResolution<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyBillingResolutionMutation,
  DeleteManyBillingResolutionMutationVariables,
  DeleteManyBillingResolutionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyBillingResolutionMutation, DeleteManyBillingResolutionMutationVariables, DeleteManyBillingResolutionProps<TChildProps, TDataName>>(DeleteManyBillingResolutionDocument, {
      alias: 'deleteManyBillingResolution',
      ...operationOptions
    });
};

/**
 * __useDeleteManyBillingResolutionMutation__
 *
 * To run a mutation, you first call `useDeleteManyBillingResolutionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyBillingResolutionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyBillingResolutionMutation, { data, loading, error }] = useDeleteManyBillingResolutionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyBillingResolutionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyBillingResolutionMutation, DeleteManyBillingResolutionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyBillingResolutionMutation, DeleteManyBillingResolutionMutationVariables>(DeleteManyBillingResolutionDocument, options);
      }
export type DeleteManyBillingResolutionMutationHookResult = ReturnType<typeof useDeleteManyBillingResolutionMutation>;
export type DeleteManyBillingResolutionMutationResult = Apollo.MutationResult<DeleteManyBillingResolutionMutation>;
export type DeleteManyBillingResolutionMutationOptions = Apollo.BaseMutationOptions<DeleteManyBillingResolutionMutation, DeleteManyBillingResolutionMutationVariables>;
export type CreateBillingResolutionMutationVariables = Types.Exact<{
  input: Types.CreateBillingResolutionInput;
}>;


export type CreateBillingResolutionMutation = Pick<Types.Mutation, 'createBillingResolution'>;

export type UpdateBillingResolutionMutationVariables = Types.Exact<{
  input: Types.UpdateBillingResolutionInput;
}>;


export type UpdateBillingResolutionMutation = Pick<Types.Mutation, 'updateBillingResolution'>;

export type DeleteBillingResolutionMutationVariables = Types.Exact<{
  input: Types.DeleteBillingResolutionInput;
}>;


export type DeleteBillingResolutionMutation = Pick<Types.Mutation, 'deleteBillingResolution'>;

export type DeleteManyBillingResolutionMutationVariables = Types.Exact<{
  input: Types.DeleteManyBillingResolutionInput;
}>;


export type DeleteManyBillingResolutionMutation = Pick<Types.Mutation, 'deleteManyBillingResolution'>;
