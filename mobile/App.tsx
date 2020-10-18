import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Mapview, { Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps'
import mapMarker from './src/images/map-marker.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Mapview 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={{
          latitude: -16.6794485,
          longitude: -49.2576547,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }} >

          <Marker 
            icon={mapMarker}
            coordinate={{
              latitude: -16.6794485,
              longitude: -49.2576547,
            }}
          >

            <Callout>
              <Text>Lar das Meninas</Text>
            </Callout>


          </Marker>
            

        </Mapview>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
