import './App.css';
import AllPost from './components/Allpost/AllPost';
import { Route , Routes } from 'react-router-dom';
import Allcomments from './components/comments/Allcomments';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<AllPost/>}/>
        <Route path='/comments/:id' element={<Allcomments/>}/>

        
      </Routes>
    </div>
  );
}

export default App;
