import Navbar from "./components/Navbar";
import Directory from "./components/Directory";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Directory />
      </main>
      <Footer />
    </div>
  );
}

export default App;
