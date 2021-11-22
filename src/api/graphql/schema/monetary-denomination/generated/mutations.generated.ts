import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateMonetaryDenominationDocument = gql`
    mutation createMonetaryDenomination($input: CreateMonetaryDenominationInput!) {
  createMonetaryDenomination(input: $input)
}
    `;
export type CreateMonetaryDenominationMutationFn = Apollo.MutationFunction<CreateMonetaryDenominationMutation, CreateMonetaryDenominationMutationVariables>;
export type CreateMonetaryDenominationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateMonetaryDenominationMutation, CreateMonetaryDenominationMutationVariables>
    } & TChildProps;
export function withCreateMonetaryDenomination<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateMonetaryDenominationMutation,
  CreateMonetaryDenominationMutationVariables,
  CreateMonetaryDenominationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateMonetaryDenominationMutation, CreateMonetaryDenominationMutationVariables, CreateMonetaryDenominationProps<TChildProps, TDataName>>(CreateMonetaryDenominationDocument, {
      alias: 'createMonetaryDenomination',
      ...operationOptions
    });
};

/**
 * __useCreateMonetaryDenominationMutation__
 *
 * To run a mutation, you first call `useCreateMonetaryDenominationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMonetaryDenominationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMonetaryDenominationMutation, { data, loading, error }] = useCreateMonetaryDenominationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMonetaryDenominationMutation(baseOptions?: Apollo.MutationHookOptions<CreateMonetaryDenominationMutation, CreateMonetaryDenominationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMonetaryDenominationMutation, CreateMonetaryDenominationMutationVariables>(CreateMonetaryDenominationDocument, options);
      }
export type CreateMonetaryDenominationMutationHookResult = ReturnType<typeof useCreateMonetaryDenominationMutation>;
export type CreateMonetaryDenominationMutationResult = Apollo.MutationResult<CreateMonetaryDenominationMutation>;
export type CreateMonetaryDenominationMutationOptions = Apollo.BaseMutationOptions<CreateMonetaryDenominationMutation, CreateMonetaryDenominationMutationVariables>;
export const UpdateMonetaryDenominationDocument = gql`
    mutation updateMonetaryDenomination($input: UpdateMonetaryDenominationInput!) {
  updateMonetaryDenomination(input: $input)
}
    `;
export type UpdateMonetaryDenominationMutationFn = Apollo.MutationFunction<UpdateMonetaryDenominationMutation, UpdateMonetaryDenominationMutationVariables>;
export type UpdateMonetaryDenominationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateMonetaryDenominationMutation, UpdateMonetaryDenominationMutationVariables>
    } & TChildProps;
export function withUpdateMonetaryDenomination<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateMonetaryDenominationMutation,
  UpdateMonetaryDenominationMutationVariables,
  UpdateMonetaryDenominationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateMonetaryDenominationMutation, UpdateMonetaryDenominationMutationVariables, UpdateMonetaryDenominationProps<TChildProps, TDataName>>(UpdateMonetaryDenominationDocument, {
      alias: 'updateMonetaryDenomination',
      ...operationOptions
    });
};

/**
 * __useUpdateMonetaryDenominationMutation__
 *
 * To run a mutation, you first call `useUpdateMonetaryDenominationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMonetaryDenominationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMonetaryDenominationMutation, { data, loading, error }] = useUpdateMonetaryDenominationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMonetaryDenominationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMonetaryDenominationMutation, UpdateMonetaryDenominationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMonetaryDenominationMutation, UpdateMonetaryDenominationMutationVariables>(UpdateMonetaryDenominationDocument, options);
      }
export type UpdateMonetaryDenominationMutationHookResult = ReturnType<typeof useUpdateMonetaryDenominationMutation>;
export type UpdateMonetaryDenominationMutationResult = Apollo.MutationResult<UpdateMonetaryDenominationMutation>;
export type UpdateMonetaryDenominationMutationOptions = Apollo.BaseMutationOptions<UpdateMonetaryDenominationMutation, UpdateMonetaryDenominationMutationVariables>;
export const DeleteMonetaryDenominationDocument = gql`
    mutation deleteMonetaryDenomination($input: DeleteMonetaryDenominationInput!) {
  deleteMonetaryDenomination(input: $input)
}
    `;
export type DeleteMonetaryDenominationMutationFn = Apollo.MutationFunction<DeleteMonetaryDenominationMutation, DeleteMonetaryDenominationMutationVariables>;
export type DeleteMonetaryDenominationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteMonetaryDenominationMutation, DeleteMonetaryDenominationMutationVariables>
    } & TChildProps;
export function withDeleteMonetaryDenomination<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteMonetaryDenominationMutation,
  DeleteMonetaryDenominationMutationVariables,
  DeleteMonetaryDenominationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteMonetaryDenominationMutation, DeleteMonetaryDenominationMutationVariables, DeleteMonetaryDenominationProps<TChildProps, TDataName>>(DeleteMonetaryDenominationDocument, {
      alias: 'deleteMonetaryDenomination',
      ...operationOptions
    });
};

/**
 * __useDeleteMonetaryDenominationMutation__
 *
 * To run a mutation, you first call `useDeleteMonetaryDenominationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMonetaryDenominationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMonetaryDenominationMutation, { data, loading, error }] = useDeleteMonetaryDenominationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMonetaryDenominationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMonetaryDenominationMutation, DeleteMonetaryDenominationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMonetaryDenominationMutation, DeleteMonetaryDenominationMutationVariables>(DeleteMonetaryDenominationDocument, options);
      }
export type DeleteMonetaryDenominationMutationHookResult = ReturnType<typeof useDeleteMonetaryDenominationMutation>;
export type DeleteMonetaryDenominationMutationResult = Apollo.MutationResult<DeleteMonetaryDenominationMutation>;
export type DeleteMonetaryDenominationMutationOptions = Apollo.BaseMutationOptions<DeleteMonetaryDenominationMutation, DeleteMonetaryDenominationMutationVariables>;
export const DeleteManyMonetaryDenominationDocument = gql`
    mutation deleteManyMonetaryDenomination($input: DeleteManyMonetaryDenominationInput!) {
  deleteManyMonetaryDenomination(input: $input)
}
    `;
export type DeleteManyMonetaryDenominationMutationFn = Apollo.MutationFunction<DeleteManyMonetaryDenominationMutation, DeleteManyMonetaryDenominationMutationVariables>;
export type DeleteManyMonetaryDenominationProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyMonetaryDenominationMutation, DeleteManyMonetaryDenominationMutationVariables>
    } & TChildProps;
export function withDeleteManyMonetaryDenomination<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyMonetaryDenominationMutation,
  DeleteManyMonetaryDenominationMutationVariables,
  DeleteManyMonetaryDenominationProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyMonetaryDenominationMutation, DeleteManyMonetaryDenominationMutationVariables, DeleteManyMonetaryDenominationProps<TChildProps, TDataName>>(DeleteManyMonetaryDenominationDocument, {
      alias: 'deleteManyMonetaryDenomination',
      ...operationOptions
    });
};

/**
 * __useDeleteManyMonetaryDenominationMutation__
 *
 * To run a mutation, you first call `useDeleteManyMonetaryDenominationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyMonetaryDenominationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyMonetaryDenominationMutation, { data, loading, error }] = useDeleteManyMonetaryDenominationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyMonetaryDenominationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyMonetaryDenominationMutation, DeleteManyMonetaryDenominationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyMonetaryDenominationMutation, DeleteManyMonetaryDenominationMutationVariables>(DeleteManyMonetaryDenominationDocument, options);
      }
export type DeleteManyMonetaryDenominationMutationHookResult = ReturnType<typeof useDeleteManyMonetaryDenominationMutation>;
export type DeleteManyMonetaryDenominationMutationResult = Apollo.MutationResult<DeleteManyMonetaryDenominationMutation>;
export type DeleteManyMonetaryDenominationMutationOptions = Apollo.BaseMutationOptions<DeleteManyMonetaryDenominationMutation, DeleteManyMonetaryDenominationMutationVariables>;
export type CreateMonetaryDenominationMutationVariables = Types.Exact<{
  input: Types.CreateMonetaryDenominationInput;
}>;


export type CreateMonetaryDenominationMutation = Pick<Types.Mutation, 'createMonetaryDenomination'>;

export type UpdateMonetaryDenominationMutationVariables = Types.Exact<{
  input: Types.UpdateMonetaryDenominationInput;
}>;


export type UpdateMonetaryDenominationMutation = Pick<Types.Mutation, 'updateMonetaryDenomination'>;

export type DeleteMonetaryDenominationMutationVariables = Types.Exact<{
  input: Types.DeleteMonetaryDenominationInput;
}>;


export type DeleteMonetaryDenominationMutation = Pick<Types.Mutation, 'deleteMonetaryDenomination'>;

export type DeleteManyMonetaryDenominationMutationVariables = Types.Exact<{
  input: Types.DeleteManyMonetaryDenominationInput;
}>;


export type DeleteManyMonetaryDenominationMutation = Pick<Types.Mutation, 'deleteManyMonetaryDenomination'>;
