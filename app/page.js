import Nav from "@/components/nav";
import Headline from "@/components/headline";
import Berita from "@/components/berita";

export default function Home() {
  return (
    <main className="mx-20">
      <header>
        <Nav />
        <Headline />
      </header>
      <Berita />
    </main>
  );
}
