import { Formik } from 'formik';
import React from "react";
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';

export default function NewScreen() {
  // function newTask (values) {

  // }

  return (
    <Formik
      initialValues={{title: ''}}
      // onSubmit={newTask}
    >
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={style.container}>
          <Text h4>New Todo Item</Text>
          <Input 
            placeholder="Example: Cook, Clean, etc..." 
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            style={style.input}
          />
          <Button title="Add" onPress={handleSubmit} style={style.button} />
        </View>
      )}
    </Formik>
  )
}

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10
  },
  input: {
    marginTop: 10
  },
  button: {
    backgroundColor: '#228CDB'
  }
})

// Formik functions differently w/ React Native vs. React
// Inputs in React native don't have names (as they do on web), need to specify the name of the input into the handlers