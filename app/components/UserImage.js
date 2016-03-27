import React, { Image } from 'react-native'

export default UserImage = (props) => (
  <Image {...props} style={[{
    width: (props.size || 36),
    height: (props.size ||36),
    borderRadius: (props.size / 2 || 18),
  }, props.style]} />
)
