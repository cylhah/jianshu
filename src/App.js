import React, { Component } from 'react';
import Header from './common/header/Header';
import { BrowserRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header></Header>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
      </Provider>  
    );
  }
}

export default App;
