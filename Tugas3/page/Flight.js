import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Jadwal = [
  {
    id: '1',
    asal: 'Lampung',
    tujuan: 'Jakarta',
    maskapai: 'Elang',
    waktu : '22 Oktober 2022, 18:00',

  },
  {
    id: '2',
    asal: 'Jakarta',
    tujuan: 'Lampung',
    maskapai: 'Tapis Air',
    waktu : '22 Oktober 2022, 20:00',
  },
  {
    id: '3',
    asal: 'Jakarta',
    tujuan: 'Sumatera Utara',
    maskapai: 'Batik Air',
    waktu : '22 Oktober 2022, 19:00',
  },
  {
    id: '4',
    asal: 'Lampung',
    tujuan: 'Sumatera Utara',
    maskapai: 'Sriwijaya Air',
    waktu : '22 Oktober 2022, 14:00',
  },
  {
    id: '5',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu : '22 Oktober 2022, 17:00',
  },
  {
    id: '6',
    asal: 'Bandung',
    tujuan: 'Jakarta',
    maskapai: 'Batik Air',
    waktu : '22 Oktober 2022, 21:00',
  }
];


const Penerbangan = ({ navigation }) => {
  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.tujuanasal}>{item.asal}   -   {item.tujuan}</Text>
    <View style={styles.waktupesawat}>
      <MaterialIcons name="airplanemode-active" size={24} color="green" />
      <Text style={styles.maskapai}>{item.maskapai}</Text>
      <Text style={styles.texttanggal}>{item.waktu}</Text>
    </View>    
  </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.heading}>Hiling.id</Text>
            <AntDesign name="user" size={24} color="white" />
          </View>
          <Text style={styles.heading2}>Hasil Pencarian Penerbangan</Text>
          <Text style={styles.heading2}>(tanggal Keberangkatan)</Text>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={Jadwal}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
      <Text style={styles.copyright}>Copyright Muhammad Rizky Fahreza Gusti - 120140071</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    marginTop: StatusBar.currentHeight || 0,
  },
  header:{
    width:'100%',
    backgroundColor: '#86b257',
    padding:20,
    marginBottom:10,
  },
  heading: {
    color: 'white',
    fontSize: 30,
  },
  heading2: {
    color: 'white',
    textAlign:'center',
  },
  top: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  title: {
    fontSize: 32,
  },
  waktupesawat:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  maskapai:{
    marginLeft:-40,
    fontSize:20,
    fontWeight: "bold",
  },
  texttanggal:{
    color:'blue',
  },
  copyright: {
    color : '#797575',
    fontWeight: 'bold',
    marginBottom: '20px',
    padding:20,
    marginTop: '10px',
    textAlign: 'center',
  },
});

export default Penerbangan;