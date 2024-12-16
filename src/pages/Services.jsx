import ServicesHero from "../components/Services/ServicesHero";
import ServicesSection from "../components/Services/ServicesSection";
import ServicesSuggestions from "../components/Services/ServicesSuggestions";
import {
  adSectionData01,
  adSectionData02,
  adSectionData03,
  adSectionData04,
  adSectionData05,
  adSectionData06,
} from "../constants/Deals";

const Services = () => {
  return (
    <section className="bg-white w-full">
      <ServicesHero />

      <ServicesSuggestions />

      <div className="flex flex-col items-center gap-10 w-full md:px-12 px-0 pt-2 pb-24 bg-[#121212]">
        <ServicesSection data={adSectionData01} />

        <ServicesSection data={adSectionData02} />

        <ServicesSection data={adSectionData03} />

        <ServicesSection data={adSectionData04} />

        <ServicesSection data={adSectionData05} />

        <ServicesSection data={adSectionData06} />
      </div>
    </section>
  );
};

export default Services;
