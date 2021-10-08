import React, {Component} from 'react';
Text;
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

class Home extends Component {
  constructor() {
    super();
    this.state = {
        animating: false, //{usually we write animating :true but in this case we have to show activity Indicator after clicking on button}
      dataSet:[]
    };
  }

  
// componentDidMount(){
//   setTimeout(() => {
//     this.setState({animating:true})
//     fetch('https://reqres.in/api/users')
//     .then(response => response.json())
//     .then(data => this.setState({dataSet: data.data, animating: false}));
//   }, 5000);
// }




   fetchData(){
    this.setState({animating:true})
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => this.setState({dataSet: data.data, animating: false}));
   }
  
  
  

  render() {
    
    // const arr = {data:[]};
    return (
      <SafeAreaView>

        <View style={styles.container}>
          {/* if using componentDidMount make ActivityIndicator animating value false and comment the fetchData() function */}
          {this.state.animating && <ActivityIndicator size="large" animating={false} />} 
          
        </View>
        <View style = {styles.dataContainer}>
            {this.state.dataSet.map((x) => (
              <Text style = {styles.dataText}>
                {JSON.stringify(x)}
                {'\n'}
                {/* {x.email}
                {'\n'}
                {x.first_name} */}
              </Text>
            ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
              onPress={ () => this.fetchData()}
              style={styles.button}>
              <Text style={styles.buttonText}>Fetch Data</Text>
          </TouchableOpacity> 
        </View>
         
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  dataContainer:{
    marginHorizontal:10,
    justifyContent:'center',
  },
  dataText:{
    marginBottom:10,
    fontSize:15
  },
  buttonContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#1759F2',
    padding: 5,
    width: '60%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    // borderColor:'',
    padding: 8,
  },
});

export default Home;
