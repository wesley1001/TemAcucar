import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import Package from '../../package.json'
import codePush from "react-native-code-push"

import Config from "../Config"
import { versionsList, versionsIgnoreUpdate } from '../actions/VersionsActions'

import Loading from "../screens/Loading"
import NetworkError from "../screens/NetworkError"
import ExpiredVersion from "../screens/ExpiredVersion"
import UpdateVersion from "../screens/UpdateVersion"
import Authorizer from './Authorizer'

class VersionChecker extends Component {
  daysRemaining(version) {
    return Math.round(((new Date(version.expiry)).getTime() - Date.now()) / 1000 / 60 / 60 / 24)
  }

  componentDidMount() {
    const { dispatch } = this.props
    codePush.sync()
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

  handleUpdate() {
    Communications.web(Config.appStoreUrl)
  }

  handleIgnore() {
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
    const version = this.version()

    if (startingUp || listing)
      return (<Loading />)
    if (listError)
      return (<NetworkError error={listError} onTryAgain={this.handleTryAgain.bind(this)} />)
    if (this.isExpired())
      return (<ExpiredVersion onUpdate={this.handleUpdate.bind(this)} />)
    if (!this.isCurrent() && !ignoreUpdate)
      return (<UpdateVersion version={version} onIgnore={this.handleIgnore.bind(this)} onUpdate={this.handleUpdate.bind(this)} daysRemaining={this.daysRemaining(version)} />)
    return (<Authorizer />)
  }
}

export default connect(state => ({
  versions: state.versions,
}))(VersionChecker)
