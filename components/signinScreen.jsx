import React from "react"
import {View, Text, Input} from "native-base"
import LoginButton from "./loginButton";

export default SimpleSignInScreen = ({ navigation, route }) => {
    
    return (
      <View>
        <Text>Sign In Now</Text>
        <LoginButton />
      </View>
    );
  }