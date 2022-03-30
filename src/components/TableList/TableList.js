import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { PRIMARY_BLACK, PRIMARY_GRAY, PRIMARY_WHITE, SECONDARY_GRAY } from "../../constants/color";
import useTrending from "../../store/useTrending";

const TableList = () => {
  const {trending, fetch} = useTrending(state => state)

  useEffect(() => {
    fetch("/trending/anime")

  },[])

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerList}>
          <View style={styles.imgContainer}>
            <Image
              source={require("../../assets/img/dummy-header.png")}
              style={styles.imgList}
            />
            <Text style={styles.textTitle}>Solo Leveling</Text>
            <View style={styles.lengthChapterContainer}>
              <Text style={styles.lengthChapter}>16 Episode</Text>
            </View>
            <View style={styles.genreContainer}>
              <Text style={styles.genre}>Action</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default TableList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BLACK
  },
  containerList: {
    marginVertical: 10
  },
  imgContainer: {
    paddingHorizontal: 30
  },
  imgList: {
    height: 200,
    width: "100%",
    borderRadius: 20
  },
  textTitle: {
    fontWeight: "700",
    fontSize: 18,
    marginTop: 5,
    color: PRIMARY_WHITE
  },
  lengthChapterContainer: {
    display: "flex",        
    alignSelf: "center",
    justifyContent: "center",    
    position: "absolute",
    backgroundColor: PRIMARY_WHITE,
    zIndex: 999,
    width: 100,
    paddingVertical: 2,
    borderRadius: 50,
    top: 15,
    left: 250,
    opacity: 0.9
  },
  lengthChapter: {
    fontSize: 16,
    color: SECONDARY_GRAY,
    fontWeight: "700",
    textAlign: "center"
  },
  genreContainer: {
    display: "flex",        
    alignSelf: "center",
    justifyContent: "center",    
    position: "absolute",
    backgroundColor: PRIMARY_WHITE,
    zIndex: 999,
    width: 80,
    paddingVertical: 2,
    borderRadius: 50,
    bottom: 40,
    right: 260,    
  },
  genre: {
    fontSize: 14,
    color: SECONDARY_GRAY,
    fontWeight: "700",
    textAlign: "center"
  }
});
