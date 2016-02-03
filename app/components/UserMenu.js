import React, {
  Component,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"

export default class UserMenu extends Component {
  render() {
    const { onSignOut } = this.props
    return (
      <View style={StyleSheets.menu}>
        <TouchableOpacity style={StyleSheets.stretch} onPress={onSignOut}>
          <Text style={StyleSheets.menuItem}>
            <Icon name="sign-out" />
            { ' Sair' }
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
