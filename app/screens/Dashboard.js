import React, { Component, Dimensions, Text, View, PanResponder } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import DrawerLayout from 'react-native-drawer-layout'
import LinearGradient from 'react-native-linear-gradient'

import Colors from "../Colors"
import Button from "../components/Button"
import TopBar from "../components/TopBar"
import UserMenu from "../components/UserMenu"
import TabBar from "../components/TabBar"
import Tab from "../components/Tab"
import NeighborsMap from "../components/NeighborsMap"
import Demands from "../components/Demands"

import TransactionsContainer from "../containers/TransactionsContainer"

export default class Dashboard extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { loadTransactionDemands: false }
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {
        return this.props.dashboard.drawerOpen
      },
      onPanResponderRelease: () => {
        this.drawer.closeDrawer()
      },
    })
  }

  componentWillReceiveProps(nextProps) {
    const { onViewTransaction, dashboard } = nextProps
    const { creatingTransaction, createTransactionError, createdTransaction } = dashboard
    const oldCreatingTransaction = this.props.dashboard.creatingTransaction
    if (oldCreatingTransaction && !creatingTransaction && !createTransactionError) {
      onViewTransaction(createdTransaction)
    }
  }

  handleMenuOpen() {
    this.drawer.openDrawer()
  }

  handleMenuClose() {
    this.drawer.closeDrawer()
  }

  handleChangeTab(tab) {
    if (!this.state.loadTransactionDemands && tab.i === 1) {
      this.setState({loadTransactionDemands: true})
    }
  }

  render() {
    const { onDrawerOpen, onDrawerClose, onNewDemand } = this.props
    const { drawerOpen } = this.props.dashboard
    const { users } = this.props.neighbors
    const { latitude, longitude } = this.props.auth.currentUser
    const { loadTransactionDemands } = this.state
    const userMenu = (<UserMenu {...this.props} onClose={this.handleMenuClose.bind(this)} />)
    return (
      <DrawerLayout
        drawerWidth={Dimensions.get('window').width * 0.9}
        ref={(drawer) => { return this.drawer = drawer  }}
        keyboardDismissMode="on-drag"
        renderNavigationView={() => userMenu}
        onDrawerOpen={onDrawerOpen}
        onDrawerClose={onDrawerClose}
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
              onChangeTab={this.handleChangeTab.bind(this)}
            >
              <Tab tabLabel="home">
                { latitude && longitude && <NeighborsMap 
                  latitude={latitude}
                  longitude={longitude}
                  users={users}
                /> }
                <Demands {...this.props} />
              </Tab>
              <Tab tabLabel="chat">
                <TransactionsContainer {...this.props} loadTransactionDemands={loadTransactionDemands} />
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
              <Button
                onPress={onNewDemand}
                style={{
                  alignSelf: 'stretch',
                }}
                textStyle={{
                  fontSize: 16,
                  lineHeight: 20,
                }}
              >
                Pedir
              </Button>
            </LinearGradient>
          </View>
        </View>
      </DrawerLayout>
    )
  }
}
