import { combineReducers } from 'redux'
import { IntlReducer as Intl } from 'react-redux-multilingual'

import exportStore from './export/export'
import demosStore from './demos/demos'

export default combineReducers({
  Intl,
  exportStore,
  demosStore,
})