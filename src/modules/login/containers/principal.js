import React, { Component } from 'react';
import ApiConsumer from '../consumer/api-consumer'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';

export default class Principal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Option 1", image:"https://img.icons8.com/nolan/50/coin-in-hand.png"},
        {id:2, title: "Option 2", image:"https://img.icons8.com/nolan/50/donate.png"},
        {id:3, title: "Option 3", image:"https://img.icons8.com/nolan/50/remittance-slip.png"} ,
        {id:4, title: "Option 4", image:"https://img.icons8.com/nolan/50/profit.png"} ,
        {id:5, title: "Option 5", image:"https://img.icons8.com/nolan/50/shutdown.png"} ,
        {id:6, title: "Option 6", image:"https://img.icons8.com/nolan/50/currency-settings.png"} ,
      ],
      isLoading: true,
    };
  }

  async componentDidMount() {
    console.log('Se consulta el monto total...')
    const username = this.props.navigation.state.params.user
    var apiConsumer = new ApiConsumer();
    const response = await apiConsumer.getBalance(username)
    this.setState({balance: response.accounts[0].balance})
    // fetch('https://reactnative.dev/movies.json')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json)
    //     this.setState({ movies: json.movies });
    //   })
    //   .catch((error) => console.error(error))
    //   .finally(() => {
    //     this.setState({ isLoading: false });
    //   });
  }

  clickEventListener(item) {
    if (item.id === 1) this.props.navigation.navigate('Income')
    else Alert.alert("Not available yet")
  }

  goToIncome() {
    this.props.navigation.navigate('Not available yet')
  }

  // getBalance = async ()  => {

  // }

  render() {
    return (
      <ImageBackground source= {require('../../../../assets/images/background.jpg')} style={styles.container}>  
      <View>
        <Text style={{textAlign: 'center'}} >Your balance</Text>
      </View>
      <View>
        <Text style={{fontSize: 60, textAlign: 'center'}}>{this.state.balance}</Text>
      </View>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    {/* <Text style={styles.title}>{item.title}</Text> */}
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    // backgroundColor: 'blue'
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
    // backgroundColor: 'blue'
  },
  listContainer:{
    alignItems:'center',
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor:"white",
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  balance:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 100,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center',
  },
  title:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
});    