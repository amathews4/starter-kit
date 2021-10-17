/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroImage,
  //ViroConstants
} from '@viro-community/react-viro';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const HelloWorldSceneAR = () => {
  /*
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
  */

  return (
    <ViroARScene>
      <ViroImage source = {require('./images/jackie.png')}
        scale={[0.5,0.5,0.5]}
        position={[0,0,-1]} />
    </ViroARScene>
  );
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.navigatorRef = React.createRef();
    this.state = {
      navigator: null,
    };
  }
  componentDidMount() {
    var navRef = this.navigatorRef;
    this.setState({navigator: navRef});
  }

  render() {
    return (
      <View style = {{flex: 1}}>
        <ViroARSceneNavigator
        style = {{flex: 1}}
        ref = {this.navigatorRef}
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
        />
        <View style = {style.takePic}>
          <TouchableOpacity onPress = {this.takeScreenshot}>
            <Text style = {style.buttonText}>Hello World</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takeScreenshot() {
    console.log(this.navigator);
    var curDate = new Date();
    var curDateFormat = curDate.toISOString().split('T')[0];
    this.state.navigator.arSceneNavigator.takeScreenshot('Viro' + curDateFormat, true);
  }
}

const style = StyleSheet.create({
  takePic: {
    width:'50%',
    zIndex:2,
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 20,
  },
});
/*
export default (props) => {

  return (
    <>
    <ViroARSceneNavigator
      ref = {}
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }
      }
    />
    </>
  );
};
*/
