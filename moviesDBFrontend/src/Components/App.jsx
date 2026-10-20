import { Outlet } from "react-router";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import { mystore } from "../Redux/mystore";

function App() {
  return (
    <>
      <Provider store={mystore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
