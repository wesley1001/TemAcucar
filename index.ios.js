/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

class TemAcucar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./img/logo.jpg')} />
        <Text style={styles.headline}>
          Compartilhe suas coisas com seus vizinhos
        </Text>
      </View>
    );
  }
}

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
});

AppRegistry.registerComponent('TemAcucar', () => TemAcucar);
