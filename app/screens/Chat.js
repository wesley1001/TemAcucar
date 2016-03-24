import React, { Component, View, ScrollView, Platform, NativeModules, TouchableOpacity } from 'react-native'
import truncate from 'truncate'
const RCTUIManager = NativeModules.UIManager

import Colors from "../Colors"
import Icon from "../components/Icon"
import Sentence from "../components/Sentence"
import MessagesContainer from "../containers/MessagesContainer"

export default class Chat extends Component {
  handleSize() {
    if (this.scrollInnerHeight)
      return
    RCTUIManager.measure(React.findNodeHandle(this.refs.scrollView), (left, top, width, height) => {
      this.scrollHeight = height
      RCTUIManager.measure(this.refs.scrollView.getInnerViewNode(), (left, top, width, height) => {
        if (height <= this.scrollHeight)
          return
        this.scrollInnerHeight = height
        const scrollTo = this.scrollInnerHeight - this.scrollHeight + 10
        this.refs.scrollView.scrollTo({y: scrollTo})
      })
    })
  }

  render() {
    const { onBack, transaction, auth } = this.props
    const { currentUser } = auth
    const { demand } = transaction
    const user = (transaction.user.id === currentUser.id ? transaction.demand.user : transaction.user)
    return (
      <View style={{
        flex: 1,
        paddingBottom: 40,
      }}>
        <View style={{
          backgroundColor: Colors.blue,
        }}>
          <View style={{
            marginTop: (Platform.OS == 'ios' ? 20 : 0),
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            paddingBottom: 6,
          }}>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Sentence style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 10,
                color: Colors.white,
              }}>
                {user.first_name} {user.last_name}
              </Sentence>
              <Sentence style={{
                fontSize: 10,
                color: Colors.white,
              }}>
                {truncate(demand.name, 40)}
              </Sentence>
            </View>
            <TouchableOpacity onPress={onBack} style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}>
              <Icon name="keyboard-arrow-left" style={{
                color: Colors.white,
                fontSize: 24,
              }} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView ref='scrollView' onContentSizeChange={this.handleSize.bind(this)} style={{
          flex: 1,
          padding: 10,
        }}>
          <MessagesContainer {...this.props} />
        </ScrollView>
        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: Colors.beige,
          height: 35,
        }}>

        </View>
      </View>
    )
  }
}
