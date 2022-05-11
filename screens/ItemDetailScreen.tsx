import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useNavigationParam } from "react-navigation-hooks";

const ItemDetailsScreen = () => {
  const navigation = useNavigation();
  const name = useNavigationParam("name");

  const shoesOne = [
    {
      id: "1",
      name: "Shoe One",
      imagePath: require("../src/images/shoeOne.jpeg"),
    },
    {
      id: "2",
      name: "Shoe Two",
      imagePath: require("../src/images/shoeTwo.jpeg"),
    },
  ];

  const shoesTwo = [
    {
      id: "3",
      name: "Shoe Three",
      imagePath: require("../src/images/shoeThree.jpeg"),
    },
    {
      id: "4",
      name: "Shoe Four",
      imagePath: require("../src/images/shoeFour.jpeg"),
    },
  ];

  const [numbers, setNumbers] = useState([
    {
      id: "1",
      value: true,
    },
    {
      id: "2",
      value: false,
    },
    {
      id: "3",
      value: false,
    },
    {
      id: "4",
      value: false,
    },
    {
      id: "5",
      value: false,
    },
    {
      id: "6",
      value: false,
    },
    {
      id: "7",
      value: false,
    },
  ]);

  const updateFieldChanged = (index) => (e) => {
    console.log(index);
    let newArr = [...numbers];
    newArr.map((index) => {
      index.value = false;
    });
    newArr[index].value = true;
    setNumbers(newArr);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignContent: "center",
      }}
    >
      <View
        style={{
          flex: 3,
          borderColor: "grey",
          borderBottomWidth: 2,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../src/images/shoeFour.jpeg")}
          style={{
            width:
              Dimensions.get("window").width -
              0.65 * Dimensions.get("window").width,
            height:
              Dimensions.get("window").width -
              0.6 * Dimensions.get("window").width,
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{
          flex: 3,
          borderColor: "grey",
          borderBottomWidth: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "black", marginLeft: "3%" }}>
          {"Lorem Ipsum"}
        </Text>
        <Text style={{ color: "black", marginLeft: "3%" }}>{"Nike"}</Text>
        <Text style={{ color: "black", marginLeft: "3%" }}>{"$$$$"}</Text>
      </View>
      <View
        style={{
          flex: 3,
          borderColor: "grey",
          borderBottomWidth: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Text style={{ color: "black", marginLeft: "3%" }}>{"Size"}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          {numbers.length > 0 ? (
            numbers.map((data, index) => (
              <TouchableOpacity onPress={updateFieldChanged(index)}>
                <View
                  key={index}
                  style={{
                    borderColor: "black",
                    backgroundColor: data.value ? "black" : "white",
                    borderWidth: 1,
                    width: 50,
                    height: 50,
                    marginLeft: "1%",
                    marginTop: "10%",
                  }}
                >
                  <Text
                    style={{
                      color: data.value ? "white" : "black",
                      marginLeft: "3%",
                      textAlign: "center",
                    }}
                  >
                    {data.id}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View />
          )}
        </View>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width:
              Dimensions.get("window").width -
              0.5 * Dimensions.get("window").width,
            height: 50,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              padding: 15,
            }}
          >
            {"Boton"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
