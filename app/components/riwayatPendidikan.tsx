import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2x1">Riwayat Pendidikan</h2>
            </div>
            <RowRiwayat jenjang="SD" sekolah="SDN Parakan Muncang 2" tahun="2010" />
            <RowRiwayat jenjang="SMP" sekolah="SMPN 1 Cimanggung" tahun="2016" />
            <RowRiwayat jenjang="SMK" sekolah="SMK BINTARA Rancaekek" tahun="2019" />
            <RowRiwayat jenjang="Sarjana" sekolah="Universitas Masoem" tahun="2022" />
        </div>
    );
}