import React, { Image } from 'react-native'

export default UserImage = (props) => (
  <Image {...props} style={[{
    width: 36,
    height: 36,
    borderRadius: 18,
  }, props.style]} />
)
