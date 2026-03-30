import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import CallAction from "./components/CallAction";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Steps from "./components/Steps";
import Models from "./components/Models";

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [models, setModels] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("/models.json")
      .then((res) => res.json())
      .then((data) => setModels(data));
  }, []);

  return (
    <div className="font-manrope">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar carts={carts} setActiveTab={setActiveTab} />
      <Banner />
      <Stats />
      <Models
        models={models}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        carts={carts}
        setCarts={setCarts}
      />
      <Steps />
      <Pricing />
      <CallAction />
      <Footer />
    </div>
  );
}

export default App;