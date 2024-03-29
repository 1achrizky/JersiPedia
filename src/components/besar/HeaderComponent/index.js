import { StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react'
import { colors, fonts, responsiveHeight } from '../../../utils'
import { IconCari } from '../../../assets'
import Tombol from '../../kecil/Tombol'
import Jarak from '../../kecil/Jarak'

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
				<View style={styles.wrapperHeader}>

					{/* Input Pencarian */}
					<View style={styles.searchSection}>
						<IconCari/>
						<TextInput placeholder="Cari Jersey. . ." style={styles.input}/>
					</View>

					<Jarak width={10}/>

					<Tombol icon="keranjang" totalKeranjang={2} padding={10}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: responsiveHeight(125),
    },
		wrapperHeader:{
			marginTop:15,
			marginHorizontal:30,
			flexDirection:'row',
		},
    searchSection:{
        backgroundColor: colors.white,
        borderRadius: 5,
				paddingLeft: 10,
				flex:1,
				flexDirection:'row',
				alignItems:'center', //center vertical
    },
		input:{
			fontSize: 16,
			fontFamily: fonts.primary.regular,
		},
		
})