import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import SharedLayout from "./Pages/SharedLayout";
import Moon from "./destinationpages/Moon";
import Data from "./Data.json";
import SharedDestination from "./destinationpages/SharedDestination";
import MoonImg from "./assets/destination/image-moon.webp"
import MarsImg from "./assets/destination/image-mars.png"
import EuropaImg from "./assets/destination/image-europa.png"
import TitanImg from "./assets/destination/image-titan.png"
function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/destination" element={<SharedDestination />}>
            <Route
              index
              element={<Moon planet={Data.destinations[0]} img={MoonImg} />}
            />
            <Route
              path="mars"
              element={<Moon planet={Data.destinations[1]} img={MarsImg} />}
            ></Route>
            <Route
              path="europa"
              element={<Moon planet={Data.destinations[2]} img={EuropaImg} />}
            />
            <Route
              path="titan"
              element={<Moon planet={Data.destinations[3]} img={TitanImg} />}
            />
            <Route path="*" element={<h1> Error finished </h1>} />
          </Route>
          <Route path="crew" element={<Crew />}></Route>
          <Route path="technology" element={<Technology />}></Route>
          <Route path="*" element={<h1> error</h1>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
