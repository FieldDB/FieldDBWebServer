import * as ActionType from './actions.fb248e51.5516181d'
import userMaskDetail from './reducer.301b46b4.2b496824'

describe('Reducer::Usermask', function () {
  it('returns an empty array as default state', function () {
    let action = {
      type: 'unknown'
    }
    let newState = userMaskDetail(undefined, action)
    expect(newState.toJS()).to.deep.equal({})
  })

  describe('on LOADED_USER_MASK', function () {
    it('should only publish valid usermasks', function () {
      let action = {
        type: ActionType.LOADED_USER_MASK,
        response: {
          responseKey: 'responseVal'
        }
      }
      let newState = userMaskDetail(undefined, action)
      expect(newState.toJS()).to.deep.equal({})
    })

    it('should publish the `response`', function () {
      let action = {
        type: ActionType.LOADED_USER_MASK,
        response: {
          username: 'lingllama'
        }
      }
      let newState = userMaskDetail(undefined, action)
      expect(newState.toJS()).to.deep.equal(action.response)
    })
  })
})
