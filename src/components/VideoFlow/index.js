import React, {useState} from 'react';
import {
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  ic_cross,
  ic_add_platform,
  footer_ic_session,
  footer_ic_pod,
  footer_ic_video,
} from '../../resources/images';

const ACTON_TYPE_VIDEO = 'AC_VIDEO';
const ACTON_TYPE_POD = 'AC_POD';
const ACTON_TYPE_STREAM = 'AC_STREAM';

const CONNECT_ACC_TYPE_YOUTUBE = 'YOUTUBE';
const CONNECT_ACC_TYPE_FACEBOOK = 'FACEBOOK';
const CONNECT_ACC_TYPE_TWITCH = 'TWITCH';
const CONNECT_ACC_TYPE_PERISCOPE = 'PERISCOPE';
const CONNECT_ACC_TYPE_VLIVE = 'V_LIVE';
const CONNECT_ACC_TYPE_CUSTOM_RTMP = 'CUSTOM_RTMP';

export const VideoFlowS1 = props => {
  const [footerActionOption, setfooterActionOption] = useState([
    {action_type: ACTON_TYPE_VIDEO, label: 'Video', is_active: true},
    {action_type: ACTON_TYPE_POD, label: 'Podcast', is_active: false},
    {action_type: ACTON_TYPE_STREAM, label: 'Studio Session', is_active: false},
  ]);
  const [activeIndexS1, setactiveIndexS1] = useState(1);

  return (
    <View style={styles.containerFoterCameraActions}>
      <FlatList
        style={{}}
        horizontal={true}
        data={footerActionOption}
        renderItem={({item, index}) =>
          _renderFooterActionPanelItem(
            item,
            index,
            activeIndexS1,
            setactiveIndexS1,
            props,
          )
        }
      />
    </View>
  );
};

const getfooterActionIc = action_type => {
  if (action_type == ACTON_TYPE_VIDEO) return footer_ic_video;
  if (action_type == ACTON_TYPE_POD) return footer_ic_pod;
  if (action_type == ACTON_TYPE_STREAM) return footer_ic_session;
  else return footer_ic_video;
};

