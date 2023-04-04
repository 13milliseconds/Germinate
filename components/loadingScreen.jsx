import React from "react";
import { Text, View, Spinner } from "native-base";

export default LoadingScreen =  () => {

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Getting token...</Text> 
    <Spinner accessibilityLabel="Loading" />
  </View> 
} 