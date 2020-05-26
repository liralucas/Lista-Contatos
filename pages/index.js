import React, {useState, useEffect, useRef} from 'react';
import {Text, View, FlatList, Keyboard} from 'react-native';
import styles from '../style';
import ContatoInput from '../components/ContatoInput';
import ContatoItem from '../components/ContatoItem';
import {useDispatch, useSelector} from 'react-redux';

const PageIndex = (props) => {

  const dispatch = useDispatch();
  
  const contatos = useSelector(estado => estado.contatos.contatos);
  
  const {navigation} = props;
  
  const atualizarShowingPageDetail = (key, nome, telefone, imagemURL) =>{
  navigation.navigate('TelaDetails', {key: key, nome: nome, telefone: telefone: image:imagemURL, onEditarContato:editarContato})
  }

  const adicionarContato = (nome, telefone, imagemURL) => {
    keyboard.dismiss();
    dispatch(contatosActions.addContato(nome, telefone, imagemURL));
  }
  
  const removerContato = (keyASerRemovida) => {
    dispatch(contatoActions.deleteContato(keyASerRemovida));
  }
  
  const editarContato = (key, nome, telefone, imagemURL) => {
    dispatch(contatosActions.editarContato(key, nome, telefone, imagemURL));
  }

 

  return ( 
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeTitle}>Cadastre um nome e um telefone!</Text>
      </View>
      <ContatoInput 
        onAdicionarContato={adicionarContato}
      />
      <FlatList 
        style={{height: '50%'}}
        data={contatos}
        keyExtractor={contato => contato.id}
        renderItem={
          contato => (
            <ContatoItem 
              contato={contato.item}
              onDelete={removerContato}
              onShowPageDetail={atualizaShowingPageDetail}
            />
          )
        }
      />
    </View>
  );
}

export default PageIndex;
