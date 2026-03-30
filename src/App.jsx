import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import CallAction from "./components/CallAction";
import Footer from "./components/Footer";

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

      {/* CTA */}
      <CallAction />

      {/* CTA */}
      <Footer></Footer>

    </div>
  );
}

export default App;