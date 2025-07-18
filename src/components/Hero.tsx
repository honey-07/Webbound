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
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="organic-shape w-96 h-96 top-20 left-20 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        <div className="organic-shape w-64 h-64 top-40 right-32 bg-gradient-to-r from-green-400/20 to-blue-500/20" style={{ animationDelay: '5s' }}></div>
        <div className="organic-shape w-80 h-80 bottom-20 left-40 bg-gradient-to-r from-orange-500/20 to-pink-500/20" style={{ animationDelay: '10s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="scroll-reveal">
              <h1 className="glitch-text mb-6" data-text="WEBBOUND.DEV">
                WEBBOUND<span className="text-blue-500">.DEV</span>
              </h1>
              <div className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6 lg:mb-8 font-mono">
                <span className="text-green-400">$</span> transform_ideas_into_digital_reality();
              </div>
            </div>

            <div className="scroll-reveal space-y-4 lg:space-y-6 mb-6 lg:mb-8">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                Cutting-edge technology solutions that push boundaries and deliver exceptional results.
              </p>
              <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400">
                From web development to AI integration, we build the future of digital experiences.
              </p>
            </div>

            <div className="scroll-reveal flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start mb-8 lg:mb-12">
              <Link to="/contact" className="brutalist-button flex items-center space-x-2">
                <span>START YOUR PROJECT</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
            </div>

            <div className="scroll-reveal flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-500">100+</div>
                <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-400">50+</div>
                <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-purple-500">5+</div>
                <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Years</div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal">
            <div className="relative">
              <div className="brutalist-container p-4 lg:p-8 bg-white dark:bg-gray-800">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="font-mono text-xs lg:text-sm">
                    <div className="text-gray-500 dark:text-gray-400">// Welcome to the future</div>
                    <div className="text-blue-500">const webbound = {`{`}</div>
                    <div className="ml-2 lg:ml-4 text-gray-700 dark:text-gray-300">
                      <span className="text-purple-500">mission</span>: <span className="text-green-400">"Transform ideas into digital reality"</span>,
                    </div>
                    <div className="ml-2 lg:ml-4 text-gray-700 dark:text-gray-300">
                      <span className="text-purple-500">expertise</span>: <span className="text-green-400">["Web Dev", "Mobile", "AI", "Cloud"]</span>,
                    </div>
                    <div className="ml-2 lg:ml-4 text-gray-700 dark:text-gray-300">
                      <span className="text-purple-500">quality</span>: <span className="text-green-400">"Premium"</span>,
                    </div>
                    <div className="ml-2 lg:ml-4 text-gray-700 dark:text-gray-300">
                      <span className="text-purple-500">innovation</span>: <span className="text-green-400">true</span>
                    </div>
                    <div className="text-blue-500">{`}`};</div>
                  </div>
                </div>
              </div>
              
              <div className="floating-element absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              
              <div className="floating-element absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center" style={{ animationDelay: '2s' }}>
                <Code className="w-6 h-6 text-white" />
              </div>
              
              <div className="floating-element absolute top-1/2 -right-4 lg:-right-8 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center" style={{ animationDelay: '4s' }}>
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;