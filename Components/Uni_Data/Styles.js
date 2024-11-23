import { StyleSheet } from "react-native";

const styles = StyleSheet.create({


       // STYLES FROM WINNEBA PAGE HERE

 
MainTertiaryContainer:{
  marginBottom:60,
  flexGrow:1
},
uniHomeChildren:{
  marginLeft:10,
  gap:2,
  width:'70%'
},
uniHomeRevContainer:{
  fontSize:14,
  fontWeight:'500',
  paddingVertical:5,
  color:'#000',
  flexDirection:'row',
  alignItems:'center'
},
revStar:{
  width:15,
  height:15
},
revTextContainer:{
  display:'flex',
  flexDirection:'row',
  marginLeft:'2%'
},
AdmissionStatText:{
  fontSize:14
},
AdmissionStat:{
  paddingVertical:10,
  width:'90%',
  flexDirection:'row',
  justifyContent:'flex-start',
  gap:20
},
paraContainer:{
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  paddingHorizontal:5
},
uniLogoMainContainer:{
  alignContent:'center',
  width:'27%',
  height:100,
  backgroundColor:'rgba(0,0,0,0.07)'
},
uniLogo:{
  width:'100%',
  height:'100%',
  resizeMode:'contain'
},
bodyContainer:{
  marginVertical:20,
  width:'100%',
},
campusesContainer:{
  width:'100',
  marginVertical:20,
  paddingVertical:10,
},
campusesTitleContainer:{
  width:'95%',
  alignItems:'flex-start',
  marginLeft:20,
  marginBottom:7,
  marginTop:20

},
campusesTitle:{
  fontSize:18,
  textTransform:'none',
  color:'#000',
},
mainCampusContainer:{
  width:200,
  height:50,
  alignSelf:'center',
  borderRadius:10,
  borderWidth:1,
  borderColor:'lightblue',
  backgroundColor:'#fff',
  marginVertical:5,
  marginHorizontal:10,
  paddingHorizontal:10,
  justifyContent:'center',
},
mainCampusName:{
  fontSize:15,
  textAlign:'left',
  paddingLeft:12,
  textTransform:'capitalize',
  letterSpacing:0.4,
  fontWeight:'400'
},

  
          // MODAL STYLE

  modalMainContainer:{
    width:'100%',
    paddingVertical:30,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    position:'relative'
  },
  modalHeadContainer:{
    width:'80%',
    paddingVertical:10,
    borderBottomWidth:1,
    marginBottom:10,
    borderColor:'lightblue'
  },
  modalHeadText:{
    fontSize:15,
    fontWeight:'500'
  },
  modalBodyContainer:{
    width:'90%',
    gap:15
  },
  modalBodyText:{
    fontSize:13,
    fontWeight:'400',
    lineHeight:17
  },

       // STYLES FROM WINNEBA PAGE ENDS HERE

 CollegeBgImage:{
  height:210,
  width:'100%',
  alignItems:'flex-start',
  justifyContent:'flex-end',
 },
 CollegeMainName:{
  fontSize:15,
  letterSpacing:1,
  color:'#fff',
  paddingLeft:10,
  width:'90%'
 },
 CollegeMainLocation:{
  fontSize:12,
  color:'#fff',
  paddingLeft:10
 },

 // collegeHomeBodyMainContainer

 collegeHomeBodyMainContainer:{
  width:'100%',
  paddingVertical:20,
  alignItems:'center',
 },
 collegeHomeHeadContainer:{
  width:'80%',
 },
 collegeHomeHeadText:{
  fontSize:18,
  fontWeight:'500',
  letterSpacing:0.4
 },
 collegeHomeBodyContainerTwo:{
  width:'95%',
  alignSelf:'center',
  gap:10
 },
 // Entry Requirements

 collegeMainEntryRequirementsContainer:{
  paddingHorizontal:20,
  paddingVertical:10,
  borderWidth:2,
  marginVertical:20,
  width:'80%',
  alignItems:'center',
  borderColor:'lightblue',
  borderRadius:7
 },
 collegeMainEntryRequirementsText:{
  fontSize:20,
  textTransform:'capitalize',
  fontWeight:'400',
  letterSpacing:1
 },
 applyContainer:{
  paddingVertical:12,
  maxWidth:'60%',
  alignSelf:'left',
  marginTop:10,
  alignItems:'center',
  borderColor:'#999',
  borderBottomLeftRadius:10,
  borderBottomWidth:2,
  borderLeftWidth:2,
  marginLeft:10,
  backgroundColor:'rgba(100,30,30,0.08)',
 },
 applyText:{
  alignSelf:'center',
  fontSize:14,
  textTransform:'uppercase',
  letterSpacing:1.3,
  fontWeight:'700',
  color:'#333'
 },
 schoolNoteMainContainer:{
  paddingTop:20,
  width:'98%',
  alignSelf:'center',
  position:'relative',
  paddingVertical:10
 },
 schoolNoteHeadContainer:{
  width:"90%",
  alignSelf:'center',
  paddingVertical:6,
 },
 schoolNoteBodyContainer:{
  width:'95%',
  alignSelf:'center'
 },
 schoolNoteBodyText:{
  fontSize:12,
  fontWeight:'500',
 },
 loadMoreTextContainer:{
  width:200,
  // alignSelf:'center',
  marginLeft:'10%',
  paddingVertical:10,
  borderWidth:1.3,
  borderRadius:10,
  marginTop:20,
  backgroundColor:'rgba(0, 0, 200, 0.1)'  
 },
 loadMoreText:{
 fontSize:16,
 fontWeight:'500',
 textAlign:'center',
 color:'#000'
 },

        //  FEES  HERE 

        overviewHeadTitleContainer:{
          display:'flex',
          flexDirection:'row',
          marginLeft:"7%",
          gap:3,
          alignItems:'center',
         },
         overviewHeadTitle:{
          fontSize:14,
          fontWeight:'500',
          letterSpacing:0.5,
         },
         overviewHeadImage:{
          width:30,
          height:30
         },
feesHeadText:{
  fontSize:16,
  textAlign:'center',
  fontWeight:'700',
  lineHeight:22,
  letterSpacing:0.6
},
feesBodyMainText:{
  fontSize:14,
  fontWeight:'600',
  letterSpacing:0.7
},

modalFeeHeadContainer:{
  paddingVertical:20,
  borderBottomWidth:3,
  borderBlockColor:'lightblue',
},
modalFeeHeadTextContainer:{
  paddingTop:20,
  width:'90%',
  alignItems:'center',
  flexWrap:'wrap'
},
modalFeeHeadText:{
  fontSize:16,
  fontWeight:'500',
  letterSpacing:1,
  color:'gold',
  paddingHorizontal:15
},
feeModalMainContainer:{
  flexDirection:'row',
  paddingHorizontal:10,
  marginTop:20,
  marginBottom:100
},
SerialNumMainContainer:{
  borderWidth:0.5,
  width:50,
  alignItems:'center',
},
FacultyMainContainer:{
  borderWidth:0.5,
  width:250,
  alignItems:'center',
},
ContainerOne:{
  borderWidth:0.5,
  width:'100%',
  alignItems:'center',
  height:50,
  justifyContent:'center',
  paddingHorizontal:5,
},
MainUniFeesContainer:{
  borderWidth:0.5,
  width:115,
  alignItems:'center',
},
MainUniFeesText:{
  fontSize:10,
  fontWeight:'900'
},
ContainerTwo:{
  borderWidth:0.5,
  width:'100%',
  alignItems:'center',
  height:60,
  justifyContent:'center'
},
ContainerTwoText:{
  fontSize:11,
  fontWeight:'500'
},
ContainerThree:{
  borderWidth:0.5,
  width:'100%',
  alignItems:'center',
  height:100,
  justifyContent:'center'
},
ContainerThreeText:{
  fontSize:10,
  fontWeight:'500'
},
ContainerFour:{
  borderWidth:0.5,
  width:'100%',
  alignItems:'center',
  height:70,
  justifyContent:'center'
},

        // FACULTY  STYLES  

facultyMainContanier:{
  width:'100%',
  backgroundColor:'#fff',
},
  facultyBgPic:{
  width:'100%',
  height:200,
  alignItems:'center',
  justifyContent:'center'
},
  facultyTitle:{
  paddingHorizontal:5,
  fontSize:20,
  fontWeight:'500',
  textTransform:'uppercase',
  color:'#fff',
},
  facultyBodyContainer:{
  width:'93%',
  alignSelf:'center',
  paddingVertical:15,
  gap:15
},
  facultyBodyText:{
  fontSize:13,
  fontWeight:'400',
  textTransform:'capitalize'
},
  facultyBodyMainText:{
  fontSize:13,
  fontWeight:'500'
},
  facultyBodyListContainer:{
  gap:6,
  width:'90%',
  paddingLeft:20
},


// //           // APPLICATION  HOME

// // ProgrammesHomeMainContainer:{
// //   width:'100%',
// //   paddingVertical:15,
// //   alignItems:'center'
// // },
// // ProgrammesHomeHeadContainer:{
// //   width:'80%',
// // },
// // ProgrammesHomeHeadText:{
// //   fontSize:17,
// //   fontWeight:'600',
// //   textTransform:'uppercase',
// //   color:'pink',
// //   letterSpacing:1
// // },
// // ProgrammesHomeBodyContainer:{
// //   width:'90%',
// //   flexWrap:'wrap',
// //   paddingVertical:20,
// //   alignContent:'center',
// //   gap:15
// // },
// // ProgrammesHomeSubBodyContainer:{
// //   flexDirection:'row',
// //   width:'90%',
// //   alignItems:'center',
// //   flexWrap:'wrap',
// //   borderWidth:1.5,
// //   borderColor:'lightblue',
// //   borderRadius:5,
// // },
// // ProgrammesHomeImage:{
// //   width:45,
// //   height:80,
// //   resizeMode:'cover',
// // },
// // ProgrammesHomeText:{
// //   fontSize:15,
// //   fontWeight:'600',
// //   textTransform:'capitalize',
// //   paddingLeft:'5%'
// // },

// //           // MODAL ENTRY REQUIREMENTS HERE 

// // entryReqModalMainContainer:{
// //   paddingTop:50,
// //   width:'100%',
// //   alignItems:'center',
// //   paddingBottom:20
// // },
// // entryReqModalHeadContainer:{
// //   width:'80%',
// //   paddingVertical:10
// // },
// // entryReqModalHeadText:{
// //   fontSize:15,
// //   fontWeight:'600',
// //   paddingBottom:10,
// //   letterSpacing:1
// // },
// // entryReqModalBodyContainer:{
// //   width:'90%',
// // },
// // entryReqModalBodyText:{
// //   fontSize:13,
// //   fontWeight:'400'
// // },
// // entryReqModalBodyMainContainer:{
// //   paddingVertical:20,
// //   gap:15,
// //   width:'100%'
// },

// Rating Here

schoolRatingMainContainer:{
  width:'100%',
  height:'auto',
  backgroundColor:'#fff',
  paddingBottom:10,
  position:'relative',
  minHeight:300
},
schoolNoteBodyBox:{
  width:'90%',
  maxWidth:500,
  minHeight:60,
  alignSelf:'center',
  marginTop:20,
},
schoolNoteBodyBoxHeader:{
  display:'flex',
  flexDirection:'row',
  gap:10,
  justifyContent:'flex-end',
  width:'90%'
},
schoolNoteBodyBoxHeaderStar:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  gap:3
},
schoolNoteBodyBoxHeaderStarText:{
  fontSize:13,
  fontWeight:'500'
},
schoolNoteBodyBoxHeaderStarImage:{
  width:20,
  height:20
},
schoolNoteBodyBoxBody:{
  position:'absolute',
  width:'90%',
  maxWidth:500,
  height:150,
  borderWidth:1,
  borderRadius:10,
  borderColor:'gold',
  alignSelf:'center',
  top:-10,
  backgroundColor:'rgba(0,0,200,0.10)',
  zIndex:100,
  justifyContent:'center'
},
schoolNoteSubBoxMainContainer:{
  width:'100%',
  backgroundColor:'rgba(0,200,0,0.16)',
  minHeight:260,
  paddingTop:120,
},
schoolNoteSubBoxContainer:{
  display:'flex',
  flexDirection:'row',
  paddingHorizontal:20,
  gap:20
},
schoolNoteSubMainBox:{
  minWidth:130,
  maxHeight:100,
  borderWidth:1.5,
  borderColor:'lightblue',
  borderRadius:10,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'rgba(120,130,120,0.5)'
},
schoolNoteSubMainBoxImage:{
  width:100,
  height:40,
  resizeMode:'contain'
},
schoolNoteRateBox:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  alignSelf:'center',
  gap:10
},
schoolNoteRateLength:{
  width:'65%',
  height:8,
  backgroundColor:'rgba(0,0,0,0.15)',
  position:'relative',
  borderRadius:10
},
schoolNoteRateLengthTwo:{
  position:'absolute',
  height:"100%",
  backgroundColor:'rgba(100,0,100,0.9)',
  borderRadius:10
},


        // HEY  ALL SCROLLING HERE

