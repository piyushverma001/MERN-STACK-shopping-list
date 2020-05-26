import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import ShoppingList from './components/ShoppingList'
import CSSBaseline from '@material-ui/core/CssBaseline'
import {Provider} from 'react-redux'
import store from './store'
import ItemModel from './components/ItemModel'
class App extends React.Component{
  render(){
    return(
      <>
      <Provider store={store}>
        <CSSBaseline />
        <Navbar />
        <ItemModel />
        <ShoppingList />
      </Provider>
      </>
    )
  }
}

export default App;
