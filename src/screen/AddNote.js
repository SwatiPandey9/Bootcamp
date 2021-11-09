import {inject, observer} from 'mobx-react';

import React, {Component} from 'react';
import {String} from '../utils/index';

import {CustomTextInput} from '../components/index';

import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

const {height, width} = Dimensions.get('window');

@inject('addStore')
@observer
class AddNote extends Component {
  state = {
    txt: '',
    body: '',
    titleFocus: false,
    bodyFocus: false,
  };
  changeText = text => {
    this.setState({txt: text});
  };

  changeBody = text => {
    this.setState({body: text});
  };

  saveData = (title, body) => {
    this.props.addStore.addData(title, body);
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>{String.addTitle}</Text>
        <CustomTextInput
          name="Enter Title"
          value={this.state.txt}
          onChange={text => {
            this.changeText(text);
          }}
        />

        <Text style={styles.bodyText}>{String.addBody}</Text>
        <CustomTextInput
          name="Enter Title"
          value={this.state.body}
          onChange={text => {
            this.changeBody(text);
          }}
          multiline={true}
          style={{height: height * 0.2}}
        />

        <TouchableOpacity
          onPress={() => {
            this.saveData(this.state.txt, this.state.body);
          }}
          style={styles.imageContainer}>
          <Image source={require('../assets/check.png')} style={styles.image} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    marginVertical: height/60,
    marginLeft: width/25,
  },
  bodyText: {
    marginVertical: height/60,
    marginLeft: width/25,
  },
  imageContainer: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  image: {
    marginRight: width/20,
    height: 50,
    width: 50,
  },
});

export default AddNote;