horHeadersMainContaineter:{
  display:'flex',
  flexDirection:'row',
  width:'100%',
  paddingVertical:15,
  marginVertical:10,
  backgroundColor:'rgba(50,130,50,0.099)'
},
horHeadersContaineter:{
  paddingHorizontal:10,
  borderLeftWidth:1.5,
  borderColor:'#333'
},
horHeadersTitle:{
  fontSize:15,
  fontWeight:'500',
  textTransform:'none',
  letterSpacing:0.4,
},
horBodyMainContainer:{
  borderBottomWidth:1.5,
  borderColor:'lightblue'
},
FaqMainContainer:{
  width:'100%',
  paddingVertical:20,
  backgroundColor:'#fff'
},
FAQquestionMainHead:{
  width:'98%',
  alignSelf:'center',
  position:'relative'
},
answerContainer:{
  width:'100%',
  alignSelf:'center',
  marginTop:10,
  borderTopRightRadius:20,
},
answerText:{
  fontSize:11,
  fontWeight:'400',
  color:'#333'
},
FAQquestionHead:{
  width:'85%',
  alignSelf:'center',
  paddingVertical:10
},
FAQquestionHeadText:{
  fontSize:17,
  fontWeight:'500'
},
FAQquestionBody:{
  width:'98%',
  maxWidth:500,
  borderBottomWidth:2,
  paddingBottom:10,
  borderColor:'#cecece',
  paddingVertical:10,
  alignSelf:'center'
},
FAQquestionBodyText:{
  fontSize:11,
  fontWeight:'400'
},
QuestionArrowContainer:{
  alignSelf:'flex-end'
},
QuestionArrow:{
  width:30,
  height:30
},
vTourBodyMainContainer:{
  width:'100%',
  paddingVertical:10,
  marginTop:20,
  alignSelf:'center',
},
vTourBodyContainer:{
  width:'100%',
  height:170,
  resizeMode:'cover',
  position:'relative',
},
vTourBodyTextContainer:{
  flexDirection:'row',
  justifyContent:'center',
  gap:7,
  borderWidth:1.3,
  borderColor:"#000",
  paddingHorizontal:10,
  paddingVertical:5,
  borderRadius:6,
  alignItems:'center',
  backgroundColor:'rgba(0,100,200,0.7)',
  width:'50%',
  alignSelf:'center',
  position:'absolute',
  bottom:0,
  right:0
},
vTourBodyText:{
  fontSize:10,
  fontWeight:'500',
  color:'#fff',
  textTransform:'capitalize',
},
galleryDisplay:{
  width:'100%',
  height:'100%',
  minHeight:300,
  maxHeight:320,
  position:'absolute',
  backgroundColor:'rgba(0,0,0,0.7)',
  bottom:0,
  alignItems:'center',
  justifyContent:'center',
  gap:20,
},
imageContainer:{
  flexDirection:'row',
  alignSelf:'center',
  maxWidth:350,
  height:'100%',
  paddingHorizontal:5
},
preloader:{
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginLeft: -25,
  marginTop: -25,
},
mainImage:{
  width:'100%',
  height:'100%',
  resizeMode:'contain',
  alignSelf:'center'
},
closeBtn:{
  position:'absolute',
  top:10,
  right:10,
  backgroundColor:'#cfcfcf',
},
closeImage:{
  width:30,
  height:30,
},
virtualButton:{
  width:'50%',
  flexDirection:'row',
  alignItems:'center',
  gap:10,
  paddingVertical:7,
},

