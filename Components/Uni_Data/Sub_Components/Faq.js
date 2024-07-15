import { 
 View, 
 Text, 
 Image, 
} from 'react-native'
import React, {useState} from 'react'


import styles from '../Styles'

const Arrow = require('../../../assets/arrow.png')
const ArrowDown = require('../../../assets/close.png')

const Faq = () => {

  const [isAnswerVisible, setIsAnswerVisible] = useState(0)
  const [isArrowTop, setIsArrowTop] = useState(Arrow)


  return (
   <View style={styles.FaqMainContainer}>
   <View style={styles.schoolNoteHeadContainer}>
     <Text style={styles.schoolNoteHeadText}>FAQ</Text>
   </View>

   <View>

     {/* Question */}

     <View style={styles.FAQquestionMainHead}>
       <View style={styles.FAQquestionHead}>
         <Text style={styles.FAQquestionHeadText}>Question</Text>
       </View>
       <View style={styles.FAQquestionBody}>
         <Text style={styles.FAQquestionBodyText}>
           Nisi id reprehenderit sunt anim mollit sit sint nisi 
           est deserunt aute ea duis quis. Irure dolore minim 
           occaecat est dolore dolor do consectetur ullamco 
           aliquip. Id qui commodo velit excepteur sunt nulla anim.
         </Text>
         <View
          style={styles.QuestionArrowContainer}
          onTouchEnd={()=>{
            setIsAnswerVisible(isAnswerVisible ===  0 ? 'auto' : 0)
           }}
         >
           <Image  
             source={isArrowTop}
             style={styles.QuestionArrow}
           />
         </View>

         {/* Answer */}

         <View style={[styles.answerContainer,{height:isAnswerVisible}]}>
         <View style={styles.FAQquestionHead}>
         <Text style={styles.FAQquestionHeadText}>Answer</Text>
       </View>
           <Text style={styles.answerText}>Occaecat incididunt duis non esse nisi. Et sunt consectetur sint proident enim aliquip. Ipsum adipisicing ullamco ipsum cupidatat nostrud consequat culpa sunt. Ut in magna ipsum elit adipisicing pariatur labore aliqua cillum voluptate velit. Id est deserunt qui cillum ipsum ullamco nisi duis. Cupidatat commodo velit sint commodo et sint ea laborum.</Text>
         </View>
       </View>
     </View>

     {/* Question */}

     <View style={styles.FAQquestionMainHead}>
       <View style={styles.FAQquestionHead}>
         <Text style={styles.FAQquestionHeadText}>Question</Text>
       </View>

       <View style={styles.FAQquestionBody}>
         <Text style={styles.FAQquestionBodyText}>
           Nisi id reprehenderit sunt anim mollit sit sint nisi 
           est deserunt aute ea duis quis. Irure dolore minim 
           occaecat est dolore dolor do consectetur ullamco 
           aliquip. Id qui commodo velit excepteur sunt nulla anim.
         </Text>
         <View
          style={styles.QuestionArrowContainer}
         >
           <Image  
             source={Arrow}
             style={styles.QuestionArrow}
           />
         </View>

       </View>
     </View>

     {/* Question */}

     <View style={styles.FAQquestionMainHead}>
       <View style={styles.FAQquestionHead}>
         <Text style={styles.FAQquestionHeadText}>Question</Text>
       </View>
       
       <View style={styles.FAQquestionBody}>
         <Text style={styles.FAQquestionBodyText}>
           Nisi id reprehenderit sunt anim mollit sit sint nisi 
           est deserunt aute ea duis quis. Irure dolore minim 
           occaecat est dolore dolor do consectetur ullamco 
           aliquip. Id qui commodo velit excepteur sunt nulla anim.
         </Text>
         <View style={styles.QuestionArrowContainer}>
           <Image  
             source={Arrow}
             style={styles.QuestionArrow}
           />
         </View>
       </View>
     </View>

     <View style={styles.applyContainer}>
       <Text style={styles.applyText}>
         Read More
       </Text>
     </View>

   </View>

</View>
  )
}

export default Faq