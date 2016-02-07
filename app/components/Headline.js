import React, {
  Component,
  Text,
} from 'react-native'

import Colors from "../styles/Colors"

export default class Headline extends Component {
  render() {
    return (
      <Text style={{
        color: Colors.brown,
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        paddingHorizontal: 40,
        marginBottom: 36,
      }}>
        {this.props.children}
      </Text>
    )
  }
}
