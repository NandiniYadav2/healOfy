import { StyleSheet, Text, View , Image} from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput , TouchableOpacity} from 'react-native'
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { useNavigation } from "@react-navigation/native";

export default function Createscreen() {
    const [content, setContent] = useState("");
    const navigation = useNavigation();
  return (
    <ScrollView>
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      padding: 10,
      paddingTop:80
    }}
  >
    <Image
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        resizeMode: "contain",
      }}
      source={{
        uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
      }}
    />

    <Text>Shreya Chavan</Text>
  </View>

  <View style={{ flexDirection: "row", marginLeft: 10 }}>
    <TextInput
      value={content}
      onChangeText={(text) => setContent(text)}
      placeholderTextColor={"black"}
      placeholder="Type your message..."
      multiline
    />
  </View>

  <View style={{ marginTop: 20 }}>
    <TouchableOpacity
      style={{
        backgroundColor: "#124b46",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 180,
        alignSelf: "center"
      }}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={{color: "white", alignSelf:"center" }}>Share Post</Text>
    </TouchableOpacity>
  </View>
  </ScrollView>
  
  )
}

const styles = StyleSheet.create({})