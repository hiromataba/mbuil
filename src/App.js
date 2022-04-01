import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from './utils/routes';
import HomePage from './Pages/Home/HomePage';
import Details from './Pages/Details/Details';
import Floor from './Pages/Floor/Floor';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.floor} element={<Floor />} />
          <Route path={`${routes.buildingDetails}:id`} element={<Details />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
};

export default App;
