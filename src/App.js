import './App.css';
import { LiveLetter } from './components/LiveLetter';
import { ImageSlider } from './components/ImageSlider';
import { Song } from './components/Song';

function App() {
  return (
    <div className="App">
      <header>
      <LiveLetter />
      </header>
      <ImageSlider />
      <Song />
    </div>
  );
}

export default App;
