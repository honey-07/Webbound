import React from 'react';
import { MapPin, Clock, DollarSign, Users, Briefcase, Heart, Zap, Award, Coffee, Laptop } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      description: 'Join our core development team to build cutting-edge web applications using React, Node.js, and modern technologies.',
      requirements: [
        '5+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with cloud platforms (AWS, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: ['Health Insurance', 'Remote Work', '401k Match', 'Professional Development']
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$60,000 - $90,000',
      description: 'Create beautiful, user-centered designs for web and mobile applications that delight users and drive business results.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio showcasing web/mobile designs',
        'Understanding of user research and testing'
      ],
      benefits: ['Health Insurance', 'Creative Freedom', 'Design Tools Budget', 'Flexible Hours']
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      salary: '$75,000 - $110,000',
      description: 'Build and maintain scalable infrastructure, implement CI/CD pipelines, and ensure system reliability.',
      requirements: [
        '4+ years of DevOps/Infrastructure experience',
        'Experience with Kubernetes, Docker, Terraform',
        'Knowledge of AWS/Azure cloud services',
        'Strong automation and scripting skills'
      ],
      benefits: ['Health Insurance', 'Remote Work', 'Certification Budget', 'Stock Options']
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70,000 - $100,000',
      description: 'Develop native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      requirements: [
        '3+ years of mobile development experience',
        'Proficiency in React Native or Flutter',
        'Experience with native iOS/Android development',
        'Knowledge of mobile app deployment processes'
      ],
      benefits: ['Health Insurance', 'Device Allowance', 'Remote Work', 'Learning Budget']
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Garden City, ID',
      type: 'Full-time',
      salary: '$65,000 - $85,000',
      description: 'Lead project delivery, coordinate with clients and development teams, and ensure successful project outcomes.',
      requirements: [
        '3+ years of project management experience',
        'PMP or Agile certification preferred',
        'Experience with software development projects',
        'Excellent communication and leadership skills'
      ],
      benefits: ['Health Insurance', 'Hybrid Work', 'Certification Support', 'Performance Bonus']
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90,000 - $130,000',
      description: 'Develop AI and machine learning solutions, implement neural networks, and integrate AI capabilities into applications.',
      requirements: [
        '4+ years of AI/ML development experience',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with NLP, computer vision, or deep learning',
        'Strong mathematical and statistical background'
      ],
      benefits: ['Health Insurance', 'Research Time', 'Conference Budget', 'Equity Package']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Laptop,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and modern equipment provided',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Learning budget, conference attendance, and certification support',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-rate salaries, performance bonuses, and equity opportunities',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO, flexible schedules, and mental health support',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Collaborative Team',
      description: 'Work with talented individuals in a supportive, inclusive environment',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems.'
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in everything we do, from code to client relationships.'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage exploration of new skills and technologies.'
    },
    {
      title: 'Work-Life Harmony',
      description: 'We believe in sustainable work practices that allow our team to thrive personally and professionally.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            JOIN OUR <span className="gradient-text">TEAM</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Build the future of technology with us. We're looking for passionate individuals who want to make a real impact in the digital world.
          </p>
        </div>

        {/* Company Culture */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Webbound.dev?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              At Webbound.dev, we're not just building software – we're crafting the future of digital experiences. 
              Our team is our greatest asset, and we're committed to creating an environment where everyone can thrive.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We believe in the power of diverse perspectives, continuous learning, and innovative thinking. 
              Join us in transforming ideas into digital reality while growing your career in a supportive, 
              cutting-edge environment.
            </p>
          </div>

          <div className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              BENEFITS & <span className="gradient-text">PERKS</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We offer comprehensive benefits and perks designed to support your success and well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className={`card-3d p-6 rounded-lg bg-gradient-to-br ${benefit.color} text-white`}>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/90 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              OPEN <span className="gradient-text">POSITIONS</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our current opportunities and find your next career adventure
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="brutalist-container p-8 bg-white dark:bg-gray-800">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{position.title}</h3>
                      <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                        {position.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                    
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {position.description}
                    </p>
                  </div>

                  <a href='mailto:careers@webbound.dev' className="brutalist-button lg:ml-8 lg:mt-0 mt-4">
                    APPLY NOW
                  </a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="brutalist-container p-8 bg-white dark:bg-gray-800 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Application Process</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our hiring process is designed to be thorough yet respectful of your time
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 'Apply', desc: 'Submit your application and portfolio' },
              { step: 'Screen', desc: 'Initial phone/video screening call' },
              { step: 'Interview', desc: 'Technical and cultural fit interviews' },
              { step: 'Offer', desc: 'Reference check and job offer' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.step}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="brutalist-container inline-block p-8 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              DON'T SEE THE RIGHT ROLE?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='mailto:careers@webbound.dev' className="brutalist-button">
                SEND GENERAL APPLICATION
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;