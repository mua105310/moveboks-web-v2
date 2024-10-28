import ImageCarousel from "@/components/carousel/image-carousel";
import Nav from "@/components/nav/nav";
import { events } from "../data/events";
import Footer from "@/components/footer/footer";


export default function Home() {
  return (
    <div>
      <Nav events={events}/>
      <ImageCarousel events={events} />
      <Footer events={events} />
    </div>
  );
}
