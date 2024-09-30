import {View,FlatList } from 'react-native'

import styles from '../HomePage/HomeStyle'

import { SafeAreaView } from 'react-native-safe-area-context';
import UniversityHead from './UniversityHead';
import UniversityBody from './UniversityBody';

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
      <View style={styles.HomeContainer}>

          <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
          />
          
        </View>
      </SafeAreaView>

    );
  };
  

export default UniversityHome