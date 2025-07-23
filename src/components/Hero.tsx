import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Zap, Code, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16 md:pt-20 xl:pt-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="organic-shape w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 top-10 md:top-16 lg:top-20 left-6 md:left-10 lg:left-16 xl:left-20 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        <div className="organic-shape w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 top-24 md:top-32 lg:top-40 right-12 md:right-16 lg:right-24 xl:right-32 bg-gradient-to-r from-green-400/20 to-blue-500/20" style={{ animationDelay: '5s' }}></div>
        <div className="organic-shape w-44 h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 left-12 md:left-20 lg:left-32 xl:left-40 bg-gradient-to-r from-orange-500/20 to-pink-500/20" style={{ animationDelay: '10s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-5rem)]">
          <div className="text-center lg:text-left order-2 lg:order-1 py-8 lg:py-0">
            <div className="scroll-reveal">
              <h1 className="glitch-text mb-3 md:mb-4 lg:mb-6" data-text="WEBBOUND.DEV">
                WEBBOUND<span className="text-blue-500">.DEV</span>
              </h1>
              <div className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-400 mb-4 md:mb-6 lg:mb-8 font-mono">
                <span className="text-green-400">$</span> transform_ideas_into_digital_reality();
              </div>
            </div>

            <div className="scroll-reveal space-y-3 md:space-y-4 lg:space-y-6 mb-6 md:mb-8">
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                Cutting-edge technology solutions that push boundaries and deliver exceptional results.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400">
                From web development to AI integration, we build the future of digital experiences.
              </p>
            </div>

            <div className="scroll-reveal flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-6 md:mb-8 lg:mb-12">
              <Link to="/contact" className="brutalist-button flex items-center justify-center space-x-2 w-full sm:w-auto px-4 md:px-6 lg:px-8">
                <span className="text-xs md:text-sm lg:text-base">START YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>

            <div className="scroll-reveal flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 lg:gap-8">
              <div className="text-center min-w-[80px]">
                <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-500">100+</div>
                <div className="text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-400">50+</div>
                <div className="text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Clients</div>
              </div>
              
            </div>
          </div>

          <div className="scroll-reveal order-1 lg:order-2">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <div className="brutalist-container p-4 md:p-6 lg:p-8 bg-white dark:bg-gray-800">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="font-mono text-xs md:text-sm lg:text-sm xl:text-base overflow-x-auto">
                    <div className="text-gray-500 dark:text-gray-400">// Welcome to the future</div>
                    <div className="text-blue-500">const webbound = {`{`}</div>
                    <div className="ml-2 md:ml-3 lg:ml-4 text-gray-700 dark:text-gray-300">
                      <span className="text-purple-500">mission</span>: <span className="text-green-400">"Transform ideas into digital reality"</span>,
                    </div>
                    <div className="ml-2 md:ml-3 lg:ml-4 text-gray-700 dark:text-gray-300">
                      <span className="text-purple-500">expertise</span>: <span className="text-green-400">["Web Dev", "Mobile", "AI", "Cloud"]</span>,
                    </div>
                    <div className="ml-2 md:ml-3 lg:ml-4 text-gray-700 dark:text-gray-300">
                      <span className="text-purple-500">quality</span>: <span className="text-green-400">"Premium"</span>,
                    </div>
                    <div className="ml-2 md:ml-3 lg:ml-4 text-gray-700 dark:text-gray-300">
                      <span className="text-purple-500">innovation</span>: <span className="text-green-400">true</span>
                    </div>
                    <div className="text-blue-500">{`}`};</div>
                  </div>
                </div>
              </div>
              
              <div className="floating-element absolute -top-2 -right-2 md:-top-3 md:-right-3 lg:-top-4 lg:-right-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              
              <div className="floating-element absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 lg:-bottom-4 lg:-left-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center" style={{ animationDelay: '2s' }}>
                <Code className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              
              <div className="floating-element absolute top-1/2 -right-3 md:-right-4 lg:-right-6 xl:-right-8 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center" style={{ animationDelay: '4s' }}>
                <Globe className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;