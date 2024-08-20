// import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
// import React, { useEffect, useContext, useState, useCallback } from "react";
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import jwt_decode from "jwt-decode";
// // import { UserType } from "../UserContext";
// // import axios from "axios";
// import { AntDesign } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// // import { useFocusEffect } from "@react-navigation/native";
// import { TextInput } from "react-native";
// import { TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// export default function Forumscreen()
// {
//   // const { userId, setUserId } = useContext(UserType);
//   // const [posts, setPosts] = useState([]);
//   // useEffect(() => {
//   //   const fetchUsers = async () => {
//   //     const token = await AsyncStorage.getItem("authToken");
//   //     const decodedToken = jwt_decode(token);
//   //     const userId = decodedToken.userId;
//   //     setUserId(userId);
//   //   };

//   //   fetchUsers();
//   // }, []);
//   // useEffect(() => {
//   //   fetchPosts();
//   // }, []);

//   // useFocusEffect(
//   //   useCallback(() => {
//   //     fetchPosts();
//   //   }, [])
//   // );

//   // const fetchPosts = async () => {
//   //   try {
//   //     const response = await axios.get("http://localhost:3000/get-posts");
//   //     setPosts(response.data);
//   //   } catch (error) {
//   //     console.log("error fetching posts", error);
//   //   }
//   // };

//   // console.log("posts", posts);
//   // const handleLike = async (postId) => {
//   //   try {
//   //     const response = await axios.put(
//   //       `http://localhost:3000/posts/${postId}/${userId}/like`
//   //     );
//   //     const updatedPost = response.data;

//   //     const updatedPosts = posts?.map((post) =>
//   //       post?._id === updatedPost._id ? updatedPost : post
//   //     );

//   //     setPosts(updatedPosts);
//   //   } catch (error) {
//   //     console.log("Error liking the post", error);
//   //   }
//   // };

//   // const handleDislike = async (postId) => {
//   //   try {
//   //     const response = await axios.put(
//   //       `http://localhost:3000/posts/${postId}/${userId}/unlike`
//   //     );
//   //     const updatedPost = response.data;
//   //     // Update the posts array with the updated post
//   //     const updatedPosts = posts.map((post) =>
//   //       post._id === updatedPost._id ? updatedPost : post
//   //     );
//   //     console.log("updated ",updatedPosts)
    
//   //     setPosts(updatedPosts);
//   //   } catch (error) {
//   //     console.error("Error unliking post:", error);
//   //   }
//   // };
//   // const [navigation] = useNavigation();
//   // const handleAddPost = () => {
//   //   // Navigate to Createscreen
//   //   navigation.navigate("Createscreen");
//   // };
//   // const [navigate] = useNavigation();
//   const [content, setContent] = useState("");
//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
//       <View style={{ alignItems: "center", marginTop: 30 }}>
//         <Image
//           style={{ width: 60, height: 40, resizeMode: "contain" }}
//           source={require('./../assets/healofy.png')}
//         />
//       </View>

//       <View style={{ marginTop: 20 }}>
//         {/* {posts?.map((post) => ( */}
//           <View
//             style={{
//               padding: 15,
//               borderColor: "#D0D0D0",
//               borderTopWidth: 1,
//               flexDirection: "row",
//               gap: 10,
//               marginVertical: 10,
//             }}
//           >
//             <View>
//               <Image
//                 style={{
//                   width: 40,
//                   height: 40,
//                   borderRadius: 20,
//                   resizeMode: "contain",
//                 }}
//                 source={{uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png"}}
//               />
//             </View>

//             <View>
//               <Text
//                 style={{ fontSize: 15, fontWeight: "bold", marginBottom: 4 }}
//               >
//                 {/* {post?.user?.name} */}
//                 {<Text>Shreya Chavan</Text>}
//               </Text>
//               {/* <Text>{post?.content}</Text> */}
// {<Text>I am very stressed what do to?</Text>}
//               <View
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   gap: 10,
//                   marginTop: 15,
//                 }}
//               >
//                 {/* { <Text>hello</Text> ? (
//                   <AntDesign
//                     // onPress={() => handleDislike(post?._id)}
//                     name="heart"
//                     size={18}
//                     color="red"
//                   />
//                 ) : (
//                   <AntDesign
//                     // onPress={() => handleLike(post?._id)}
//                     name="hearto"
//                     size={18}
//                     color="black"
//                   />
//                 )} */}

//                 <FontAwesome name="comment-o" size={18} color="#124b46" />

//                 {/* <Ionicons name="share-social-outline" size={18} color="black" /> */}
//               </View>

//               {/* <Text style={{ marginTop: 7, color: "gray" }}>
//                 {/* {post?.likes?.length} likes • {post?.replies?.length} reply */}
//                 {/* Add comment
//               </Text> */} 
//               <View style={{ flexDirection: "row", marginTop:10 }}>
//         <TextInput
//           value={content}
//           onChangeText={(text) => setContent(text)}
//           placeholderTextColor={"black"}
//           placeholder="Add Comment"
//           multiline
//         />
//       </View>
//               </View>
//           </View>
//           </View>
//           <TouchableOpacity
//         style={styles.fab}
//         onPress={()=> navigation.navigate("Createscreen")}
//       >
//         <FontAwesome name="plus" size={24} color="blue" />
//       </TouchableOpacity>
//       </ScrollView>
//   );
// };


// const styles = StyleSheet.create({
//   fab: {
//     position: "absolute",
//     width: 60,
//     height: 60,
//     alignItems: "center",
//     justifyContent: "center",
//     right: 20,
//     bottom: 20,
//     backgroundColor: "lightblue",
//     borderRadius: 30,
//     elevation: 8,
//   },
// });

import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // <-- Uncommented import

export default function Forumscreen() {
  const [content, setContent] = useState("");
  const navigation = useNavigation(); // <-- Using useNavigation hook to get navigation object

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Image
          style={{ width: 60, height: 40, resizeMode: "contain" }}
          source={require('./../assets/healofy.png')}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <View
          style={{
            padding: 15,
            borderColor: "#D0D0D0",
            borderTopWidth: 1,
            flexDirection: "row",
            gap: 10,
            marginVertical: 10,
          }}
        >
          <View>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                resizeMode: "contain",
              }}
              source={{uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png"}}
            />
          </View>

          <View>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", marginBottom: 4 }}
            >
              <Text>Shreya Chavan</Text>
            </Text>
            <Text>I am very stressed what do to?</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginTop: 15,
              }}
            >
              <FontAwesome name="comment-o" size={18} color="#124b46" />
            </View>
            <View style={{ flexDirection: "row", marginTop:10 }}>
              <TextInput
                value={content}
                onChangeText={(text) => setContent(text)}
                placeholderTextColor={"black"}
                placeholder="Add Comment"
                multiline
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("Createscreen")}
      >
        <FontAwesome name="plus" size={24} color="#124b46" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#88a5a2",
    borderRadius: 30,
    elevation: 8,
  },
});
