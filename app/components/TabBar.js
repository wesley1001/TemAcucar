import React, {
  Component,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from "../Colors"

export default class TabBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.selectedTabIcons = []
    this.unselectedTabIcons = []
  }

  renderTabOption(name, page) {
    const isActive = (this.props.activeTab === page)
    return (
      <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: (isActive ? Colors.darkBlue : Colors.blue),
      }}>
        <Icon name={name} size={36} color={isActive ? Colors.white : Colors.darkBlue} />
        { page === 3 && 
          <View style={{
            position: 'absolute',
            right: 26,
            top: 8,
            height: 18,
            width: 18,
            backgroundColor: Colors.pink,
            borderWidth: 1,
            borderColor: Colors.pink,
            borderRadius: 9,
          }}>
            <Text style={{
              backgroundColor: 'transparent',
              color: Colors.white,
              fontFamily: 'Montserrat-Bold',
              textAlign: 'center',
              fontSize: 12,
            }}>
              3
            </Text>
          </View>
        }
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View elevation={3} style={{
        backgroundColor: Colors.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0,
        },
        overflow: 'visible',
        transform: [{'translate': [0,0,1]}],
      }}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    )
  }
}

TabBar.propTypes = {
  goToPage: React.PropTypes.func,
  activeTab: React.PropTypes.number,
  tabs: React.PropTypes.array,
}
