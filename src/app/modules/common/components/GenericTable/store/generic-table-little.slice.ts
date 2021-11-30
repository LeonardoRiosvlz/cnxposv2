import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPaginatedEntity } from 'api/interfaces/IPaginatedEntity';

import { PaginatorIn } from 'app/modules/common/store/shared-types';

import { GenericTableState, TableRecord } from './generic-table.slice';

export type GenericTableLittleState = Omit<GenericTableState, 'context'>

const initialState: GenericTableLittleState = {
	query: undefined,
	loading: false,
	items: [],
	selected: [],
	paginator: {
		withPagination: true,
		in: {
			page: 1,
			rowsPerPage: 10,
			order: {
				direction: 'asc',
				id: undefined
			}
		},
		out: {
			total: 0,
			limit: 10,
			pages: 1,
			currentPage: 1
		}
	}
};


export const genericTableLittleSlice = createSlice({
	name: 'table_little',
	initialState,
	reducers: {
		setPaginatedData: (state, action: PayloadAction<IPaginatedEntity<TableRecord>>) => {

			state.paginator = {
				...state.paginator, out: {
					pages: action.payload.totalPages,
					currentPage: action.payload.currentPage,
					total: action.payload.total,
					limit: action.payload.limit
				}
			};

			state.items = action.payload.items;
			state.loading = false;
		},
	
		setItems: (state, action: PayloadAction<Array<TableRecord>>) => {
			state.items = action.payload;
			state.loading = false;
		},

		setSelected: (state, action: PayloadAction<Array<TableRecord>>) => {
			state.selected = action.payload;
		},

		setQuery: (state, action: PayloadAction<string | null>) => {
			state.query = action.payload;
		},

		unSetSelected: (state) => {
			state.selected = [];
		},

		setPaginatorIn: (state, action: PayloadAction<PaginatorIn>) => {

			state.paginator = {
				...state.paginator, in: action.payload
			};
		},

		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},

		cleanPaginatorIn: (state) => {
			state.paginator = {
				...state.paginator, in: initialState.paginator.in
			};
		},

		cleanAllTableData: (state) => {
			state = { ...initialState };
		}
	}
});

export const {
	setLoading,
	setPaginatedData,
	setSelected,
	cleanAllTableData,
	setItems,
	setPaginatorIn,
	unSetSelected,
	setQuery
} = genericTableLittleSlice.actions;

export default genericTableLittleSlice.reducer;