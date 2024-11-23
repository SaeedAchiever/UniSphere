import { 
  View, 
  Text, 
  Image, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';
import React, { useState, memo, useEffect } from 'react';
import styles from '../Styles';
import faqData from '../../University/json/faq.json';

const Arrow = require('../../../assets/arrow.png');
const ArrowDown = require('../../../assets/arrowup.png');

const Faq = ({ university }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Find the matching FAQs for the university
    const matchedUniversity = faqData.find(f => f.name === university.name);
    if (matchedUniversity) {
      setFaqs(matchedUniversity.faq || []);
    }
  }, [university.name]);

  const toggleAnswer = (index) => {
    if (isAnswerVisible === index) {
      setIsAnswerVisible(null);
    } else {
      setIsAnswerVisible(index);
    }
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 2);

  return (
    <View style={styles.schoolNoteMainContainer}>
      <View style={styles.schoolNoteHeadContainer}>
        <Text style={styles.campusesTitle}>FAQ</Text>
      </View>

      <View>
        <FlatList
          data={displayedFaqs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.FAQquestionMainHead} key={index}>
              <View style={styles.schoolNoteBodyContainer}>
                <Text style={styles.schoolNoteBodyContainer}>Question</Text>
              </View>
              <View style={styles.FAQquestionBody}>
                <Text style={styles.schoolNoteBodyText}>{item.question}</Text>
                <TouchableOpacity
                  style={styles.QuestionArrowContainer}
                  onPress={() => toggleAnswer(index)}
                >
                  <Image
                    source={isAnswerVisible === index ? ArrowDown : Arrow}
                    style={styles.QuestionArrow}
                  />
                </TouchableOpacity>

                {/* Answer */}
                {isAnswerVisible === index && (
                  <View style={styles.answerContainer}>
                    <View style={styles.FAQquestionBody}>
                      <Text style={styles.schoolNoteBodyContainer}>Answer</Text>
                    </View>
                    <Text style={styles.schoolNoteBodyText}>{item.answer}</Text>
                  </View>
                )}
              </View>
            </View>
          )}
        />

        <TouchableOpacity style={styles.applyContainer} onPress={toggleShowAll}>
          <Text style={styles.applyText}>
            {showAll ? 'Read Less' : 'Read More'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(Faq);
