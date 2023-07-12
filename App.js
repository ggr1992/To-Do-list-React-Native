import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Task from './components/task';

export default function App() {
  const [task,setTask] = useState('')
  const [taskItems,setTaskItems] = useState([])

    const handleTask = () => {
      Keyboard.dismiss()
      setTaskItems([...taskItems,task])
      setTask('');
    }
    const deleteTask = (index) => {
      let copyItem = [...taskItems];
      copyItem.splice(index,1);
      setTaskItems(copyItem);
    }

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.toDoListTitle}>
          Today's Tasks
        </Text>
        <View style={styles.items}>
          {taskItems.map((item,index) => {
           return (
            <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                <Task  text={item}></Task>
            </TouchableOpacity>
           )          
          })}
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.writeTask}>
        <TextInput style={styles.input} placeholder={taskItems.length > 6 ? 'Too many Tasks' : 'Enter Task here...'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={taskItems.length > 6 || !task ? null : () => handleTask()}>
          <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(#030c17, #0f1a26)'
  },
  taskContainer: {
    paddingTop:50,
    paddingHorizontal:20,

  },
toDoListTitle: {
  textAlign:'center',
  color: 'white',
  fontSize: 24,
  fontWeight: 'bold',
  fontStyle: 'italic'
},
items: {
paddingTop:32
},
writeTask: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'
},
input: {
  paddingVertical: 15,
  width: 250,
  paddingHorizontal: 15,
  backgroundColor: 'lightgray',
  borderRadius: 15,
  borderColor: '#55BCF6',
  borderWidth: 1,
  width: 250
},
addWrapper: {
width: 50 , 
height: 50,
backgroundColor: 'lightgray',
borderRadius: 50,
justifyContent: 'center',
alignItems: 'center',
borderColor: '#C0C0C0',
borderWidth: 1
},

addText: {
  fontSize: 30,
  alignItems: 'center'
},
});
