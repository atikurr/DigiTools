import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import CallAction from "./components/CallAction";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Steps from "./components/Steps";

function App() {
  const cart = [];

  return (
    <div className="font-manrope">
      
      {/* Navbar */}
      <Navbar cart={cart} />

      {/* Banner */}
      <Banner />

      {/* Stats */}
      <Stats />

      {/* {Steps Crd} */}

      <Steps/>

      {/* {Pricing} */}

      <Pricing />

      {/* CTA */}
      <CallAction />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;