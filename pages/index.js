import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>HoltzStresser</h1>
        <p>#1 API-powered DDoS Stresser in the World</p>
        <button onClick={() => (window.location.href = "/docs")}>View API Docs</button>
      </div>
      <Footer />
    </>
  );
}
