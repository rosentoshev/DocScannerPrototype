import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import PDFScanner from '@woonivers/react-native-document-scanner';

function DetailsScreen({navigation}) {
  const pdfScannerElement = useRef(null);
  const [data, setData] = useState({});
  const [allowed, setAllowed] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <PDFScanner
          style={StyleSheet.scanner}
          onPictureTaken={setData}
          overlayColor="rgba(255, 130, 0, 0.7)"
          enableTorch={false}
          quality={0.5}
          detectionCountBeforeCapture={5000000}
          detectionRefreshRateInMs={50}
        />
      </View>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scanner: {
    flex: 1,
    aspectRatio: undefined,
  },
});

export default DetailsScreen;
