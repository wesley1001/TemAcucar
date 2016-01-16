import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import Login from "./Login"

export default class Welcome extends Component {
  handlePress() {
    console.log(this)
    this.props.navigator.push({
      title: 'Faça seu login',
      component: Login
    })
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      },
      headline: {
        color: '#6b5054',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        margin: 48
      },
      text: {
        color: '#6b5054',
        margin: 10
      },
      button: {
        padding: 10,
        color: '#fff',
        backgroundColor: '#ec6f7b'
      }
    })
    return (
      <View style={styles.container}>
        <Image source={require('./img/logo.jpg')} />
        <Text style={styles.headline}>
          Compartilhe suas coisas com seus vizinhos
        </Text>
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text style={styles.button}>Faça seu login</Text>
        </TouchableHighlight>
        <Text style={styles.text}>ou</Text>
        <TouchableHighlight>
          <Text style={styles.button}>Crie sua conta</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
