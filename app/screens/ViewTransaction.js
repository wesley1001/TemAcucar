import React, { Component, View, ScrollView, Platform, NativeModules, TouchableOpacity, TextInput } from 'react-native'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'
import truncate from 'truncate'
const RCTUIManager = NativeModules.UIManager

import Colors from "../Colors"
import MessageValidators from '../validators/MessageValidators'
import NavBar from "../components/NavBar"
import Icon from "../components/Icon"
import Sentence from "../components/Sentence"
import UserImage from "../components/UserImage"
import MessagesContainer from "../containers/MessagesContainer"

const validators = {
  text: MessageValidators.text,
}

class ViewTransaction extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { inputFocused: false }
    this.shouldSubmit = false
  }

  componentDidMount() {
    const { initializeForm, transaction } = this.props
    initializeForm({transaction_id: transaction.id})
  }

  componentDidUpdate() {
    if (this.shouldSubmit) {
      // This is a hack to only submit after blur, so we can scroll to bottom correctly
      this.shouldSubmit = false
      const { handleSubmit, onCreateMessage, resetForm } = this.props
      handleSubmit(onCreateMessage)()
      resetForm()
    }
  }

  handleFocus() {
    this.setState({ inputFocused: true })
  }

  handleBlur() {
    this.setState({ inputFocused: false })
  }

  handleSize() {
    if (!this.state.inputFocused)
    this.scrollToBottom()
  }

  handleCreate() {
    this.refs.input.blur()
    this.shouldSubmit = true
  }

  newReviewFunction(rating) {
    return (() => { this.handleNewReview(rating.toString()) }).bind(this)
  }

  handleNewReview(rating) {
    const { onNewReview, transaction } = this.props
    onNewReview(transaction, rating)
  }

  scrollToBottom() {
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
    const { transaction, auth, fields: { text } } = this.props
    const { currentUser } = auth
    const { demand, can_review_ids } = transaction
    const canReview = can_review_ids.indexOf(currentUser.id) > -1
    const user = (transaction.user.id === currentUser.id ? transaction.demand.user : transaction.user)
    const { inputFocused } = this.state
    const blurredHeight = 44
    const focusedHeight = (Platform.OS === 'ios' ? 336 : 400)
    const focusedInputHeight = 88
    return (
      <View style={{
        flex: 1,
        paddingBottom: (inputFocused ? focusedHeight : blurredHeight),
      }}>
        <NavBar>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Sentence style={{
              fontFamily: 'BoosterNextFY-Black',
              fontSize: 12,
              lineHeight: (Platform.OS === 'ios' ? 12 : 16),
              color: Colors.white,
            }}>
              {user.first_name} {user.last_name}
            </Sentence>
            <Sentence style={{
              fontSize: 10,
              lineHeight: (Platform.OS === 'ios' ? 10 : 14),
              color: Colors.white,
              marginBottom: 2,
            }}>
              {truncate(demand.name, 40)}
            </Sentence>
          </View>
          <UserImage size={28} source={{uri: user.image_url}} style={{
            position: 'absolute',
            top: (Platform.OS === 'ios' ? 4 : 7),
            right: 12,
          }} />
        </NavBar>
        { canReview && <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          backgroundColor: Colors.mediumLightBeige,
        }}>
          <Sentence style={{
            fontFamily: 'OpenSans-Bold',
            fontSize: 12,
            lineHeight: (Platform.OS === 'ios' ? 16 : 16),
            marginRight: 6,
          }}>
            Avaliar { user.first_name }
          </Sentence>
          { [1, 2, 3, 4, 5].map((index) => (
            <TouchableOpacity key={index} onPress={this.newReviewFunction(index)}>
              <Icon name="star-border" style={{ color: Colors.darkYellow }} />
            </TouchableOpacity>
          )) }
        </View> }
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
          height: (inputFocused ? focusedHeight : blurredHeight),
          flexDirection: 'row',
        }}>
          <TextInput
            ref='input'
            multiline={true}
            placeholder="Escreva sua mensagem"
            style={{
              flex: 10,
              fontSize: 12, 
              height: (inputFocused ? focusedInputHeight : blurredHeight),
              padding: 10,
              color: Colors.brown,
              backgroundColor: Colors.beige,
            }}
            {...text}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
          />
          <TouchableOpacity onPress={this.handleCreate.bind(this)} style={{
            flex: 1,
            padding: 10,
          }}>
            <Icon name="send" style={{
              fontSize: 24,
            }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

ViewTransaction = reduxForm({
  form: 'newMessage',
  fields: ['transaction_id','text'],
  validate: validateFunction(validators),
})(ViewTransaction)

export default ViewTransaction
