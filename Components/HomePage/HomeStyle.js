import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 appContainer:{
  flex:1,
  backgroundColor:'#fff',
  alignItems:'flex-start',
  justifyContent:'flex-start'
 },
 HomeContainer:{
  backgroundColor:'#fff', 
 },

             // MENU BUTTON

  headerContainer:{
   width:'100%',
   // height:  deviceWidth >  500 ? 200  : 10,
   backgroundColor:'#fff',
   flexDirection:'row',
   justifyContent:'flex-end',
   alignItems:'center',
   borderBottomWidth:7,
   borderBottomColor:'rgba(198, 201, 237, 0.8)',
  },
  // menuImage:{
  //  width:35,
  //  height:35,
  //  marginRight:20
  // },

        // FOOTER
      
        footerMainContainer:{
          position:'absolute',
          bottom:0,
          left:0,
          width:'100%',
          height:80,
          backgroundColor:'lightblue',
          textAlign:'center',
          justifyContent:'center',
        },
        footerContainer:{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          paddingHorizontal:8,
          flex:1
        },

      // WELCOME STYLE

    welcomeMainContainer:{
      width:'100%',
      paddingVertical:10,
      marginVertical:10,
      flexWrap:'wrap',
      alignItems:'center',
      backgroundColor:'#fff'
    },
    welcomeContainer:{
      flex:1,
      width:'95%',
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
    },
    welcomeImageContainer:{
      marginLeft:'5%'
    },
    welcomeNoteContainer:{
      paddingHorizontal:  '7%'
    },
    welcomeNoteText:{
      // fontSize:15,
      fontWeight:'300'
    },

                //  RECOMMENDATIONS 

    recommendationMainContainer:{
      width:'100%',
      height:200,
      flexDirection:'column'
    },
    recommendationHeadContainer:{
      padding:10,
      width:'100%',
      flexDirection:'row',
      alignItems:"center",
    },
    recommendationHeadText:{
      textTransform:'capitalize',
      fontWeight:'500',
      fontStyle:'italic',
    },
    recommendationContainer:{
      backgroundColor:'rgba(239, 207, 223, 0.8)',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:5
    },
    recommendationTextImageContainer:{
      flexDirection:'column',
      flex:0.5,
      alignItems:'center',
      justifyContent:'center'
    },
    recommendationImage:{
      width:'90%',
      height:'90%'
    },

             // TOP PLACES  TO  STUDY

    topPlaceMainContainer:{
      width:'100%',
      paddingVertical:10,
      alignItems:'center'
    },
    topPlaceHeadContainer:{
      paddingVertical:10,
      width:'100%',
      marginLeft:30,
      flexDirection:'row',
    },
    topPlaceContainer:{
      width:'90%',
      flexDirection:'row',
    },
    placeContainer:{
      width:150,
      alignItems:'center',
      justifyContent:'center',
      padding:5,
      marginHorizontal:5
    },

              // USER FIELD

    userFieldMainContainer:{
      width:'100%',
      paddingVertical:20,
      alignItems:'center',
      justifyContent:'center'
    },
    userFieldHeadContainer:{
      width:'88%',
      paddingVertical:7,
      textAlign:'center',
      marginBottom:20
    },
    userFieldHeadText:{
      textTransform:'capitalize',
      fontSize:19,
      fontWeight:'300',
      fontStyle:'italic'
    },
    userFieldBodyContainer:{
      width:'95%',
      flexDirection:'row',
      justifyContent:'space-around'
    },

            // PREFERANCE

    preferanceMainContainetr:{
      width:'100%',
      paddingVertical:10,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
    },
    preferanceHeadContainer:{
      width:'100%',
      paddingVertical:10,
      borderBottomWidth:1.5,
      borderBottomColor:'lightblue',
    },
    preferanceHeadText:{
      // later style
    },
    preferanceBodyContainer:{
      width:'90%',
      marginVertical:10,
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between',
      padding:5,
      borderColor:'lightgreen',
      borderWidth:1,
      borderRadius:10
    },
    preferanceSchoolText:{
      fontSize:15,
    },

    
        //  TOP IN SPECIFIC FIELD AND CERTIFICATION 
    topCertificationMainContainer:{
      width:'100%',
      flexDirection:'column',
      alignItems:'center',
    },
    topCertificationHeadContainer:{
      width:'83%',
      flexDirection:'row',
      alignItems:'center'
    },
    topCertificationBodyContainer:{
      flexDirection:'row',
      paddingVertical:5,
    },
    mainInnerCertificationContainer:{
      margin:7,
      
    },
    InnerCertificationContainer:{
      flexDirection:'row',
      alignItems:'center',
      width:187,
      marginVertical:5,
      borderWidth:1,
      paddingLeft:3,
      borderColor:'lightblue',
      borderRadius:5
    },

              // CATEGORIES  STYLE

    categoriesMainContainer:{
      width:'100%',
      paddingVertical:20,
      backgroundColor:'rgba(72, 40, 145, 0.05)',
      alignItems:'center'
    },
    categoriesHeadContainer:{
      width:'80%',
      flexDirection:'column',
      paddingVertical:10
    },
    categoriesHeadText:{
      // later
    },
    categoriesButtonContainer:{
      width:'100%',
      alignItems:'center',
      display:'flex',
      justifyContent:'space-around',
      flexDirection:'row'
    },

      // SCHOLARSHIP

      scholarshipMainContainer:{
        width:'100%',
        paddingVertical:20,
        alignItems:'center'
      },
      scholarshipHeadContainer:{
        width:'80%',
        marginLeft:20,
        flexDirection:'row',
        alignItems:'center'
      },
      scholarshipBodyContainer:{
        width:'94%',
        backgroundColor:'lightblue',
        paddingVertical:10,
        alignItems:'center',
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-around',
        borderTopLeftRadius:100,
        borderBottomLeftRadius:100
      },

            //  STUDENT LOAN

    loanMainContainer:{
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      flex:1,
      backgroundColor:'#fff',
      marginBottom:130
    },
    loanHeadContainer:{
      width:'80%',
      marginVertical:20
    },
    loanHeadText:{
        // later styles
    },
    loanContainer:{
      flexDirection:'row',
      width:'95%',
      height:'100',
      backgroundColor:'rgba(221, 241, 235, 0.84)',
      padding:15,
      borderTopEndRadius:100,
      borderBottomEndRadius:100
    },
    loanText:{
      flex:0.65,
    },
    loanImage:{
      flex:0.35
    },
    Button:{
      marginVertical:5,
      paddingVertical:10,
      alignItems:'center',
      borderWidth:1.3,
      paddingHorizontal:'3%',
      borderColor:'lightblue',
      borderRadius:50
    },
    ButtonText:{
      fontSize:15,
      fontStyle:'italic',
      fontWeight:'300',
      textTransform:'capitalize'
    }
})

export default styles