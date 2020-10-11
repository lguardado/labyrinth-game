import React from 'react';
import './App.css';
import Layout from './containers/layout/layout';
import Labyrinth from './containers/labyrinth/labyrinth';

function App() {

  return (
    <Layout>
      <Labyrinth />
    </Layout>
  );
}

export default App;
