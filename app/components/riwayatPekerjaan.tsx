import RowRiwayat from "./rowRiwayat";

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2x1">Riwayat Pekerjaan</h2>
            </div>
            <RowRiwayat tahunb="2009" intansi="Astra" bekerja="Staff" />
            <RowRiwayat tahunb="2012" intansi="Honda" bekerja="Manajer" />
            <RowRiwayat tahunb="2014" intansi="Yamaha" bekerja="CEO" />
            <RowRiwayat tahunb="2020" intansi="Suzuki" bekerja="Owner" />
        </div>
    );
}