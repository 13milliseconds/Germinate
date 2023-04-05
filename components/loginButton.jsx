import {useAuth0} from 'react-native-auth0';
import { Button } from "native-base";

export default LogoutButton = () => {
    const {authorize} = useAuth0();

    const onPress = async () => {
        try {
            await authorize({scope: 'openid profile email'}, {customScheme: 'thisisacustomstring'});
        } catch (e) {
            console.log(e);
        }
    };

  return <Button title="Sign Up" onPress={onPress} />
}