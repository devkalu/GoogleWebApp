import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [mediumScreen, setMediumScreen] = useState(false);
  const [largeScreen, setLargeScreen] = useState(false);

  const handleLayout = ({ nativeEvent }) => {
    const { width } = nativeEvent.layout;
    if (width <= 640) {
      setLargeScreen(false);
      setMediumScreen(false);
    } else if (width > 640 && width <= 1007) {
      setLargeScreen(false);
      setMediumScreen(true);
    } else {
      setLargeScreen(true);
      setMediumScreen(false);
    }
  };

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <View style={styles.topStyle}>
        <Text style={styles.topTextStyle}>Gmail</Text>
        <Text style={styles.topTextStyle}>Images</Text>
        <Ionicons name="apps" size={18} color="black" />
        <Pressable style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Sign in</Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.body,
          styles.smallScreen,
          mediumScreen && styles.mediumScreen,
          largeScreen && styles.largeScreen,
        ]}
      >
        <Image
          source={{
            uri: "https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-6752733080595603-cst.gif",
          }}
          style={styles.logo}
        />
        <View style={styles.inputStyle}>
          <Ionicons
            name="md-search-sharp"
            size={20}
            color="#d6d6d6"
            style={styles.search}
          />
          <TextInput style={styles.input} selectionColor="#000" />
          <Ionicons
            name="mic-sharp"
            size={24}
            color="black"
            style={styles.micro}
            href="/"
          />
        </View>
      </View>
      <View style={styles.searchButtonContainer}>
        <Pressable style={styles.searchButton}>
          <Text style={styles.searchText}>Google Search</Text>
        </Pressable>
        <Pressable style={styles.searchButton}>
          <Text style={styles.searchText}>I'm Feeling Lucky</Text>
        </Pressable>
      </View>
      <View style={styles.offeredStyle}>
        <Text style={[styles.searchText, styles.offeredText]}>
          Google Offered:{" "}
        </Text>
        <Text style={[styles.linkStyle, styles.offeredText]}>Nederlands</Text>
        <Text style={[styles.linkStyle, styles.offeredText]}>Frysk</Text>
      </View>
      <View style={styles.footerBackground}>
        <Text style={styles.footerText}>Netherlands</Text>
        <View style={styles.line} />
        <View style={[styles.row]}>
          <Text style={styles.footerText}>About</Text>
          <Text style={styles.footerText}>Advertising</Text>
          <Text style={styles.footerText}>Business</Text>
          <Text style={styles.footerText}>How Search Works</Text>
          <Text style={styles.footerText}>Privacy</Text>
          <Text style={styles.footerText}>Terms</Text>
          <Text style={styles.footerText}>Setting</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  topStyle: {
    alignSelf: "flex-end",
    position: "absolute",
    top: 0,
    flexDirection: "row",
    width: "17rem",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: ".5rem",
  },
  buttonStyle: {
    backgroundColor: "#1a73e8",
    paddingHorizontal: "1.8rem",
    paddingVertical: "0.65rem",
    borderRadius: "0.3rem",
    marginRight: "1rem",
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: ".75rem",
  },
  logo: {
    height: Dimensions.get("window").width / 6,
    width: Dimensions.get("window").width / 2,
    marginVertical: "1.5em",
    alignSelf: "center",
    marginTop: "5%",
  },
  inputStyle: {
    borderColor: "#d3d3d3",
    borderWidth: "0.10em",
    borderRadius: "2em",
    alignContent: "center",
    flexDirection: "row",
    paddingVertical: "1.5%",
  },
  input: {
    flex: 1,
    height: "100%",
    outlineColor: "#fff",
    fontSize: "1em",
  },
  body: {
    marginTop: "2rem",
  },
  search: {
    marginLeft: "1rem",
  },
  topTextStyle: {
    fontSize: ".8rem",
    color: "#000000DE",
  },
  micro: {
    marginRight: "1rem",
  },
  searchText: {
    color: "#3c4043",
    fontSize: "1rem",
  },
  searchButton: {
    backgroundColor: "#F8F9FA",
    paddingHorizontal: "1em",
    paddingVertical: "0.5em",
    marginLeft: "0.5em",
    borderRadius: "0.25em",
  },
  linkStyle: {
    color: "#1a0dab",
    marginLeft: "0.5em",
  },
  footerText: {
    color: "#70757a",
    paddingLeft: "1.5em",
    paddingVertical: "1em",
  },
  footerBackground: {
    backgroundColor: "#F8F9FA",
    height: "15%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  searchButtonContainer: {
    flexDirection: "row",
    marginTop: "2.5em",
  },
  offeredStyle: {
    flexDirection: "row",
    marginTop: "1em",
  },
  offeredText: {
    fontSize: "0.75em",
  },
  smallScreen: {
    width: "90%",
  },
  mediumScreen: {
    width: "75%",
  },
  largeScreen: {
    width: "55%",
  },

  line: {
    borderBottomColor: "#e4e8ec",
    borderBottomWidth: "0.1em",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});
