import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';
import { CommonStyle, Theme } from '../styles';

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    marginTop: 16,
    resizeMode: 'contain'
  },
})

export default (Help = ({ }) => (
  <View style={CommonStyle.content}>
    <Text style={CommonStyle.textTitle}>Apa Yang Refactory Dapat Bantu?</Text>
    <View style={{ alignItems: 'center' }}>
      <Image source={Images.icApproval} style={styles.icon} />
      <Text style={CommonStyle.subText}>Memperkuat Tim Engineer Anda</Text>
      <Text style={CommonStyle.textDescription}>
        Refactory adalah perusahaan edukasi dan teknologi yang menyediakan layanan lengkap berupa course maupun custom training yang materinya dapat disesuaikan dengan kebutuhan teknologi dan bisnis perusahaan Anda
    </Text>
      <Image source={Images.icBolt} style={styles.icon} />
      <Text style={styles.subText}>Wujudkan Software Impian Anda</Text>
      <Text style={CommonStyle.textDescription}>
        Kami adalah perusahaan One-Stop IT Solution untuk proyek Anda, membantu di setiap tahap mulai dari menyusun ide, melalui desain dan pengembangan aplikasi seluler, situs web dan aplikasi desktop, hingga peluncuran produk.
    </Text>
    </View>
  </View>
));