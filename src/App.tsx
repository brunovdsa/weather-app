import './App.scss';
import { Card } from './components/Card/Card';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className='container'>
      <SearchBar />
      <Card />
    </div>
  );
}

export default App;
