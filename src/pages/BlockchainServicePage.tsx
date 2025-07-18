import { Bitcoin, Code2, Shield, Workflow } from 'lucide-react';

const BlockchainServicePage = () => {
  const features = [
    {
      icon: <Bitcoin className="w-6 h-6" />,
      title: "Smart Contract Development",
      description: "Custom smart contracts for DeFi, NFTs, DAOs, and other blockchain applications using Solidity and other blockchain programming languages."
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "DApp Development",
      description: "Full-stack decentralized application development with modern frameworks and Web3 integration."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Blockchain Security",
      description: "Smart contract auditing, security testing, and implementation of best practices to protect your blockchain applications."
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Token Development",
      description: "Custom token creation, ICO/IDO platforms, and tokenomics implementation for various blockchain networks."
    }
  ];

  const technologies = [
    "Ethereum", "Solana", "Polygon", "Binance Smart Chain",
    "Web3.js", "Ethers.js", "Hardhat", "Truffle",
    "IPFS", "OpenZeppelin", "Chainlink", "The Graph"
  ];

  return (
    <div className="py-24">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Blockchain Development Services
        </h1>
        <p className="text-xl text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Build secure, scalable, and innovative blockchain solutions with our expert development team.
          From smart contracts to full-scale DApps, we bring your blockchain vision to life.
        </p>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-gray-800 dark:text-gray-200">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Ready to Start Your Blockchain Project?
        </h2>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          Let's discuss how we can help you leverage blockchain technology for your business.
        </p>
        <a 
          href="/contact" 
          className="brutalist-button inline-block text-lg px-8 py-4"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default BlockchainServicePage;
