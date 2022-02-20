import * as ActionType from './actions.7c029780.8bd8e91a'
import corpusMaskReducer from './reducer.a73b209e.cbc08383'

describe('Reducer::CorpusMask', function () {
  it('returns an empty array as default state', function () {
    let action = {
      type: 'unknown'
    }
    let newState = corpusMaskReducer(undefined, action)
    expect(newState.toJS()).to.deep.equal([])
  })

  describe('on LOADED_CORPORA', function () {
    it('returns the `response` in given action', function () {
      let action = {
        type: ActionType.LOADED_CORPORA,
        response: {
          responseKey: 'responseVal'
        }
      }
      let newState = corpusMaskReducer(undefined, action)
      expect(newState.toJS()).to.deep.equal(action.response)
    })
  })
})
