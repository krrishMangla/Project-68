import * as React from 'react';
import {Text,View} from 'react-native'; 
 
export default class FaceBook extends React.Component
{
   render()
   {
     return(
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <Text style={{margin:140}}>FaceBook</Text>
          </View>         
     );  
   } 
}