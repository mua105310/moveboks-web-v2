import ImageCarousel from "@/components/carousel/image-carousel";
import { getEvents } from "@/controller/eventController";


export default async function Home() {
  const events = await getEvents();
  return (
    <div>
      <ImageCarousel events={events}/>
    </div>
  );
}
