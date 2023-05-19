import { Routes, Route} from "react-router-dom";
import Navigation from "./Components/Navigation/navigation.component";
import Home from "./Routes/Home/home.component";

import "../src/App.css"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  );
};

export default App;
