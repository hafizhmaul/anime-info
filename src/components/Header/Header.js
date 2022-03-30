import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { PRIMARY_WHITE } from "../../constants/color";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/img/dummy-header.png')}
          style={styles.headerImg}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Solo Leveling</Text>
        
        <Text style={styles.textInfoAnime}>16 Episode | 2021</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    flex: 1,
    position: "absolute",
    top: "80%",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 6,
    borderRadius: 10,
    marginLeft: 16
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 36,
    color: PRIMARY_WHITE,
    zIndex: 999,
    justifyContent: "center",    
  },
  textInfoAnime: {
    fontWeight: "normal",
    fontSize: 16,
    color: PRIMARY_WHITE,
    zIndex: 999,
    justifyContent: "center",
  },
  headerImg: {
    resizeMode: "cover",
    height: 470,
    width: "100%",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  }
});
