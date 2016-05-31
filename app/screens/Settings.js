import React, { Component, View, Switch } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import Colors from "../Colors"
import NavBar from "../components/NavBar"
import Sentence from "../components/Sentence"

export default class Settings extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('Settings')
  }

  handleEmailNotificationsChange(value) {
    const { onUpdateEmailNotifications } = this.props
    onUpdateEmailNotifications(value)
  }

  handleAppNotificationsChange(value) {
    const { onUpdateAppNotifications } = this.props
    onUpdateAppNotifications(value)
  }

  render() {
    const { auth: { currentUser } } = this.props
    return (
      <View style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
        <NavBar title="Configurações" />
        <View style={{
          flex: 1,
          alignItems: 'center',
        }}>
          <Sentence style={{marginTop: 30, marginBottom: 4}}>Receber notificações por email</Sentence>
          <Switch
            value={currentUser.email_notifications}
            onValueChange={this.handleEmailNotificationsChange.bind(this)}
          />
          <Sentence style={{marginTop: 30, marginBottom: 4}}>Receber notificações no celular</Sentence>
          <Switch
            value={currentUser.app_notifications}
            onValueChange={this.handleAppNotificationsChange.bind(this)}
          />
        </View>
      </View>
    )
  }
}
