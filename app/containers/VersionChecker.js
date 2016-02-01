import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import Package from '../../package.json'
import { versionsList, versionsIgnoreUpdate } from '../actions/VersionsActions'

import Loading from "../components/Loading"
import ExpiredVersion from "../components/ExpiredVersion"
import UpdateVersion from "../components/UpdateVersion"
import TemAcucar from './TemAcucar'

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

  render() {
    const { dispatch, versions } = this.props
    const { startingUp, listing, ignoreUpdate } = versions

    if (startingUp || listing)
      return (<Loading />)
    if (this.isExpired())
      return (<ExpiredVersion />)
    if (!this.isCurrent() && !ignoreUpdate)
      return (<UpdateVersion version={this.version()} onIgnore={this.handleIgnoreUpdate.bind(this)} />)
    return (<TemAcucar />)
  }
}

export default connect(state => ({
  versions: state.versions,
}))(VersionChecker)
