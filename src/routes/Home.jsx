import React from 'react';
import Books from '../components/Books';
import AddBooks from '../components/AddBooks';
import '../index.css';

const Home = () => (
  <div>
    <Books />
    <hr />
    <AddBooks />
  </div>
);

export default Home;
