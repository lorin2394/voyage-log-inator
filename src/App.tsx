import React from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from './firebase';
import logo from './logo.svg';
import './App.css';

function App() {
  async function fetchData() {
    const firestore = getFirestore(app);
    const dataCollection = collection(firestore, 'data');
    const dataSnapshot = await getDocs(dataCollection);
    
    dataSnapshot.forEach((doc: any) => {
      console.log(doc.data());
    });
  }

  fetchData();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
