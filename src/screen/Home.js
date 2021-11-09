import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {Colors} from '../utils/index';

const {height, width} = Dimensions.get('window');

@inject('addStore')
@observer
class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          {/* {this.props.addStore.dataArray === null ? 'there is nothing' : } */}
        </View>
        {this.props.addStore.dataArray.map((item, i) => (
          <View key={i} style={styles.itemList}>
            {/* ----------------------------------------------------------- */}

            <TouchableOpacity
              onPress={() => {
                this.props.addStore.removeElement(i);
              }}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.bodyText} numberOfLines={1}>
                {item.body}
              </Text>
            </TouchableOpacity>

            {/* ------------------------------------------------------------ */}

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('UpdateNote', {
                  id: i,
                  title: item.title,
                  body: item.body,
                });
              }}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
        ))}
      
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('AddNote')}>
            <Text style={styles.buttonText}>ADD NEW NOTE</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemList: {
    width: width - 50,
    marginVertical: height / 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: width / 25,
  },
  bodyText: {
    color: '#626567',
  },
  editText: {
    fontSize: width / 28,
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: Colors.primaryColor,
    padding: width / 20,
    borderRadius: width / 15,
    marginRight:width/20
  },
  buttonText: {
    color: Colors.primaryTextColor,
    fontSize: height / 55,
  },
});

export default HomeScreen;
