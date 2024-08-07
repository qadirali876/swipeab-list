import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {dummyData} from '../utilites/dummyData';
import ListDataComp from '../components/ListDataComp';
import {sortArrayData} from '../utilites/helperFunctions';
const screenWidth = Dimensions.get('window').width;

const MainScreen = gestureHandlerRootHOC(() => {
  const swipeableRefs = useRef([]);
  const [data, setData] = useState(dummyData);

  const Separator = () => <View style={styles.itemSeparator} />;

  const leftSwipeActions = () => {
    return (
      <View
        style={[
          styles.swipeContainerStyle,
          {backgroundColor: 'skyblue', alignItems: 'flex-start'},
        ]}>
        <Image
          source={require('../assets/images/pin.png')}
          style={{height: 20, width: 20}}
        />
      </View>
    );
  };

  const rightSwipeActions = item => {
    return (
      <View
        style={[
          styles.swipeContainerStyle,
          {backgroundColor: item?.pin ? 'skyblue' : 'red'},
        ]}>
        <Image
          source={ item?.pin ? require('../assets/images/pin.png') : require('../assets/images/delete.png')}
          style={{height: 20, width: 20}}
        />
      </View>
    );
  };

  const handleSwipeableOpen = index => {
    setTimeout(() => {
      swipeableRefs.current[index]?.close();
    }, 50);
  };

  const swipeFromLeftOpen = item => {
    addPinToItems(item);
  };
  const swipeFromRightOpen = item => {
    deleteIndex(item);
  };

  const ListItem = ({item, index}) => {
    return (
      <Swipeable
        ref={ref => (swipeableRefs.current[index] = ref)}
        renderLeftActions={() => leftSwipeActions(index)}
        renderRightActions={() => rightSwipeActions(item)}
        onSwipeableWillOpen={() => handleSwipeableOpen(item)}
        onSwipeableRightOpen={() => swipeFromRightOpen(item)}
        onSwipeableLeftOpen={() => swipeFromLeftOpen(item)}>
        <View style={{marginVertical: 1}}>
          <ListDataComp item={item} onPressUnpin={(item) => deleteIndex(item)} />
        </View>
      </Swipeable>
    );
  };

  const addPinToItems = selectedItem => {
    const newData = data.map((item, index) => {
      if (item?.id === selectedItem?.id) {
        return {...item, pin: true};
      } else {
        return {...item};
      }
    });

    const sortedData = sortArrayData(newData);
    setData(sortedData);
  };

  const deleteIndex = selectedItem => {
    const newData = data.map((item, index) => {
      if (item?.id === selectedItem?.id) {
        if (selectedItem?.pin) {
          return {...item, pin: false};
        } else {
          return false;
        }
      } else {
        return {...item};
      }
    });

    const sortedData = sortArrayData(newData);
    setData(sortedData?.filter(item => item));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => <ListItem item={item} index={index} />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
});

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  itemSeparator: {
    flex: 1,
    marginVertical: 5,
  },
  swipeFont: {
    color: 'white',
    fontWeight: '600',
  },

  swipeContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 12,
    paddingHorizontal: 20,
  },
});
