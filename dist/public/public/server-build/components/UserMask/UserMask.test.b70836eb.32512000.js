import Immutable from 'immutable'
import React from 'react'
import { shallow } from 'enzyme'

import Gravatar from './Gravatar.d2798343.d2798343.jsx'
import UserMask from './UserMask.4c617afe.63b610f3.jsx'

describe('Component::UserMask', function () {
  let props
  beforeEach(function () {
    props = {
      user: Immutable.fromJS({
        username: 1,
        gravatar: '1234weqwq',
        title: 'the-title-1'
      })
    }
  })
  function renderDoc () {
    return shallow(<UserMask {...props} />)
  }

  it('renders userMask', function () {
    let doc = renderDoc()
    let image = doc.find(Gravatar)

    expect(image).to.exist
    expect(image).to.not.be.instanceOf(Gravatar)
    expect(image.length).to.equal(1)
  })
})
