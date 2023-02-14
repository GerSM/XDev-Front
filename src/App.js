import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import usersView from './components/usersView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<usersView></usersView>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
