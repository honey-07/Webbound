import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  quote: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Haresh Patel",
    company: "Shreeji Cranes & Hoists",
    role: "Director",
    quote: "Working with WebBound.dev transformed our digital presence. Their innovative solutions and attention to detail exceeded our expectations."
  },
  {
    id: 2,
    name: "Amit Doshi",
    company: "Lyfe Water",
    role: "CTO",
    quote: "The team's technical expertise and creative approach helped us achieve our goals faster than we thought possible."
  },
  {
    id: 3,
    name: "Json DSilva",
    company: "Ace Engineering",
    role: "CEO",
    quote: "Their commitment to excellence and customer satisfaction is unmatched. They delivered a solution that perfectly aligned with our vision."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <p className="text-gray-700 dark:text-gray-300 italic">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
