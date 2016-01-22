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

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"
import Button from "./Button"

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

  handleSignOut() {

  }

  renderMap() {
    const { latitude, longitude } = this.props.user
    const { delta } = this.state

    return (
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
          image: require('../img/icon.png'),
        }]}
      />
    )
  }

  render() {
    const { onSignOut } = this.props
    const { latitude, longitude } = this.props.user
    const { delta } = this.state

    return (
      <View style={StyleSheets.container}>
        <Text style={[StyleSheets.headline, StyleSheets.marginBottom]}>Minha vizinhança</Text>
        { latitude && longitude && this.renderMap() }
        <SliderIOS
          disabled={false}
          minimumValue={-0.1}
          maximumValue={-0.001}
          step={0.001}
          value={-delta}
          style={[StyleSheets.stretch, StyleSheets.marginBottom]}
          onValueChange={this.handleSlide.bind(this)}
        />
        <Button onPress={onSignOut}>
          Logout
        </Button>
      </View>
    )
  }
}
