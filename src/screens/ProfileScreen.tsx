import { View, Text, Button } from "react-native"
import { ProfileScreenProps } from "../types/navigation";


export const ProfileScreen = ({ navigation, route }: ProfileScreenProps) => {
    const {name} = route.params
    
    return (
        <View>

            <Text>Tela Profile</Text>
            <Button title='ir para Feed' onPress={()=> navigation.navigate("Feed")} />    
        </View>

    );

};