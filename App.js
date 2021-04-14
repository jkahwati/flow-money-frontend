import {createStackNavigator} from  'react-navigation-stack'
import {createAppContainer} from  'react-navigation'
import Login from './src/modules/login/containers/login'
import Register from './src/modules/login/containers/register'
import Principal from './src/modules/login/containers/principal'


const LoginNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'FLOWMONEY',
      header: () => false,
      headerTitleAlign: 'center'
    }
  },
  Register: {
    screen: Register,
    title: 'Registrar'
  },
  Principal: {
    screen: Principal,
    title: 'Principal'
  }
}, )

export default createAppContainer(LoginNavigator);