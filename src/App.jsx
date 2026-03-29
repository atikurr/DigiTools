import Navbar from "./components/Navbar";

function App() {
  const cart = [];
  return (
    <>
      <Navbar cart={cart} />
      <h1 className="text-center mt-10 text-xl">App Working 🚀</h1>
    </>
  );
}

export default App;