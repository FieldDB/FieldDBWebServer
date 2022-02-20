import { combineReducers } from 'redux'

import corpora from '../Corpora/reducer.a73b209e'
import corpusMaskDetail from '../CorpusMask/reducer.a2f91f7e'
import userMaskDetail from '../UserMask/reducer.301b46b4'
import searchResults from '../Search/reducer.b87d5ff2'

const rootReducer = combineReducers({
  corpora,
  corpusMaskDetail,
  userMaskDetail,
  searchResults
})

export default rootReducer
