import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

export default function HomeScreen() {

    const { user } = useAuthentication();

    return (
        <View style={styles.constainer}>
            <Text>
                Welcome {user?.email}
            </Text>
            {/* <Button
                title={'Sign Out'}
                style={styles.button}
                onPress={() => signOut(auth)}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 10
    }
})