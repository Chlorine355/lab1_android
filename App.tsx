import * as React from 'react';
import {useState} from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Choice() {
    const [bgcolor, setbgcolor] = useState("white");

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap:20, backgroundColor: bgcolor }}>
      <Button
        onPress={() => setbgcolor("green")}
        title="Зелёный фон!"
        color="green"
      />
      <Button
        onPress={() => setbgcolor("blue")}
        title="Синий фон!"
        color="blue"
      />
      <Button
        onPress={() => setbgcolor("red")}
        title="Красный фон!"
        color="red"
      />

      <Button
              onPress={() => setbgcolor("white")}
              title="Верните белый"
              color="grey"
            />
    </View>
  );
}

function Type() {
const [text, onChangeText] = React.useState('white');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: text.toLowerCase() ? text.toLowerCase() : 'white'  }}>
      <TextInput
              onChangeText={onChangeText}
              value={text}
              placeholder="Введите цвет"
              textAlign='center'
              multiline={true}
              style={{backgroundColor: "white", width: 200, textAlign: 'center', borderWidth: 1, borderRadius: 5, borderColor: "black"}}
            />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
                               tabBarIcon: ({ focused, color, size }) => {
                                 let iconName;
                                 if (route.name === 'Выбор') {
                                   iconName = focused
                                     ? 'list'
                                     : 'list-outline';
                                 } else if (route.name === 'Текстом') {
                                   iconName = focused ? 'create' : 'create-outline';
                                 }

                                 // You can return any component that you like here!
                                 return <Ionicons name={iconName} size={size} color={color} />;
                               },
                               tabBarActiveTintColor: 'tomato',
                               tabBarInactiveTintColor: 'gray',
                             })}>
        <Tab.Screen name="Выбор" component={Choice}/>
        <Tab.Screen name="Текстом" component={Type} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}