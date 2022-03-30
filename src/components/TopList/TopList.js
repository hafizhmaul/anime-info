import React, { useRef } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { PRIMARY_WHITE } from "../../constants/color";

const TopList = () => {
  const scrollViewRef = useRef();

  return (
    <View style={styles.container}>
      <Text style={styles.textTopCharacter}>Top Character</Text>

      <ScrollView
        horizontal
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true })
        }
        showsHorizontalScrollIndicator={false}
      >

        <View style={styles.avatarContainer}>
          <View style={styles.avatarInfoContainer}>
            <View style={styles.avatarImg}>
              <Image
                source={{
                  uri: "https://static.wikia.nocookie.net/chainsaw-man/images/f/fd/Dengy.png",
                }}
                style={styles.avatarImg}
              />
            </View>
            <Text numberOfLines={2} style={styles.avatarName}>
              Denji HaHaHaHaHaHaHaHaHaHaHaHaHa
            </Text>
          </View>

          <View style={styles.avatarInfoContainer}>
            <View style={styles.avatarImg}>
              <Image
                source={{
                  uri: "https://static.wikia.nocookie.net/chainsaw-man/images/f/fd/Dengy.png",
                }}
                style={styles.avatarImg}
              />
            </View>
            <Text numberOfLines={2} style={styles.avatarName}>
              Denji HaHaHaHaHaHaHaHaHaHaHaHaHa
            </Text>
          </View>

          <View style={styles.avatarInfoContainer}>
            <View style={styles.avatarImg}>
              <Image
                source={{
                  uri: "https://static.wikia.nocookie.net/chainsaw-man/images/f/fd/Dengy.png",
                }}
                style={styles.avatarImg}
              />
            </View>
            <Text numberOfLines={2} style={styles.avatarName}>
              Denji HaHaHaHaHaHaHaHaHaHaHaHaHa
            </Text>
          </View>

          <View style={styles.avatarInfoContainer}>
            <View style={styles.avatarImg}>
              <Image
                source={{
                  uri: "https://static.wikia.nocookie.net/chainsaw-man/images/f/fd/Dengy.png",
                }}
                style={styles.avatarImg}
              />
            </View>
            <Text numberOfLines={2} style={styles.avatarName}>
              Denji HaHaHaHaHaHaHaHaHaHaHaHaHa
            </Text>
          </View>

          <View style={styles.avatarInfoContainer}>
            <View style={styles.avatarImg}>
              <Image
                source={{
                  uri: "https://static.wikia.nocookie.net/chainsaw-man/images/f/fd/Dengy.png",
                }}
                style={styles.avatarImg}
              />
            </View>
            <Text numberOfLines={2} style={styles.avatarName}>
              Denji HaHaHaHaHaHaHaHaHaHaHaHaHa
            </Text>
          </View>


        </View>
      </ScrollView>
    </View>
  );
};

export default TopList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  textTopCharacter: {
    fontSize: 16,
    fontWeight: "700",
    color: PRIMARY_WHITE,
    marginTop: 10,
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
  },
  avatarInfoContainer: {
    display: "flex",
    marginEnd: 10,
    width: 80,
    flexWrap: "nowrap",
    alignItems: "center",
  },
  avatarName: {
    textAlign: "center",
    fontWeight: "700",
    marginTop: 10,
    color: PRIMARY_WHITE
  },
  avatarImg: {
    resizeMode: "cover",
    borderRadius: 50,
    width: 70,
    height: 70,
    marginTop: 5
  }
});
