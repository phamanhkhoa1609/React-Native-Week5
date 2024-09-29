import React, {useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import ColorPicker from './ColorPicker'
export default function Lab03() {

 const navigation = useNavigation(); // Get the navigation object

  const goToColorPicker = () => {
    navigation.navigate('ColorPicker'); // Navigate to ColorPicker screen
  };


  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source ={require('../assets/vs_blue.png')} style={styles.phoneImage} />
      </View>


      <View style={styles.text}>
      Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </View>

      <View style={styles.imgstar}>
        <Image source={require('../assets/star.png')} />
        <Image source={require('../assets/star.png')} />
        <Image source={require('../assets/star.png')} />
        <Image source={require('../assets/star.png')} />
        <Image source={require('../assets/star.png')} />
      </View>
      
      <View style={styles.textstar}>
      (Xem 828 đánh giá)
      </View>

      <View style={styles.textbill}>
      1.790.000 đ
      </View>


     <View style={styles.textbot}>
      Ở ĐÂU RẺ HƠN HOÀN TIỀN
      </View>


      <TouchableOpacity style={styles.rectangle} onPress={goToColorPicker}>
        <Text>4 MÀU-CHỌN MÀU</Text>
      </TouchableOpacity>




      <View>
        <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyText}>CHỌN MUA</Text>
      </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  img: {
    width: '280px',
    height: '300px',
    top: '-2px',
    left: '29px',
  },

    phoneImage: {
    width: 200, 
    height: 250,
  },

  text: {
    width: 288,
    height: 18,
    top: 10, 
    opacity: 1, 
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 17.58,
    textAlign: 'left',
    color: '#000000',
  },

  imgstar: {
    flexDirection:'row',
    width: '88%',
    height: 25,
    alignItems: 'flex_start',
    top: 15,
  },
  textstar: {
    width: 135,
    height: 18,
    left: 100,
    fontFamily: 'Roboto',
    color: '#000000',
    bottom: 7,
  },

textbill:{
alignItems: 'flex_start',
width: '88%',
padding: 7,
},

textbot:{
width:'97%',
height: '14px',
left: '23px',
gap: '0px',
opacity: '0px',
fontFamily: 'Roboto',
fontSize: '12px',
fontWeight: '700',
lineHeight: '14.06px',
textAlign: 'left',
flexDirection: 'row',
color:'#FA0000',
},

rectangle: {
width: '88%',
height: '34px',
borderWidth: 1,
top: '20px',
color: '#00000075',
borderRadius: 10,
justifyContent: 'center',
alignItems: 'center',
},



buyButton:{
width: '326px',
height: '44px',
top: '38px',
left: '10px',
gap: '0px',
borderRadius: '10px 0px 0px 0px',
border: '1px 0px 0px 0px',
opacity: '0px',
backgroundColor: '#CA1536',
},


buyText:{
  textAlign: 'center',
  color: 'white',
  top: 13,
  fontWeight: 'bold',
  fontSize: 15,
  fontFamily: 'Arial',
},
});
