import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import {AntDesign, FontAwesome, Ionicons} from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';

const ChatScreen = ({navigation, route}) => {
    const [input, setInput] = useState();

    useLayoutEffect(() => {
        navigation.setOptions({
          title: 'Chat',
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
          headerTitle: () => (
              <View style={
                  { flexDirection: 'row',
                alignItems: 'center'}
              }>
                  <Avatar rounded source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}} />
                  <Text style={{ color: 'white', marginLeft: 10, fontWeight: "700"}}>{route.params.chatName}</Text>
              </View>
          ),
          headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 10}} onPress={navigation
              .goBack}>
                  <AntDesign name="arrowleft" size={24} color='white'/>

              </TouchableOpacity>
          ),
          headerRight: () => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 80}}>
                  <TouchableOpacity style={{ marginRight: 10}}>
                      <FontAwesome name='video-camera' size={24} color="white"/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginRight: 10}}>
                      <Ionicons name='call' size={24} color="white"/>
                  </TouchableOpacity>
              </View>
          )
        });

    }, [navigation])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
        <StatusBar style='light'/>
        <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding'  : 'height'}
         style={styles.container}
         keyboardVerticalOffset={90}>

             <>
             <ScrollView>

             </ScrollView>
             <View style={styles.footer}>
                 <TextInput placeholder='Signal Message' style={styles.textInput}
                 value={input}
                 onChangeText={(text) => setInput(text)}/>
             </View>
             
             </>
            
        </KeyboardAvoidingView>
      
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {

    },
    footer: {

    },
    textInput: {

    }
})
