import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const ItemsScreen = () => {
  const navigation = useNavigation();
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

  navigation.navigate("Item Detail Screen", { test: "hello" });

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={shoesOne}
          renderItem={({ item, index }) => (
            <View
              style={{
                flex: 1,
                width:
                  Dimensions.get("window").width -
                  0.6 * Dimensions.get("window").width,
                height:
                  Dimensions.get("window").width -
                  0.4 * Dimensions.get("window").width,
                borderWidth: 2,
                borderColor: "#D0CFCF",
                backgroundColor: "#ECEAEB",
                margin: "5%",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => navigation.navigate("Item Detail Screen")}
              >
                <Image
                  source={item.imagePath}
                  key={index}
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
                <View style={{ backgroundColor: "#ECEAEB" }}>
                  <Text style={{ color: "black", marginLeft: "3%" }}>
                    {"Lorem Ipsum"}
                  </Text>
                  <Text style={{ color: "black", marginLeft: "3%" }}>
                    {"Nike"}
                  </Text>
                  <Text style={{ color: "black", marginLeft: "3%" }}>
                    {"$$$$"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={shoesTwo}
          renderItem={({ item, index }) => (
            <View
              style={{
                flex: 1,
                width:
                  Dimensions.get("window").width -
                  0.6 * Dimensions.get("window").width,
                height:
                  Dimensions.get("window").width -
                  0.4 * Dimensions.get("window").width,
                borderWidth: 2,
                borderColor: "#D0CFCF",
                backgroundColor: "#ECEAEB",
                margin: "5%",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => navigation.navigate("Item Detail Screen")}
              >
                <Image
                  source={item.imagePath}
                  key={index}
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
                <View style={{ backgroundColor: "#ECEAEB" }}>
                  <Text style={{ color: "black", marginLeft: "3%" }}>
                    {"Lorem Ipsum"}
                  </Text>
                  <Text style={{ color: "black", marginLeft: "3%" }}>
                    {"Nike"}
                  </Text>
                  <Text style={{ color: "black", marginLeft: "3%" }}>
                    {"$$$$"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ItemsScreen;

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
