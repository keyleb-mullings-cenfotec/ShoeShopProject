import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from "react-native-elements";
import { StackScreenProps } from "@react-navigation/stack";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const SignUpScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
    const [value, setValue] = useState({
        email: '',
        password: '',
        error: '',
    });

    async function signUp() {
        if (!value.email || !value.password) {
            setValue({ ...value, error: 'Email and password must be provided.' })
            return;
        }

        try {
            await createUserWithEmailAndPassword( auth, value.email, value.password );
        } catch (error: any) {
            setValue({ ...value, error: error.message})
        }
        // setValue({ ...value, error: '' })
    }

    return (
        <View style={styles.constainer}>
            <Text>Sign up Screen!</Text>
            {!!value.error &&
                <View style={styles.error}>
                    <Text>{value.error}</Text>
                </View>
            }
            <View style={styles.controls}>
                <Input
                    placeholder="Email"
                    containerStyle={styles.control}
                    value={value.email}
                    onChangeText={(text) => setValue({ ...value, email: text })}
                    leftIcon={<Icon name='envelope' size={16} />}
                />
                <Input
                    placeholder="Password"
                    containerStyle={styles.control}
                    value={value.password}
                    onChangeText={(text) => setValue({ ...value, password: text })}
                    leftIcon={<Icon name='key' size={16} />}
                    secureTextEntry={true}
                />
                <Button
                    title='Sign Up'
                    buttonStyle={styles.control}
                    onPress={signUp}
                />
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
    controls: {
        flex: 1,
    },
    control: {
        marginTop: 10,
        minWidth: '90%'
    },
    error: {
        marginTop: 10,
        padding: 10,
        color: '#fff',
        backgroundColor: '#D54826FF',
    },
})

export default SignUpScreen;
