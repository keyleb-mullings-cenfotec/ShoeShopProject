import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MessagesScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Messages Screen</Text>
    </View>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});