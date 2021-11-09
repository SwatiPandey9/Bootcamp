import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import {String} from '../utils/index';
import {CustomTextInput, CustomButton} from '../components';

const {height, width} = Dimensions.get('window');

@inject('addStore')
@observer
class UpdateNote extends Component {
  params = this.props.route.params;

  state = {
    title: this.params.title,
    body: this.params.body,
    index: this.params.id,
    titleFocus: false,
    bodyFocus: false,
  };

  changeText = text => {
    this.setState({title: text});
  };

  changeBody = text => {
    this.setState({body: text});
  };

  updateData = (title, body, index) => {
    this.props.addStore.updateDataArray(title, body, index);
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    console.log(this.props.route);
    return (
      <View>
        <Text style={styles.titleText}>{String.changeTitle}</Text>
        <CustomTextInput
          name="Enter Title"
          value={this.state.title}
          onChange={text => {
            this.changeText(text);
          }}
        />

        <Text style={styles.bodyText}>{String.changeBody}</Text>
        <CustomTextInput
          name="Enter Title"
          value={this.state.body}
          onChange={text => {
            this.changeBody(text);
          }}
          multiline={true}
          style={{height: height * 0.2}}
        />

        <CustomButton
          onPress={() => {
            this.updateData(
              this.state.title,
              this.state.body,
              this.state.index,
            );
          }}
          text={String.save}
          style={{marginTop: height / 5, alignSelf: 'center'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    marginVertical: height / 60,
    marginLeft: width / 25,
  },

  bodyText: {
    marginVertical: height / 60,
    marginLeft: width / 25,
  },
});

export default UpdateNote;
