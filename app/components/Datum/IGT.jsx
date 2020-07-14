import React, { Component } from 'react'
import PropTypes from 'prop-types'

function isEmpty (value) {
  return value
}

class IGT extends Component {
  render () {
    const fields = this.props.fields
    // console.log('igt is ', this.props.igt)
    const igt = fields.map((field) => {
      return (
        this.props.igt[field.id]
      )
    }).filter(isEmpty).join(' <br/>')
    return (
      <span className='glossCouplet' dangerouslySetInnerHTML={{
        __html: igt
      }} />
    )
  }
}

IGT.propTypes = {
  fields: PropTypes.object.isRequired,
  igt: PropTypes.object.isRequired
}

export default IGT
