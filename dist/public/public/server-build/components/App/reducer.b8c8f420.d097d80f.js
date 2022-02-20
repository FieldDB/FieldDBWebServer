import { combineReducers } from 'redux'

import corpora from '../Corpora/reducer.a73b209e.cbc08383'
import corpusMaskDetail from '../CorpusMask/reducer.a2f91f7e.89940f0f'
import userMaskDetail from '../UserMask/reducer.301b46b4.2b496824'
import searchResults from '../Search/reducer.b87d5ff2.06816636'

const rootReducer = combineReducers({
  corpora,
  corpusMaskDetail,
  userMaskDetail,
  searchResults
})

export default rootReducer
