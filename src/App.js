import './App.css'
import Intro  from './components/intro'
import Invitation  from './components/invitation'
import Rundown from './components/rundown'
import Gallery from './components/gallery'
import Testimony from './components/testimony'
import Location from './components/location'




function App() {
  return (
    <div className="App">
      <Intro/>
      <Invitation/>
      <Gallery/>
      <Rundown/>
     <Location/>
     <Testimony/>
    </div>
  );
}

export default App;
