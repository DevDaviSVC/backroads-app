import { tours } from "../data";
import Title from "./Title";
import TourCard from "./TourCard";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title={"featured"} subTitle={"tours"} />

      <div className="section-center featured-center">
        {tours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}
export default Tours;