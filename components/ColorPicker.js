// ColorPicker.js
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ColorPicker() {
  const [imageSource, setImageSource] = useState(require('../assets/vs_blue.png'));
  const [colorInfo, setColorInfo] = useState('');
  const [supplierInfo, setSupplierInfo] = useState('');
  const [priceInfo, setPriceInfo] = useState('');
  const [isRedSelected, setIsRedSelected] = useState(false); 
  const navigation = useNavigation();

  const gotoSilverPicker = () => {
    setImageSource(require('../assets/vs_silver.png'));
    setColorInfo(<Text style={styles.boldText}>Màu: bạc</Text>);
    setSupplierInfo(<Text style={styles.boldText}>Cung cấp bởi Tiki Trading</Text>);
    setPriceInfo(<Text style={styles.boldText}>1.890.000 đ</Text>);
    setIsRedSelected(false);
  };

  const gotoRedPicker = () => {
    setImageSource(require('../assets/vs_red.png'));
    setColorInfo(<Text style={styles.boldText}>Màu: đỏ</Text>);
    setSupplierInfo(<Text style={styles.boldText}>Cung cấp bởi Tiki Trading</Text>);
    setPriceInfo(<Text style={styles.boldText}>1.790.000 đ</Text>);
    setIsRedSelected(true);
  };

  const gotoBlackPicker = () => {
    setImageSource(require('../assets/vs_black.png'));
    setColorInfo(<Text style={styles.boldText}>Màu: đen</Text>);
    setSupplierInfo(<Text style={styles.boldText}>Cung cấp bởi Tiki Trading</Text>);
    setPriceInfo(<Text style={styles.boldText}>1.990.000 đ</Text>);
    setIsRedSelected(false); 
  };

  const gotoBluePicker = () => {
    setImageSource(require('../assets/vs_blue.png'));
    setColorInfo(<Text style={styles.boldText}>Màu: xanh</Text>);
    setSupplierInfo(<Text style={styles.boldText}>Cung cấp bởi Tiki Trading</Text>);
    setPriceInfo(<Text style={styles.boldText}>1.790.000 đ</Text>);
    setIsRedSelected(false); 
  };

  const handleDonePress = () => {
    if (isRedSelected) {
      navigation.navigate('RedPhoneScreen'); 
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.text1}>
        Điện Thoại Vsmart Joy 3 Hàng chính hãng
      </View>

      {colorInfo !== '' && <Text style={styles.colorInfo}>{colorInfo}</Text>}
      {supplierInfo !== '' && <Text style={styles.supplierInfo}>{supplierInfo}</Text>}
      {priceInfo !== '' && <Text style={styles.priceInfo}>{priceInfo}</Text>}

      <TouchableOpacity style={styles.square1} onPress={gotoSilverPicker}>
      </TouchableOpacity>

      <TouchableOpacity style={styles.square2} onPress={gotoRedPicker}>
      </TouchableOpacity>

      <TouchableOpacity style={styles.square3} onPress={gotoBlackPicker}>
      </TouchableOpacity>

      <TouchableOpacity style={styles.square4} onPress={gotoBluePicker}>
      </TouchableOpacity>

      <View style={styles.background}></View>

      <Text style={styles.text2}>
        Chọn một màu bên dưới:
      </Text>

      <TouchableOpacity style={styles.endButton} onPress={handleDonePress}>
        <Text style={styles.endText}>Xong</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  img: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 80,
    height: 80,
  },
  image: {
    width: 170,
    height: 240,
  },
  text1: {
    width: 150,
    height: 18,
    left: 160,
    fontFamily: 'Roboto',
    color: '#000000',
    fontSize: 17,
    paddingTop: 14,
  },
  background: {
    position: 'absolute',
    top: 240,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#C4C4C4',
    zIndex: 0,
  },
  text2: {
    position: 'absolute',
    top: 255,
    left: 6,
    fontSize: 18,
    opacity: 1,
  },
  square1: {
    position: 'absolute',
    width: 100,
    height: 100,
    top: 300,
    left: 135,
    backgroundColor: '#C5F1FB',
    zIndex: 1,
  },
  square2: {
    position: 'absolute',
    width: 100,
    height: 100,
    top: 420,
    left: 135,
    backgroundColor: '#F30D0D',
    zIndex: 1,
  },
  square3: {
    position: 'absolute',
    width: 100,
    height: 100,
    top: 540,
    left: 135,
    backgroundColor: '#000000',
    zIndex: 1,
  },
  square4: {
    position: 'absolute',
    width: 100,
    height: 100,
    top: 660,
    left: 135,
    backgroundColor: '#234896',
    zIndex: 1,
  },
  endButton: {
    position: 'absolute',
    top: 800,
    width: '90%',
    height: 40,
    backgroundColor: '#1952E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endText: {
    color: '#F9F2F2',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    lineHeight: 23.44,
  },
  colorInfo: {
    fontFamily: 'Roboto',
    left: 160,
    top: 65,
    fontSize: 15,
  },
  supplierInfo: {
    fontFamily: 'Roboto',
    left: 160,
    top: 70,
    fontSize: 15,
  },
  priceInfo: {
    fontFamily: 'Roboto',
    left: 160,
    top: 75,
    fontSize: 15,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
