import React, {
  Component,
} from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'

import StyleSheets from "../styles/StyleSheets"
import SimpleScreen from "./SimpleScreen"

export default class Loading extends Component {
  render() {
    return (
      <SimpleScreen>
        <GiftedSpinner style={{ marginVertical: 36 }} />
      </SimpleScreen>
    )
  }
}
