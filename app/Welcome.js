import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
} from 'react-native'

import StyleSheets from "./StyleSheets"
import Login from "./Login"

export default class Welcome extends Component {
  handleLogin() {
    this.props.navigator.push({
      title: 'Login',
      component: Login,
    })
  }

  render() {
    return (
      <View style={StyleSheets.container}>
        <Image source={require('./img/logo.jpg')} />
        <Text style={StyleSheets.headline}>
          Compartilhe suas coisas com seus vizinhos
        </Text>
        <TouchableHighlight onPress={this.handleLogin.bind(this)}>
          <Text style={StyleSheets.button}>Faça seu login</Text>
        </TouchableHighlight>
        <Text style={[StyleSheets.text, StyleSheets.margin]}>ou</Text>
        <TouchableHighlight>
          <Text style={StyleSheets.button}>Crie sua conta</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
