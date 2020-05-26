import {createStackNavigator} from 'react-navigation-stack';
import index from '../paginas/index';
import PageDetail from '../paginas/PageDetail';
import {createAppContainer} from 'react-navigation';
import {Plataform} from 'react-native';
import Cores from '../Colors';

const Rotas = createStackNavigation(
    {TelaInicial: PageIndex,
     telaDetalhes: PageDetail
    },
    {
    defaultNavigationOptions: {
    headerShown: false
    }
    
});
