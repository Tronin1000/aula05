import { View, Text, Button, StyleSheet } from "react-native"
import { HomeNavigationProps } from "../../App";


type HomeScreenProps = {
    navigation: HomeNavigationProps
}

export const HomeScreen = ({ navigation }:HomeScreenProps) => {
    return (
        <View style={styles.container}>
        <Text>Tela Home</Text>
        <Button title='ir para Profile' onPress={()=> navigation.navigate("Profile")}/>
        <Button title='ir para Feed' onPress={()=> navigation.navigate("Feed")} /> n
        </View>

    );

};

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        gap:7
    }
})