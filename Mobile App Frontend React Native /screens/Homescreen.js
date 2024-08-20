import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, Linking, Dimensions } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
import { TouchableWithoutFeedback } from 'react-native-web';
import { MaterialIcons } from '@expo/vector-icons';
var {width,height} =Dimensions.get('window');

export default function HomeScreen({data}) {
  // Sample data for the horizontal scrolling sections
  const imageUrls = [
    { id: 1, url: 'https://th.bing.com/th/id/OIP.t88O5s6_7pKSTNwzPnJo9AHaHv?w=150&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 2, url: 'https://th.bing.com/th/id/OIP.ZKH1j1mUZn8wDWXi7zceAQAAAA?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 3, url: 'https://th.bing.com/th/id/OIP.An0SYrEFWyKG04pcbIiPmQAAAA?pid=ImgDet&w=167&h=200&c=7&dpr=1.3' },
    { id: 4, url: 'https://th.bing.com/th/id/OIP.dyv4IutPICZxPAvfFT2WQAAAAA?pid=ImgDet&w=203&h=188&c=7&dpr=1.3' },
    { id: 5, url: 'https://th.bing.com/th/id/OIP.-V_EtXeEQX7i2eZiTCXqggHaKW?pid=ImgDet&w=202&h=283&c=7&dpr=1.3' },
  ];

  const blogPosts = [
    { id: 1, title: 'Blog Post 1', image: 'https://www.developgoodhabits.com/wp-content/uploads/2020/05/be-present-in-moment.jpg', link: 'https://www.developgoodhabits.com/be-present/' },
    { id: 2, title: 'Blog Post 2', image: 'https://www.developgoodhabits.com/wp-content/uploads/2020/05/be-present-in-moment.jpg', link: 'https://www.developgoodhabits.com/be-present/' },
    { id: 3, title: 'Blog Post 3', image: 'https://www.developgoodhabits.com/wp-content/uploads/2020/05/be-present-in-moment.jpg', link: 'https://www.developgoodhabits.com/be-present/' },
    { id: 4, title: 'Blog Post 4', image: 'https://www.developgoodhabits.com/wp-content/uploads/2020/05/be-present-in-moment.jpg', link: 'https://www.developgoodhabits.com/be-present/' },
    { id: 5, title: 'Blog Post 5', image: 'https://www.developgoodhabits.com/wp-content/uploads/2020/05/be-present-in-moment.jpg', link: 'https://www.developgoodhabits.com/be-present/' },
    { id: 6, title: 'Blog Post 6', image: 'https://www.developgoodhabits.com/wp-content/uploads/2020/05/be-present-in-moment.jpg', link: 'https://www.developgoodhabits.com/be-present/' },
    { id: 7, title: 'Blog Post 7', image: 'https://www.developgoodhabits.com/wp-content/uploads/2020/05/be-present-in-moment.jpg', link: 'https://www.developgoodhabits.com/be-present/' },
    { id: 8, title: 'Blog Post 8', image: 'https://www.developgoodhabits.com/wp-content/uploads/2020/05/be-present-in-moment.jpg', link: 'https://www.developgoodhabits.com/be-present/' },
    { id: 9, title: 'Blog Post 9', image: 'https://www.developgoodhabits.com/wp-content/uploads/2020/05/be-present-in-moment.jpg', link: 'https://www.developgoodhabits.com/be-present/' },

  ];

  const podcastLinks = [
    { id: 1, title: 'Podcast 1', link: 'https://recoverywarriors.com/podcasts/' },
    { id: 2, title: 'Podcast 2', link: 'https://recoverywarriors.com/podcasts/' },
    { id: 3, title: 'Podcast 3', link: 'https://recoverywarriors.com/podcasts/' },
    { id: 4, title: 'Podcast 4', link: 'https://recoverywarriors.com/podcasts/' },
    { id: 5, title: 'Podcast 5', link: 'https://recoverywarriors.com/podcasts/' },
    { id: 6, title: 'Podcast 6', link: 'https://recoverywarriors.com/podcasts/' },
    { id: 7, title: 'Podcast 7', link: 'https://recoverywarriors.com/podcasts/' },
    { id: 8, title: 'Podcast 8', link: 'https://recoverywarriors.com/podcasts/' },
    { id: 9, title: 'Podcast 9', link: 'https://recoverywarriors.com/podcasts/' },
    { id: 10, title: 'Podcast 10', link: 'https://recoverywarriors.com/podcasts/' },

  ];

  const handlePress = (link) => {
    Linking.openURL(link);
  };

   const navigation=useNavigation();

  const handleClick = () =>{
    navigation.navigate('Notifications');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* App Icon */}
        <View style={styles.imageContainer}>
        <Image source={require('../assets/healofy.png')} style={styles.appIcon} />
      </View>
      
      <View style={styles.icon}>
      <TouchableOpacity onPress={handleClick}>
      <View style={styles.iconCircle}>
            <MaterialIcons name="notifications" size={35} color="#124b46" />
          </View>
       </TouchableOpacity>
      </View>

      {/* Text component */}
      <Text style={{ color: "#124b46", alignSelf: "center", fontWeight: "bold", fontSize: 30 }}>Welcome to Healofy!</Text>

        <Text style={{ color: "#124b46", paddingLeft: 20, paddingTop: 20, fontWeight:"bold" }}>Jokes to lighten your day!</Text>
          
        {/* Horizontal scrolling section for images */}
        <ScrollView horizontal={true} style={styles.imageScrollView}>
          {imageUrls.map(image => (
            <Image key={image.id} source={{ uri: image.url }} style={styles.image} resizeMode="cover" />
          ))}
        </ScrollView>

         {/* Horizontal scrolling section for podcast links */}
        <Text style={{ color: "#124b46", paddingLeft: 20, paddingTop: 20, paddingBottom: 20,fontWeight:"bold" }}>Podcasts to relieve stress.</Text>
        <FlatList
          horizontal
          data={podcastLinks}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item.link)}>
              <View style={styles.podcastLink}>
                <Text style={styles.podcastLinkText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
     </View>
       <View>
      <Text style={{ color: "#124b46", paddingLeft: 20, paddingTop: 20, paddingBottom: 20,fontWeight:"bold" }}>Blogs to give you an insight.</Text>
      {/* Horizontal scrolling section for blog posts  */}
      <FlatList
    horizontal
    data={blogPosts}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => handlePress(item.link)}>
        <View style={styles.blogLink}>
          <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
          <Text style={styles.blogLinkText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )}
    keyExtractor={item => item.id.toString()}
  />
