import { BASE_URL } from '../middleware/api'

function addBaseUrl(url) {
  return `${BASE_URL}${url}`
}

const entity = (path) => {
  return addBaseUrl(path)
}

export const apiEndpoints = () => {
  return {
    entity,
  }
}


// PATH
export const LOGIN_USER = '/login'
export const REGISTER_USER = '/auditors/register'
export const TEMPLATES = '/templates'
export const TEMPLATES_BASE = '/templates/base'
export const TEMPLATES_AUDITOR = '/templates/auditor'
export const TEMPLATES_TYPES = '/templates/types'
export const TEMPLATE_BY_ID = '/templates/{id}'
export const TEMPLATE_BY_ID_AND_CATEGORIES = '/templates/{id}/categories'
export const CATEGORIES = '/templates/categories'
export const DELETE_CATEGORY = '/templates/categories/{id}'
export const QUESTIONS_OF_CATEGORY = '/templates/categories/{id}/questions'
export const QUESTIONS = '/templates/categories/questions'
export const DELETE_QUESTION = '/templates/categories/questions/{id}'
export const GET_AUDITORS = '/auditors'
export const DELETE_AUDITOR = '/auditors/{id}'
export const PERMISSIONS = '/auditors/permissions'
export const PRIORITIZATION_TENDERS = '/prioritization/tenders'
export const PRIORITIZATION_BUYERS = '/prioritization/buyers'
export const CALENDAR = '/calendar'
export const CHECKLISTS = '/checklists'
export const CHECKLISTS_BY_ID = '/checklists/{id}'
export const CHECKLIST_EXPORT = '/checklists/{id}/export'
export const CHECKLISTS_SAVE = '/checklists/save'
export const CHECKLISTS_AUTO_SCORE = '/checklists/auto-score'
export const SEARCH_AUDIT_BY_NAME = '/search/audit-name?value='
export const INDICATOR_BY_TENDER_ID = '/tenders/{tenderId}/indicators'
export const MAPPINGS = '/mappings'
export const TENDER_CPV_SEARCH = '/search/cpv?value='
export const SEARCH_BUYERS = '/search/buyer?value='
export const AUDITOR_SETTINGS = '/auditors/settings'
export const EXPORT_BUYERS = '/prioritization/buyers/export'
export const EXPORT_TENDERS = '/prioritization/tenders/export'

export const UPLOAD_FILES_TO_MATCH = '/match'
export const GET_RESULTS = '/get'
export const SAVE_RESULTS_FROM_MATCH = '/save'
export const CLEAR_DATABASE_DATA = '/clear'
