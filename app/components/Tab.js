import React, {
  Component,
  ScrollView,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"

export default class Tab extends Component {
  render() {
    return (
      <ScrollView style={StyleSheets.tab}>
        {this.props.children}
      </ScrollView>
    )
  }
}
