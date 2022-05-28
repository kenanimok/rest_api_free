import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import NavBar from './Navbar';
import Users from './Users';
import UsersCreate from './UserCreate';
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
         <Route path="/" element={<Users/>}/>
         <Route  path ="create" element={<UsersCreate/>}/>
      </Routes>
    </div>
  );
}

export default App;
