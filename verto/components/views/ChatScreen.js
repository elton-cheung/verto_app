import React from 'react';
import {View, Text, AppRegistry, StyleSheet, Image, FlatList, Dimensions} from 'react-native';
const verto_logo = require('../../assets/images/verto_logo.png');
const account = require('../../assets/images/account.png');
const settings = require('../../assets/images/settings.png');
const camera = require('../../assets/images/camera.png');
const homeIcon = require('../../assets/images/home_icon.png');
const messenger = require('../../assets/images/message.png');
import {Button, Card} from 'react-native-elements';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';


const FirstRoute = () => (
  <View style={{ backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ backgroundColor: '#673ab7' }} />
);

const initialLayout = { width: Dimensions.get('window').width };

function ChatSlider() {
  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'buying', title: 'Buying' },
    { key: 'selling', title: 'Selling' },
  ]);

  const renderChat = SceneMap({
    buying: FirstRoute,
    selling: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'blue' }}
      
    />
  );

  return (
    <TabView style={styles.tabContainer}
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderChat}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}
export default class ChatScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
              <View style={{flexDirection:"row"}}>
                <TouchableOpacity>
                  <Image style={styles.account} source={account}/>
                </TouchableOpacity>       
                <Image style={styles.verto_pic1} source={verto_logo} />
                <Image style={styles.verto_pic2} source={verto_logo} />
                <Text style={styles.title}>Verto</Text>
                <TouchableOpacity>
                  <Image style={styles.settings} source={settings} />
                </TouchableOpacity>
              </View>
              <ChatSlider/>
              <FlatList style={styles.flatList}
                data={[{title: 'Title Text', key: 'item1'}]}
                renderItem={({}) => (
                  <View style={styles.noMessagesContainer}>
                    <Text style={styles.noMessages}>No</Text>
                    <Text style={styles.noMessages}>Messages</Text>
                   </View>
                )}
                numColumns={1}
                horizontal={false}
              />
              
            </View>
            
        );
    }
}
  

const styles = StyleSheet.create({
    tabContainer: {
      backgroundColor: '#fffaf0',
      color: 'black',
    },
    noMessages: {
      alignSelf: 'center',
      padding: 1,
      fontSize: 40,
      color: 'grey',
    },
    noMessagesContainer: {
      flex: 1,
      marginTop: 180,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    container: {
      flex: 1,
      padding: 10,
      margin: 10,
    },
    flatList: {
      alignSelf: 'center',
      height: "60%",
      width: "100%",
    },
    messengerContainer: {
      height:60,
      width: 60,
      borderRadius: 64,
      marginLeft: 90,
    },
    messenger: {
      alignSelf: 'center',
      height: 30,
      width: 30,
      marginLeft: 0,
      marginTop: 20,
    },
    homeIcon: {
      alignSelf: 'center',
      height: 30,
      width: 30,
      marginLeft: 0,
      marginTop: 20,
    },
    homeContainer: {
      height:60,
      width: 60,
      borderRadius: 64,
      marginLeft: 5,
    },
    cameraContainer: {
      alignSelf: 'center',
      height:60,
      width: 60,
      borderRadius: 64,
      backgroundColor: '#1e90ff',
      marginLeft: 90,
    },
    sell: {
      alignSelf: 'center',
      height: 40,
      width: 40,
      marginLeft: 116,
      marginTop: 0,
      color: 'blue'
    },
    shop: {
      alignSelf: 'center',
      height: 40,
      width: 40,
      marginLeft: 18,
      marginTop: 0,
      color: 'blue'
    },
    chat: {
      alignSelf: 'center',
      height: 40,
      width: 40,
      marginLeft: 108,
      marginTop: 0,
      color: 'blue'
    },
    camera: {
      tintColor: 'white',
      alignSelf: 'center',
      height: 40,
      width: 40,
      marginLeft: 0,
      marginTop: 8,
      
    },
    settings: {
      alignSelf: 'center',
      height: 30,
      width: 30,
      marginLeft: 80,
      marginTop: 0
    },
    account: {    
      alignSelf: 'center',
      height: 30,
      width: 30,
      marginLeft: 0,
      marginTop: 0
  },
    verto_pic1: {
      alignSelf: 'center',
      height: 30,
      width: 40,
      marginLeft: 60,
      marginTop: 0
    },
    verto_pic2: {
      transform: [{ rotate: '180deg'}],
      alignSelf: 'center',
      height: 30,
      width: 40,
      marginRight: 0,
      marginTop: 0
    },
    image: {
      alignSelf: 'center',
      height: 350,
      width: 350,
      padding: 2,
      borderRadius: 20,
      marginBottom: 10,
      borderStyle: 'dotted',
      borderWidth: 1,
    },
    title: {
      alignSelf: 'center',
      fontSize: 30,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    user: {
      alignSelf: 'flex-start',
      textAlign: 'left',
      fontSize: 25,
    },
    price: {
      alignSelf: 'baseline',
      textAlign: 'right',
      fontSize: 25,
    },
    description: {
      fontSize: 16,
    },
    buttonLayout: {
      alignSelf: 'center',
      padding: 3,
      marginBottom: 10,
    },
    userAndPrice: {
      marginBottom: 15,
    },
});