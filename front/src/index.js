import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

var data = {
            menu:[
              {
                text: 'Vendas',
                openned: false,
                menu: [
                  {
                    text: 'Realizar venda',
                    link: '/venda'
                  },
                  {
                    text: 'Últimas vendas'
                  }
                ]
              },
              {
                text: 'Produtos',
                link: '/produto'
              },
              {
                text: 'Categorias',
                link: '/categoria'
              },
              {
                text: 'Permissões',
                link: '/permissoes'
              },
              {
                text: 'Relatórios',
                openned: false,
                menu: [
                  {
                    text: 'Vendas'
                  },
                  {
                    text: 'Estoque'
                  }
                ]
              },
              {
                text: 'Usuários',
                link: '/usuario'
              },
            ]
          };

ReactDOM.render(<Router>
                  <Switch>
                    <Route path="/login">
                      <Login />
                    </Route>
                    <Route path="/">
                      <App data={data} />
                    </Route>
                  </Switch>
                </Router>, document.getElementById('root'));
// if(true){ //logado
//
// }else{
//   ReactDOM.render(<Login />, document.getElementById('root'));
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
