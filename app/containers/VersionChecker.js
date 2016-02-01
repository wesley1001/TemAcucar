import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import Package from '../../package.json'
import { versionsList, versionsIgnoreUpdate } from '../actions/VersionsActions'

import Loading from "../components/Loading"
import NetworkError from "../components/NetworkError"
import ExpiredVersion from "../components/ExpiredVersion"
import UpdateVersion from "../components/UpdateVersion"
import Authorizer from './Authorizer'

class VersionChecker extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(versionsList())
  }

  version() {
    const { list } = this.props.versions
    let returnVersion = null
    list.forEach(version => {
      if(version.number == Package.version) {
        returnVersion = version
      }
    })
    return returnVersion
  }

  isExpired() {
    const version = this.version()
    return !(version && (new Date(version.expiry)).getTime() > Date.now())
  }

  isCurrent() {
    const version = this.version()
    const { list } = this.props.versions
    return (version && version == list[0])
  }

  handleIgnoreUpdate() {
    const { dispatch } = this.props
    dispatch(versionsIgnoreUpdate())
  }

  handleTryAgain() {
    const { dispatch } = this.props
    dispatch(versionsList())
  }

  render() {
    const { dispatch, versions } = this.props
    const { startingUp, listing, listError, ignoreUpdate } = versions

    if (startingUp || listing)
      return (<Loading />)
    if (listError)
      return (<NetworkError error={listError} onTryAgain={this.handleTryAgain.bind(this)} />)
    if (this.isExpired())
      return (<ExpiredVersion />)
    if (!this.isCurrent() && !ignoreUpdate)
      return (<UpdateVersion version={this.version()} onIgnore={this.handleIgnoreUpdate.bind(this)} />)
    return (<Authorizer />)
  }
}

export default connect(state => ({
  versions: state.versions,
}))(VersionChecker)
