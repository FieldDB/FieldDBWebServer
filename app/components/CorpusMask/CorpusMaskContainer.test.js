import React from 'react'
import Immutable from 'immutable'
import { CorpusMaskContainer } from './index.jsx'
import { mount } from 'enzyme'
import { browserHistory } from 'react-router'

describe('Container::CorpusMask', function() {
  let props

  function renderDoc() {
    return mount(<CorpusMaskContainer {...props} />)
  }
  beforeEach(function() {
    props = {
      loadCorpusMaskDetail: sinon.stub(),
      params: {
        dbname: 222
      },
      corpusMask: Immutable.fromJS({
        dbname: 222,
        title: 'the-corpusMask-title',
        team: {
          id: 1234,
          name: 'jack'
        }
      })
    }
  })

  it('fetches corpusMask details on mounted', function() {
    let doc = renderDoc()
    expect(props.loadCorpusMaskDetail).to.have.been.calledWith({
      teamname: undefined,
      dbname: props.params.dbname,
      history: browserHistory
    })

    // console.log('doc', doc)
    expect(doc).to.have.keys(['component', 'root', 'node', 'nodes', 'length', 'options', 'complexSelector'])
  })
})