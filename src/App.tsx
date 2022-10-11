import { useSearchActions } from "@yext/search-headless-react";
import {
  SearchBar,
  StandardCard,
  VerticalResults,
} from "@yext/search-ui-react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PeoplePage } from "./pages/PeoplePage";
import { ProductsPage } from "./pages/ProductsPage";
import UniversalPage from "./pages/UniversalPage";

const App = (): JSX.Element => {
  const searchActions = useSearchActions();

  useEffect(() => {
    searchActions.setVertical("products");
  }, []);

  return (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-5xl">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<UniversalPage />} />
            <Route path="people" element={<PeoplePage />} />
            <Route path="products" element={<ProductsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
