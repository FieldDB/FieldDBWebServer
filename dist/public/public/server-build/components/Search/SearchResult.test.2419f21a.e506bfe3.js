import Immutable from 'immutable'
import React from 'react'
import { shallow } from 'enzyme'

import SearchResult from './SearchResult.55304529.f0b929cf.jsx'

describe('Component::SearchResult', function () {
  let props
  beforeEach(function () {
    props = {
      datalist: Immutable.fromJS({}),
      result: Immutable.fromJS({
        fields: [{
          id: 'morphemes',
          value: 'ar vitsi'
        }]
      })
    }
  })

  function renderDoc () {
    return shallow(<SearchResult {...props} />)
  }

  it('should render', function () {
    let doc = renderDoc()
    let element = doc.find('div')

    expect(element).to.exist
    expect(element.length).to.equal(5)
  })
})
