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
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import SettingsHeaderButton from '../reusable/SettingsHeaderButton';
import ProfileHeaderButton from '../reusable/ProfileHeaderButton';
import HeaderTitle from '../reusable/HeaderTitle';
import {createStackNavigator} from '@react-navigation/stack';

const FirstRoute = () => (
  <View style={{ backgroundColor: '#f0f8ff' }}>
    
        <FlatList style={styles.flatList}
            data={buyMessages}
            numColumns={1}
            horizontal={false}
            keyExtractor={item => item.id}
            
            renderItem={({item}) => (
              <TouchableHighlight 
                style={styles.noMessagesContainer}
                activeOpacity={0.6}
                underlayColor="#DDDDDD">
                <View >
                  <Text>{item.name}</Text>
                  <Text>{item.lastMessage}</Text>
                </View>
              </TouchableHighlight>
            )}
        />
    
  </View> 
);

const SecondRoute = () => (
  <View style={{ backgroundColor: '#f0f8ff' }}>
    <FlatList style={styles.flatList}
      data={sellMessages}
      numColumns={1}
      horizontal={false}
      keyExtractor={item => item.id}
      
      renderItem={({item}) => (
        <TouchableHighlight 
        style={styles.noMessagesContainer}
        activeOpacity={0.6}
        underlayColor="#DDDDDD">
          <View >
            <Text>{item.name}</Text>
            <Text>{item.lastMessage}</Text>
          </View>
          </TouchableHighlight>
      )}
    />
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

const buyMessages = [
  {
    id: "1",
    name: "Take",
    lastMessage: "I'd Like to buy this",
  },
  {
    id: "2",
    name: "Steve",
    lastMessage: "Are you selling this?",
  },
  {
    id: "3",
    name: "Steve",
    lastMessage: "Are you selling this?",
  },
  {
    id: "4",
    name: "Steve",
    lastMessage: "Are you selling this?",
  },
]

const sellMessages = [
  {
    id: "1",
    name: "Take",
    lastMessage: "I'd Like to sell this",
  },
  {
    id: "2",
    name: "Steve",
    lastMessage: "Are you buying this?",
  },
  {
    id: "3",
    name: "Steve",
    lastMessage: "Are you buying this?",
  },
]


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
class ChatScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = { 
        slider: 'buying', 
      }; 
    }

   

    render() {
        return (
            <View style={styles.container}>
              <ChatSlider/>
               
            </View>
        );
    }
}
  
const ChatScreenStack = createStackNavigator();

function CreateChatScreen(props) {
  return (
    <ChatScreenStack.Navigator>
      <ChatScreenStack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerLeft: () => (
            <ProfileHeaderButton navigation={props.navigation} />
          ),
          headerTitle: () => <HeaderTitle />,
          headerRight: () => (
            <SettingsHeaderButton navigation={props.navigation} />
          ),
        }}
      />
      <ChatScreenStack.Screen name="Settings" component={SettingsScreen} />
      <ChatScreenStack.Screen name="Profile" component={ProfileScreen} />
    </ChatScreenStack.Navigator>
  );
}

export {CreateChatScreen};

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
      marginTop: 0,
      margin: 0,
      padding: 10,
      borderColor: "grey",
      borderWidth: 2,
      borderColor: '#6495ed',
      backgroundColor: '#dcdcdc',
      borderRadius: 5,
      height: 60,
    },
    container: {
      flex: 1,
      padding: 10,
      margin: 10,
    },
    flatList: {
      marginTop: "5%",
      alignSelf: 'center',
      height: "95%",
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