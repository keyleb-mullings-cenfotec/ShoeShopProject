import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useAuthentication } from "../utils/hooks/useAuthentication";



const CustomDrawer = (props) => {

  const { user } = useAuthentication();

  return (
    <View style={styles.mainContainer}>

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#C14040' }}>
        <Image
          source={require('../src/images/profilePicture.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.userDescription}>{user?.email}</Text>

        <View style={styles.menuContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  profilePicture: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
    marginLeft: 15
  },
  userDescription: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10
    // fontFamily: 'Roboto-Medium'
  },
  menuContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
})