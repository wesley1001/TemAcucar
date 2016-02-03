import React, {
  Component,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"

export default class TopBar extends Component {
  render() {
    const { onMenuOpen } = this.props
    return (
      <View style={{
        marginTop: 20,
        height: 35,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
      }}>
        <View style={{
          flex: 0.95, 
          flexDirection: 'row', 
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Image source={require('../img/icon.png')} style={{marginRight: 10}} />
          <Text style={StyleSheets.label}>Tem Açúcar</Text>
        </View>
        <TouchableOpacity onPress={onMenuOpen} style={{
          flex: 0.05,
        }}>
          <Icon name="bars" style={{
            color: Colors.gray,
          }} />
        </TouchableOpacity>
      </View>
    )
  }
}
