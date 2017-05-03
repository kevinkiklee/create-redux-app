import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/store';
import './styles/reset.css';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  const store = configureStore();

  render(<Root store={store}/>, root);
});
