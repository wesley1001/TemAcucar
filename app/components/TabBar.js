import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Colors from "../styles/Colors"

export default class TabBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.selectedTabIcons = []
    this.unselectedTabIcons = []
  }

  renderTabOption(name, page) {
    const isActive = (this.props.activeTab === page)
    return (
      <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={styles.tab}>
        <Icon name={name} size={24} color={isActive ? Colors.pink : Colors.lightGray} />
      </TouchableOpacity>
    );
  }

  render() {
    var containerWidth = this.props.containerWidth
    var numberOfTabs = this.props.tabs.length
    var tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 2,
      backgroundColor: Colors.pink,
      bottom: 0,
    }

    var left = this.props.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0, containerWidth / numberOfTabs]
    })

    return (
      <View>
        <View style={styles.tabs}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
        <Animated.View style={[tabUnderlineStyle, {left}]} />
      </View>
    )
  }
}

TabBar.propTypes = {
  goToPage: React.PropTypes.func,
  activeTab: React.PropTypes.number,
  tabs: React.PropTypes.array,
}

var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabs: {
    backgroundColor: Colors.beige,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
})
