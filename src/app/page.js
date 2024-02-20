import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";

export default function Home({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}