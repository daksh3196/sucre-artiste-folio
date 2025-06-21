
import { Briefcase, Award, Users, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Head Pastry Chef",
    company: "Le Grand Hotel, Paris",
    period: "2020 - Present",
    description: "Leading a team of 8 pastry chefs, creating signature desserts for Michelin-starred restaurant and luxury events.",
    icon: Briefcase
  },
  {
    title: "Senior Pastry Chef",
    company: "Patisserie Laurent Dubois",
    period: "2017 - 2020", 
    description: "Specialized in traditional French pastries and wedding cakes, managing daily production for high-end clientele.",
    icon: Award
  },
  {
    title: "Pastry Chef",
    company: "Le Bristol Paris",
    period: "2014 - 2017",
    description: "Crafted artisanal desserts for luxury hotel guests, developed seasonal menu items and trained junior staff.",
    icon: Users
  },
  {
    title: "Junior Pastry Chef",
    company: "Pierre Hermé",
    period: "2012 - 2014",
    description: "Apprenticed under master pastry chefs, perfecting techniques in macaron making and chocolate work.",
    icon: Calendar
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-champagne/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-burgundy mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Over a decade of experience in prestigious French patisseries, 
            honing my craft and developing expertise in traditional and modern techniques.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <div
                key={index}
                className="group relative bg-cream rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in elegant-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center group-hover:bg-burgundy/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-burgundy" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="font-playfair text-2xl font-semibold text-burgundy mb-2">
                          {experience.title}
                        </h3>
                        <h4 className="text-lg font-medium text-charcoal mb-2">
                          {experience.company}
                        </h4>
                      </div>
                      <div className="text-gold font-medium text-lg">
                        {experience.period}
                      </div>
                    </div>
                    <p className="text-charcoal/80 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
