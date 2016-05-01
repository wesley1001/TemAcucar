import React from 'react-native'
import Colors from "../Colors"
import Tip from "./Tip"
import Sentence from "./Sentence"
import Button from "./Button"

export default ShareTip = ({ title, onPress }) => (
  <Tip>
    <Sentence style={{
      fontSize: 10,
      marginBottom: 10,
      textAlign: 'center',
      marginHorizontal: 40,
    }}>
      { title || 'Quer compartilhar cada vez mais?' }
    </Sentence>
    <Button
      onPress={onPress}
      style={{
        paddingVertical: 0,
        height: 30,
        width: 220,
        backgroundColor: Colors.facebook,
        borderColor: Colors.darkFacebook,
      }}
      textStyle={{
        fontSize: 12,
        lineHeight: 16,
      }}
    >
      Compartilhe no Facebook
    </Button>
  </Tip>
)
