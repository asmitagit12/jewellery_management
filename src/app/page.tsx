import CollageWorld from "@/components/home/CollageWorld";
import CollectionCollage from "@/components/home/CollectionCollage";
import CuratedForYou from "@/components/home/CuratedForYou";
import GetReadyWithMe from "@/components/home/GetReadyWithMe";
import Hero from "@/components/home/Hero";
import NewArrivalsHero from "@/components/home/NewArrivalsHero";
import PerfectMatchCollection from "@/components/home/PerfectMatchCollection";
import TrendingCards from "@/components/home/TrendingCards";
import TrustBadges from "@/components/home/TrustBadges";
import ProductCard from "@/components/product/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <CollectionCollage />
      <PerfectMatchCollection />
      <TrendingCards />
      <CollageWorld />
      <GetReadyWithMe />
      <TrustBadges />
      <NewArrivalsHero />
      <CuratedForYou />
    </div>
  );
}
