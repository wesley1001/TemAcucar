import React, {
  Component,
  StyleSheet,
  Text,
} from 'react-native'
import GiftedSpinner from 'react-native-gifted-spinner'

import StyleSheets from "../styles/StyleSheets"
import SimplePage from "./SimplePage"

export default class Loading extends Component {
  render() {
    return (
      <SimplePage>
        <GiftedSpinner style={StyleSheets.bigMarginVertical} />
      </SimplePage>
    )
  }
}