let _renderFooterActionPanelItem = (
  item,
  index,
  activeIndexS1,
  setactiveIndexS1,
  props,
) => {
  let is_active = activeIndexS1 == index;

  return (
    <TouchableOpacity
      style={{}}
      onPress={() => {
        if (!is_active) setactiveIndexS1(index);
        props.showBaseOptions(false);
        props.setStepSelection(2);
      }}>
      <View
        style={
          is_active
            ? styles.eventitemContainerSelected
            : styles.eventitemContainer
        }>
        <View
          style={
            is_active
              ? styles.eventitemImageContainerSelected
              : styles.eventitemImageContainer
          }>
          <Image
            source={getfooterActionIc(item.action_type)}
            style={
              is_active
                ? styles.eventitemImageiconSelected
                : styles.eventitemImageicon
            }
            // resizeMode={'contain'}
          />
        </View>
        {is_active ? (
          <Text style={styles.eventActionitemtext}>{item.label}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export const VideoFlowS2 = props => {
  return (
    <View style={styles.containerFoterCameraActions}>
      <SubFooterPanelS2V1 props={props} />
    </View>
  );
};

export const SubFooterPanelS2V1 = props => {
  props = props.props;
  console.log('propsreceivedssw2');
  console.log(props);

  const [selection, setSelection] = useState(0);
  const [footerOption, setSelectionfooterOptionfooterOption] = useState([
    {label: 'Public', key: 'public'},
    {label: 'Private', key: 'private'},
  ]);
  let data_b1 = {key: 'continue', label: 'continue'};

  let proceedOnTapButton = key => {
    props.setStepSelection(3);
  };

  return (
    <View>
      <View style={{}}>
        <BaseCompActionButton
          data={data_b1}
          button_type={1}
          can_click={true}
          proceed_onclick={proceedOnTapButton}
        />
      </View>

      <View style={styles.containerFooterOption}>
        <FlatList
          style={{}}
          horizontal={true}
          data={footerOption}
          renderItem={({item, index}) =>
            _renderFooterPanelItemGeneric(item, index, selection, setSelection)
          }
        />
      </View>
    </View>
  );
};

// step3 video flow

export const VideoFlowS3 = props => {
  return (
    <View style={styles.containerFoterCameraActions}>
      <SubFooterPanelS3V1 props={props} />
    </View>
  );
};

export const SubFooterPanelS3V1 = props => {
  props = props.props;
  console.log('propsreceivedssw2');
  console.log(props);

  const [selection, setSelection] = useState(0);
  const [footerOption, setSelectionfooterOptionfooterOption] = useState([
    {label: 'MUSIC', key: 'music'},
    {label: 'PPV', key: 'ppv'},
    {label: 'DANCE', key: 'dance'},
    {label: 'COMEDY', key: 'comedy'},
    {label: 'ART', key: 'art'},
    {label: 'FASHION', key: 'fashion'},
  ]);
  let data_b1 = {key: 'go_live', label: 'GO LIVE'};
  let data_b2 = {key: 'schedule_live_stream', label: 'Schedule Live Stream'};
  let proceedOnTapButton = key => {
    props.setStepSelection(4);
  };

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <BaseCompActionButton
          data={data_b1}
          button_type={2}
          can_click={true}
          proceed_onclick={proceedOnTapButton}
        />
        <BaseCompActionButton
          data={data_b2}
          button_type={1}
          can_click={true}
          proceed_onclick={proceedOnTapButton}
        />
      </View>

      <View style={{...styles.containerFooterOption, marginTop: 20}}>
        <FlatList
          style={{}}
          horizontal={true}
          data={footerOption}
          renderItem={({item, index}) =>
            _renderFooterPanelItemGeneric(item, index, selection, setSelection)
          }
        />
      </View>
    </View>
  );
};

export const VideoFlowS4 = props => {
  return (
    <View style={styles.containerFooterStepsVariantWhite}>
      <SubFooterPanelS4V1 props={props} />
    </View>
  );
};

export const SubFooterPanelS4V1 = props => {
  props = props.props;
  console.log('propsreceivedssw2');
  console.log(props);

  const [selection, setSelection] = useState(0);

  let data_b1 = {key: 'yes', label: 'YES'};
  let data_b2 = {key: 'no', label: 'No Thanks'};
  let proceedOnTapButton = key => {
    props.setStepSelection(5);
  };

  return (
    <View>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 50,
          paddingBottom: 50,
        }}>
        <Text style={styles.formModalTitle}>
          {'WOULD YOU LIKE TO MULTI-STREAM'}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <BaseCompActionButton
            data={data_b1}
            button_type={3}
            can_click={true}
            proceed_onclick={proceedOnTapButton}
          />
          <BaseCompActionButton
            data={data_b2}
            button_type={3}
            can_click={true}
            proceed_onclick={proceedOnTapButton}
          />
        </View>
      </View>
    </View>
  );
};

export const VideoFlowS5 = props => {
  return (
    <View
      style={{
        ...styles.containerFooterStepsVariantWhite,
        flex: 1,
        flexDirection: 'row',
      }}>
      <SubFooterPanelS5V1 props={props} />
    </View>
  );
};

export const SubFooterPanelS5V1 = props => {
  props = props.props;
  console.log('propsreceivedssw2');
  console.log(props);

  const [selection, setSelection] = useState(0);

  let data_b1 = {key: 'yes', label: 'YES1'};
  let data_b2 = {key: 'no', label: 'No Thanks'};
  let proceedOnTapButton = key => {
    props.setStepSelection(6);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingLeft: 30,
          paddingRight: 30,
          flex: 1,
          paddingTop: 20,
          paddingBottom: 20,
        }}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={{...styles.formModalTitle, alignSelf: 'flex-start'}}>
            {'SELECT CHANNEL'}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <Image
              source={ic_add_platform}
              style={styles.eventitemImageicon}
              // resizeMode={'contain'}
            />

            <Text
              style={{
                ...styles.formModalSubtext,
                marginLeft: 10,
                alignSelf: 'flex-start',
              }}>
              {'Add a platform'}
            </Text>
          </View>
          <Text
            style={{
              ...styles.formModalTitle,
              marginTop: 30,
              alignSelf: 'flex-start',
            }}>
            {'CONNECTED ACCOUNTS'}
          </Text>

          <View style={{height: 100}}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
          }}></View>
      </View>
      <TouchableOpacity
        style={{}}
        onPress={() => {
          proceedOnTapButton('index');
        }}>
        <View style={{...styles.blackRadiusContainer}}>
          <Text
            style={{
              ...styles.footerButtonText,
              padding: 20,
              alignSelf: 'center',
              color: '#fff',
            }}>
            {'Cancel & Continue to single live stream'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const VideoFlowS6 = props => {
  return (
    <View
      style={{
        ...styles.containerFooterStepsVariantWhite,
        flex: 1,
        flexDirection: 'row',
      }}>
      <SubFooterPanelS6V1 props={props} />
    </View>
  );
};

export const SubFooterPanelS6V1 = props => {
  props = props.props;
  console.log('propsreceivedssw2');
  console.log(props);

  //     const CONNECT_ACC_TYPE_YOUTUBE = "YOUTUBE"
  // const CONNECT_ACC_TYPE_FACEBOOK = "FACEBOOK"
  // const CONNECT_ACC_TYPE_TWITCH = "TWITCH"
  // const CONNECT_ACC_TYPE_PERISCOPE = "PERISCOPE"
  // const CONNECT_ACC_TYPE_VLIVE ="V_LIVE"
  // const CONNECT_ACC_TYPE_CUSTOM_RTMP = "CUSTOM_RTMP"

  const [footerActionOption, setfooterActionOption] = useState([
    {action_type: CONNECT_ACC_TYPE_YOUTUBE, label: 'Youtube', is_active: false},
    {
      action_type: CONNECT_ACC_TYPE_FACEBOOK,
      label: 'Facebook',
      is_active: false,
    },
    {action_type: CONNECT_ACC_TYPE_TWITCH, label: 'Twitch', is_active: false},
    {
      action_type: CONNECT_ACC_TYPE_PERISCOPE,
      label: 'Periscope',
      is_active: false,
    },
    {action_type: CONNECT_ACC_TYPE_VLIVE, label: 'V Live', is_active: false},
    {
      action_type: CONNECT_ACC_TYPE_CUSTOM_RTMP,
      label: 'Custom RTMP',
      is_active: false,
    },
  ]);

  const [selection, setSelection] = useState(0);

  let proceedOnTapButton = key => {
    props.setStepSelection(7);
  };

  return (
    <View style={{flex: 1}}>
      <Image
        source={ic_cross}
        style={{
          ...styles.eventitemImageicon,
          marginTop: 20,
          marginLeft: 20,
          alignSelf: 'flex-start',
        }}
      />
      <View
        style={{
          paddingLeft: 30,
          paddingRight: 30,
          flex: 1,
          paddingTop: 0,
          paddingBottom: 20,
        }}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={{...styles.formModalTitle}}>{'CONNECT ACCOUNT'}</Text>

          <Text style={{...styles.formModalSubtext, marginLeft: 10}}>
            {'Sign in to a platform to begin streaming'}
          </Text>

          <View>
            <FlatList
              style={{marginTop: 30}}
              horizontal={false}
              numColumns={3}
              data={footerActionOption}
              renderItem={({item, index}) =>
                _renderAccountTypeItem(item, index, proceedOnTapButton)
              }
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
          }}></View>
      </View>
    </View>
  );
};

