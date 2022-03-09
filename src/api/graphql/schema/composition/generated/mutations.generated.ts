import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateCompositionDocument = gql`
    mutation createComposition($input: CreateCompositionInput!) {
  createComposition(input: $input)
}
    `;
export type CreateCompositionMutationFn = Apollo.MutationFunction<CreateCompositionMutation, CreateCompositionMutationVariables>;
export type CreateCompositionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateCompositionMutation, CreateCompositionMutationVariables>
    } & TChildProps;
export function withCreateComposition<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCompositionMutation,
  CreateCompositionMutationVariables,
  CreateCompositionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCompositionMutation, CreateCompositionMutationVariables, CreateCompositionProps<TChildProps, TDataName>>(CreateCompositionDocument, {
      alias: 'createComposition',
      ...operationOptions
    });
};

/**
 * __useCreateCompositionMutation__
 *
 * To run a mutation, you first call `useCreateCompositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompositionMutation, { data, loading, error }] = useCreateCompositionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompositionMutation(baseOptions?: Apollo.MutationHookOptions<CreateCompositionMutation, CreateCompositionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCompositionMutation, CreateCompositionMutationVariables>(CreateCompositionDocument, options);
      }
export type CreateCompositionMutationHookResult = ReturnType<typeof useCreateCompositionMutation>;
export type CreateCompositionMutationResult = Apollo.MutationResult<CreateCompositionMutation>;
export type CreateCompositionMutationOptions = Apollo.BaseMutationOptions<CreateCompositionMutation, CreateCompositionMutationVariables>;
export const UpdateCompositionDocument = gql`
    mutation updateComposition($input: UpdateCompositionInput!) {
  updateComposition(input: $input)
}
    `;
export type UpdateCompositionMutationFn = Apollo.MutationFunction<UpdateCompositionMutation, UpdateCompositionMutationVariables>;
export type UpdateCompositionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateCompositionMutation, UpdateCompositionMutationVariables>
    } & TChildProps;
export function withUpdateComposition<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateCompositionMutation,
  UpdateCompositionMutationVariables,
  UpdateCompositionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateCompositionMutation, UpdateCompositionMutationVariables, UpdateCompositionProps<TChildProps, TDataName>>(UpdateCompositionDocument, {
      alias: 'updateComposition',
      ...operationOptions
    });
};

/**
 * __useUpdateCompositionMutation__
 *
 * To run a mutation, you first call `useUpdateCompositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompositionMutation, { data, loading, error }] = useUpdateCompositionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCompositionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCompositionMutation, UpdateCompositionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCompositionMutation, UpdateCompositionMutationVariables>(UpdateCompositionDocument, options);
      }
export type UpdateCompositionMutationHookResult = ReturnType<typeof useUpdateCompositionMutation>;
export type UpdateCompositionMutationResult = Apollo.MutationResult<UpdateCompositionMutation>;
export type UpdateCompositionMutationOptions = Apollo.BaseMutationOptions<UpdateCompositionMutation, UpdateCompositionMutationVariables>;
export const DeleteCompositionDocument = gql`
    mutation deleteComposition($input: DeleteCompositionInput!) {
  deleteComposition(input: $input)
}
    `;
export type DeleteCompositionMutationFn = Apollo.MutationFunction<DeleteCompositionMutation, DeleteCompositionMutationVariables>;
export type DeleteCompositionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteCompositionMutation, DeleteCompositionMutationVariables>
    } & TChildProps;
export function withDeleteComposition<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteCompositionMutation,
  DeleteCompositionMutationVariables,
  DeleteCompositionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteCompositionMutation, DeleteCompositionMutationVariables, DeleteCompositionProps<TChildProps, TDataName>>(DeleteCompositionDocument, {
      alias: 'deleteComposition',
      ...operationOptions
    });
};

/**
 * __useDeleteCompositionMutation__
 *
 * To run a mutation, you first call `useDeleteCompositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCompositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCompositionMutation, { data, loading, error }] = useDeleteCompositionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCompositionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCompositionMutation, DeleteCompositionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCompositionMutation, DeleteCompositionMutationVariables>(DeleteCompositionDocument, options);
      }
export type DeleteCompositionMutationHookResult = ReturnType<typeof useDeleteCompositionMutation>;
export type DeleteCompositionMutationResult = Apollo.MutationResult<DeleteCompositionMutation>;
export type DeleteCompositionMutationOptions = Apollo.BaseMutationOptions<DeleteCompositionMutation, DeleteCompositionMutationVariables>;
export const DeleteManyCompositionDocument = gql`
    mutation deleteManyComposition($input: DeleteManyCompositionInput!) {
  deleteManyComposition(input: $input)
}
    `;
export type DeleteManyCompositionMutationFn = Apollo.MutationFunction<DeleteManyCompositionMutation, DeleteManyCompositionMutationVariables>;
export type DeleteManyCompositionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyCompositionMutation, DeleteManyCompositionMutationVariables>
    } & TChildProps;
export function withDeleteManyComposition<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyCompositionMutation,
  DeleteManyCompositionMutationVariables,
  DeleteManyCompositionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyCompositionMutation, DeleteManyCompositionMutationVariables, DeleteManyCompositionProps<TChildProps, TDataName>>(DeleteManyCompositionDocument, {
      alias: 'deleteManyComposition',
      ...operationOptions
    });
};

/**
 * __useDeleteManyCompositionMutation__
 *
 * To run a mutation, you first call `useDeleteManyCompositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyCompositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyCompositionMutation, { data, loading, error }] = useDeleteManyCompositionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyCompositionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyCompositionMutation, DeleteManyCompositionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyCompositionMutation, DeleteManyCompositionMutationVariables>(DeleteManyCompositionDocument, options);
      }
export type DeleteManyCompositionMutationHookResult = ReturnType<typeof useDeleteManyCompositionMutation>;
export type DeleteManyCompositionMutationResult = Apollo.MutationResult<DeleteManyCompositionMutation>;
export type DeleteManyCompositionMutationOptions = Apollo.BaseMutationOptions<DeleteManyCompositionMutation, DeleteManyCompositionMutationVariables>;
export type CreateCompositionMutationVariables = Types.Exact<{
  input: Types.CreateCompositionInput;
}>;


export type CreateCompositionMutation = Pick<Types.Mutation, 'createComposition'>;

export type UpdateCompositionMutationVariables = Types.Exact<{
  input: Types.UpdateCompositionInput;
}>;


export type UpdateCompositionMutation = Pick<Types.Mutation, 'updateComposition'>;

export type DeleteCompositionMutationVariables = Types.Exact<{
  input: Types.DeleteCompositionInput;
}>;


export type DeleteCompositionMutation = Pick<Types.Mutation, 'deleteComposition'>;

export type DeleteManyCompositionMutationVariables = Types.Exact<{
  input: Types.DeleteManyCompositionInput;
}>;


export type DeleteManyCompositionMutation = Pick<Types.Mutation, 'deleteManyComposition'>;
