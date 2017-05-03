import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store';
import './styles/reset.css';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  const store = configureStore();

  render(<Root store={store}/>, root);
});
