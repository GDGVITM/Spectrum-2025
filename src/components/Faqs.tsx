import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What is Spectrum?',
    answer:
      "Spectrum is GDG VITM’s annual tech fest featuring workshops, talks, coding contests, and fun activities. It’s a great way to learn new skills, connect with peers, and explore the latest tech.",
  },
  {
    question: 'Who organizes Spectrum?',
    answer:
      'Spectrum is organized by Google Developer Groups VIT (GDG VIT) — a vibrant community of 1200+ student developers committed to peer learning, innovation, and inclusivity.',
  },
  {
    question: 'How can I join Spectrum?',
    answer:
      'Joining Spectrum is easy! Keep an eye on the official GDG VITM website and our social media channels for event updates and registration details.',
  },
  {
    question: 'Who can participate in Spectrum events?',
    answer:
      'Spectrum is open to everyone—whether you’re a student at VITM or from another college, you’re welcome to participate. We encourage students from all backgrounds and skill levels to join us!',
  },
  {
    question: 'Do I need any prerequisites to take part in Spectrum workshops or contests?',
    answer:
      'Most workshops and sessions are beginner-friendly. If an event needs prior knowledge, it will be mentioned in the description. We aim to make learning accessible to all, so don’t worry if you’re new to a topic!',
  },
  {
    question: 'Are there prizes or certificates for Spectrum participants?',
    answer:
      'Absolutely! Participants can win exciting cash prizes, goodies, and official certificates, while also gaining hands-on experience through real-world challenges and interactive sessions that help build both skills and confidence.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-12 sm:py-16 md:py-20 bg-black relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-[#A1E9A5] font-bold mb-4"
            style={{ fontFamily: 'Minecraft' }}
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Got questions? We’ve got answers! Here are some of the most commonly asked questions about Spectrum.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-lg border border-green-400/30 shadow-md shadow-green-400/10 hover:shadow-green-400/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full px-5 py-4 text-left
                            focus:outline-none focus:ring-0 active:outline-none transition-all duration-300"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-header-${index}`}
                  tabIndex={0}
                  style={{
                    border: 'none',
                    boxShadow: 'none',
                    outline: 'none',
                  }}
                >
                  <h3 className="text-lg sm:text-xl text-[#A1E9A5] font-semibold">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-[#A1E9A5] transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={`faq-content-${index}`}
                  role="region"
                  aria-labelledby={`faq-header-${index}`}
                  className={`px-5 overflow-hidden text-gray-300 text-sm sm:text-base transition-all duration-500 ${
                    isOpen ? 'max-h-[250px] py-2 opacity-100 mt-0' : 'max-h-0 py-0 opacity-0 -mt-1'
                  }`}
                  style={{ transitionProperty: 'max-height, opacity, padding, margin' }}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
