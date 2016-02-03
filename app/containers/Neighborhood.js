import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import Colors from "../styles/Colors"
import StyleSheets from "../styles/StyleSheets"
import Button from "../components/Button"
import TabBar from "../components/TabBar"
import Tab from "../components/Tab"
import Requests from "../components/Requests"

export default class Neighborhood extends Component {
  render() {
    return (
      <View style={StyleSheets.tabContainer}>
        <ScrollableTabView renderTabBar={() => <TabBar />}>
          <Tab tabLabel="paper-plane">
            <Requests {...this.props} />
          </Tab>
          <Tab tabLabel="fort-awesome">
            <Text>Vizinhos</Text>
          </Tab>
          <Tab tabLabel="comments">
            <Text>Chats</Text>
          </Tab>
          <Tab tabLabel="bell">
            <Text>Notificações</Text>
          </Tab>
          <Tab tabLabel="bars">
            <Text>Menu</Text>
          </Tab>
        </ScrollableTabView>
      </View>
    )
  }
}