// Feeds

feedsBodyMainContainer:{
  width:'95%',
  maxWidth:430,
  marginTop:20,
  display:'flex',
  alignItems:'center',
  alignSelf:'center',
},
feedsBodyContainer:{
  width:'100%',
  display:'flex',
  alignItems:'center',
  alignSelf:'center',
  flex:1,
  borderRadius:10,
},
feedslogoImageContainer:{
  width:'25%',
  height:"100%"
},
feedslogoImage:{
  resizeMode:'contain',
width:80,
height:80
},
feedslogoTextContainer:{
  gap:5,
  alignSelf:'center',
  width:'100%',
  backgroundColor:'rgba(0,0,0,0.08)',
  padding:5,
  alignContent:'center',
  justifyContent:'center',
  borderRadius:10
},
feedslogoText:{
  fontSize:16,
  fontWeight:'700',
},
feedsReqText:{
  fontSize:13,
  fontWeight:'400',
  paddingHorizontal:10,
  lineHeight:16,
  paddingVertical:10
},
feedslogoTextSubContainer:{
  width:'100%',
  alignSelf:'center',
  justifyContent:'center',
  paddingTop:10,
},
// LIKES
likesBodyMainContainer:{
  width:'97%',
  alignSelf:'center',
  paddingTop:20
},
likesBodyHeadContainer:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  gap:5,
  width:"85%",
  alignSelf:'center'
},
mainLikeTextContainer:{
  width:'97%',
  alignSelf:'center',
  paddingTop:10,
  gap:10
},
mainLikeTextSubContainer:{
  gap:10
},
mainLikeContainer:{
  gap:5,
  backgroundColor:'rgba(0,0,0,0.07)',
  paddingVertical:20,
  paddingHorizontal:10
},
mainLikeHead:{
  fontSize:12,
  fontWeight:'500',
  paddingLeft:10
},