let _renderAccountTypeItem = (item, index, proceedOnTapButton) => {
  // let is_active = activeIndexS1 == index;

  return (
    <TouchableOpacity
      style={{}}
      onPress={() => {
        proceedOnTapButton('ttt2');
      }}>
      <View
        style={{
          height: 100,
          width: 100,
          borderRadius: 10,
          backgroundColor: '#f2f2f2',
          marginLeft: 5,
          marginRight: 5,
          marginTop: 5,
          marginBottom: 5,
          justifyContent: 'center',
        }}>
        <Image source={ic_add_platform} style={styles.eventitemImageicon} />

        <Text style={{...styles.formModalSubtext, marginLeft: 10}}>
          {item.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const VideoFlowS7 = props => {
  return (
    <View
      style={{
        ...styles.containerFooterStepsVariantWhite,
        flex: 1,
        flexDirection: 'row',
      }}>
      <SubFooterPanelS7V1 props={props} />
    </View>
  );
};

export const SubFooterPanelS7V1 = props => {
  props = props.props;
  console.log('propsreceivedssw2');
  console.log(props);

  const [selection, setSelection] = useState(0);

  let data_b1 = {key: 'yes', label: 'YES1'};
  let data_b2 = {key: 'no', label: 'No Thanks'};
  let proceedOnTapButton = key => {
    props.setStepSelection(8);
  };

  return (
    <View style={{flex: 1}}>
      <Image
        source={ic_cross}
        style={{
          ...styles.eventitemImageicon,
          marginTop: 20,
          marginLeft: 20,
          alignSelf: 'flex-start',
        }}
      />

      <View
        style={{
          paddingLeft: 30,
          paddingRight: 30,
          flex: 1,
          paddingTop: 20,
          paddingBottom: 20,
        }}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={{...styles.formModalTitle}}>{'YOUTUBE'}</Text>

          <TouchableOpacity style={{}} onPress={() => {}}>
            <View
              style={{
                ...styles.submitBlack,
                paddingTop: 15,
                paddingBottom: 15,
                backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Image
                source={ic_cross}
                style={{
                  ...styles.eventitemImageicon,
                  tintColor: '#fff',
                  marginTop: 0,
                  marginRight: 20,
                  alignSelf: 'flex-start',
                }}
              />
              <Text style={styles.submitBlackText}>{'Connect Youtube'}</Text>
            </View>
          </TouchableOpacity>

<View style={{marginTop:10}}>
          <Text style={styles.formModalSubtext}>{'OR'}</Text>
          </View>
          <TouchableOpacity style={{}} onPress={() => {}}>
            <View
              style={{
                ...styles.submitBlack,
                paddingTop: 15,
                paddingBottom: 15,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
               <Image
                source={ic_cross}
                style={{
                  ...styles.eventitemImageicon,
                  tintColor: '#fff',
                  marginTop: 0,
                  marginRight: 20,
                }}
              /> 
              <Text style={styles.submitBlackText}>{'Youtube Custom RTMP'}</Text>
            </View>
          </TouchableOpacity>


        </View>
      </View>
    </View>
  );
};

///generic methods

let _renderFooterPanelItemGeneric = (item, index, selection, setSelection) => {
  let is_active = index == selection;

  return (
    <TouchableOpacity
      style={{}}
      onPress={() => {
        if (!is_active) setSelection(index);
      }}>
      <View style={styles.itemContainer}>
        <Text style={is_active ? styles.itemSelected : styles.item}>
          {item.label}
        </Text>
        {is_active ? <View style={styles.underline_Selector} /> : <View />}
      </View>
    </TouchableOpacity>
  );
};

let BaseCompActionButton = props => {
  console.log('button data');
  console.log(props);
  let data = props.data;
  // button_type={1}
  let button_type = props.button_type;
  let can_click = props.can_click;
  let proceed_onclick = props.proceed_onclick;
  // let is_active = is_active

  return (
    <View>
      <View style={{}}>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            proceed_onclick(data.key);
          }}>
          <View
            style={
              button_type == 1
                ? styles.submitWhite
                : button_type == 2
                ? styles.submitPrimary
                : styles.submitBlack
            }>
            <Text
              style={
                button_type == 1
                  ? styles.submitWhiteText
                  : button_type == 2
                  ? styles.submitPrimaryText
                  : styles.submitBlackText
              }>
              {data.label}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  submitPrimary: {
    marginTop: 10,
    marginRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#4dff88',
    borderRadius: 30,
    borderColor: '#4dff88',
  },
  formModalTitle: {
    color: '#000',
    fontSize: 17,
    textAlign: 'center',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  formModalSubtext: {
    color: '#3e3e3e',
    fontSize: 12,
    textAlign: 'center',
  },
  submitPrimaryText: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
  },
  submitWhite: {
    marginTop: 10,
    marginRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderColor: '#fff',
  },
  submitWhiteText: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
  },
  submitBlack: {
    marginTop: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#000',
    borderRadius: 30,
    borderColor: '#000',
  },
  submitBlackText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },

  blackRadiusContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 0,
    marginBottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'black',
  },
  containerFooterStepsVariantWhite: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 0,
    marginBottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
  },
  containerFooterSteps: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 0,
    marginBottom: 0,
    height: 120,
  },
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

  addItem: {
    alignSelf: 'center',
    width: 15,
    height: 15,
    tintColor: '#3e3e3e',
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

export default VideoFlowS2;
