import { StyleSheet,TouchableOpacity, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { UserType } from "../UserContext";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Editprofile from "./Editprofile";

export default function ProfileScreen()
 {
  // const [user, setUser] = useState("");
const navigation = useNavigation()
  // const { userId, setUserId } = useContext(UserType);
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3000/profile/${userId}`
  //       );
  //       const { user } = response.data;
  //       setUser(user);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   fetchProfile();
  // });

  // const logout = () => {
  //     clearAuthToken();
  // }
  // const clearAuthToken = async () => {
  //     await AsyncStorage.removeItem("authToken");
  //     console.log("Cleared auth token");
  //     navigation.replace("Login")
  // }
  const handleEditProfile = () => {
    // Navigate to the EditProfile screen
    // For demonstration, let's assume the screen is named "EditProfile"
    navigation.navigate("Editprofile");
  };

  const handleLogout = () => {
    // Perform logout actions here
    // For demonstration, let's assume clearing authentication token
    // and navigating to the Login screen
    // clearAuthToken();
    navigation.replace("Login");
    console.log("Logged out"); // Placeholder for actual logout logic
  };
  return (
    <View style={{padding: 15, backgroundColor:"white" }}>
    <Image style={{
            flexDirection: "row",
            alignSelf: "center"}} source={require("../assets/healofy.png")}/>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold"}}>{/*{user?.name}*/} Shreya Chavan</Text>
          <View
            style={{
              paddingHorizontal: 7,
              paddingVertical: 5,
              borderRadius: 8,
              backgroundColor: "#124b46",
            }}
          >
            <Text style={{color:"white"}}>Healofy</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            marginTop: 15,
          }}
        >
          <View>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                resizeMode: "contain",
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
              }}
            />
          </View>

          <View>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>BTech.</Text>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Movie Buff | Musical Nerd
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Love Yourself
            </Text>
          </View>
        </View>
        <Text style={{ color: "gray", fontSize: 15, marginTop: 10 }}>
          1000 followers
        </Text>
       
        {/* Edit Profile and Logout buttons */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleEditProfile}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogout}
          >
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderColor: "#124b46",
    backgroundColor:'#124b46',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});