import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default class SimpleTypingText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      index: 0,
      displayText: ''
    }

    this.typing = false
    this.getRawLetters = this.getRawLetters.bind(this)
    this.type = this.type.bind(this)

    this.beginTyping = this.beginTyping.bind(this)
  }

  componentDidMount() {
    this.beginTyping()
  }

  componentDidUpdate() {
    if (this.typing === false) {
      this.beginTyping()
    }
    if (this.props.text === this.state.displayText) {
      this.typing = false
    }
  }

  componentWillUnmount() {
    this._timeout && clearTimeout(this._timeout)
  }

  beginTyping() {
    this.typing = true
    this._timeout = setTimeout(() => {
      this.type()
    }, this.props.typingDelay)
  }

  getRawLetters() {
    const { text } = this.props
    return typeof text === 'string' ? [text] : [...text]
  }

  type() {
    let { index, displayText } = this.state
    let text = this.getRawLetters()[index]
    if (text.length !== displayText.length) {
      displayText = text.substr(0, displayText.length + 1)
      this.setState({ displayText }, () => {
        this._timeout = setTimeout(() => {
          this.type()
        }, this.props.speed)
      })
    }
  }

  render() {
    const {
      speed,
      typingDelay,
      staticText,
      text,
      className,
      ...otherProps
    } = this.props
    const { displayText } = this.state
    const classes = cx(className, 'ps_typing')
    return (
      <span {...otherProps} className={classes}>
        {staticText ? (
          <span className='ps_typing_static_text'>{staticText}&nbsp;</span>
        ) : null}

        <span className='ps_typing_text'>{displayText}</span>
      </span>
    )
  }
}

SimpleTypingText.defaultProps = {
  speed: 100,
  typingDelay: 500
}

SimpleTypingText.propTypes = {
  speed: PropTypes.number.isRequired,
  typingDelay: PropTypes.number.isRequired,

  staticText: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  className: PropTypes.string
}
