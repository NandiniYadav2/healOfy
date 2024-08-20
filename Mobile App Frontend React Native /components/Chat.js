// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
// import { db } from '../Firebase';

// const Chat = ({ route }) => {
//     const { doctorName, room, user } = route.params;
//     const navigation = useNavigation();
//     const [messages, setMessages] = useState([]);
//     const [newMessage, setNewMessage] = useState('');
//     const messageRef = collection(db, "chatApplication");

//     useEffect(() => {
//         navigation.setOptions({
//             headerShown: false,
//         });
//     }, []);

//     useEffect(() => {
//         const queryMessages = query(
//             messageRef,
//             where("room", "==", room),
//             orderBy("createdAt")
//         );

//         const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
//             let messages = [];
//             snapshot.forEach((doc) => {
//                 messages.push({ ...doc.data(), id: doc.id });
//             });

//             setMessages(messages);
//             setNewMessage('');
//         });

//         return () => unsubscribe();
//     }, []);

//     const handleSend = async () => {
//         if (newMessage.trim() === '') return;

//         await addDoc(messageRef, {
//             text: newMessage,
//             createdAt: serverTimestamp(),
//             user: user,
//             room: room
//         });

//         setNewMessage('');
//     };

//     const renderItem = ({ item }) => {
//         return (
//             <View style={[styles.messageContainer, item.user === user ? styles.sentMessage : styles.receivedMessage]}>
//                 <Text style={styles.messageText}>{item.text}</Text>
//             </View>
//         );
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <TouchableOpacity onPress={() => navigation.goBack()}>
//                     <Text style={styles.backButton}>&#8249; Back</Text>
//                 </TouchableOpacity>
//                 <Text style={styles.title}>{doctorName}</Text>
//             </View>

//             <FlatList
//                 style={styles.messagesContainer}
//                 data={messages}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//                 inverted
//             />

//             <View style={styles.inputContainer}>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Type a message..."
//                     value={newMessage}
//                     onChangeText={text => setNewMessage(text)}
//                 />
//                 <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
//                     <Text style={styles.sendButtonText}>Send</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#ffffff',
//     },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingHorizontal: 20,
//         paddingVertical: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#cccccc',
//     },
//     backButton: {
//         fontSize: 16,
//         color: '#124b46',
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#124b46',
//     },
//     messagesContainer: {
//         flex: 1,
//         paddingHorizontal: 20,
//     },
//     messageContainer: {
//         maxWidth: '80%',
//         marginVertical: 5,
//         padding: 10,
//         borderRadius: 10,
//     },
//     messageText: {
//         fontSize: 16,
//         color: '#ffffff',
//     },
//     sentMessage: {
//         alignSelf: 'flex-end',
//         backgroundColor: '#124b46',
//     },
//     receivedMessage: {
//         alignSelf: 'flex-start',
//         backgroundColor: '#cccccc',
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//         paddingVertical: 10,
//         borderTopWidth: 1,
//         borderTopColor: '#cccccc',
//     },
//     input: {
//         flex: 1,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 20,
//         paddingHorizontal: 15,
//         paddingVertical: 10,
//         marginRight: 10,
//     },
//     sendButton: {
//         backgroundColor: '#124b46',
//         paddingHorizontal: 20,
//         paddingVertical: 10,
//         borderRadius: 20,
//     },
//     sendButtonText: {
//         color: '#ffffff',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// });

// export default Chat;


import React, { useState } from "react";
import { GiftedChat } from 'react-native-gifted-chat';
import { View ,Text} from "react-native";
import { ScrollView } from "react-native";

export default function Chat() {
    const [messages, setMessages] = useState([]);

    const onSend = (newMessages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
    };

    return (
        <GiftedChat
            messages={messages}
            onSend={onSend}
            user={{ _id: 1 }} // You may need to adjust the user object according to your requirements
        />
    );
}
