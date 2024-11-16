import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HomeScreen } from './src/screens/HomeScreen'
import { ProfileScreen } from './src/screens/ProfileScreen'
import { FeedScreen } from './src/screens/FeedScreen'


type StackParamList = {

  Home: undefined;
  Profile: undefined;
  Feed: undefined;
}

 export type HomeNavigationProps = NativeStackNavigationProp <StackParamList, "Home">

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>()

export default function App() {
  return (
    <NavigationContainer>

      <Navigator>
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Profile' component={ProfileScreen} />
        <Screen name='Feed' component={FeedScreen} />

      </Navigator>

    </NavigationContainer>
  )
} 