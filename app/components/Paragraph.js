import React, {
  Component,
  Text,
} from 'react-native'

import Colors from "../styles/Colors"

export default class Paragraph extends Component {
  render() {
    return (
      <Text style={{
        alignSelf: 'stretch',
        color: Colors.brown,
        fontSize: 16,
        marginBottom: 20,
      }}>
        {this.props.children}
      </Text>
    )
  }
}
