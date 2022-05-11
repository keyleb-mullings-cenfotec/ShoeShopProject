import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, SearchBar } from 'react-native-elements'

const ItemsScreen = () => {
  return (
    // <Text>ItemsScreen</Text>
    <View style={styles.itemsPage}>
      <View style={styles.searchBarContainer}>
        <SearchBar
          placeholder="Search"
          lightTheme={true}
          containerStyle={{backgroundColor:'#fff'}}
          // onChangeText={onChangeSearch}
          // value={searchQuery}
        />
      </View>
    </View>
  )
}

export default ItemsScreen

const styles = StyleSheet.create({
  itemsPage: {
    flex: 1,
    backgroundColor:'#fff'
  },
  searchBarContainer: {
    maxWidth: '85%',
    paddingLeft: 3,
    // borderWidth: 2,
    marginLeft: '7%',
    marginTop: '2%',
    // borderColor: '#B8B5B5',
    // borderRadius: 5

    // justifyContent: 'center',
    // alignItems: 'center'
  },
})