import React, { Component, Dimensions, View, PanResponder, InteractionManager } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import DrawerLayout from 'react-native-drawer-layout'

import Colors from "../Colors"
import Button from "../components/Button"
import TopBar from "../components/TopBar"
import UserMenu from "../components/UserMenu"
import TabBar from "../components/TabBar"
import Tab from "../components/Tab"
import BottomGradient from "../components/BottomGradient"
import NeighborsMap from "../components/NeighborsMap"
import Demands from "../components/Demands"
import TransactionDemands from "../components/TransactionDemands"
import Notifications from "../components/Notifications"
import NoNotifications from "../components/NoNotifications"

export default class Dashboard extends Component {
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
    const { onViewTransaction, transactions } = nextProps
    const { creating, createError, lastCreated } = transactions
    const oldCreating = this.props.transactions.creating
    if (oldCreating && !creating && !createError) {
      onViewTransaction(lastCreated)
    }
  }

  handleMenuOpen() {
    this.drawer.openDrawer()
  }

  handleMenuClose() {
    this.drawer.closeDrawer()
  }

  handleChangeTab(tab) {
    const { unreadNotifications: { count, readingAll }, onReadAllNotifications } = this.props
    if (tab.i === 2 && count > 0 && !readingAll) {
      InteractionManager.runAfterInteractions(() => {
        onReadAllNotifications()
      })
    }
  }

  render() {
    const { users, demands, transactions, unreadNotifications, readNotifications, onDrawerOpen, onDrawerClose, onNewDemand, onListDemands, onCreateTransaction, onRefuseDemand, onFlagDemand, onCompleteDemand, onCancelDemand,  onViewDemand, onListTransactions, onListReadNotifications, onViewTransaction, onSignOut, onUserDemands, onUserReviews, onAdminDemands, onFlaggedDemands, onViewNotification, onAbout } = this.props
    const { drawerOpen } = this.props.dashboard
    const { currentUser } = this.props.auth
    const { latitude, longitude } = currentUser   
    const userMenu = (<UserMenu 
      currentUser={currentUser}
      onAbout={onAbout}
      onSignOut={onSignOut}
      onUserDemands={onUserDemands}
      onUserReviews={onUserReviews}
      onAdminDemands={onAdminDemands}
      onFlaggedDemands={onFlaggedDemands}
      onClose={this.handleMenuClose.bind(this)}
    />)
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
              renderTabBar={() => <TabBar notificationsCount={unreadNotifications.count} />}
              onChangeTab={this.handleChangeTab.bind(this)}
            >
              <Tab tabLabel="home">
                <NeighborsMap 
                  latitude={latitude}
                  longitude={longitude}
                  users={users.list}
                /> 
                <Demands
                  currentUser={currentUser}
                  demands={demands.list}
                  listing={demands.listing}
                  canList={demands.canList}
                  onList={onListDemands}
                  onAccept={onCreateTransaction}
                  onRefuse={onRefuseDemand}
                  onFlag={onFlagDemand}
                  onView={onViewDemand}
                />
              </Tab>
              <Tab tabLabel="chat">
                <TransactionDemands
                  currentUser={currentUser}
                  demands={transactions.list}
                  listing={transactions.listing}
                  canList={transactions.canList}
                  onList={onListTransactions}
                  onView={onViewTransaction}
                  onViewDemand={onViewDemand}
                  onComplete={onCompleteDemand}
                  onCancel={onCancelDemand}
                />
              </Tab>
              <Tab tabLabel="notifications">
                <Notifications
                  notifications={unreadNotifications.list}
                  listing={false}
                  canList={false}
                  onView={onViewNotification}
                />
                <Notifications
                  notifications={readNotifications.list}
                  listing={readNotifications.listing}
                  canList={readNotifications.canList}
                  onList={onListReadNotifications}
                  onView={onViewNotification}
                />
                { unreadNotifications.list.length === 0 && readNotifications.list.length === 0 && !readNotifications.listing &&
                  <NoNotifications />
                }
              </Tab>
            </ScrollableTabView>
          </View>
          <BottomGradient>
            <Button
              onPress={onNewDemand}
              style={{
                alignSelf: 'stretch',
                marginBottom: 10,
                marginTop: 10,
              }}
              textStyle={{
                fontSize: 16,
                lineHeight: 20,
              }}
            >
              Pedir
            </Button>
          </BottomGradient>
        </View>
      </DrawerLayout>
    )
  }
}
