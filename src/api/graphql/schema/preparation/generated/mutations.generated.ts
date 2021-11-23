import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreatePreparationDocument = gql`
    mutation createPreparation($input: CreatePreparationInput!) {
  createPreparation(input: $input)
}
    `;
export type CreatePreparationMutationFn = Apollo.MutationFunction<CreatePreparationMutation, CreatePreparationMutationVariables>;
export type CreatePreparationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreatePreparationMutation, CreatePreparationMutationVariables>
    } & TChildProps;
export function withCreatePreparation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreatePreparationMutation,
  CreatePreparationMutationVariables,
  CreatePreparationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreatePreparationMutation, CreatePreparationMutationVariables, CreatePreparationProps<TChildProps, TDataName>>(CreatePreparationDocument, {
      alias: 'createPreparation',
      ...operationOptions
    });
};

/**
 * __useCreatePreparationMutation__
 *
 * To run a mutation, you first call `useCreatePreparationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePreparationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPreparationMutation, { data, loading, error }] = useCreatePreparationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePreparationMutation(baseOptions?: Apollo.MutationHookOptions<CreatePreparationMutation, CreatePreparationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePreparationMutation, CreatePreparationMutationVariables>(CreatePreparationDocument, options);
      }
export type CreatePreparationMutationHookResult = ReturnType<typeof useCreatePreparationMutation>;
export type CreatePreparationMutationResult = Apollo.MutationResult<CreatePreparationMutation>;
export type CreatePreparationMutationOptions = Apollo.BaseMutationOptions<CreatePreparationMutation, CreatePreparationMutationVariables>;
export const UpdatePreparationDocument = gql`
    mutation updatePreparation($input: UpdatePreparationInput!) {
  updatePreparation(input: $input)
}
    `;
export type UpdatePreparationMutationFn = Apollo.MutationFunction<UpdatePreparationMutation, UpdatePreparationMutationVariables>;
export type UpdatePreparationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdatePreparationMutation, UpdatePreparationMutationVariables>
    } & TChildProps;
export function withUpdatePreparation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdatePreparationMutation,
  UpdatePreparationMutationVariables,
  UpdatePreparationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdatePreparationMutation, UpdatePreparationMutationVariables, UpdatePreparationProps<TChildProps, TDataName>>(UpdatePreparationDocument, {
      alias: 'updatePreparation',
      ...operationOptions
    });
};

/**
 * __useUpdatePreparationMutation__
 *
 * To run a mutation, you first call `useUpdatePreparationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePreparationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePreparationMutation, { data, loading, error }] = useUpdatePreparationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePreparationMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePreparationMutation, UpdatePreparationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePreparationMutation, UpdatePreparationMutationVariables>(UpdatePreparationDocument, options);
      }
export type UpdatePreparationMutationHookResult = ReturnType<typeof useUpdatePreparationMutation>;
export type UpdatePreparationMutationResult = Apollo.MutationResult<UpdatePreparationMutation>;
export type UpdatePreparationMutationOptions = Apollo.BaseMutationOptions<UpdatePreparationMutation, UpdatePreparationMutationVariables>;
export const DeletePreparationDocument = gql`
    mutation deletePreparation($input: DeletePreparationInput!) {
  deletePreparation(input: $input)
}
    `;
export type DeletePreparationMutationFn = Apollo.MutationFunction<DeletePreparationMutation, DeletePreparationMutationVariables>;
export type DeletePreparationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeletePreparationMutation, DeletePreparationMutationVariables>
    } & TChildProps;
export function withDeletePreparation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeletePreparationMutation,
  DeletePreparationMutationVariables,
  DeletePreparationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeletePreparationMutation, DeletePreparationMutationVariables, DeletePreparationProps<TChildProps, TDataName>>(DeletePreparationDocument, {
      alias: 'deletePreparation',
      ...operationOptions
    });
};

/**
 * __useDeletePreparationMutation__
 *
 * To run a mutation, you first call `useDeletePreparationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePreparationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePreparationMutation, { data, loading, error }] = useDeletePreparationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePreparationMutation(baseOptions?: Apollo.MutationHookOptions<DeletePreparationMutation, DeletePreparationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePreparationMutation, DeletePreparationMutationVariables>(DeletePreparationDocument, options);
      }
export type DeletePreparationMutationHookResult = ReturnType<typeof useDeletePreparationMutation>;
export type DeletePreparationMutationResult = Apollo.MutationResult<DeletePreparationMutation>;
export type DeletePreparationMutationOptions = Apollo.BaseMutationOptions<DeletePreparationMutation, DeletePreparationMutationVariables>;
export const DeleteManyPreparationDocument = gql`
    mutation deleteManyPreparation($input: DeleteManyPreparationInput!) {
  deleteManyPreparation(input: $input)
}
    `;
export type DeleteManyPreparationMutationFn = Apollo.MutationFunction<DeleteManyPreparationMutation, DeleteManyPreparationMutationVariables>;
export type DeleteManyPreparationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyPreparationMutation, DeleteManyPreparationMutationVariables>
    } & TChildProps;
export function withDeleteManyPreparation<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyPreparationMutation,
  DeleteManyPreparationMutationVariables,
  DeleteManyPreparationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyPreparationMutation, DeleteManyPreparationMutationVariables, DeleteManyPreparationProps<TChildProps, TDataName>>(DeleteManyPreparationDocument, {
      alias: 'deleteManyPreparation',
      ...operationOptions
    });
};

/**
 * __useDeleteManyPreparationMutation__
 *
 * To run a mutation, you first call `useDeleteManyPreparationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyPreparationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyPreparationMutation, { data, loading, error }] = useDeleteManyPreparationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyPreparationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyPreparationMutation, DeleteManyPreparationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyPreparationMutation, DeleteManyPreparationMutationVariables>(DeleteManyPreparationDocument, options);
      }
export type DeleteManyPreparationMutationHookResult = ReturnType<typeof useDeleteManyPreparationMutation>;
export type DeleteManyPreparationMutationResult = Apollo.MutationResult<DeleteManyPreparationMutation>;
export type DeleteManyPreparationMutationOptions = Apollo.BaseMutationOptions<DeleteManyPreparationMutation, DeleteManyPreparationMutationVariables>;
export type CreatePreparationMutationVariables = Types.Exact<{
  input: Types.CreatePreparationInput;
}>;


export type CreatePreparationMutation = Pick<Types.Mutation, 'createPreparation'>;

export type UpdatePreparationMutationVariables = Types.Exact<{
  input: Types.UpdatePreparationInput;
}>;


export type UpdatePreparationMutation = Pick<Types.Mutation, 'updatePreparation'>;

export type DeletePreparationMutationVariables = Types.Exact<{
  input: Types.DeletePreparationInput;
}>;


export type DeletePreparationMutation = Pick<Types.Mutation, 'deletePreparation'>;

export type DeleteManyPreparationMutationVariables = Types.Exact<{
  input: Types.DeleteManyPreparationInput;
}>;


export type DeleteManyPreparationMutation = Pick<Types.Mutation, 'deleteManyPreparation'>;
