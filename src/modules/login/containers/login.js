import React, {Component} from 'react'
import  {View, Text, StyleSheet, Image, Button, Alert, ImageBackground, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import ApiConsumer from '../consumer/api-consumer'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    
  }

  login = async ()  => {
    console.log('Entro al login')
    var apiConsumer = new ApiConsumer();
    let response = await apiConsumer.isUser(this.state.username, this.state.password)
    console.log("-->",response)
    if (response.success) {
      this.props.navigation.navigate('Principal')
    } else {
      Alert.alert("Usuario incorrecto")
    }
  }
  register = ()  => {
    this.props.navigation.navigate('Register')
  }


  render(){
    return (
      <ImageBackground source= {require('../../../../assets/images/background.jpg')} style={styles.container}>  
        <View style= {styles.header}>
          <Image source= {require('../../../../assets/images/logo.png')} style= {styles.logo}/>
        </View>
      
      <View style= {[styles.body,styles.negrita]}>
        <TouchableOpacity>
          <Text style= {styles.welcome} >BIENVENIDO A FLOW MONEY </Text>
            <TextInput placeholder= 'Nombre de usuario' onChangeText= {(username) => this.setState({username})} placeholderTextColor= 'white'
            maxLength= {20} style= {{borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 20 , color: 'white'}} >
            </TextInput>
            <TextInput placeholder= 'Contraseña' onChangeText= {(password) => this.setState({password})} placeholderTextColor= 'white'
            maxLength= {20} style= {{borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 20 , color: 'white'}} >
            </TextInput>
            <View style= {styles.buttonLogin}>
                <Button primary title= "login" onPress= {this.login}></Button>
            </View>
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
    flex: 0.2,
    marginTop: 40,
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
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue'
  },
  footer: {
    flex: 0.2,
    // backgroundColor: 'red'    
  },
  logo: {
    width: 100,
    height: 100,
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


export default Login;