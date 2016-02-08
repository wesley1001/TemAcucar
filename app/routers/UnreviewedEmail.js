import React, {
  Component,
  Navigator,
} from 'react-native'
import { Route, Schema, Actions } from 'react-native-router-flux'

import StyledRouter from "../components/StyledRouter"
import ReviewEmail from "../screens/ReviewEmail"
import UpdateEmail from "../screens/UpdateEmail"

export default UnreviewedEmail = (props) => (
  <StyledRouter>
    <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
    <Route {...props} name="reviewEmail" component={ReviewEmail} title="Confirme seu email" schema="default" initial={true} hideNavBar={true} />
    <Route {...props} name="updateEmail" component={UpdateEmail} title="Atualize seu email" schema="default" />
  </StyledRouter>
)
