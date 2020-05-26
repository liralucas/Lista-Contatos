import React, { useState, useRef } from 'react';
import {TextInput, TouchableOpacity, Text} from 'react-native';
import Cartao from './Cartao'
import styles from '../style';
import tirarFoto from './TirarFoto';

const ContatoInput = (props) => {
  const[nome, setNome] = useState ("");
  const[telefone, setTelefone] = useState ("");
  const[imagemURL, setImagemURL] = useState();
  
  const fotoRef= useRef(null);

  const capturarNome = (textoDigitado) => {
    setNome(textoDigitado)
  }

  const capturarTelefone = (textoDigitado) => {
    setTelefone(textoDigitado)
  }
  const  handleAdicionarContatos  =  ( )  =>  {
    props.onAdicionarContato (nome,  telefone, ImagemURL) ;
    setNome (" ") ;
    setTelefone (" ") ;
    fotoRef.current.resetImage();
  }
  return (
    <Cartao estilos={styles.contatoView}>
        
        <TextInput 
          placeholder="Nome..."
          style={styles.contatoTextInput}
          onChangeText={capturarNome}
          value={nome} />
        
        <TextInput 
          placeholder="Telefone..."
          style={styles.contatoTextInput}
          onChangeText={capturarTelefone}
          value={telefone} />
    
       <TirarFoto
          onFotoTirada={fotoTirada}
          imagemURL={imagemURL}
          ref={fotoRef} />
    
        <TouchableOpacity
          style={styles.datailsButton}
          onPress={() => {props.onAdicionarContato(nome, telefone)}} >
          
        <Text style={styles.detailsButtonText}>Cadastrar</Text>
        </TouchableOpacity>
    </Cartao>
  );
}

export default ContatoInput;
