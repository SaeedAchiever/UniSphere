import { StyleSheet } from "react-native";

const styles = StyleSheet.create({


       // STYLES FROM WINNEBA PAGE HERE

 
MainTertiaryContainer:{
  marginBottom:60,
  flexGrow:1
},
backContainer:{
  flex:0.8,
  marginLeft:10,
  marginTop:-70
},
backImage:{
  width:25,
  height:25,
},
uniNameContainer:{
  flex:7,
  marginTop:20,
  marginRight:10
},
uniName:{
  fontSize:18,
},
uniLogoContainer:{
  marginTop:20,
  marginLeft:20,
  flex:2.2
},
uniLogoImage:{
  width:60,
  height:60
},
uniHomeChildren:{
  marginLeft:10,
  gap:2
},
uniHomeRevContainer:{
  display:'flex',
  flexDirection:'row',
  gap:-4,
  alignItems:'center',
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
revText:{
  fontSize:11,
  textTransform:'none',
  fontWeight:'400',
  letterSpacing:0.5
}
,
paraContainer:{
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
},
uniLogoMainContainer:{
  alignContent:'center',
  width:'27%',
  height:'auto'
},
uniLogo:{
  width:90,
  height:90,
  resizeMode:'contain'
},
bodyContainer:{
  marginTop:10,
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
  textTransform:'uppercase',
  color:'#000',
  letterSpacing:1,
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

          // /* =======GENERAL REQUIREMENTS========= */
genRegContainer:{
  width:'100%',
  marginTop:30,
  backgroundColor:'#fff',
  paddingVertical:5
},
genReg:{
  alignItems:'center',
  textAlign:'center',
  marginBottom:20
 },
 genRegText:{
  fontSize:20,
  textTransform:'capitalize',
  letterSpacing:1,
  fontWeight:'500',
 },
 entryHeadCont:{
  flexDirection:'row',
  backgroundColor:'#fff',
  alignItems:'center',
  marginBottom:20,
  gap:5
 },
 listImage:{
  marginLeft:20,
  width:20,
  height:20,
 },
 entryHeadText:{
  fontSize:18,
  letterSpacing:1,
  color:'#000',
  marginHorizontal:5,
  width:'95%'
 },
 dropListCont:{
  flexDirection:'row',
  marginLeft:10,
  alignItems:'center',
 },
 dropListText:{
  textTransform:'none',
  fontSize:15,
  paddingHorizontal:15,
  paddingVertical:10,
  marginBottom:5
 },
 dropImage:{
  width:20,
  height:20,
  marginRight:7,
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
  modalBtnContainer:{
    position:'absolute',
    top:10,
    right:30
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
  modalBtnImage:{
    width:30,
    height:30
  },

       // STYLES FROM WINNEBA PAGE ENDS HERE
 

 collegeHomeMainContainer:{
  width:'100%',
  marginBottom:100
 },
 CollegeBgImage:{
  height:210,
  width:'100%',
  alignItems:'flex-start',
  justifyContent:'flex-end',
 },
 CollegeMainName:{
  fontSize:15,
  textTransform:'capitalize',
  opacity:0.8,
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
  display:'flex',
  flexDirection:'row'
 },
 collegeDepartmentImage:{
  width:'100%',
  height:60,
 },
 collegeDepartmentContainer:{
  width:'100%',
 },
 collegeDepartmentText:{
  fontSize:13,
  textTransform:'capitalize',
  fontWeight:'500',
  textAlign:'center',
 },
 collegeHomeBodySubContainer:{
  flexDirection:'column',
  alignItems:'center',
  marginTop:10,
  gap:5,
  width:150,
  borderWidth:1,
  marginHorizontal:4,
  borderColor:'lightblue',
  borderRadius:5,
  paddingBottom:10
 },
 collegeSubContainer:{
  flex:1,
 },
 collegeInfoContainer:{
  width:'100%',
  paddingHorizontal:10,
  alignItems:'center',
  paddingVertical:20,
  borderBottomWidth:1.2,
  borderColor:'lightblue',
 },
 collegeInfoText:{
  fontSize:14,
  fontWeight:'400',
  lineHeight:20
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
  borderRadius:0,
  borderBottomLeftRadius:10,
  borderBottomWidth:2,
  borderLeftWidth:2,
  marginLeft:10,
  backgroundColor:'rgba(100,30,30,0.08)',
 },
 applyText:{
  alignSelf:'center',
  fontSize:10,
  textTransform:'uppercase',
  letterSpacing:1.3,
  fontWeight:'600',
  color:'#333'
 },
 schoolNoteMainContainer:{
  paddingTop:20,
  width:'98%',
  alignSelf:'center',
  position:'relative'
 },
 schoolNoteHeadContainer:{
  width:"87%",
  alignSelf:'center',
  paddingVertical:6
 },
 schoolNoteHeadText:{
  fontSize:17,
  fontWeight:'600',
  textTransform:'none'
 },
 schoolNoteBodyContainer:{
  width:'95%',
  alignSelf:'center'
 },
 schoolNoteBodyText:{
  fontSize:11,
  fontWeight:'500',
  lineHeight:16
 },

//  Application Page

ApplicationPageMainContainer:{
  marginVertical:20,
  width:'100%',
  alignItems:'center'
},
ApplicationPageContainer:{
  width:'95%'
},
ApplicationHeadContainer:{
  width:'90%',
  paddingVertical:10,
  alignContent:'center',
  textAlign:'center',
  justifyContent:'center'
},
ApplicationHeadText:{
  fontSize:17,
  fontWeight:'400',
  paddingLeft:7,
  letterSpacing:1
},
manualApplicationContainer:{
  paddingHorizontal:4,
  paddingVertical:10,
  borderColor:'lightblue',
  borderRadius:10,
  width:'80%',
  alignSelf:'center',
  textAlign:'center',
},
manualApplicationText:{
  textAlign:'left',
  letterSpacing:1,
  fontSize:20,
  fontWeight:'500',
  textTransform:'capitalize'
},
nationalApplicantContainer:{
  paddingVertical:20,
  width:'100%',
  alignSelf:'center'
},
nationalApplicantText:{
  fontSize:15,
  textAlign:'center',
  textTransform:'uppercase',
  letterSpacing:0.3,
  fontWeight:'500',
},
nationalApplicantInfoContainer:{
  width:'97%',
  paddingTop:4,
  gap:5
},
nationalApplicantInfoText:{
  fontSize:15,
  lineHeight:24,
  fontWeight:'400',
},
feesBtnContainer:{
  paddingVertical:15,
  width:'90%',
  alignItems:'center',
  borderWidth:1.3,
  borderColor:'lightblue',
  marginBottom:20,
  alignSelf:'center',
  backgroundColor:'#fff',
  borderRadius:10,
},
feesBtnText:{
  fontSize:17,
  letterSpacing:1,
  textTransform:'uppercase',
  fontWeight:'400'
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
feesMainContainer:{
  paddingVertical:20,
  width:'100%',
  alignItems:'center',
},
feesHeadText:{
  fontSize:16,
  textAlign:'center',
  fontWeight:'700',
  lineHeight:22,
  letterSpacing:0.6
},
feesBodyMainContainer:{
  width:'90%',
  paddingVertical:10,

},
feesBodyContainer:{
  paddingLeft:20,
},
feesBodyMainText:{
  fontSize:14,
  fontWeight:'600',
  letterSpacing:0.7
},

feesBodyTextContainer:{
  marginVertical:10,
  borderWidth:1.7,
  paddingVertical:10,
  paddingLeft:10,
  borderRadius:5,
  borderColor:'lightblue',
},
feesBodyText:{
  fontSize:14,
  fontWeight:'400',
  textTransform:'none'
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
  fontWeight:'400'
},
  facultyBodyMainText:{
  fontSize:13,
  fontWeight:'500'
},
  facultyBodyText:{
  textTransform:'capitalize'
},
  facultyBodyListContainer:{
  gap:6,
  width:'90%',
  paddingLeft:20
},

          // UNIVERSITY CAMPUS STYLE

CampusAddressMainContainer:{
  paddingVertical:20,
  width:'100%',
  alignItems:'center'
},
CampusAddressHeadContainer:{
  width:'70%',
  paddingBottom:15
},
CampusAddressHeadText:{
  fontSize:25,
  fontWeight:'500',
  letterSpacing:1.2,
  textTransform:'uppercase'
},
CampusAddressBodyContainer:{
  width:'90%',
  gap:10
},
CampusAddressodyText:{
  fontSize:15,
  fontWeight:'500'
},


          // APPLICATION  HOME

ProgrammesHomeMainContainer:{
  width:'100%',
  paddingVertical:15,
  alignItems:'center'
},
ProgrammesHomeHeadContainer:{
  width:'80%',
},
ProgrammesHomeHeadText:{
  fontSize:17,
  fontWeight:'600',
  textTransform:'uppercase',
  color:'pink',
  letterSpacing:1
},
ProgrammesHomeBodyContainer:{
  width:'90%',
  flexWrap:'wrap',
  paddingVertical:20,
  alignContent:'center',
  gap:15
},
ProgrammesHomeSubBodyContainer:{
  flexDirection:'row',
  width:'90%',
  alignItems:'center',
  flexWrap:'wrap',
  borderWidth:1.5,
  borderColor:'lightblue',
  borderRadius:5,
},
ProgrammesHomeImage:{
  width:45,
  height:80,
  resizeMode:'cover',
},
ProgrammesHomeText:{
  fontSize:15,
  fontWeight:'600',
  textTransform:'capitalize',
  paddingLeft:'5%'
},

          // MODAL ENTRY REQUIREMENTS HERE 

entryReqModalMainContainer:{
  paddingTop:50,
  width:'100%',
  alignItems:'center',
  paddingBottom:20
},
entryReqModalHeadContainer:{
  width:'80%',
  paddingVertical:10
},
entryReqModalHeadText:{
  fontSize:15,
  fontWeight:'600',
  paddingBottom:10,
  letterSpacing:1
},
entryReqModalBodyContainer:{
  width:'90%',
},
entryReqModalBodyText:{
  fontSize:13,
  fontWeight:'400'
},
entryReqModalBodyMainContainer:{
  paddingVertical:20,
  gap:15,
  width:'100%'
},

      // Brochure here

BrochureMainContainer:{
  width:'100%',
  textAlign:'center',
  justifyContent:'center',
  alignItems:'center',
  gap:20,
  marginTop:20
},
BrochureContainer:{
  width:'88%',
  paddingHorizontal:10,
  paddingVertical:5,
  borderWidth:1.3,
  borderRadius:5,
  borderColor:'lightblue'
},
BrochureText:{
  fontSize:15,
  fontWeight:'500',
  letterSpacing:0.5
},


              //  DISTANCE  MODAL

distanceHomeMainContaier:{
  flexDirection:'row',
  paddingTop:50,
  gap:20,
  paddingHorizontal:20,
  flex:1,
  justifyContent:'center',
},
distanceHomeTown:{
  width:100,
  flexWrap:'wrap',
},
distanceHomeTitleContainer:{
  paddingBottom:10,
},
distanceHomeTitleText:{
  fontSize:15,
  fontWeight:'500',
  textTransform:'none',
  letterSpacing:0.7
},
distanceHomeCenter:{
  flexWrap:'wrap',
  width:160
},
distanceHomeProgramme:{
  flexWrap:'wrap',
  width:200
},
distanceHomeTextContainer:{
  gap:5,
},
distanceHomeMainText:{
  height:50,
  fontSize:12.4,
  fontWeight:'400'
},
modalBtnContainerDistance:{
  marginLeft:'80%',
  marginTop:15
},

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
  alignSelf:'center',
  maxWidth:500,
  borderBottomWidth:2,
  paddingBottom:10,
  borderColor:'#cecece'
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
  display:'flex',
  flexDirection:'row',
  width:'100%',
  paddingVertical:10,
  marginTop:20,
  paddingHorizontal:20,
  gap:20,
},
vTourBodyContainer:{
  width:250,
  height:140,
  position:'relative'
},
vTourBodyTextContainer:{
  alignSelf:'flex-end',
  bottom:5,
  position:'absolute',
  flexDirection:'row',
  gap:7,
  borderWidth:1.3,
  borderColor:"#fff",
  paddingHorizontal:10,
  paddingVertical:5,
  borderRadius:6,
  alignItems:'center',
  backgroundColor:'#fff'
},
vTourBodyText:{
  fontSize:10,
  fontWeight:'500',
  color:'#333',
  textTransform:'capitalize',
  alignItems:'center',
},
galleryDisplay:{
  width:'100%',
  height:'100%',
  minHeight:250,
  maxHeight:270,
  position:'absolute',
  backgroundColor:'rgba(0,0,0,0.9)',
  bottom:0,
  alignItems:'center',
  justifyContent:'center'

},

// Feeds

feedsBodyMainContainer:{
  width:'95%',
  maxWidth:430,
  marginTop:20,
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  alignSelf:'center',
},
feedsBodyContainer:{
  width:'100%',
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  alignSelf:'center',
  borderWidth:1,
  flex:1,
  height:70,
  borderRadius:10,
  backgroundColor:'rgba(217, 126, 237,0.19)'
},
feedslogoImageContainer:{
  width:'20%',
  padding:5,
  borderRadius:10,
  borderRightWidth:1
},
feedslogoImage:{
  width:'100%',
  height:'100%',
  resizeMode:'contain'
},
feedslogoTextContainer:{
  gap:5,
  alignSelf:'center',
  width:'75%',
},
feedslogoTextSubContainer:{
  width:'90%',
  alignSelf:'center',
  flexDirection:'row',
  justifyContent:'space-between'
},
feedslogoText:{
  fontSize:12,
  fontWeight:'600'
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
likesBodyHeadImage:{
  width:20,
  height:20,
  resizeMode:'contain'
},
mainLikeTextContainer:{
  width:'97%',
  alignSelf:'center',
  paddingTop:10
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
mainLike:{
  fontSize:11,
  fontWeight:'400'
},

// Entry Requirement

// entryRegBodyMainContainer:{
//   width:'100%',
//   paddingVertical:20,
//   marginTop:20
// }
})

export default styles