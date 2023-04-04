import React from "react"
import {View, Text, Input, Button} from "native-base"

export default SimpleSignInScreen = ({ navigation, route }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { setUserToken } = route.params;
  
    return (
      <View>
        <Text>Email</Text>
        <Input onChangeText={setEmail} />
        <Text>Password</Text>
        <Input
          onChangeText={setPassword}  
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button title="Sign Up" onPress={() => setUserToken('token')} />
      </View>
    );
  }