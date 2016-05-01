import React, { Component, ScrollView, View, Platform } from 'react-native'
import truncate from 'truncate'

import Colors from "../Colors"
import ReviewsContainer from "../containers/ReviewsContainer"
import BottomGradient from "../components/BottomGradient"
import Sentence from "../components/Sentence"
import NavBar from "../components/NavBar"
import DemandHeader from "../components/DemandHeader"
import DemandButtons from "../components/DemandButtons"
import DemandUserButtons from "../components/DemandUserButtons"

export default class ViewDemand extends Component {
  componentWillReceiveProps(nextProps) {
    // After accepting demand, it shows the created transaction
    const { onViewCreatedTransaction, transactions } = nextProps
    const { creating, createError } = transactions
    const oldCreating = this.props.transactions.creating
    if (oldCreating && !creating && !createError) {
      onViewCreatedTransaction()
      return
    }
    // After refusing or flagging demand, it goes to dashboard
    const { onDashboard, demands: { list } } = nextProps
    const oldList = this.props.demands.list
    if (list.length !== oldList.length && oldList.length > 0) {
      onDashboard()
    }
  }

  render() {
    const { auth: { currentUser }, demand, demands, transactions, userDemands, adminDemands, onFlagDemand, onCreateTransaction, onRefuseDemand, onCompleteDemand, onCancelDemand, onReactivateDemand, admin } = this.props
    const transactionDemands = transactions.list
    const showUserButtons = (currentUser.id === demand.user.id || admin)
    const showButtons = !showUserButtons && (demand.state === 'notifying' || demand.state === 'active') && transactionDemands.map(demand => demand.id).indexOf(demand.id) < 0

    const demandsList = ( admin ? adminDemands.list : (currentUser.id === demand.user.id ? userDemands.list : demands.list) )
    return (
      <View style={{
        flex: 1,
        alignSelf: 'stretch',
      }}>
        <NavBar title={truncate(demand.name, 30)} />
        <ScrollView style={{
          flex: 1,
          backgroundColor: Colors.white,
          paddingTop: 20,
        }}>
          <View style={{
            alignSelf: 'stretch',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingBottom: 110,
          }}>
            <View style={{
              flex: 1,
              alignSelf: 'stretch',
              paddingBottom: 20,
              marginBottom: 20,
              borderBottomWidth: 0.5,
              borderColor: Colors.beige,
            }}>
              <DemandHeader
                demand={demand}
                demands={demandsList}
                currentUser={currentUser}
                fullHeader={true} />
            </View>
            <ReviewsContainer {...this.props} user={demand.user} />
          </View>
        </ScrollView>
        <BottomGradient>
          { showButtons && <DemandButtons
            currentUser={currentUser}
            demand={demand}
            demands={demands.list}
            onAccept={onCreateTransaction}
            onRefuse={onRefuseDemand}
            onFlag={onFlagDemand}
          /> }
          { showUserButtons && <DemandUserButtons
            admin={admin}
            currentUser={currentUser}
            demand={demand}
            demands={demandsList}
            onComplete={onCompleteDemand}
            onCancel={onCancelDemand}
            onReactivate={onReactivateDemand}
          /> }
        </BottomGradient>
      </View>
    )
  }
}
