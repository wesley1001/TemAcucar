import React from 'react-native'
import Colors from "../Colors"
import Tip from "./Tip"
import Sentence from "./Sentence"
import Button from "./Button"

export default FacebookTip = ({ onPress, loading, title }) => (
  <Tip>
    <Sentence style={{
      fontSize: 10,
      marginBottom: 10,
      textAlign: 'center',
      marginHorizontal: 40,
    }}>
      { title || 'Quer ter acesso a funcionalidades exclusivas?' }
    </Sentence>
    <Button
      onPress={onPress}
      isLoading={loading}
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
      Conecte sua conta do Facebook
    </Button>
  </Tip>
)
