import { Route, Routes } from "react-router";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CarDetails from "./pages/CarDetails";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<CarDetails />} />
          </Routes>
        </section>
      </main>
    </>
  );
};

export default App;
