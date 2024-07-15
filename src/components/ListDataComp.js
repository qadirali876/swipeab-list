import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ListDataComp = ({item, onPressUnpin}) => {
    return (
      <View style={styles.listMainConatiner}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/images/telegram.png')}
                style={{height: 18, width: 18}}
              />
              <Text style={[styles.messageFontStyle, {fontSize: 12, left: 5}]}>
                {item?.role}
              </Text>
            </View>
            <View style={{marginVertical: 2}} />
            <View>
              <Text style={[styles.messageFontStyle, {color: 'skyblue'}]}>
                {item?.name}:{' '}
                <Text style={styles.messageFontStyle}>{item?.message}</Text>
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={[styles.messageFontStyle]}>{item?.dateTime}</Text>
            {item?.pin && (
              <TouchableOpacity onPress={() => onPressUnpin(item)}>
                <Image
                  source={require('../assets/images/pin.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
}

export default ListDataComp;

const styles = StyleSheet.create({
  messageFontStyle: {
    fontSize: 11,
    fontWeight: '500',
    color: 'white',
  },
  listMainConatiner: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#494F55',
    borderRadius: 13,
  },
})