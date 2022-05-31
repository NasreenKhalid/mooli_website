
import { Route,Routes} from "react-router";

import { Home, NotFound, OfferDetails } from './screens';
function App() {
  return (
  
  <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/offer" exact element={<OfferDetails/>}/>
    <Route  path='*' exact={true} element={<NotFound/>}/>

    </Routes>
  </div>
  
  );
}

export default App;
