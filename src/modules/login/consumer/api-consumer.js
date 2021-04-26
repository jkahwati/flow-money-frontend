import { Alert } from "react-native"

const URL = 'http://flow-money-backend.herokuapp.com/login'
const URL_SIGN_UP = 'http://flow-money-backend.herokuapp.com/sign-up'
const URL_USERS = 'http://flow-money-backend.herokuapp.com/users'

class ApiConsumer {

    constructor() {
        
    }

    async registerNewUser(username, password, email) {
        console.log('Registrando nuevo usuario...' , username, password, email);
        try {   
            let response = await fetch(URL_SIGN_UP, {
                method: 'POST',
                body: JSON.stringify({username, password, email}),
                headers: {'Content-Type': 'application/json', Accept: 'application/json' }
            })
            let json = await response.json();
            console.log("Status", response.status)
            console.log("Response from api",json)
            return json;
        } catch (error) {
            console.log("Error->", error)
            Alert.alert(error);
        }
    }

    async getBalance(username) {
        console.log('Consultando las cuentas del usuario...' , username);
        try {   
            const url = `${URL_USERS}/${username}/accounts`
            console.log("-->>>", url)
            let response = await fetch(url, {
                method: 'GET',
                headers: {'Content-Type': 'application/json', Accept: 'application/json' }
            })
            let accounts = await response.json();
            console.log("Response from api",accounts)
            return accounts;
        } catch (error) {
            console.log("Error->", error)
            Alert.alert(error);
        }
    }


    async isUser(username, password) {
        console.log('Buscando usuario...',username, password)
        try {   
            let response = await fetch(URL, {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {'Content-Type': 'application/json', Accept: 'application/json' }
                
            })
            let json = await response.json();
            console.log("Status", response.status)
            console.log("Response from api",json)
            return json;

        } catch (error) {
            console.log("Error->", error)
            Alert.alert(error);
        }
        
    }

}

export default ApiConsumer;