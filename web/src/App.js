import Nav from "./Components/topNav";
import './index.css'
import {Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import Article from "./Components/Article";
import Trending from "./Components/Trending";
import About from "./Components/About";
import SignUp from './Components/SignUp'
import Login from './Components/Login'


function App() {
  return (
    <>
    <Nav />
    <div className="main-body">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/MM-SummerTask-2022-Web-Frontend" element={<Home />} />
        <Route exact path="/first-article" element={<Article />} />
        <Route exact path="/trending" element={<Trending />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />

      </Routes>
    </div>
    </>
  )
}

export default App;
