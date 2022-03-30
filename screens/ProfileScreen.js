import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import ProfileDigs from "../components/ProfileDigs";
import Watchlist from "../components/Watchlist";
import Favorites from "../components/Favorites";

const ProfileScreen = (props) => {
    const [activeTab, setActiveTab] = useState('ProfileDigs');
    let Content;

    if (activeTab === 'Watchlist') {
        Content = Watchlist;
    } else if (activeTab === 'Favorites') {
        Content = Favorites;
    } else {
        Content = ProfileDigs;
    }

    return (
        <View style={styles.screen}>
            <View style={styles.profileInfoContainer}>
                <View style={styles.profilePicContainer}>
                    <Image
                        style={styles.profilePic}
                        source={{
                            uri: "https://lh3.googleusercontent.com/1YPUuosI4dyMZ2SFI5AUMXI8k_wIWggTn8Nu5o05dJl0waZM0psajYm21v_Xm_-IJTxmzA525b3zSM3ZzoYkNKvVfJu5Pw-1HcwnUQ=w600",
                        }}
                    />
                </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.username}>Solid</Text>
                    <Text style={styles.bio}>
                        "If only I had something that could show who I really am"
                    </Text>
                </View>
            </View>
            <View style={styles.profileTabs}>
                <TouchableOpacity style={styles.profileTabIcon} onPress={() => {setActiveTab('ProfileDigs')}}>
                    <View>
                        <Entypo style={{ textAlign: 'center' }} name="feather" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.profileTabIcon, ...{ borderRightWidth: 1, borderLeftWidth: 1 } }} onPress={() => {setActiveTab('Watchlist')}}>
                    <View >
                        <Entypo style={{ textAlign: 'center' }} name="eye" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileTabIcon} onPress={() => {setActiveTab('Favorites')}}>
                    <View>
                        <Entypo style={{ textAlign: 'center' }} name="heart" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <Content />
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
        backgroundColor: "#8DA9C4",
        flexDirection: "row",
        padding: 20,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
    },
    profileInfo: {
        paddingHorizontal: 15,
        width: "60%",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        height: 150,
    },
    username: {
        fontSize: 25,
    },
    bio: {
        fontSize: 13,
        color: "#EEF4ED",
        textAlign: "center",
    },
    profileTabs: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        borderBottomWidth: 1
    },
    profileTabIcon: {
        flex: 1,
        padding: 10
    }
});

export default ProfileScreen;
