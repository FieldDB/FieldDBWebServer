import { CALL_API } from '../../middleware/api.cab420cd.cab420cd'

import * as actionCreator from './actions.fb248e51.5516181d'

describe('Action::CorpusMask', function () {
  describe('#loadUserMask()', function () {
    it('returns action `CALL_API` info', function () {
      let action = actionCreator.loadUserMaskDetail({
        username: 'lingllama'
      })
      expect(action[CALL_API]).to.deep.equal({
        method: 'get',
        path: '/api/users/lingllama',
        successType: actionCreator.LOADED_USER_MASK,
        afterError: action[CALL_API].afterError
      })
    })
  })
})
