import React from 'react'
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import { Header, TopList, Trending } from '../../components'
import { PRIMARY_BLACK } from '../../constants/color'


const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="transparent" translucent={true}/>
      <View style={styles.container}>
        <Header/>
        <View style={styles.homePadding}>
          <Trending title="Trending Anime"/>
          <TopList/>
          <Trending title="Upcoming Anime"/>
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BLACK
  },
  homePadding: {
    paddingHorizontal: 16,
    paddingBottom: 20
  }
});