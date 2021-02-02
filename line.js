import React from 'react';
import { Text,View, StyleSheet } from 'react-native';
import Svg, {Line} from 'react-native-svg';

export default class LineScreen extends React.Component {
  render() {
    var myloop = [];
    
    for (let i = 0; i < 100; i++) {
      myloop.push(
        <View key={i}>
        <Line x1={Math.random() *100} y1={Math.random() *100} x2={Math.random() *100} y2={Math.random() *100} stroke= {"red"} strokeWidth={Math.random()*2} />
        </View>
      );
    }
    
     return (
    
            <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
              <Text >Welcome to React Native!</Text>
               <Svg height="90%" width="90%" viewBox="0 0 100 100">
               {myloop}
                </Svg>
            </View>
    
    
        );
      }
    }