import { CALL_API } from '../../middleware/api.cab420cd.cab420cd'

export const LOADED_CORPUS_MASK_DETAIL = Symbol('LOADED_CORPUS_MASK_DETAIL')
export function loadCorpusMaskDetail ({teamname, dbname, history}) {
  return {
    [CALL_API]: {
      method: 'get',
      path: `/api/${teamname || 'corpora'}/${dbname}`,
      successType: LOADED_CORPUS_MASK_DETAIL,
      afterError: () => {
        history.push('/')
      }
    }
  }
}
