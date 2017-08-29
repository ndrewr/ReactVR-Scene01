import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

const imageurl = asset('harrisburg.jpg')
const cubeMapSrc = [
  asset('pos-x.png'),
  asset('neg-x.png'),
  asset('pos-y.png'),
  asset('neg-y.png'),
  asset('pos-z.png'),
  asset('neg-z.png')
]

const assetMap = {
  1: imageurl,
  2: cubeMapSrc
}

// Exploring Pano component
export default class app extends React.Component {
  state = {
    option: 2
  }

  render() {
    const { option } = this.state

    return (
      <View>
        <Pano
          source={assetMap[option]}
          onload={() => console.log('image loaded!')}
          style={{
            // transform: [{ rotateY: -20 }]
          }}
        />
        <Text
          style={{
            transform: [{ translateZ: -1 }], // value represents meters
            color: 'lightblue',
            backgroundColor: '#335',
            fontSize: 0.1,
            fontWeight: '300',
            width: 0.45, // width/height values represent meters
            height: 0.45,
            textAlign: 'center',
            textAlignVertical: 'center',
            layoutOrigin: [.5, .5] // values represents percentages
          }}
          onEnter={() => console.log('entered Text field.')}
          onExit={() => console.log('Exited Text field.')}
          onMove={(event) => console.log('Moving within the Text field...', event.nativeEvent)}
          onInput={(event) => {
            console.log('Input event! Type is...', event.nativeEvent.inputEvent.type)
            console.log('Input event! EventType is...', event.nativeEvent.inputEvent.eventType)
          }}
        >
          Hello, friend.
        </Text>
      </View>
    );
  }
};

// export default class app extends React.Component {
//   render() {
//     return (
//       <View>
//         <Pano source={asset('chess-world.jpg')}/>
//         <Text
//           style={{
//             backgroundColor: '#777879',
//             fontSize: 0.8,
//             fontWeight: '400',
//             layoutOrigin: [0.5, 0.5],
//             paddingLeft: 0.2,
//             paddingRight: 0.2,
//             textAlign: 'center',
//             textAlignVertical: 'center',
//             transform: [{translate: [0, 0, -3]}],
//           }}>
//           hullo!
//         </Text>
//       </View>
//     );
//   }
// };

AppRegistry.registerComponent('app', () => app);
