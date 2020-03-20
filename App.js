/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  state = {
    counter: 0,
  };

  increaseCounter = () => {
    this.setState({counter: this.state.counter + 1});
  };

  decreaseCounter = () => {
    this.setState({counter: this.state.counter - 1});
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: 200,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => this.increaseCounter()}>
            <Text style={{fontSize: 20}}>Increase</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20}}>{this.state.counter}</Text>
          <TouchableOpacity onPress={() => this.decreaseCounter()}>
            <Text style={{fontSize: 20}}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