</View>

  <View style={{ marginTop: 20 }}>
    <Text style={{ color: "#124b46", paddingLeft: 20,fontWeight:"bold",paddingBottom:10,alignSelf:"center" }}>How are you feeling today? Would you like to chat with our specialists?</Text>
    <TouchableOpacity
      style={{
        backgroundColor: "#124b46",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 300,
        alignSelf: "center",
        marginBottom:20
      }}
      onPress={() => navigation.navigate("Appointment")}
    >
      <Text style={{color: "white", alignSelf:"center" }}>Book an appointment</Text>
    </TouchableOpacity>
  </View>

  <View >
    <TouchableOpacity
      style={{
        backgroundColor: "#124b46",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 180,
        alignSelf: "center",
      
      }}
      onPress={() => navigation.navigate("Login")}
    >
      <Text style={{color: "white", alignSelf:"center" }}>Logout</Text>
    </TouchableOpacity>
  </View>

        </ScrollView>
  );
};
const styles = StyleSheet.create({
  appIconContainer: {
    alignItems: "center",
    marginTop: 30,
    width:30
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25, // Half of width and height for perfect circle
    backgroundColor: "#88a5a2", // Lighter shade of #124b46
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    paddingTop:30,
    alignSelf: "center", // Center the Image horizontally
    marginBottom: 10, // Add margin at the bottom for spacing
  },
  appIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  icon: {
    position: "absolute",
    right: 30,
    top: 60,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appIconContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  appIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  imageScrollView: {
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor:"#124b46"
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
  podcastLink: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#124b46',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  podcastLinkText: {
    color: 'white',
    fontSize: 16,
  },
  blogLink: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#124b46',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blogLinkText: {
    paddingTop:10,
    color: 'white',
    fontSize: 16,
  },
});
