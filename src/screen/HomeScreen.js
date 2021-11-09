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
import {String} from '../utils/index';
import {CustomButton} from '../components';

const {height, width} = Dimensions.get('window');

@inject('addStore')
@observer
class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View>
          {this.props.addStore.dataArray.length === 0 ? (
            <Text style={styles.homeScreenText}>{String.homeScreenText}</Text>
          ) : (
            this.props.addStore.dataArray.map((item, i) => (
              <View key={i} style={styles.itemList}>
              
                <TouchableOpacity
                  onPress={() => {
                    this.props.addStore.removeElement(i);
                  }}
                  style={styles.itemContainer}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.bodyText} numberOfLines={1}>
                    {item.body}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('UpdateNote', {
                      id: i,
                      title: item.title,
                      body: item.body,
                    });
                  }}>
                  <Text style={styles.editText}>{String.edit}</Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={() => this.props.navigation.navigate('AddNote')}
            text={String.addNewNote}
            style={{marginRight: width/20}}
          />
        </View>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeScreenText: {
    marginTop: height / 2.5,
    alignSelf: 'center',
    fontSize: height / 40,
  },
  itemList: {
    width: width - 50,
    marginVertical: height / 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  itemContainer: {
    width: width * 0.75,
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
});

export default HomeScreen;
