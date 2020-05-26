import React, { useState, useImperativeHandle, forwardRef, useRef } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import colors from '../colors/colors';
import * as ImagePicker from 'expo-image-picker';


const TirarFoto = forwardRef((props, ref) => {

  const [imagemURL, setImagemURL] = useState(props.imagemURL);

  const tirarFoto = async() => {
    const foto = await ImagePicker.launchImageLibraryAsync(
      {
        allowsEditing: true,
        aspect:[10,15],
        quality: 1
      }
    );
    setImagemURL(foto.url);
    props.onFotoTirada(foto.url);
  }

  const resetImage = () => {
    setImagemURL(null);
  }

  useImperativeHandle(ref, () => {
    return {
      resetImage: resetImage
    };
  });

  return (
    <View style={estilos.principal}>
      <View style={estilos.previewDaImagem}>
        {
        !imagemURI ?
        <Text style={estilos.previewText}>Nenhuma foto.</Text>
        :
        <Image 
          style={estilos.imagem} 
          source={{uri: imagemURL}}
        />
        }
      </View>
      <Button 
        title="Escolher foto"
        color={colors.shadow}
        onPress={tirarFoto}
      />
    </View>
  )
});

const estilos = StyleSheet.create({
  principal: {
    marginBottom: 15,
    height: 120,
    alignItems: 'center'
  },
  previewDaImagem: {
    borderColor: '#CCC',
    borderWidth: 1,
    width: 80,
    height: 80,
    justifyContent: 'center',
    marginBottom: 5,
    borderRadius: 50,
    alignItems: 'center'
  },
  previewText: {
    textAlign: 'center',
  },
  imagem: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});

export default TirarFoto;
