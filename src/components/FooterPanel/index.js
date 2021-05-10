import React, {useState} from 'react';
import {Image, FlatList, TouchableOpacity, StyleSheet, Text, TextInput, View} from 'react-native';
// import {
//   footer_ic_session,
//   footer_ic_pod,
//   footer_ic_video,
// } from '../../resources/images';


// const ACTON_TYPE_VIDEO = 'AC_VIDEO';
// const ACTON_TYPE_POD = 'AC_POD';
// const ACTON_TYPE_STREAM = 'AC_STREAM';

// export const FooterPanelEvent = () => {

//   const [footerActionOption, setfooterActionOption] = useState([
//     {action_type: ACTON_TYPE_VIDEO, label: 'Video', is_active: true},
//     {action_type: ACTON_TYPE_POD, label: 'Podcast', is_active: false},
//     {action_type: ACTON_TYPE_STREAM, label: 'Studio Session', is_active: false},
//   ]);

//   return (
//     <View style={styles.containerFoterCameraActions}>
//       <FlatList
//         style={{}}
//         horizontal={true}
//         data={footerActionOption}
//         renderItem={({item, index}) =>
//           _renderFooterActionPanelItem(item, index)
//         }
//       />
//     </View>
//   );
// };

// const getfooterActionIc = action_type => {
//   if (action_type == ACTON_TYPE_VIDEO) return footer_ic_video;
//   if (action_type == ACTON_TYPE_POD) return footer_ic_pod;
//   if (action_type == ACTON_TYPE_STREAM) return footer_ic_session;
//   else return footer_ic_video;
// };

// let _renderFooterActionPanelItem = (item, index) => {
//   let is_active = item.is_active;

//   return (
//     <View
//       style={
//         item.is_active
//           ? styles.eventitemContainerSelected
//           : styles.eventitemContainer
//       }>
//       <View
//         style={
//           item.is_active
//             ? styles.eventitemImageContainerSelected
//             : styles.eventitemImageContainer
//         }>
//         <Image
//           source={getfooterActionIc(item.action_type)}
//           style={
//             item.is_active
//               ? styles.eventitemImageiconSelected
//               : styles.eventitemImageicon
//           }
//           // resizeMode={'contain'}
//         />
//       </View>
//       {item.is_active ? <Text style={styles.eventActionitemtext}>{item.label}</Text> : null}
//     </View>
//   );
// };

export const FooterPanel = (props) => {

  // console.log("propsreceived===========footerbase")
  // console.log(props)

  const [footerOption, setfooterOption] = useState(props.footerOption);
  // const [selectiontype, setSelectiontype] = useState(props.selectiontype);

  let show_default_footer = props.showBaseOptions  
  return (
    <View>
      { show_default_footer ?
    <View style={styles.containerFooterOption}>
      <FlatList
        style={{}}
        horizontal={true}
        data={footerOption}
        renderItem={({item, index}) => _renderFooterPanelItem(item, index, props.selectiontype, props.onBaseItemSelected)}
      />
    </View>
    :null}
    </View>
  );
};

let _renderFooterPanelItem = (item, index, selectiontype, onBaseItemSelected) => {
  let is_active = item.key === selectiontype 

  return (
    <TouchableOpacity
    style={{}}
    onPress={() => {
      if(!is_active)
      onBaseItemSelected(index)
    }}
  >
    <View style={styles.itemContainer}>
      <Text style={is_active ?styles.itemSelected:styles.item}>{item.label}</Text>
      {is_active ? <View style={styles.underline_Selector} /> : <View />}
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerFoterCameraActions: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 0,
    marginBottom: 0,
    height: 120,
  },
  eventitemContainer: {
    justifyContent: 'center',
    width: 60,
    height: 80,
  },
  eventitemContainerSelected: {
    justifyContent: 'center',
    width: 80,
    height: 120,
  },
  eventitemImageContainer: {
    borderRadius: 50,
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'white',
  },
  eventitemImageContainerSelected: {
    borderRadius: 70,
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: 'white',
  },
  eventitemImageicon: {
    alignSelf: 'center',
    width: 15,
    height: 15,
  },
  eventActionitemtext: {
    height: 20,
    padding: 10,
    fontSize: 13,
    height: 37,
    color: '#fff',
  },
  eventitemImageiconSelected: {
    alignSelf: 'center',
    width: 30,
    height: 30,
  },
  containerFooterOption: {
    height: 40,
    marginBottom: 10,
  },
  itemContainer: {
    height: 40,
    paddingTop: 0,
  },
  itemSelected: {
    height: 20,
    padding: 10,
    fontSize: 13,
    height: 37,
    color: '#fff',
  },
  item: {
    height: 20,
    padding: 10,
    fontSize: 14,
    height: 37,
    color: '#3e3e3e',
  },
  underline_Selector: {
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: '#fff',
    height: 4,
    borderColor: '#000000',
  },
});

export default FooterPanel;
