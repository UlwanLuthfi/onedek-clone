import { cn } from "@/lib/utils";
import { MinusIcon } from "@radix-ui/react-icons";
import { DM_Serif_Text } from "next/font/google";
import Image from "next/image";
import workshopPkdk from "@/public/workshop-pkdk_1640283105_workshop-pkdk-thumb.jpg";
import pelatihan from "@/public/pelatihan-penerapan-budaya-kerja-industri_1640300052_pelatihan-penerapan-budaya-kerja-industri-thumb.jpg";
import luring from "@/public/rapat-luring-dalam-kantor_1640283800_rapat-luring-dalam-kantor-thumb.jpg";
import {
  CalendarIcon,
  DotFilledIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";

const font = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
});

export default function Berita() {
  return (
    <section className="mb-96">
      <div className="mb-8 ml-8">
        <h2 className="flex items-center text-blue-500 font-bold mb-3">
          <MinusIcon className="mr-2" /> BERITA
        </h2>
        <h1 className={cn(font.className, "text-[2.5rem]")}>
          Berita Terbaru SMKN 1 Depok
        </h1>
      </div>

      <div className="flex space-x-10 justify-center">
        <div>
          <Image
            src={workshopPkdk}
            alt="Workshop PKDK"
            className="w-[20rem] rounded-lg mb-4"
          />
          <h2 className={cn(font.className, "text-2xl mb-5 w-[20rem]")}>
            Workshop PKDK
          </h2>
          <p className="text-slate-500 flex items-center font-medium">
            <CalendarIcon className="text-slate-500 mr-1" />
            <span className="mr-3">2021-12-23</span> 19:11:46{" "}
            <DotFilledIcon className="mx-3" /> <FileTextIcon className="mr-1" />{" "}
            Event
          </p>
        </div>
        <div>
          <Image
            src={luring}
            alt="Workshop PKDK"
            className="w-[20rem] rounded-lg mb-4"
          />
          <h2 className={cn(font.className, "text-2xl mb-5 w-[20rem]")}>
            Rapat Luring dalam kantor
          </h2>
          <p className="text-slate-500 flex items-center font-medium">
            <CalendarIcon className="text-slate-500 mr-1" />
            <span className="mr-3">2021-12-23</span> 19:11:46{" "}
            <DotFilledIcon className="mx-3" /> <FileTextIcon className="mr-1" />{" "}
            Event
          </p>
        </div>
        <div>
          <Image
            src={pelatihan}
            alt="Workshop PKDK"
            className="w-[20rem] rounded-lg mb-4"
          />
          <h2 className={cn(font.className, "text-2xl mb-5 w-[20rem]")}>
            Pelatihan Penerapan Budaya Kerja Industri
          </h2>
          <p className="text-slate-500 flex items-center font-medium">
            <CalendarIcon className="text-slate-500 mr-1" />
            <span className="mr-3">2021-12-23</span> 19:11:46{" "}
            <DotFilledIcon className="mx-3" /> <FileTextIcon className="mr-1" />{" "}
            Event
          </p>
        </div>
      </div>
    </section>
  );
}
