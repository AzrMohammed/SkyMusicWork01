import React, {useEffect} from 'react';
import {
  Text,
  Image,
  ScrollView,
  TextInput,
  View,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
} from 'react-native';

import {
    header_ic_switch_camera,
    header_ic_close,
    header_ic_settings,
    header_ic_flash
  } from '../../resources/images';
  

export const CameraHeaderActionPanel = props => {
  // console.log("propsreceived")
  // console.log(props)

  // const [footerOption, setfooterOption] = useState(props.footerOption);
  // const [selectiontype, setSelectiontype] = useState(props.selectiontype);

  return (


    <View style={{...styles.container,  marginTop:10, flexDirection:'row', flex:1,padding:10}}>

        <View style={{flexDirection:'row', flex:1, justifyContent:'center', alignItems:'center'}}>
      <View style={{left:0, position:'absolute', flexDirection:'row'}}>
          <View style={styles.eventitemImageiconContainer}>
        <Image
          source={header_ic_switch_camera}
        style={styles.eventitemImageicon}
        />
        </View>
        <View style={styles.eventitemImageiconContainer}>
        <Image
          source={header_ic_settings}
        style={styles.eventitemImageicon}
        />
        </View>
      </View>
      <View style={{}}>
      <View style={styles.eventitemImageiconContainer}>
        <Image
          source={header_ic_flash}
        style={styles.eventitemImageiconFlash}
        />
        </View>
      </View>

      <View style={{right:0, position:'absolute'}}>
      <View style={styles.eventitemImageiconContainer}>
        <Image
          source={header_ic_close}
        style={styles.eventitemImageicon}
        />
        </View>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    marginBottom: 0,
    height: 60,
    //   flex:1,
    //   flexDirection:"row"
  },
  eventitemImageiconContainer:{
      
padding:4
  },
  eventitemImageicon: {
    alignSelf: 'center',
    width: 16,
    height: 16,
    tintColor:'#fff',
  },
  eventitemImageiconFlash: {
    alignSelf: 'center',
    width: 20,
    height: 20,
    tintColor:'#fff',
    padding:4
  },

});
