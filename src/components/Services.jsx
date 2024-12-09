import { services } from "../data";
import Service from "./Service";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title={"our"} subTitle={"services"}/>

      <div className="section-center services-center">
        {services.map(({id, title, text, icon}) => (
          <Service key={id} title={title} text={text} icon={icon} />
        ))}
      </div>
    </section>
  );
};

export default Services;