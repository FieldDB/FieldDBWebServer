import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router'
import Corpora from './Corpora.jsx'
import Immutable from 'immutable'

describe('Component::Corpora', function() {
  let props
  beforeEach(function() {
    props = {
      corpora: Immutable.fromJS([
        {
          dbname: 1,
          title: 'the-title-1'
        },
        {
          dbname: 2,
          title: 'the-title-2'
        }
      ])
    }
  })
  function renderDoc() {
    return shallow(<Corpora {...props} />)
  }

  it('renders corpora', function() {
    let doc = renderDoc()
    let corpusMaskComps = doc.find(Link)

    expect(corpusMaskComps.length).to.equal(props.corpora.size)
  })
})