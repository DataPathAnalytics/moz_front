import { CALL_API } from '../../../middleware/api'
import { apiEndpoints } from '../../../services/ApiEndpointsConstants'
import {
  UPLOAD_FILES_TO_MATCH,
  GET_RESULTS,
  SAVE_RESULTS_FROM_MATCH,
  CLEAR_DATABASE_DATA,
} from '../../../services/ApiEndpointsConstants'
import * as DemosActions from './DemosConstants'

export function uploadExcelFile(requestParams) {
  return {
    [CALL_API]: {
      config: {
        data: requestParams,
        method: 'post',
        // headers: { 'Content-Type': 'multipart/form-data' },
      },
      endpoint: apiEndpoints().entity(UPLOAD_FILES_TO_MATCH),
      types: [
        DemosActions.UPLOAD_FILE_FOR_MATCH_REQUEST,
        DemosActions.UPLOAD_FILE_FOR_MATCH_SUCCESS,
        DemosActions.UPLOAD_FILE_FOR_MATCH_FAILED,
      ],
    },
  }
}

export function clearUploadExcelFile() {
  return {
    type: DemosActions.UPLOAD_FILE_FOR_MATCH_CLEAR,
  }
}

export function getResults() {
  return {
    [CALL_API]: {
      endpoint: apiEndpoints().entity(GET_RESULTS),
      types: [
        DemosActions.GET_RESULTS_REQUEST,
        DemosActions.GET_RESULTS_SUCCESS,
        DemosActions.GET_RESULTS_FAILED,
      ],
    },
  }
}

export function clearResults() {
  return {
    type: DemosActions.GET_RESULTS_CLEAR,
  }
}

export function clearDataBase() {
  return {
    [CALL_API]: {
      endpoint: apiEndpoints().entity(CLEAR_DATABASE_DATA),
      types: [
        DemosActions.CLEAR_DATABASE_REQUEST,
        DemosActions.CLEAR_DATABASE_SUCCESS,
        DemosActions.CLEAR_DATABASE_FAILED,
      ],
    },
  }
}

export function saveResult(requestParams) {
  return {
    [CALL_API]: {
      config: {
        data: requestParams,
        method: 'post',
      },
      endpoint: apiEndpoints().entity(SAVE_RESULTS_FROM_MATCH),
      types: [
        DemosActions.SAVE_RESULT_REQUEST,
        DemosActions.SAVE_RESULT_SUCCESS,
        DemosActions.SAVE_RESULT_FAILED,
      ],
    },
  }
}

export function clearSaveResult() {
  return {
    type: DemosActions.SAVE_RESULT_CLEAR,
  }
}

export function rebuildNomenclatureStore(newData) {
  return {
    type: DemosActions.REBUILD_NOMENCLATURE_STORE,
    data: newData,
  }
}