import foto from "../foto.jpg";

export default function Hero() {
    return (
        <div>
            <h1 className="text-gray-300 font-bold">CV Online</h1>
            <h2 className="text-3x1">Dandi Muhamad Ramdan</h2>
            <Profile />
            <p>
            Saya adalah seorang CEO di Indofood, mengarungi dunia bisnis dengan penuh semangat dan dedikasi. Di balik kesibukan tersebut, saya juga adalah seorang penggemar badminton. Setiap kali saya melangkah ke lapangan, saya merasakan kebebasan yang menyegarkan—seakan semua tekanan sejenak lenyap.
            </p>
        </div>
    );
}

function Profile(){
    return <img src={foto.src} alt="Dandi Muhamad" className="fotoku"/>;
  }