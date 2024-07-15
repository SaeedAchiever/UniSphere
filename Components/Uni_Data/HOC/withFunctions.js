import { View } from 'react-native'
import React from 'react'

const withFunctions = (WrappedComponent) => {

  return (props) => {
   // funtions
  }
  

  return (
    <View>
      <WrappedComponent {...props}/>
    </View>
  )
}

export default withFunctions