import { View, SafeAreaView, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './Styles';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary


import Header from './Sub_Components/Header';
import Campus from './Sub_Components/Campuses';
import Rating from './Sub_Components/Rating';
import Scrol_Elem from './Sub_Components/Scrol_Elem';
import Courses from './Sub_Components/Courses';
import Faq from './Sub_Components/Faq';
import Virt_Tour from './Sub_Components/Virt_Tour';
import Feeds from './Sub_Components/Feeds';
import Like_Dislike from './Sub_Components/Like_Dislike';

const data = [
  { id: '1', component: Header },
  { id: '2', component: Campus },
  { id: '4', component: Scrol_Elem },
  { id: '5', component: Courses },
  { id: '7', component: Rating },
  { id: '8', component: Virt_Tour },
  // { id: '9', component: Feeds },
  { id: '10', component: Like_Dislike },
  { id: '11', component: Faq },
];

const UniData = () => {
  const route = useRoute();
  const { university } = route.params;

  const renderItem = ({ item }) => {
    const SubComponent = item.component;
    return (
      <ErrorBoundary>
        <SubComponent title={`Subcomponent ${item.id}`} university={university} />
      </ErrorBoundary>
    );
  };


  return (
    <SafeAreaView>

      <View style={styles.MainTertiaryContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default UniData;
