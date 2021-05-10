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
// import { isIOS } from '~shared/utils';
// import colors from '~shared/styles/colors';
// import SplashScreen from 'react-native-splash-screen'

import {FooterPanel, FooterPanelEvent} from '../../components/FooterPanel';
import {CameraHeaderActionPanel} from '../../components/CameraHeaderPanel';
import {VideoFlowS1, VideoFlowS2, VideoFlowS3, VideoFlowS4, VideoFlowS5, VideoFlowS6, VideoFlowS7} from '../../components/VideoFlow';
import { Dimensions } from 'react-native';


class CameraScreen extends React.Component {
  // var {width} = Dimension.get('window');
  ACTION_KEY_GALLERY = 'gallery';
  ACTION_KEY_PHOTO = 'photo';
  ACTION_KEY_VIDEO = 'video';
  ACTION_KEY_LIVE = 'live';
  ACTION_KEY_STORY = 'story';
  ACTION_KEY_A_MUSIC = 'a_music';

  constructor() {
    super();

    let footer_data = [
      {label: 'Gallery', key: this.ACTION_KEY_GALLERY},
      {label: 'Photo', key: this.ACTION_KEY_PHOTO},
      {label: 'Video', key: this.ACTION_KEY_VIDEO},
      {label: 'Live', key: this.ACTION_KEY_LIVE},
      {label: 'Story', key: this.ACTION_KEY_STORY},
      {label: 'Artist Match', key: this.ACTION_KEY_A_MUSIC},
    ];
    this.state = {
      footerOption: footer_data,
      viewfooterOption: true,
      footerOptionSelectedSubIndex: 1,
      selectiontype: footer_data[0].key,
      showBaseOptions:true,
    };
  }

  //   prepareBaseDataset()

  //   {
  //     const BASE_ACTION_TYPE_VIDEO = "VIDEO";
  //     BASE_ACTION_TYPE_DEFAULT = "F_DEFAULT"
  // let footer_data = {
  //     // BASE_ACTION_TYPE_DEFAULT :[{"label":"Gallery","is_acive":false}]
  // }

  //   }

  componentWillUnmount() {}

  onBaseItemSelected = index => {
    console.log('calledddd');
    this.setState({selectiontype: this.state.footerOption[index].key});
  };

  setStepSelection = index => {
    console.log('calleddddstepselection');
    this.setState({footerOptionSelectedSubIndex: index});
  };

  setShowBaseOptions = (val)=>
  {
    console.log("showbaseoptioncalleds")
    console.log(val)
    this.setState({showBaseOptions:val})
  }


  renderVideFlowBlock = () => {

    let proceed_view = this.state.selectiontype === this.ACTION_KEY_LIVE 
    let subselection = this.state.footerOptionSelectedSubIndex
    

    console.log("videoflowwwee")
    console.log(proceed_view)
    console.log(subselection)

    return (
      <View>
{proceed_view?
<View>

 {( subselection == 1) ? <VideoFlowS1 showBaseOptions = {this.setShowBaseOptions} setStepSelection={this.setStepSelection} />: null }
 {( subselection == 2) ? <VideoFlowS2 showBaseOptions = {this.setShowBaseOptions} setStepSelection={this.setStepSelection} />: null }
 {( subselection == 3) ? <VideoFlowS3 showBaseOptions = {this.setShowBaseOptions} setStepSelection={this.setStepSelection} />: null }
 {( subselection == 4) ? <VideoFlowS4 showBaseOptions = {this.setShowBaseOptions} setStepSelection={this.setStepSelection} />: null }
 {( subselection == 5) ? <VideoFlowS5 showBaseOptions = {this.setShowBaseOptions} setStepSelection={this.setStepSelection} />: null }
 {( subselection == 6) ? <VideoFlowS6 showBaseOptions = {this.setShowBaseOptions} setStepSelection={this.setStepSelection} />: null }
 {( subselection == 7) ? <VideoFlowS7 showBaseOptions = {this.setShowBaseOptions} setStepSelection={this.setStepSelection} />: null }

 </View>
 
 :null }

</View>
    )
  };
  render() {
    const selection = this.state.selectiontype;
    const footerOptionSelectedSubIndex = this.state
      .footerOptionSelectedSubIndex;
    const viewfooterOption = this.state.footerOption;

    return (
      <View style={{flex: 1,  backgroundColor:'#000',}}>
      <View>
      <CameraHeaderActionPanel  />
        </View>


      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
                {this.renderVideFlowBlock()}
                  {/* {selection === this.ACTION_KEY_LIVE ? <FooterPanelEvent /> : null} */}
          <FooterPanel
            showBaseOptions = {this.state.showBaseOptions}
            onBaseItemSelected={this.onBaseItemSelected}
            viewfooterOption={viewfooterOption}
            footerOption={this.state.footerOption}
            selectiontype={this.state.selectiontype}
          />
        {/* <Text style={{backgroundColor:'red'}}>My fixed footer</Text> */}
        </View>
      </View>

      );
  }
}

// export const FooterPanel = () => {

//   const [footerOption, setfooterOption] = useState([{"label":"Gallery","is_active":false},{"label":"Photo","is_active":false},{"label":"Video","is_active":false},{"label":"Live","is_active":true},{"label":"Story","is_active":false},{"label":"Artist Match","is_active":false}]);

//   return (
//     <View style={styles.containerFooterOption}>
//           <FlatList
//           style={{}}
//           horizontal = {true}
//         data={footerOption}
//         renderItem = {({ item, index }) => _renderFooterPanelItem(item, index)}
// />
//     </View>
//   );
// }

// let _renderFooterPanelItem=(item, index)=>
// {

//   let is_active = item.is_active

//   return (
//     <View style={styles.itemContainer}>
//       <Text style={styles.item}>{item.label}</Text>
//       {is_active?(
//         <View style={styles.underline_Selector}
//         />) :(<View/>)}

//     </View>
//   )

// }


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    height: 100,
    width: 200,
    backgroundColor: 'red'
  },
  main: {
    height: 200,
    width: 200,
    padding: 25,
    borderWidth: 25,
    borderColor: 'black',
    margin: 25,
    backgroundColor: 'blue'
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  footer: {
    height: 100,
    width: 200,
    backgroundColor: 'green'
  },
  text: {
    color: '#ffffff',
    fontSize: 20
  }
});

export default CameraScreen;
