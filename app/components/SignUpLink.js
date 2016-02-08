import React from 'react-native'
import { Actions } from 'react-native-router-flux'
import Link from "./Link"

export default SignUpLink = (props) => (
  <Link onPress={Actions.signUp}>
    Não possui cadastro?
  </Link>
)
