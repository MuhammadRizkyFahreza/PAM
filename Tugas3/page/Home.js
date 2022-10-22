import { React, useState } from "react";
import { StyleSheet, Text, Button, View,TextInput } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  const [keberangkatan, setKeberangkatan] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [tanggal, setTanggal] = useState("");
  

    return(
        <View style={styles.container}>
            <View style={styles.top}>
              <Entypo name="menu" size={24} color="white" />
              <Text style={styles.header}>Hiling.id</Text>
              <AntDesign name="user" size={24} color="white" />
            </View>
            
            <View style={styles.card}>
              <Text style={styles.header2}>Lokasi keberangkatan</Text>
              <View style={styles.maininputan}>
                <MaterialIcons name="flight-takeoff" size={24} color="green" />
                <TextInput
                  style={styles.input}
                  onChangeText={setKeberangkatan}
                  value={keberangkatan}
                  placeholder="Masukkan Lokasi Keberangkatan"
                  selectTextOnFocus={false}
                />
              </View>
              <Text style={styles.header2}>Lokasi Tujuan</Text>
              <View style={styles.maininputan}>
                <MaterialCommunityIcons name="airplane-landing" size={24} color="green" />
                <TextInput
                  style={styles.input}
                  onChangeText={setTujuan}
                  value={tujuan}
                  placeholder="Masukkan Lokasi Tujuan"
                />
              </View>
              <Text style={styles.header2}>Tanggal Keberangkatan</Text>
                <View style={styles.maininputan}>
                  <MaterialIcons name="date-range" size={24} color="green" />
                  <TextInput
                    style={styles.input}
                    onChangeText={setTanggal}
                    value={tanggal}
                    placeholder="Masukkan Tanggal Keberangkatan"
                  />
                </View>
              <Button
                color= '#ED7D31'
                title="cari"
                onPress={() => navigation.navigate('Flight')}
              />
            </View>
            
            <View style={styles.kotak}>
              <Text style={styles.copyright}>Copyright Muhammad Rizky Fahreza Gusti - 120140071</Text>
            </View>
            
    
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86b257',
    overflow : "hidden",
  },
  top: {
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between'
  },
  maininputan: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:20,
    marginTop:5,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:3,
    borderColor: '#E5E5E5',
    
  },
  header: {
    color: 'white',
    fontSize: 30,
  },
  card: {
    backgroundColor: 'white',
    margin: 'auto',
    width: '80%',
    padding:20,
    borderRadius:10,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 10,
    borderRadius:3,
  },
  kotak: {
    marginTop: '-100px',
    zIndex: -1,
    flex:1,
    borderRadius:10,
    backgroundColor: '#F1F1F1',
  },
  copyright: {
    color : '#797575',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 'auto',
    textAlign: 'center',
  }
});

export default Home;