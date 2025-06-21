import { Briefcase, Award, Users, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const experiences = [
  {
    title: "Pastry Chef Commie II",
    company: "Torte Gurugram",
    period: "2024 - Present",
    description: "Leading dessert creation at Gurugram's premier experiential dessert bar and cloud kitchen, crafting innovative desserts that blend traditional techniques with modern presentation.",
    icon: Briefcase
  },
  {
    title: "Pastry Chef Commie III",
    company: "Torte Gurugram",
    period: "2024 - 2024", 
    description: "Developed expertise in cloud kitchen operations and experiential dining, creating signature desserts for Delhi NCR's unique dessert destination.",
    icon: Award
  },
  {
    title: "Pastry Trainee/Intern",
    company: "The Oberoi Gurugram",
    period: "2023 - 2024",
    description: "Gained foundational experience in luxury hospitality pastry operations, learning from master chefs and understanding high-end dessert preparation standards.",
    icon: Users
  },
  {
    title: "Professional Training",
    company: "APCA India, Gurugram",
    period: "2022 - 2023",
    description: "Completed comprehensive pastry arts certification, mastering international techniques, ingredient knowledge, and professional pastry standards.",
    icon: Calendar
  }
];

export const Experience = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      id="experience" 
      ref={elementRef}
      className={cn(
        "py-20 px-4 bg-champagne/20",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "transition-all duration-1000 ease-out"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-burgundy mb-2">
            My Professional Journey
          </h2>
          <div className="font-dancing text-2xl text-gold mb-6">Crafting Sweet Experiences</div>
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
                key={experience.title}
                className={cn(
                  "bg-cream p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
                  "flex flex-col md:flex-row items-start md:items-center gap-6",
                  isVisible && `animate-[fadeIn_0.6s_ease-out_${index * 0.2}s_forwards]`
                )}
                style={{
                  opacity: 0,
                  animation: isVisible ? `fadeIn 0.6s ease-out ${index * 0.2}s forwards` : 'none'
                }}
              >
                <div className="bg-burgundy/10 p-4 rounded-full">
                  <IconComponent className="w-8 h-8 text-burgundy" />
                </div>
                <div className="flex-1">
                  <h3 className="font-dancing text-2xl text-burgundy mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-gold font-medium mb-2">
                    {experience.company} • {experience.period}
                  </p>
                  <p className="text-charcoal/80">
                    {experience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-cream/80 rounded-2xl p-8 elegant-border">
            <h3 className="font-dancing text-3xl text-burgundy mb-4">
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
