import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors, fonts, responsiveWidth } from '../../../utils'
import Tombol from '../Tombol'

const CardJersey = ({jersey}) => {
	// console.log(jersey.gambar[0]);
  return (
    <View style={styles.container}>
			<TouchableOpacity style={styles.card}>
				<Image source={jersey.gambar[0]} style={styles.gambar}/>
      	<Text style={styles.text}>{jersey.nama}</Text>
			</TouchableOpacity>

			<Tombol type="text" title="Detail" padding={7}/>
    </View>
  )
}

export default CardJersey

const styles = StyleSheet.create({
	container:{
		marginBottom: 25,
	},
	card:{
		backgroundColor:colors.yellow,
		width: responsiveWidth(150),
		alignItems: 'center',
		padding: 10,
		borderRadius: 10,
		marginBottom: 10,
	},
	gambar:{
		width:124,
		height:124,
	},
	text:{
		fontFamily: fonts.primary.bold,
		fontSize: 13,
		textTransform: 'capitalize',
		textAlign: 'center',
	},
})