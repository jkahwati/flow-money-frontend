import React, {Component} from 'react'
import  {View, Text, StyleSheet, Image, Button, Alert, ImageBackground, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import ApiConsumer from '../consumer/api-consumer'

class Income extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    }
    
  }

  register = async ()  => {
    console.log('Registrando nuevo usuario')
    var apiConsumer = new ApiConsumer();
    let response = await apiConsumer.registerNewUser(this.state.username, this.state.password, this.state.email)
    console.log("-->",response);
    if (response.success) {
        Alert.alert(response.message);
        this.props.navigation.navigate('Login')
    } else {
      Alert.alert("No fue posible registrar el usuario")
    }
  }
  


  render(){
    return (
      <ImageBackground source= {require('../../../../assets/images/background.jpg')} style={styles.container}>  
        <View style= {styles.header}>
          <Image source= {require('../../../../assets/images/logo.png')} style= {styles.logo}/>
        </View>
      
      <View style= {[styles.body,styles.negrita]}>
        <TouchableOpacity>
            <TextInput placeholder= 'Nombre de usuario' onChangeText= {(username) => this.setState({username})} placeholderTextColor= 'white'
            maxLength= {20} style= {{borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 20 , color: 'white'}} >
            </TextInput>
            <TextInput placeholder= 'Correo' onChangeText= {(email) => this.setState({email})} placeholderTextColor= 'white'
            maxLength= {20} style= {{borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 20 , color: 'white'}} >
            </TextInput>
            <TextInput placeholder= 'Contraseña' onChangeText= {(password) => this.setState({password})} placeholderTextColor= 'white'
            maxLength= {20} style= {{borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 20 , color: 'white'}} >
            </TextInput>
            <View style= {styles.buttonRegister}>
                <Button color= 'green' title= "Registrar" onPress= {this.register}></Button>
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
    backgroundColor: 'gray',
    flexDirection: 'column',
  },
  header: {
    flex: 0.1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center'

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
    marginTop: 20,
    backgroundColor: 'red'
  },
})


export default Income;