import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import StyleSheets from "../styles/StyleSheets"
import TopBar from "../components/TopBar"
import TabBar from "../components/TabBar"
import Tab from "../components/Tab"
import Requests from "../components/Requests"

export default class Neighborhood extends Component {
  render() {
    return (
      <View>
        <TopBar />
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
          </ScrollableTabView>
        </View>
      </View>
    )
  }
}
