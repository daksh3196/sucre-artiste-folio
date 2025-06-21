
import { Briefcase, Award, Users, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Pastry Chef Commie II",
    company: "Torte Gurugram",
    period: "2023 - Present",
    description: "Leading dessert creation at Gurugram's premier experiential dessert bar and cloud kitchen, crafting innovative desserts that blend traditional techniques with modern presentation.",
    icon: Briefcase
  },
  {
    title: "Pastry Chef Commie III",
    company: "Torte Gurugram",
    period: "2022 - 2023", 
    description: "Developed expertise in cloud kitchen operations and experiential dining, creating signature desserts for Delhi NCR's unique dessert destination.",
    icon: Award
  },
  {
    title: "Pastry Trainee/Intern",
    company: "The Oberoi Gurugram",
    period: "2021 - 2022",
    description: "Gained foundational experience in luxury hospitality pastry operations, learning from master chefs and understanding high-end dessert preparation standards.",
    icon: Users
  },
  {
    title: "Professional Training",
    company: "APCA Malaysia, Gurugram",
    period: "2021",
    description: "Completed comprehensive pastry arts certification, mastering international techniques, ingredient knowledge, and professional pastry standards.",
    icon: Calendar
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-champagne/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-burgundy mb-6">
            My Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            From academic excellence to pastry artistry, each step has shaped 
            my unique approach to creating extraordinary desserts.
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

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-cream/80 rounded-2xl p-8 elegant-border">
            <h3 className="font-playfair text-2xl font-semibold text-burgundy mb-4">
              Educational Background
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-champagne/30 rounded-lg">
                <h4 className="font-medium text-burgundy mb-2">Bachelor's in International Studies</h4>
                <p className="text-charcoal/70">Jindal Global University</p>
              </div>
              <div className="p-4 bg-champagne/30 rounded-lg">
                <h4 className="font-medium text-burgundy mb-2">LLB Law</h4>
                <p className="text-charcoal/70">Jindal Global University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
