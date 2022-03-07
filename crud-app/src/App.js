import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import NavBar from './Components/NavBar';
// import NotFound from './Components/NotFound';
// import CodeForInterview from './Components/CodeForInterview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/all" element={<AllUsers />} />
        <Route exact path="/add" element={<AddUser />} />
        <Route exact path="/edit/:id" element={<EditUser />} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
