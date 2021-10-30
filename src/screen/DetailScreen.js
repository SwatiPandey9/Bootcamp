import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

const {height, width} = Dimensions.get('window');

class DetailScreen extends Component {
  state = {
    object: this.props.route.params.item,
    title: this.props.route.params.item.title,
    body: this.props.route.params.item.body,
    id: this.props.route.params.item.id,
  };

  changeTitle = text => {
    this.setState({title: text});
  };

  changeBody = text => {
    this.setState({body: text});
  };

  updateObjectData = () => {
    this.state.object.title = this.state.title;
    this.state.object.body = this.state.body;
    console.log(this.state.object);
    this.props.updateObject(this.state);
    this.props.saveData();
    this.props.navigation.navigate('HomeScreen')
  };

  render() {
    const title = this.state.object.title;
    return (
      <View>
        <Text style={styles.headingText}>Make Your Edits</Text>

        <Text style={styles.text}>Change Title Below</Text>
        <TextInput
          placeholder="Edit title"
          value={this.state.title}
          onChangeText={text => {
            this.changeTitle(text);
          }}
          style={styles.titleText}
          multiline={true}
        />
        <Text style={styles.text}>Change Body Text Below</Text>

        <TextInput
          placeholder="Edit Body"
          value={this.state.body}
          onChangeText={text => {
            this.changeBody(text);
          }}
          style={styles.bodyText}
          multiline={true}
        />

        <TouchableOpacity onPress={this.updateObjectData} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Data</Text>
        </TouchableOpacity>
        <Text>{this.props.objectData}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headingText: {
    backgroundColor: '#0B3861',
    color: '#fff',
    textAlign: 'center',
    fontSize: height / 20,
    padding: 10,
    width: width * 0.8,
    alignSelf: 'center',
    marginVertical:height/30
  },
  text:{
    marginLeft:width*0.10,
    marginBottom:height/50,
    fontSize:height/40,
  },
  titleText: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: height / 50,
    color: '#0B3861',
    alignSelf: 'center',
    fontSize: height / 50,
    height: height * 0.1,
    width: width * 0.9,
    borderRadius: height / 30,
  },
  bodyText: {
    backgroundColor: '#fff',
    color: '#525252',
    alignSelf: 'center',
    padding: height / 60,
    fontSize: height / 50,
    height: height * 0.2,
    width: width * 0.9,
    borderRadius: height / 30,
  },
  saveButton:{
    backgroundColor:'#0B3861',
    padding:10,
    width:width*0.30,
    alignSelf:'center',
    borderRadius:height/20,
    marginTop:height/20
  },
  saveButtonText:{
    // backgroundColor:'#0B3861',
    fontSize:height/50,
    color:'#fff',
    fontWeight:'bold',
    textAlign:'center'
  },
});

const mapStateToProps = state => {
  return {objectData: state.productDetail.updateObjectData};
};

const mapDispatchToProps = dispatch => {
  return {
    updateObject: data => dispatch({type: 'UPLOAD_OBJECT', payload: data}),
    saveData: () => dispatch({type: 'SAVE'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
