import { Routes, Route} from "react-router-dom";
import Home from "./Routes/Home/home.component";

import "../src/App.css"

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>}>
    </Route>
    </Routes>
  );
};

export default App;
