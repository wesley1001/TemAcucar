import React, { Component, View, TouchableOpacity, Platform } from 'react-native'
import truncate from 'truncate'
import Colors from "../Colors"
import Icon from "./Icon"
import Sentence from "./Sentence"
import UserImage from "./UserImage"

export default class TransacionMiniature extends Component {
  handleView() {
    const { onView, transaction } = this.props
    onView(transaction)
  }

  render() {
    const { transaction, currentUser, index } = this.props
    const { user, last_message_text } = transaction
    return (
      <TouchableOpacity onPress={this.handleView.bind(this)} style={{
        backgroundColor: (user.id === currentUser.id ? Colors.pink : (index % 2 === 0 ? Colors.blue : Colors.darkBlue)),
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <UserImage size={32} source={{uri: user.image_url}} style={{marginRight: 10}} />
        <View style={{
          flexDirection: 'column',
          flex: 1,
        }}>
          <Sentence style={{
            fontFamily: 'BoosterNextFY-Bold',
            fontSize: 12,
            lineHeight: (Platform.OS === 'ios' ? 12 : 14),
            color: Colors.white,
          }}>
            { user.id === currentUser.id ? 'Conversa comigo' : `${user.first_name} ${user.last_name}` }
          </Sentence>
          <Sentence style={{
            fontSize: 12,
            lineHeight: (Platform.OS === 'ios' ? 12 : 16),
            color: Colors.white,
          }}>
            { truncate((last_message_text ? last_message_text : 'Escreva uma mensagem para ' + transaction.demand.user.first_name), 35) }
          </Sentence>
        </View>
        <Icon name="keyboard-arrow-right" style={{
          color: Colors.white,
        }} />
      </TouchableOpacity>
    )
  }
}