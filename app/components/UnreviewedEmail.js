import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native'
import { connect } from 'react-redux'
import { Router, Route, Schema, Actions } from 'react-native-router-flux'

import StyleSheets from "../styles/StyleSheets"
import ReviewEmail from "../components/ReviewEmail"
import UpdateEmail from "../components/UpdateEmail"

class UnreviewedEmail extends Component {
  render() {
    return (
      <Router 
        navigationBarStyle={StyleSheets.navBar}
        titleStyle={StyleSheets.navBarTitle}
        barButtonIconStyle={StyleSheets.navBarIcon}
        barButtonTextStyle={StyleSheets.navBarIconText}
      >
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Route {...this.props} name="reviewEmail" component={ReviewEmail} title="Confirme seu email" schema="default" initial={true} />
        <Route {...this.props} name="updateEmail" component={UpdateEmail} title="Atualize seu email" schema="default" />
      </Router>
    )
  }
}

export default connect(state => ({
  auth: state.auth,
}))(UnreviewedEmail)
