import {StyleSheet} from 'react-native';
import Cores from './Cores/colors';
import Medidas from './Medidas/measures';

export default StyleSheet.create({
  container : {
    flex: 1,
        paddingHorizontal: 24,
        marginTop: 40,
        backgroundColor: "rgb(255, 68, 68)",
        paddingHorizontal: Medidas.containerPaddingH,
        marginTop: Medidas.containerMarginT,
        backgroundColor: Cores.accent,
  },
  contatoView : {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 2,
    padding: Medidas.cardPadding,
    borderRadius: Medidas.cardBorderRadius,
    backgroundColor: Cores.primary,
    marginVertical: Medidas.cardMargin,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  contatoTextInput: {
    width: '80%',
    height: 55,
    backgroundColor: '#FFF',
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 5,
    color: '#999',
    width: Medidas.inputWidth,
    height: Medidas.inputHeight,
    backgroundColor: Cores.primary,
    borderColor: Cores.border,
    borderWidth: Medidas.inputBorderWidth,
    borderRadius: Medidas.inputBorderRadius,
    color: Cores.border,
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10
    marginBottom: Medidas.inputMargin,
    padding: Medidas.inputPadding,

  },
  itemNaLista: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
    padding: Medidas.cardPadding,
    marginBottom: Medidas.cardMargin,
    borderRadius: Medidas.cardBorderRadius,
    backgroundColor: Cores.primary,
    shadowColor: Cores.shadow,
    shadowOffset: {
      width: Medidas.cardShadowWidth,
      height: Medidas.cardShadowHeight
    },
    shadowRadius: Medidas.cardShadowRadius,
    shadowOpacity: Medidas.cardShadowOpacity,
    elevation: Medidas.cardElevation,
  },
  listaTitle: {
      fontSize: 14,
      color: '#41414D',
      fontSize: Medidas.fontText,
      color: Cores.textPrimary,
      fontWeight: 'bold',
  },

  listaPhone: {
      marginTop: 8,
      fontSize: 15,
      color: '#737380',
      marginTop: Medidas.cardTextMargin,
      fontSize: Medidas.fontText,
      color: Cores.textSecondary,
  },
  datailsButton: {
    borderRadius: 8,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "rgb(255, 68, 68)",
    borderRadius: Medidas.buttonBorderRadius,
    padding: Medidas.buttonPaddingPrimary,
    paddingLeft: Medidas.buttonPaddingSecondary,
    paddingRight: Medidas.buttonPaddingSecondary,
    backgroundColor: Cores.accent,
    alignItems: 'center'
  },
  detailsButtonText: {
    color:'#FFF',
    color: Cores.primary,
    fontWeight: 'bold',
    fontSize: 18,
    fontSize: Medidas.fontButton,
  },
  welcome: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginTop: Medidas.titleMarginT,
  },
  welcomeTitle: {
    marginBottom: 10,
    fontSize: 34,
    fontSize: Medidas.fontTitle,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#F5F5F8',
    color: Cores.primary,
  },

});