import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Switch, Route} from 'react-router-dom';
import LoginScene from './components/scenes/LoginScene';
import AdminLoginScene from './components/scenes/AdminLoginScene';
import CadastroScene from './components/scenes/CadastroScene';
import DashboardScene from './components/scenes/DashboardScene';
import CadastroUniversidadeScene from './components/scenes/CadastroUniversidadeScene';
import VisualizarRequisicoesScene from './components/scenes/VisualizarRequisicoesScene';
import UsuarioScene from './components/scenes/UsuarioScene';
import {store, persistor} from './configureStore';

//const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <HashRouter >
                <Switch>
                    <Route exact path='/' component={LoginScene}/>
                    <Route path='/admin/entrar' component={AdminLoginScene}/>
                    <Route path='/admin/dashboard/cadastrar_universidade' component={CadastroUniversidadeScene}/>
                    <Route path='/admin/dashboard/visualizar_requisicoes' component={VisualizarRequisicoesScene}/>
                    <Route path='/admin/dashboard' component={DashboardScene}/>
                    <Route path='/usuario/bemvindo' component={UsuarioScene}/>
                    <Route path='/usuario/cadastrar' component={CadastroScene}/>
                </Switch>
            </HashRouter>
        </PersistGate>
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
