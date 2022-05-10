import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();

const ProfileScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>ProfileScreen</Text>

      <Button
                title={'Sign Out'}
                style={styles.button}
                onPress={() => signOut(auth)}
            />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
      marginTop: 10
  }
});