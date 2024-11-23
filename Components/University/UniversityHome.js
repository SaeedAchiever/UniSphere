import {View,FlatList } from 'react-native'

import styles from '../HomePage/HomeStyle'

import { SafeAreaView } from 'react-native-safe-area-context';
import UniversityHead from './UniversityHead';
import UniversityBody from './UniversityBody';
import Footer from '../HeadFoot/Footer';

const data  = [
  {  id : '1', component  : UniversityHead  },
  {  id : '2', component  : UniversityBody  },
]

const UniversityHome = () => {

  

   const renderItem = ({item}) => {
      const SubComponent  = item.component
      return  <SubComponent title={SubComponent}  key={item=>item.id}/>
    }
    
  return (
    <SafeAreaView>
      <View style={[styles.HomeContainer, {paddingBottom:40}]}>

          <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
          />
          
        </View>
        <Footer />
      </SafeAreaView>

    );
  };
  

export default UniversityHome