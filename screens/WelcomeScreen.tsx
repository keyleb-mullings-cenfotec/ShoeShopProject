import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Button } from "react-native-elements";

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
    return (
        <View style={styles.constainer}>
            <Text>Welcome Screen!</Text>

            <View style={styles.buttons}>
                <Button
                    title="Sign in"
                    buttonStyle={styles.button}
                    onPress={() => navigation.navigate('Sign In')} />

                <Button
                    title="Sign up"
                    type="outline"
                    buttonStyle={styles.button}
                    onPress={() => navigation.navigate('Sign Up')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        flex: 1,
    },
    button: {
        marginTop: 10
    },
})

export default WelcomeScreen;