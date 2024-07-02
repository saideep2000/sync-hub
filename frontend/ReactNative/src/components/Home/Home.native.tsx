import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../Button/Button.native';

const Home: React.FC = () => {
  const handlePress = () => {
    console.log('Button clicked!');
  };

  return (
    <View style={styles.container}>
      <Button title="Click Me" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
