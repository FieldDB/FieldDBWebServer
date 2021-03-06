import React, { Component } from 'react'
import PropTypes from 'prop-types'

const audioExtensions = [
  '.3gp',
  '.aa',
  '.aac',
  '.aax',
  '.act',
  '.aiff',
  '.amr',
  '.ape',
  '.au',
  '.awb',
  '.dct',
  '.dss',
  '.dvf',
  '.flac',
  '.gsm',
  '.iklax',
  '.ivs',
  '.m4a',
  '.m4b',
  '.m4p',
  '.mmf',
  '.mp3',
  '.mpc',
  '.msv',
  '.opus',
  '.raw',
  '.sln',
  '.tta',
  '.vox',
  '.wav',
  '.wma',
  '.wv',
  '.ogg',
  '.oga',
  '.mogg',
  '.ra',
  '.rm',
  '.webm'
]

const imageExtensions = [
  '.jpeg',
  '.jpg',
  '.gif',
  '.png',
  '.apng',
  '.svg',
  '.bmp',
  '.ico'
]

class Media extends Component {
  render () {
    const media = this.props.media
    if (!media || !media.filename || !this.props.corpus) {
      // console.warn('Unable to render media, filename or corpus was missing', media, this.props.corpus)
      return (
        <span />
      )
    }

    const fileIdentifier = media.filename.substring(0, media.filename.lastIndexOf('.'))
    const extension = media.filename.replace(fileIdentifier, '')
    const url = this.props.corpus.getIn(['speech', 'url']) + '/' + this.props.corpus.get('dbname') + '/' + fileIdentifier + '/' + media.filename

    if ((media.type && media.type.includes('audio')) || audioExtensions.indexOf(extension) > -1) {
      return (
        <audio title={media.description} controls src={url} />
      )
    } else if ((media.type && media.type.includes('image')) || imageExtensions.indexOf(extension) > -1) {
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a target='_blank' href={url}>
          <img title={media.description} src={url} />
        </a>
      )
    } else {
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a target='_blank' title={'Open ' + media.filename + ' in a new tab'} href={url}>{media.filename}</a>
      )
    }
  }
}

Media.propTypes = {
  corpus: PropTypes.object.isRequired,
  media: PropTypes.object.isRequired
}

export default Media
