import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Gravatar from './Gravatar.jsx'

class UserMask extends Component {
  render () {
    const userMask = this.props.user

    if (!userMask.get('gravatar')) {
      return (
        <div className={this.props.className} />
      )
    }

    return (
      <div className={this.props.className}>
        <p className='text-center'>
          <Gravatar link={this.props.link} gravatar={userMask.get('gravatar')} />
        </p>
        <div>
          <h1>{userMask.get('name')}</h1>
          <p>{userMask.get('username')}</p>
        </div>
        <div className='well well-small'>
          <dl>
            <dt><i className='icon-folder-open' />  Interests:</dt>
            <dd>{userMask.get('researchInterest')}</dd>
            <dt><i className='icon-user' />  Affiliation:</dt>
            <dd>{userMask.get('affiliation')}</dd>
            <dt><i className='icon-comment' />  Description:</dt>
            <dd>{userMask.get('description')}</dd>
          </dl>
        </div>
      </div>
    )
  }
}

UserMask.propTypes = {
  className: PropTypes.string.isRequired,
  link: PropTypes.string,
  user: PropTypes.object.isRequired
}

export default UserMask
