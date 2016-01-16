import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Login extends Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      headline: {
        color: '#6b5054',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        margin: 48,
      }
    })
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          Faça seu login
        </Text>
      </View>
    )
  }
}
