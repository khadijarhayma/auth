
import './App.css';
import Signup from './Components/Signup/Signup';
import { Route , Routes } from 'react-router-dom';
import Dashbord from './Components/Dashbord/Dashbord';
import PrivateRoute  from './Components/router/PrivateRoute';
import { useSelector,useDispatch } from 'react-redux';
import {useEffect} from 'react';
import {current} from './js/actions/user';
function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [])


 const user= useSelector(state=>state.userReducer.user)
 console.log(user)
  return (
    <div className="App">
    
    <Routes>
    <Route path="/" element={<Signup />} />

    <Route element={<PrivateRoute />}>
          <Route path="/dashbord" element={<Dashbord />} />
        </Route>
    </Routes>

    </div>
  );
}

export default App;
