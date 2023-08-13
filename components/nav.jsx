"use client";

import Image from "next/image";
import Link from "next/link";
import logoOndek from "@/public/logo-onedek.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <Image src={logoOndek} alt="logo onedek" className="w-9 py-5" />
        <p className="font-extrabold m-3">SMKN 1 DEPOK</p>
      </div>

      <div className="flex items-center">
        <Link href="/" className="font-bold">
          Beranda
        </Link>

        <NavigationMenu className="ml-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-base">
                Profile
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-base">
                Berita
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-base">
                GTK
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-base">
                Siswa
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link href="/" className="font-bold ml-6">
          Alumni
        </Link>

        <Link href="/" className="font-bold ml-6">
          Galeri
        </Link>

        <Link href="/" className="font-bold ml-6">
          Dudika
        </Link>

        <Button className="ml-6 font-extrabold">Contact</Button>
      </div>
    </nav>
  );
}
