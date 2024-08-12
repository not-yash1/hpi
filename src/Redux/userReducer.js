import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {}

const FileDownloadRequest = createAction('FileDownloadRequest');
const FileDownloadSuccess = createAction('FileDownloadSuccess');
const FileDownloadFailure = createAction('FileDownloadFailure');

const ContactRequest = createAction('ContactRequest');
const ContactSuccess = createAction('ContactSuccess');
const ContactFailure = createAction('ContactFailure');

const clearErrors = createAction('clearErrors');
const clearMessage = createAction('clearMessage');

export const fileReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(FileDownloadRequest, (state) => {
        state.loading = true;
    })
    .addCase(FileDownloadSuccess, (state, action) => {
        state.loading = false;
    })
    .addCase(FileDownloadFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;
    })
})

export const contactReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(ContactRequest, (state) => {
        state.loading = true;
    })
    .addCase(ContactSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload
    })
    .addCase(ContactFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;
    })
})