import React, { Component, View } from 'react-native'
import HtmlRender from 'react-native-html-render'

import Colors from "../Colors"
import Sentence from "./Sentence"

export default class HtmlSentence extends Component {
  renderNode(node) {
    const { name, children } = node
    let text
    let style = {}
    if (name === 'text') {
      text = node.text
    } else if (name === 'b') {
      text = children[0].text
      style = { fontFamily: 'OpenSans-Bold' }
    } else if (name === 'i') {
      text = children[0].text
      style = { fontFamily: 'OpenSans-Italic' }
    }
    return (
      <Sentence {...this.props} style={[style, this.props.style]}>
        { text }
      </Sentence>
    )
  }

  render() {
    const { children } = this.props
    return (
      <Sentence {...this.props} >
        <HtmlRender
          value={children}
          renderNode={this.renderNode.bind(this)}
        />
      </Sentence>
    )
  }
}
