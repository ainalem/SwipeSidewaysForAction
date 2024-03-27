import React, {useRef} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import ListItem from './ListItem';

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 30,
  },
});

function App(): React.JSX.Element {
  const scrollViewRef = useRef<ScrollView>(null);

  const backgroundStyle = {
    backgroundColor: 'black',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        ref={scrollViewRef}>
        <View>
          <Text style={styles.title}>
            React Native Scrollview swipe for action
          </Text>
        </View>
        <ListItem text="🤖 Robot" scrollViewRef={scrollViewRef} />
        <ListItem odd text="🍄 Mushroom" scrollViewRef={scrollViewRef} />
        <ListItem text="🥒 Cucumber" scrollViewRef={scrollViewRef} />
        <ListItem odd text="🌵 Cactus" scrollViewRef={scrollViewRef} />
        <ListItem text="🌻 Sunflower" scrollViewRef={scrollViewRef} />
        <ListItem odd text="🐚 Seashells" scrollViewRef={scrollViewRef} />
        <ListItem text="🌛 Mr. Moon" scrollViewRef={scrollViewRef} />
        <ListItem odd text="🪐 Saturn" scrollViewRef={scrollViewRef} />
        <ListItem text="🚧 Road closed" scrollViewRef={scrollViewRef} />
        <ListItem odd text="🏖️ La playa" scrollViewRef={scrollViewRef} />
        <ListItem text="🛸 Flying saucer" scrollViewRef={scrollViewRef} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
