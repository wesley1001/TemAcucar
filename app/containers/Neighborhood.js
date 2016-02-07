import React, {
  Component,
  StyleSheet,
  Text,
  View,
  PanResponder,
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
  constructor(props, context) {
    super(props, context)
    this.state = {
      drawerOpen: false,
    }
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {
        return this.state.drawerOpen
      },
      onPanResponderRelease: () => {
        this.drawer.closeDrawer()
      },
    })
  }

  handleDrawerOpen() {
    this.setState({drawerOpen: true})
  }

  handleDrawerClose() {
    this.setState({drawerOpen: false})
  }

  handleMenuOpen() {
    this.drawer.openDrawer()
  }

  handleMenuClose() {
    this.drawer.closeDrawer()
  }

  render() {
    const { drawerOpen } = this.state
    const userMenu = (<UserMenu {...this.props} onClose={this.handleMenuClose.bind(this)} />)
    return (
      <DrawerLayout
        drawerWidth={180}
        ref={(drawer) => { return this.drawer = drawer  }}
        keyboardDismissMode="on-drag"
        drawerPosition="right"
        renderNavigationView={() => userMenu}
        onDrawerOpen={this.handleDrawerOpen.bind(this)}
        onDrawerClose={this.handleDrawerClose.bind(this)}
      >
        <View {...this.panResponder.panHandlers} style={{flex: 1, alignSelf: 'stretch'}} >
          <TopBar onMenuOpen={this.handleMenuOpen.bind(this)} />
          <View style={{ flex: 1 }}>
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
        </View>
      </DrawerLayout>
    )
  }
}
