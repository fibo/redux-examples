import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit  } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class App extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount () {
    const { dispatch, selectedReddit } = this.props

    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  componentWillRecieveProps (nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedReddit))
    }
  }

  handleChange (nextReddit) {
    this.props.dispatch(selectedReddit(nextReddit))
  }

  // TODO continue
}
