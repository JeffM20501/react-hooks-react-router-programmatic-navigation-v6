import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false)
  const navigate=useNavigate()

  const login=()=>{setIsLoggedIn(true)}

  const logout=()=>{setIsLoggedIn(false)}

  useEffect(()=>{
    if(isLoggedIn){
      navigate('/')
    }else{
      navigate('/login')
    }
  }, [isLoggedIn, navigate])

  return (
    <div className="app">
      {isLoggedIn?<NavBar logout={logout} />:<Navigate to='/login' />}
      <Outlet context={login} />
    </div>
  );
}

export default App;
