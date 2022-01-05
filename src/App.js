import logo from './logo.svg';
import './App.css';
import {Routes,Route, BrowserRouter as Router} from 'react-router-dom'
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import Login from './Login';
import Calc from './Calc';


function App({msalInstance}) {
  return (
    <MsalProvider instance={msalInstance}>
    <div className="App">
      <h1>Welcome to the Site</h1>
      <Routes>
        <Route path="/" element={<Login name="muru" />} />
        <Route path="calc" element={<Calc />} />
      </Routes>
    </div>
    </MsalProvider>
  );
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

export default App;
/*
move the logic to login page.
 */