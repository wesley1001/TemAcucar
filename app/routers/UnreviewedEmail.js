import React, {
  Component,
  Navigator,
} from 'react-native'
import { connect } from 'react-redux'
import { Route, Schema, Actions } from 'react-native-router-flux'

import StyleSheets from "../styles/StyleSheets"
import StyledRouter from "../components/StyledRouter"
import ReviewEmail from "../screens/ReviewEmail"
import UpdateEmail from "../screens/UpdateEmail"

class UnreviewedEmail extends Component {
  render() {
    return (
      <StyledRouter>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Route {...this.props} name="reviewEmail" component={ReviewEmail} title="Confirme seu email" schema="default" initial={true} hideNavBar={true} />
        <Route {...this.props} name="updateEmail" component={UpdateEmail} title="Atualize seu email" schema="default" />
      </StyledRouter>
    )
  }
}

export default connect(state => ({
  auth: state.auth,
}))(UnreviewedEmail)
