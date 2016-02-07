import React, {
  Component,
  ScrollView,
} from 'react-native'

import StyleSheets from "../styles/StyleSheets"

export default class Tab extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {this.props.children}
      </ScrollView>
    )
  }
}
