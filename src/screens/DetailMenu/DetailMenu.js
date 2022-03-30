import React from 'react'
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import { TableList } from '../../components'
import { PRIMARY_BLACK } from '../../constants/color'


const DetailMenu = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="transparent" translucent={true}/>
      <TableList/>
    </ScrollView>
  )
}

export default DetailMenu

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