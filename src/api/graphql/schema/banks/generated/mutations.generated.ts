import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
const defaultOptions =  {}

export const CreateBanksDocument = gql`
    mutation createBanks($input: CreateBanksInput!) {
  createBanks(input: $input)
}
    `;
export type CreateBanksMutationFn = Apollo.MutationFunction<CreateBanksMutation, CreateBanksMutationVariables>;
export type CreateBanksProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateBanksMutation, CreateBanksMutationVariables>
    } & TChildProps;
export function withCreateBanks<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateBanksMutation,
  CreateBanksMutationVariables,
  CreateBanksProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateBanksMutation, CreateBanksMutationVariables, CreateBanksProps<TChildProps, TDataName>>(CreateBanksDocument, {
      alias: 'createBanks',
      ...operationOptions
    });
};

/**
 * __useCreateBanksMutation__
 *
 * To run a mutation, you first call `useCreateBanksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBanksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBanksMutation, { data, loading, error }] = useCreateBanksMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBanksMutation(baseOptions?: Apollo.MutationHookOptions<CreateBanksMutation, CreateBanksMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBanksMutation, CreateBanksMutationVariables>(CreateBanksDocument, options);
      }
export type CreateBanksMutationHookResult = ReturnType<typeof useCreateBanksMutation>;
export type CreateBanksMutationResult = Apollo.MutationResult<CreateBanksMutation>;
export type CreateBanksMutationOptions = Apollo.BaseMutationOptions<CreateBanksMutation, CreateBanksMutationVariables>;
export const UpdateBanksDocument = gql`
    mutation updateBanks($input: UpdateBanksInput!) {
  updateBanks(input: $input)
}
    `;
export type UpdateBanksMutationFn = Apollo.MutationFunction<UpdateBanksMutation, UpdateBanksMutationVariables>;
export type UpdateBanksProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateBanksMutation, UpdateBanksMutationVariables>
    } & TChildProps;
export function withUpdateBanks<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateBanksMutation,
  UpdateBanksMutationVariables,
  UpdateBanksProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateBanksMutation, UpdateBanksMutationVariables, UpdateBanksProps<TChildProps, TDataName>>(UpdateBanksDocument, {
      alias: 'updateBanks',
      ...operationOptions
    });
};

/**
 * __useUpdateBanksMutation__
 *
 * To run a mutation, you first call `useUpdateBanksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBanksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBanksMutation, { data, loading, error }] = useUpdateBanksMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBanksMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBanksMutation, UpdateBanksMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBanksMutation, UpdateBanksMutationVariables>(UpdateBanksDocument, options);
      }
export type UpdateBanksMutationHookResult = ReturnType<typeof useUpdateBanksMutation>;
export type UpdateBanksMutationResult = Apollo.MutationResult<UpdateBanksMutation>;
export type UpdateBanksMutationOptions = Apollo.BaseMutationOptions<UpdateBanksMutation, UpdateBanksMutationVariables>;
export const DeleteBanksDocument = gql`
    mutation deleteBanks($input: DeleteBanksInput!) {
  deleteBanks(input: $input)
}
    `;
export type DeleteBanksMutationFn = Apollo.MutationFunction<DeleteBanksMutation, DeleteBanksMutationVariables>;
export type DeleteBanksProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteBanksMutation, DeleteBanksMutationVariables>
    } & TChildProps;
export function withDeleteBanks<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteBanksMutation,
  DeleteBanksMutationVariables,
  DeleteBanksProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteBanksMutation, DeleteBanksMutationVariables, DeleteBanksProps<TChildProps, TDataName>>(DeleteBanksDocument, {
      alias: 'deleteBanks',
      ...operationOptions
    });
};

/**
 * __useDeleteBanksMutation__
 *
 * To run a mutation, you first call `useDeleteBanksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBanksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBanksMutation, { data, loading, error }] = useDeleteBanksMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteBanksMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBanksMutation, DeleteBanksMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBanksMutation, DeleteBanksMutationVariables>(DeleteBanksDocument, options);
      }
export type DeleteBanksMutationHookResult = ReturnType<typeof useDeleteBanksMutation>;
export type DeleteBanksMutationResult = Apollo.MutationResult<DeleteBanksMutation>;
export type DeleteBanksMutationOptions = Apollo.BaseMutationOptions<DeleteBanksMutation, DeleteBanksMutationVariables>;
export const DeleteManyBanksDocument = gql`
    mutation deleteManyBanks($input: DeleteManyBanksInput!) {
  deleteManyBanks(input: $input)
}
    `;
export type DeleteManyBanksMutationFn = Apollo.MutationFunction<DeleteManyBanksMutation, DeleteManyBanksMutationVariables>;
export type DeleteManyBanksProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteManyBanksMutation, DeleteManyBanksMutationVariables>
    } & TChildProps;
export function withDeleteManyBanks<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteManyBanksMutation,
  DeleteManyBanksMutationVariables,
  DeleteManyBanksProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteManyBanksMutation, DeleteManyBanksMutationVariables, DeleteManyBanksProps<TChildProps, TDataName>>(DeleteManyBanksDocument, {
      alias: 'deleteManyBanks',
      ...operationOptions
    });
};

/**
 * __useDeleteManyBanksMutation__
 *
 * To run a mutation, you first call `useDeleteManyBanksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyBanksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyBanksMutation, { data, loading, error }] = useDeleteManyBanksMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteManyBanksMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyBanksMutation, DeleteManyBanksMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyBanksMutation, DeleteManyBanksMutationVariables>(DeleteManyBanksDocument, options);
      }
export type DeleteManyBanksMutationHookResult = ReturnType<typeof useDeleteManyBanksMutation>;
export type DeleteManyBanksMutationResult = Apollo.MutationResult<DeleteManyBanksMutation>;
export type DeleteManyBanksMutationOptions = Apollo.BaseMutationOptions<DeleteManyBanksMutation, DeleteManyBanksMutationVariables>;
export type CreateBanksMutationVariables = Types.Exact<{
  input: Types.CreateBanksInput;
}>;


export type CreateBanksMutation = Pick<Types.Mutation, 'createBanks'>;

export type UpdateBanksMutationVariables = Types.Exact<{
  input: Types.UpdateBanksInput;
}>;


export type UpdateBanksMutation = Pick<Types.Mutation, 'updateBanks'>;

export type DeleteBanksMutationVariables = Types.Exact<{
  input: Types.DeleteBanksInput;
}>;


export type DeleteBanksMutation = Pick<Types.Mutation, 'deleteBanks'>;

export type DeleteManyBanksMutationVariables = Types.Exact<{
  input: Types.DeleteManyBanksInput;
}>;


export type DeleteManyBanksMutation = Pick<Types.Mutation, 'deleteManyBanks'>;
