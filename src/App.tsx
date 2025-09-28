import { Route, Routes } from "react-router";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CarDetails from "./pages/CarDetails";
import NotFound from "./pages/NotFound";

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
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      </main>
    </>
  );
};

export default App;
