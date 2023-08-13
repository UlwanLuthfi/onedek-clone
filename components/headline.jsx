import { cn } from "@/lib/utils";
import { DM_Serif_Text } from "next/font/google";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import sekolahDepan from "@/public/compressjpgdepan-onedek.jpg";
import sekolahDalam from "@/public/dalam-onedek.jpg";

const font = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
});

export default function Headline() {
  return (
    <>
      <section className="py-20 flex">
        <div className="w-1/2">
          <h1
            className={cn(
              font.className,
              "text-[3.25rem] mr-10 mb-8 leading-none"
            )}
          >
            Welcome To SMKN PK-BLUD 1 DEPOK
          </h1>
          <p className="w-[26rem] font-medium text-xl mb-8 text-slate-500">
            SMK Negeri 1 Depok adalah sebuah Sekolah Menengah Kejuruan (SMK)
            Negeri pertama di Kota Depok dan telah mendapat status sekolah PK
            (Pusat Keunggulan) dan status sekolah BLUD (Badan Layanan Umum
            Daerah)
          </p>

          <Button className="font-semibold px-6 h-14 text-lg">
            Mulai Jelajahi
          </Button>
        </div>

        <div className="w-1/2">
          <Image
            className="w-[33rem] rounded-md ml-5"
            src={sekolahDepan}
            alt="Gambar Sekolah Depan"
          />
        </div>
      </section>

      <section className="py-20 flex">
        <div className="w-1/2 mt-12">
          <Image
            className="w-[33rem] rounded-md"
            src={sekolahDalam}
            alt="Gambar Sekolah Depan"
          />
        </div>

        <div className="w-1/2 ml-16">
          <p className="font-bold text-slate-400 mb-4">SIAPA KAMI?</p>
          <h2 className={cn(font.className, "text-5xl mb-8")}>
            Tentang SMK Negeri 1 Depok
          </h2>
          <p className="font-medium text-slate-500 mb-5">
            SMK Negeri 1 Depok adalah sebuah Sekolah Menengah Kejuruan (SMK)
            Negeri pertama di Kota Depok dan telah mendapat status sekolah PK
            (Pusat Keunggulan) dan status sekolah BLUD (Badan Layanan Umum
            Daerah).
          </p>
          <p className="font-medium text-slate-500 mb-5">
            Sekolah ini pada awalnya terdiri dari 2 program studi yaitu Program
            Studi Mekanik Otomotif dan Program Studi Akomodasi Perhotelan.
            Namun, sekarang sudah bertambah program studi menjadi 6 program
            yaitu Permodelan Perangkat Lunak dan Gim, Desain Komunikasi dan
            Visual, Akomodasi Perhotelan, Akutansi, Teknik Bisnis Sepeda Motor,
            Teknik Kendaraan Ringan.
          </p>
        </div>
      </section>
    </>
  );
}
