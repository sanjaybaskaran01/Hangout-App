import React from 'react'
import { View , Text, Button } from 'react-native'
import styles from './styles'

const Signin=({navigation})=>{
    return(
    <View style={styles.container}>
        <Button
        title="Sign in with google goes here"
        onPress={()=>{
            navigation.navigate("DrawerNavigationRoutes")
        }} 
        />
    </View>
    )
}

export default Signin