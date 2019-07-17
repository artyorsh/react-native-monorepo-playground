/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { light, mapping } from '@eva-design/eva';
import { ApplicationProvider, Text, Layout, Button } from 'react-native-ui-kitten';

const App = () => (
  <ApplicationProvider
    mapping={mapping}
    theme={light}>
    <Layout style={styles.container}>
      <Text style={styles.text} category='h4'>Welcome to UI Kitten. Locally :]</Text>
      <Button style={styles.button}>Button</Button>
    </Layout>
  </ApplicationProvider>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 64,
    paddingHorizontal: 16,
  },
  text: {
    textAlign: 'center',
  },
  button: {
    marginVertical: 8,
  },
});

export default App;