// Distance Learning

distanceLearningMainContainer:{
  width:'100%',
  height:'auto',
  paddingVertical:10,
  marginBottom:50
},
noCoursesText:{
  fontSize:15,
  fontWeight:'500',
  paddingLeft:20
},
distanceLearningHeaderContainer:{
  width:'85%',
  alignSelf:'center',
  paddingVertical:10
},
distanceLearningHeaderTitle:{
  fontSize:17,
  fontWeight:'500'
},
distanceLearningBodyMainContainer:{
  width:'95%',
  alignSelf:'center'
},
distanceLearningBodyTitle:{
  fontSize:12,
  fontWeight:'normal'
},
scrollregionsButton:{
  alignItems:'center',
  justifyContent:'center',
  paddingLeft:10,
  marginTop:40,
  marginBottom:20,
  borderWidth:1,
  marginHorizontal:10,
  paddingHorizontal:15,
  paddingVertical:5,
  borderRadius:5,
  backgroundColor:'rgba(0,0,0,0.7)'
},
scrollregionsButtonText:{
  fontSize:12,
  fontWeight:'500',
  textAlign:'center',
  color:'#ffffff'
},

// Table
tableBodyMainContainer:{
  width:500,
  borderTopWidth:1,
  alignSelf:'center',
  marginHorizontal:10
},
tableMainContainer:{
  alignSelf:'center',
  borderLeftWidth:1,
  borderRightWidth:1,
  height:'auto',
  width:'100%',
  borderBottomWidth:1
},
tableContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
},
tableMiddle:{
  borderLeftWidth:1,
  borderRightWidth:1,
  width:'30%',
},
table:{
  paddingVertical:10,
  justifyContent:'center',
  alignItems:'flex-start',
  paddingHorizontal:5
},
tabletitle:{
  fontSize:18,
  fontWeight:'500',
  textAlign:'center',
  alignSelf:'center'
},
FAQquestionBody:{
  paddingVertical:10,
}
})

export default styles