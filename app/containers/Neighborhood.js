import React, { Component, Dimensions, Text, View, PanResponder } from 'react-native'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import DrawerLayout from 'react-native-drawer-layout'

import { openDrawer, closeDrawer } from '../actions/NeighborhoodActions'

import TopBar from "../components/TopBar"
import UserMenu from "../components/UserMenu"
import TabBar from "../components/TabBar"
import Tab from "../components/Tab"
import Requests from "../screens/Requests"

class Neighborhood extends Component {
  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {
        return this.props.neighborhood.drawerOpen
      },
      onPanResponderRelease: () => {
        this.drawer.closeDrawer()
      },
    })
  }

  handleDrawerOpen() {
    const { dispatch } = this.props
    dispatch(openDrawer())
  }

  handleDrawerClose() {
    const { dispatch } = this.props
    dispatch(closeDrawer())
  }

  handleMenuOpen() {
    this.drawer.openDrawer()
  }

  handleMenuClose() {
    this.drawer.closeDrawer()
  }

  render() {
    const { drawerOpen } = this.props.neighborhood
    const userMenu = (<UserMenu {...this.props} onClose={this.handleMenuClose.bind(this)} />)
    return (
      <DrawerLayout
        drawerWidth={Dimensions.get('window').width * 0.9}
        ref={(drawer) => { return this.drawer = drawer  }}
        keyboardDismissMode="on-drag"
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
              <Tab tabLabel="home">
                <Requests {...this.props} />
              </Tab>
              <Tab tabLabel="group">
                <Text>Vizinhos</Text>
              </Tab>
              <Tab tabLabel="chat">
                <Text>Chats</Text>
              </Tab>
              <Tab tabLabel="notifications">
                <Text>Notificações</Text>
              </Tab>
            </ScrollableTabView>
          </View>
        </View>
      </DrawerLayout>
    )
  }
}

export default connect(state => ({
  neighborhood: state.neighborhood,
}))(Neighborhood)
