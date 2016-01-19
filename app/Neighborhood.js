import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  MapView,
  SliderIOS,
} from 'react-native'

import Colors from "./Colors"
import StyleSheets from "./StyleSheets"

export default class Neighborhood extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      delta: 0.02,
    }
  }

  handleSlide(value) {
    this.setState({delta: -value})
  }

  render() {
    const { latitude, longitude } = this.props.user
    const { delta } = this.state
    return (
      <View style={StyleSheets.container}>
        <Text style={[StyleSheets.headline, StyleSheets.marginBottom]}>Minha vizinhança</Text>
        <MapView
          scrollEnabled={false}
          zoomEnabled={false}
          style={[StyleSheets.map, StyleSheets.marginBottom]}
          region={{
            latitude: parseFloat(latitude), 
            longitude: parseFloat(longitude),
            latitudeDelta: parseFloat(delta),
            longitudeDelta: parseFloat(delta),
          }}
          annotations={[{
            latitude: latitude,
            longitude: longitude,
            image: require('./img/icon.png'),
          }]}
        />
        <SliderIOS
          disabled={false}
          minimumValue={-0.1}
          maximumValue={-0.001}
          step={0.001}
          value={-delta}
          style={StyleSheets.stretch}
          onValueChange={this.handleSlide.bind(this)}
        />
      </View>
    )
  }
}