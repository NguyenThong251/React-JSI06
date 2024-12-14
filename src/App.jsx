import Home from "./pages/user/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/user/Layout";
import About from "./pages/user/About";
import Header from "./components/user/Header";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";
import Cart from "./pages/user/Cart";
import { MantineProvider } from "@mantine/core";
import ProductDetail from "./pages/user/ProductDetail";
import Product from "./pages/admin/Product";
import UserFooter from "./components/user/UserFooter";
import AdminLayout from "./components/admin/Layout";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          {/* User Routes */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <UserFooter />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
                <UserFooter />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
                <UserFooter />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Header />
                <Signup />
                <UserFooter />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <Cart />
                <UserFooter />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Header />
                <ProductDetail />
                <UserFooter />
              </>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin/product" element={<AdminLayout />}>
            <Route index element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
