import { View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import CustomListItem from '../components/CustomListItem';
import { Avatar } from 'react-native-elements';
import { auth, db } from '../firebase';
import { TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login");
        })
    }

    useLayoutEffect(() => {
      navigation.setOptions({
          title: 'Signal',
          headerStyle:  { backgroundColor: "#fff"},
          headerTitleStyle:  { color: "black"},
          headerTintColor: 'black',
          headerLeft: () => <View style={{ marginLeft: 20}}>
              <TouchableOpacity
              activeOpacity={0.5}
              onPress={signOutUser}>
              <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
              </TouchableOpacity>
          </View>

      });
    }, [])
  return (
    <SafeAreaView>
      <ScrollView>
          <CustomListItem/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
