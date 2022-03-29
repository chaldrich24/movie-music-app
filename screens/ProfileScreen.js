import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ProfileScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.profileInfoContainer} >
        <View style={styles.profilePicContainer}>
          <Image
            style={styles.profilePic}
            source={{
              uri: "https://lh3.googleusercontent.com/1YPUuosI4dyMZ2SFI5AUMXI8k_wIWggTn8Nu5o05dJl0waZM0psajYm21v_Xm_-IJTxmzA525b3zSM3ZzoYkNKvVfJu5Pw-1HcwnUQ=w600",
            }}
          />
        </View>
        <View style={styles.profileInfo}>
            <Text style={styles.username}>Username</Text>
            <Text style={styles.bio}>If only I had something that could show who I really am</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  profilePicContainer: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    overflow: "hidden",
  },
  profilePic: {
    width: "100%",
    height: "100%",
  },
  profileInfoContainer: {
      flexDirection: 'row',
      width: '90%',
      padding: 10,
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  profileInfo: {
      paddingHorizontal: 15,
      width: '50%',
      justifyContent: 'space-around',
      height: 120
  },
  username: {
      fontSize: 20
  },
  bio: {
      fontSize: 15,
      color: 'grey'
  }
});

export default ProfileScreen;
