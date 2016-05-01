import React, { Component, Platform, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Colors from "../Colors"
import Icon from "./Icon"
import Sentence from "./Sentence"

export default class NavBar extends Component {
  handleBack() {
    Actions.pop()
  }

  render() {
    const { children, title } = this.props
    return (
      <View style={{
        backgroundColor: Colors.blue,
      }}>
        <View style={{
          marginTop: (Platform.OS == 'ios' ? 20 : 0),
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          paddingVertical: 6,
        }}>
          { children }
          { !children &&
            <Sentence style={{
              fontFamily: 'BoosterNextFY-Black',
              fontSize: 12,
              lineHeight: (Platform.OS === 'ios' ? 12 : 16),
              color: Colors.white,
              marginTop: 8,
              marginBottom: 6,
            }}>
              {title || ' ' }
            </Sentence>
          }
          <TouchableOpacity onPress={this.handleBack.bind(this)} style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}>
            <Icon name="keyboard-arrow-left" style={{
              color: Colors.yellow,
              fontSize: 32,
              marginTop: (Platform.OS === 'ios' ? 3 : 5),
              marginHorizontal: 12,
            }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
