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
    const { transaction, currentUser } = this.props
    const { user, last_message_text } = transaction
    return (
      <TouchableOpacity onPress={this.handleView.bind(this)} style={{
        borderColor: Colors.beige,
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <UserImage size={24} source={{uri: user.image_url}} style={{marginRight: 6}} />
        <View style={{
          flexDirection: 'column',
          flex: 1,
        }}>
          <Sentence style={{
            fontFamily: 'BoosterNextFY-Black',
            fontSize: 12,
            lineHeight: (Platform.OS === 'ios' ? 12 : 14),
            color: Colors.pink,
          }}>
            { user.id === currentUser.id ? 'Conversa comigo' : `${user.first_name} ${user.last_name}` }
          </Sentence>
          <Sentence style={{
            fontSize: 12,
            lineHeight: (Platform.OS === 'ios' ? 12 : 16),
            color: Colors.ice,
          }}>
            { truncate((last_message_text ? last_message_text : 'Escreva uma mensagem para ' + transaction.demand.user.first_name), 35) }
          </Sentence>
        </View>
        <Icon name="keyboard-arrow-right" />
      </TouchableOpacity>
    )
  }
}