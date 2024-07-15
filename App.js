import { StatusBar } from 'react-native';

import UniData from './Components/Uni_Data/UniData';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PublicUniversityHome from  './Components/University/PublicUniversityHome';
import  PrivateUniversityHome from  './Components/University/PrivateUniversityHome';
import  MoreUniversitiesHome from './Components/University/MoreUniversityHome'

import  Nursing from './Components/College/Nursing'
import  Teaching from './Components/College/Teaching'
import  AgricHome from './Components/College/AgricHome'

import ColHomePage from './Components/HomePage/ColHomePage';
import UniHomePage from './Components/HomePage/UniHomePage';

import HomePage from './Components/HomePage/HomePage';
import UniversityHome from './Components/University/UniversityHome';
import ScholarshipHome from './Components/Scholarship/ScholarshipHome';
import Updates from './Components/Updates/Updates'
import CollegeHome from './Components/College/CollegeHome'
import  Head  from  './Components/HeadFoot/Head'

        //  PUBLIC UNIVERSITIES

import WinnebaPage from './Components/University/Winneba/WinnebaPage'
import KnustPage from './Components/University/Knust/KnustPage'
import LegonPage from './Components/University/Legon/LegonPage';
import ATUPage from './Components/University/PublicUnis/ATU/ATUPage';


import NaleriguHome from './Components/College/Nalerigu/NaleriguHome'
import AlliedHealth from './Components/College/Nalerigu/Departments/AlliedHealth'
import GeneralNursing from './Components/College/Nalerigu/Departments/GeneralNursing';
import MidWifery from './Components/College/Nalerigu/Departments/MidWifery';
import NursingAssistant from './Components/College/Nalerigu/Departments/NursingAssistant';


import Brochure from './Components/University/Winneba/Brochure';

import FilterPage from './Components/University/Filters/FilterPage';

import Places from './Components/University/Places/Places';

import MatchHome from './Components/MatchMe/MatchHome';

import WinnebaCampus from './Components/University/Winneba/WinnebaCampus';
import AjumakoCampus from './Components/University/Winneba/AjumakoCampus';
import ProgrammesHome from './Components/University/Winneba/ProgrammesHome';
import Footer from './Components/HeadFoot/Footer';


function App() {

const Stack = createNativeStackNavigator();

  return (
    
        <NavigationContainer>
          <Head/>

          <Stack.Navigator 
           initialRouteName="HomePage"
           screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name='HomePage' component={HomePage}  />

            <Stack.Screen name='ColHomePage' component={ColHomePage}  />
            <Stack.Screen name='UniHomePage' component={UniHomePage}  />

            <Stack.Screen name='UniData' component={UniData}  />
            <Stack.Screen name='UniversityHome' component={UniversityHome}  />
            <Stack.Screen name='ScholarshipHome' component={ScholarshipHome}  />
            <Stack.Screen name='Updates' component={Updates}  />
            <Stack.Screen name='CollegeHome' component={CollegeHome}  />

            <Stack.Screen name='LegonPage' component={LegonPage}  />
            <Stack.Screen name='KnustPage' component={KnustPage}  />
            <Stack.Screen name='WinnebaPage' component={WinnebaPage}  />
            <Stack.Screen name='ATUPage' component={ATUPage}  />
          
            <Stack.Screen name='NaleriguHome' component={NaleriguHome}  />

            <Stack.Screen name='AlliedHealth' component={AlliedHealth}  />
            <Stack.Screen name='GeneralNursing' component={GeneralNursing}  />
            <Stack.Screen name='MidWifery' component={MidWifery}  />
            <Stack.Screen name='NursingAssistant' component={NursingAssistant}  />

            <Stack.Screen name='Brochure' component={Brochure}  />

            <Stack.Screen name='FilterPage' component={FilterPage}  />

            <Stack.Screen name='Places' component={Places}  />
            
            <Stack.Screen name='WinnebaCampus' component={WinnebaCampus}  />
            <Stack.Screen name='AjumakoCampus' component={AjumakoCampus}  />

            <Stack.Screen name='ProgrammesHome' component={ProgrammesHome}  />

            <Stack.Screen name='PublicUniversityHome' component={PublicUniversityHome}  />
            <Stack.Screen name='PrivateUniversityHome' component={PrivateUniversityHome}  />
            <Stack.Screen name='MoreUniversitiesHome' component={MoreUniversitiesHome}  />
    
            <Stack.Screen name='Nursing' component={Nursing} />
            <Stack.Screen name='Teaching' component={Teaching} />
            <Stack.Screen name='AgricHome' component={AgricHome} />

            <Stack.Screen name='MatchHome' component={MatchHome} />

          </Stack.Navigator>
          <StatusBar  backgroundColor={'#cecece'}/>

          <Footer/>

        </NavigationContainer>



  );
}

export default App