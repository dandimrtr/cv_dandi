import RowRiwayat from "./components/rowRiwayat";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import "./style.css";
import WarnaFavorit from "./components/warnafavorit";
import ContactForm from "./components/contactForm";

export default function Gallery() {
  return (
    <section>
      <Hero />
      <div className="riwayat-container">
        <RiwayatPendidikan />
        <RiwayatPekerjaan />
        <WarnaFavorit />
        <ContactForm />
      </div>
    </section>
  );
}
