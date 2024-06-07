import logo from './logo.svg';
import './App.css';
import AddAlbum from './components/AddAlbum';
import SearchAlbum from './components/SearchAlbum';
import DeleteAlbum from './components/DeleteAlbum';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddAlbum/>} />
      <Route path="/search" element={<SearchAlbum/>} />
      <Route path="/delete" element={<DeleteAlbum/>} />
      <Route path="/view" element={<ViewAll/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
