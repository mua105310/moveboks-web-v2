import { EventModel } from "@/internal/models/event";
import MainCarousel from "@/components/selection/carousel/main-carousel";
import { getAllEvents } from "@/controller/controller-service";

const Home = async () => {
  const events: EventModel[] = await getAllEvents();
  return (
    <div>
      <MainCarousel events={events} />
    </div>
  );
};

export default Home;
