import React, { useRef } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { PRIMARY_GRAY, PRIMARY_WHITE } from "../../constants/color";

const Trending = ({ title }) => {
  const scrollViewRef = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.textTrendingContainer}>
        <Text style={styles.textTrending}>{title}</Text>
        <Text style={styles.textTrendingSeeAll}>See all &#10148;</Text>
      </View>

      <ScrollView
        horizontal
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true })
        }
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.trendingContainer}>
          <View style={styles.trendingContent}>
            <Image
              source={require('../../assets/img/dummy-header.png')}
              style={styles.imgTrending}
            />

            <View>
              <Text style={styles.titleAnime}>Solo Leveling</Text>
              <Text style={styles.dateAnime}>2021</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  trendingContainer: {
    display: "flex",
    flexDirection: "row",
  },
  trendingContent: {
    display: "flex",
    flexWrap: "nowrap",
    marginEnd: 10,
  },
  textTrending: {
    fontSize: 20,
    fontWeight: "700",
    color: PRIMARY_WHITE,
    marginBottom: 12,
  },
  textTrendingSeeAll: {
    fontSize: 14,
    fontWeight: "600",
    color: PRIMARY_GRAY,
    marginBottom: 12,
  },
  textTrendingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  imgTrending: {
    width: 120,
    height: 160,
    borderRadius: 10
  },
  titleAnime: {
    fontWeight: "700",
    fontSize: 16,
    marginTop: 5,
    color: PRIMARY_WHITE,
    textAlign: "center"
  },
  dateAnime: {
    fontSize: 12,
    marginTop: 5,
    color: PRIMARY_WHITE,
    textAlign: "center"
  },
});
