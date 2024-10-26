import ImageCarousel from "@/components/carousel/image-carousel";
import Nav from "@/components/nav/nav";
import { events } from "../data/events";

export default function Home() {
  return (
    <div>
      <Nav />
      <ImageCarousel events={events} />
    </div>
  );
}
