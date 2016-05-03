import React, { Platform, Component } from 'react-native'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
// import codePush from "react-native-code-push"
import Config from 'react-native-config'

import * as VersionsActions from '../actions/VersionsActions'

import Loading from "../screens/Loading"
import NetworkError from "../screens/NetworkError"
import ExpiredVersion from "../screens/ExpiredVersion"
import UpdateVersion from "../screens/UpdateVersion"
import AuthContainer from './AuthContainer'

class VersionsContainer extends Component {
  daysRemaining(version) {
    return Math.round(((new Date(version.expiry)).getTime() - Date.now()) / 1000 / 60 / 60 / 24)
  }

  componentDidMount() {
    const { dispatch } = this.props
    if (!__DEV__)
      codePush.sync()
    dispatch(VersionsActions.list())
  }

  version() {
    const { list } = this.props.versions
    let returnVersion = null
    list.forEach(version => {
      if(version.number == Config.BUILD) {
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
    const url = (Platform.OS === 'ios' ? Config.APP_STORE_URL : Config.PLAY_STORE_URL)
    Communications.web(url)
  }

  handleIgnore() {
    const { dispatch } = this.props
    dispatch(VersionsActions.ignoreUpdate())
  }

  handleTryAgain() {
    const { dispatch } = this.props
    dispatch(VersionsActions.list())
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
    return (<AuthContainer />)
  }
}

export default connect(state => ({
  versions: state.versions,
}))(VersionsContainer)
