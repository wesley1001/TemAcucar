import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import DrawerLayout from 'react-native-drawer-layout'

import StyleSheets from "../styles/StyleSheets"
import TopBar from "../components/TopBar"
import UserMenu from "../components/UserMenu"
import TabBar from "../components/TabBar"
import Tab from "../components/Tab"
import Requests from "../components/Requests"

export default class Neighborhood extends Component {
  handleMenuOpen() {
    this.drawer.openDrawer()
  }

  handleMenuClose() {
    this.drawer.closeDrawer()
  }

  render() {
    const userMenu = (<UserMenu {...this.props} onClose={this.handleMenuClose.bind(this)} />)
    return (
      <DrawerLayout
        drawerWidth={180}
        ref={(drawer) => { return this.drawer = drawer  }}
        keyboardDismissMode="on-drag"
        drawerPosition="right"
        renderNavigationView={() => userMenu}
      >
        <TopBar onMenuOpen={this.handleMenuOpen.bind(this)} />
        <TouchableWithoutFeedback onPress={this.handleMenuClose.bind(this)}>
          <View style={StyleSheets.tabContainer}>
            <ScrollableTabView
              locked={true}
              renderTabBar={() => <TabBar />}
            >
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
        </TouchableWithoutFeedback>
      </DrawerLayout>
    )
  }
}
