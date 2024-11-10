import ImageCarousel from "@/components/carousel/image-carousel";
import { events } from "../data/events";


export default function Home() {
  return (
    <div>
      <ImageCarousel events={events} />
    </div>
  );
}
