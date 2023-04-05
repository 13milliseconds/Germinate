import {useAuth0} from 'react-native-auth0';
import { Button } from "native-base";

export default LogoutButton = () => {
  const {clearSession} = useAuth0();

  const onPress = async () => {
      try {
          await clearSession({customScheme: 'seedtofruit'});
      } catch (e) {
          console.log(e);
      }
  };

  return <Button onPress={onPress} title="Log out" />
}