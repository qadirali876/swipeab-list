import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Header = ({text}) => {
    return(
        <View style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../assets/images/telegram.png')} style={{height: 40, width: 40}} />
            <Text style={styles.headerFont}>{text}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerFont: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
      left: 10
    }
  })