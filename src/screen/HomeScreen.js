import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

const {height, width} = Dimensions.get('window');

class HomeScreen extends Component {
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())

      .then(data => this.props.updateData(data))
      .catch(error => console.log(error));
  }

  renderApiData = ({item, i}) => {
    return (
      <View key={i} style={styles.container}>
        <View>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.bodyText}>{item.body}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('DetailScreen', {item})
          }>
          <Text style={styles.buttonTitle}>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList data={this.props.data} renderItem={this.renderApiData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: height / 45,
    padding: height / 40,
    borderRadius: height / 30,
    width: width - 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 15,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: height / 50,
    marginBottom: height / 50,
    color: '#0B3861',

    width: width - 100,
  },
  bodyText: {
    fontSize: height / 55,
    color: '#585858',
  },
  buttonTitle: {
    fontSize: height / 50,
    color: '#424242',
  },
});

const mapStateToProps = state => {
  return {name: state.productDetail.name, data: state.productDetail.apiData};
};

const mapDispatchToProps = dispatch => {
  return {
    updateName: name => dispatch({type: 'UPDATE_NAME', payload: name}),
    updateData: data => dispatch({type: 'UPLOAD_DATA', payload: data}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
