import React, {Component} from 'react'
import  {View, Text, StyleSheet, Image, Button, Alert, ImageBackground, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import ApiConsumer from '../consumer/api-consumer'

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      description: '',
      // description: ''
    }
    
  }

  register = async ()  => {
    console.log('Registrando nuevo usuario')
    var apiConsumer = new ApiConsumer();
    let response = await apiConsumer.registerNewUser(this.state.amount, this.state.password, this.state.description)
    if (response.success) {
        Alert.alert(response.message);
        this.props.navigation.navigate('Login')
    } else {
      Alert.alert("No fue posible registrar el usuario")
    }
  }
  


  render(){
    return (
      <ImageBackground style={styles.container}>  
        <View style= {[styles.body,styles.negrita]}>
          <TouchableOpacity>
              {/* <TextInput backgroundColor= 'white' style= {styles.inputTextStyle} placeholder= 'Amount' onChangeText= {(amount) => this.setState({amount})} placeholderTextColor= 'black'
              maxLength= {20} style= {{borderWidth: 2, borderColor: 'black', padding: 25, marginTop: 20 , color: 'black', fontSize: 20}} >
              </TextInput>
              <TextInput style={{height:40, backgroundColor: 'white', borderWidth:1}} placeholder= 'Description' onChangeText= {(description) => this.setState({description})} placeholderTextColor= 'black'
              maxLength= {20} style= {{borderWidth: 2, borderColor: 'black', padding: 25, marginTop: 20 , color: 'black', fontSize: 20}} >
              </TextInput> */}
              <TextInput 
                style={{height:60, backgroundColor: 'white', borderWidth:1, marginTop: 25}}
                placeholder="Amount"
                />
              <TextInput 
                style={{height:60, backgroundColor: 'white', borderWidth:1, marginTop: 25}}
                placeholder="Description"
                />
              <View style= {styles.buttonRegister}>
                  <Button color= 'green' title= "Registrar" style= {{fontSize: 50}} onPress= {this.register}></Button>
              </View>

          </TouchableOpacity>
        </View>
        <View style= {styles.footer}>
          {/* <Text style= {styles.welcome} >Footer </Text> */}
        </View>
    </ImageBackground>

      
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    flexDirection: 'column',
  },
  header: {
    flex: 0.1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center'

  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
    // backgroundColor: 'blue'
  },
  inputTextStyle: {
    color: 'blue'
  },
//   headerLeft: {
//     flex: 1,
//   },
//   headerRight: {
//     flex: 0.5,
//     marginTop: 30,
    
//   },
  body: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  footer: {
    flex: 0.1,
    // backgroundColor: 'red'    
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    resizeMode: 'contain',
    alignItems: 'center'
  },
  negrita: {
    fontWeight: 'bold'
  },
  welcome: {
    fontSize: 25,
    color: 'white'
  },
  buttonLogin: {
    marginTop: 20
  },
  buttonRegister: {
    marginTop: 30,
  },
})


export default Register;