// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// export default function ChatList() 
// {
//     const [searchText, setSearchText] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [chats, setChats] = useState([
//         { id: 1, name: 'Saurabh', profilePhoto: require('../assets/boy.png') },
//         { id: 2, name: 'Asmita', profilePhoto: require('../assets/boy.png') },
//         { id: 3, name: 'Vikram', profilePhoto: require('../assets/boy.png') },
//         { id: 4, name: 'Ifrah', profilePhoto: require('../assets/boy.png') },
//         { id: 5, name: 'Rutuja', profilePhoto: require('../assets/boy.png') },
//     ]);
//     const [allDoctorInfo] = useState([
//         { id: 1, name: 'Saurabh', profilePhoto: require('../assets/boy.png') },
//         { id: 2, name: 'Sauvay', profilePhoto: require('../assets/boy.png') },
//         { id: 3, name: 'Asmita', profilePhoto: require('../assets/boy.png') },
//         { id: 4, name: 'Asthitha', profilePhoto: require('../assets/boy.png') },
//     ]);
//     const navigation = useNavigation();

//     useEffect(() => {
//         navigation.setOptions({
//             headerShown: false,
//         })
//     }, []);

//     const handleSearch = (text) => {
//         setSearchText(text);

//         if (text.trim() === '') {
//             setSearchResults([]);
//             return;
//         }

//         const regex = new RegExp(text, 'i');
//         const filteredResults = allDoctorInfo.filter(doctor => regex.test(doctor.name));
//         setSearchResults(filteredResults);
//     }

//     const enterChat = (doctorName) => {
//         setSearchText('');
//         navigation.navigate("Chat", { doctorName });
//     }

//     const navigateBack = () => {
//         setSearchText("");
//     }

//     return (
//         <View style={styles.container}>
//             <View style={styles.titleContainer}>
//                 <Text style={styles.titleText}>Chats</Text>
//             </View>

//             <View style={styles.searchContainer}>
//                 {searchText.trim() != '' &&
//                     <TouchableOpacity onPress={navigateBack} style={styles.backButton}>
//                         <Text style={styles.backButtonText}>←</Text>
//                     </TouchableOpacity>
//                 }
//                 <TextInput
//                     style={styles.searchInput}
//                     placeholder="Search"
//                     value={searchText}
//                     onChangeText={handleSearch}
//                 />
//             </View>

//             <FlatList
//                 data={searchText.trim() === '' ? chats : searchResults}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity
//                         onPress={() => enterChat(item.name)}
//                         style={styles.chatItem}
//                     >
//                         <Image source={item.profilePhoto} style={styles.profilePhoto} />
//                         <Text style={styles.nameText}>{item.name}</Text>
//                     </TouchableOpacity>
//                 )}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#124b46',
//         paddingHorizontal: 20,
//         paddingTop: 40,
//     },
//     titleContainer: {
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     titleText: {
//         fontSize: 24,
//         color: '#ffffff',
//     },
//     searchContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     backButton: {
//         marginRight: 10,
//     },
//     backButtonText: {
//         fontSize: 20,
//         color: '#ffffff',
//     },
//     searchInput: {
//         flex: 1,
//         backgroundColor: '#ffffff',
//         borderRadius: 10,
//         paddingHorizontal: 15,
//         paddingVertical: 10,
//         fontSize: 18,
//     },
//     chatItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ffffff',
//     },
//     profilePhoto: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         marginRight: 15,
//     },
//     nameText: {
//         fontSize: 18,
//         color: '#ffffff',
//     },
// });

