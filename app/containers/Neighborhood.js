import React, { Component, Dimensions, Text, View, PanResponder } from 'react-native'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import DrawerLayout from 'react-native-drawer-layout'
import LinearGradient from 'react-native-linear-gradient'

import { openDrawer, closeDrawer } from '../actions/NeighborhoodActions'

import Colors from "../Colors"
import Button from "../components/Button"
import TopBar from "../components/TopBar"
import UserMenu from "../components/UserMenu"
import TabBar from "../components/TabBar"
import Tab from "../components/Tab"
import Solicitations from "../screens/Solicitations"

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
        <View {...this.panResponder.panHandlers} style={{
          flex: 1, 
          alignSelf: 'stretch',
          backgroundColor: Colors.brown,
        }} >
          <TopBar onMenuOpen={this.handleMenuOpen.bind(this)} />
          <View style={{ flex: 1 }}>
            <ScrollableTabView
              locked={true}
              renderTabBar={() => <TabBar />}
            >
              <Tab tabLabel="home">
                <Solicitations {...this.props} />
              </Tab>
              <Tab tabLabel="chat">
                <Text>Chats</Text>
              </Tab>
              <Tab tabLabel="notifications">
                <Text>Notificações</Text>
              </Tab>
            </ScrollableTabView>
          </View>
          <View style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}>
            <LinearGradient
              colors={['rgba(255,255,255,0)', Colors.white]}
              locations={[0,0.5]}
              style={{
                flex: 1,
                padding: 10,
                paddingTop: 50,
              }}>
              <Button onPress={() => {console.log('click!')}} style={{alignSelf: 'stretch'}}>
                Pedir
              </Button>
            </LinearGradient>
          </View>
        </View>
      </DrawerLayout>
    )
  }
}

export default connect(state => ({
  neighborhood: state.neighborhood,
}))(Neighborhood)
