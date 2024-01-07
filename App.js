import {View, SafeAreaView, StatusBar,useWindowDimensions,Image,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import HomePage from './Components/HomePage/HomePage';
import UniHome from './Components/University/UniHome';


import styles from './Components/HomePage/HomeStyle'

const Menu  = require("./assets/menu.png")
const Home  = require("./assets/home.png")
const University  = require("./assets/university.png")
const College  = require("./assets/college.png")
const Scholarship  = require("./assets/scholarship.png")
const My_List  = require("./assets/favorites.png")


export default function App() {

const Stack = createNativeStackNavigator(); // Define the Stack navigator

          // DEFINING  WIDTH AND HEIGHT 
          const deviceWidth = useWindowDimensions().width
          const deviceHeight = useWindowDimensions().height
  return (
    <SafeAreaView style={styles.appContainer}>

        <View style={[styles.headerContainer, {height:  deviceWidth >  500 ? 60  : 50}]}>

          <View>
            <Image  
                source={Menu} 
                style={{
                        width: deviceWidth >  500 ? 50 : 40,
                        height: deviceWidth >  500 ? 50 : 40,
                        marginRight:20
                      }}
            />

          </View>

          </View>

        <NavigationContainer>
          <Stack.Navigator initialRouteName="UniHome">
            <Stack.Screen name='HomePage' component={HomePage}  />
            <Stack.Screen name='UniHome' component={UniHome}  />
          </Stack.Navigator>
        </NavigationContainer>



             {/* FOOTER  */}

             <View style={styles.footerMainContainer}>
          <View style={styles.footerContainer}>
            <View>
              <Image  
                source={Home}
                style={{
                  width: deviceWidth >  500 ? 63 : 40,
                  height: deviceWidth >  500 ? 63 : 40,
                }}
              />
              <Text
              style={{
                fontSize: deviceWidth >  500 ? 12 : 10,
              }}
              >Home</Text>
            </View>

            <View>
              <Image  
                source={University}
                style={{
                  width: deviceWidth >  500 ? 63 : 40,
                  height: deviceWidth >  500 ? 63 : 40,
                }}
              />
              <Text
              style={{
                fontSize: deviceWidth >  500 ? 12 : 10,
              }}
              >university</Text>
            </View>

            <View>
              <Image  
                source={College}
                style={{
                  width: deviceWidth >  500 ? 63 : 40,
                  height: deviceWidth >  500 ? 63 : 40,
                }}
              />
              <Text
              style={{
                fontSize: deviceWidth >  500 ? 12 : 10,
              }}
              >college</Text>
            </View>

            <View>
              <Image  
                source={Scholarship}
                style={{
                  width: deviceWidth >  500 ? 63 : 40,
                  height: deviceWidth >  500 ? 63 : 40,
                }}
              />
              <Text
              style={{
                fontSize: deviceWidth >  500 ? 12 : 10,
              }}
              >scholarship</Text>
            </View>

            <View>
              <Image  
                source={My_List}
                style={{
                  width: deviceWidth >  500 ? 63 : 40,
                  height: deviceWidth >  500 ? 63 : 40,
                }}
              />
              <Text
              style={{
                fontSize: deviceWidth >  500 ? 12 : 10,
              }}
              >my list</Text>
            </View>
          </View>
        </View>
    <StatusBar  backgroundColor={'#fff'}/>

      </SafeAreaView>

  );
}