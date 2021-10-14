import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';

const ApiList = () => {
  const listItem = ({item}) => {
    return (
      <View style={styles.listContainer}>
        <View>
          <Image style={styles.itemImage} source={{uri: `${item.avatar}`}} />
        </View>
        <View>
          <Text style={styles.itemText}>
            First_name:  {item.first_name} {'\n'}
            Last_name:  {item.last_name}{'\n'}
            Email:  {item.email}        
          </Text>
        </View>
      </View>
    );
  };

  const getData = (pageNo = 1, refreshing = true) => {
    setRefresh(refreshing);
    fetch(`https://reqres.in/api/users?page=${pageNo}`, {method: 'GET'})
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setRefresh(false);
          setData({
          pageNo,
          listData: pageNo === 1 ? json.data : [...data.listData, ...json.data],
        });
        }, 1000);

      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [refreshing, setRefresh] = useState(false);

  const [data, setData] = useState({pageNo: 1, listData: []});

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={data.listData}
        renderItem={listItem}
        keyExtractor={(item, index) => index.toString()}
        refreshing={refreshing}
        onRefresh={() => getData(1, true)}
        onEndReached={() => {
          getData(data.pageNo + 1);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  listContainer: {
    width: '100%',
    alignItems: 'flex-start',
    padding: 70,
    paddingHorizontal: 2,
    paddingTop: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    backgroundColor:'#f2f2f2'
  },
  itemImage: {
    marginTop:30,
    height: 100,
    width: 100,
    borderWidth: 1,
    marginRight:5,
    borderRadius:50
  },
  itemText: {

    marginTop: 40,
    paddingLeft: 10,
    fontSize: 17,
    fontWeight:'bold'
  },
});

export default ApiList;
