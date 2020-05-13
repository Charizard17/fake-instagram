import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Photos from "./components/Photos/Photos";
import LastestPics from './components/LastestPics/LastestPics';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Profile className="mt-2" />
        <LastestPics />
        <div className="container"><hr /></div>
        <Photos />
      </div>
    )
  }
}

export default App;