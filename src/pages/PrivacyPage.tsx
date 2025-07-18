import React from 'react';
import { Shield, Eye, Lock, Database, Cookie, UserCheck } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: `We collect information you provide directly, information collected automatically, and information from third parties to provide and improve our services.`
    },
    {
      id: 'information-use',
      title: 'How We Use Information',
      icon: Eye,
      content: `We use collected information to provide services, communicate with you, improve our offerings, and comply with legal obligations.`
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: UserCheck,
      content: `We do not sell personal information. We may share information with service providers, for legal compliance, or with your consent.`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking',
      icon: Cookie,
      content: `We use cookies and similar technologies to enhance user experience, analyze usage patterns, and provide personalized content.`
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: Shield,
      content: `You have rights regarding your personal information including access, correction, deletion, and data portability where applicable.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            PRIVACY <span className="gradient-text">POLICY</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="brutalist-container p-6 bg-white dark:bg-gray-800 mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <section.icon className="w-5 h-5 text-blue-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{section.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Privacy Content */}
        <div className="space-y-12">
          {/* Section 1: Information We Collect */}
          <section id="information-collection" className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <div className="flex items-center mb-6">
              <Database className="w-8 h-8 text-blue-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">1. Information We Collect</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Information You Provide</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Company information and project details</li>
                  <li>Payment and billing information</li>
                  <li>Communications with our team</li>
                  <li>Feedback and survey responses</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Automatically Collected Information</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referral sources and search terms</li>
                  <li>Usage patterns and preferences</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Third-Party Information</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We may receive information from business partners, social media platforms, and other third parties 
                  to enhance our services and better understand our users.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: How We Use Information */}
          <section id="information-use" className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-green-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">2. How We Use Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Service Provision</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Deliver requested services and support</li>
                  <li>Process payments and manage accounts</li>
                  <li>Communicate about projects and updates</li>
                  <li>Provide technical support and assistance</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Business Operations</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Improve our services and user experience</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Develop new features and offerings</li>
                  <li>Conduct research and analytics</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Communication</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Send service-related notifications</li>
                  <li>Provide marketing communications (with consent)</li>
                  <li>Respond to inquiries and support requests</li>
                  <li>Share important updates and announcements</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Legal Compliance</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Comply with applicable laws and regulations</li>
                  <li>Protect against fraud and security threats</li>
                  <li>Enforce our terms of service</li>
                  <li>Respond to legal requests and proceedings</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Information Sharing */}
          <section id="information-sharing" className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <div className="flex items-center mb-6">
              <UserCheck className="w-8 h-8 text-purple-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">3. Information Sharing</h2>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Service Providers</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We may share information with trusted third-party service providers who assist us in operating our 
                  business, such as payment processors, hosting providers, and analytics services. These providers 
                  are contractually obligated to protect your information.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Legal Requirements</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We may disclose information when required by law, court order, or government request, or when 
                  necessary to protect our rights, property, or safety, or that of our users or others.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Business Transfers</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                  as part of the transaction, subject to the same privacy protections.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Data Security */}
          <section id="data-security" className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <div className="flex items-center mb-6">
              <Lock className="w-8 h-8 text-red-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">4. Data Security</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technical Measures</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Encrypted data storage</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Firewall and intrusion detection systems</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Organizational Measures</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Employee training on data protection</li>
                    <li>Limited access on need-to-know basis</li>
                    <li>Regular security policy reviews</li>
                    <li>Incident response procedures</li>
                    <li>Third-party security assessments</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
                <p className="text-yellow-800 dark:text-yellow-200">
                  <strong>Important:</strong> While we strive to protect your information, no method of transmission 
                  over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Cookies & Tracking */}
          <section id="cookies" className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <div className="flex items-center mb-6">
              <Cookie className="w-8 h-8 text-orange-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">5. Cookies & Tracking</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience, analyze site usage, 
                and provide personalized content.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Essential Cookies</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Required for basic site functionality and security. Cannot be disabled.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Help us understand how visitors interact with our website to improve user experience.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Marketing Cookies</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Used to deliver relevant advertisements and track campaign effectiveness.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Managing Cookies</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  You can control cookies through your browser settings. However, disabling certain cookies may 
                  affect site functionality. You can also opt out of analytics tracking through our cookie preferences.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Your Rights */}
          <section id="your-rights" className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-indigo-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">6. Your Rights</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Access & Portability</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Request access to your personal information</li>
                    <li>Receive a copy of your data in a portable format</li>
                    <li>Request information about how we process your data</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Correction & Deletion</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Restrict processing in certain circumstances</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Communication Preferences</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Opt out of marketing communications</li>
                    <li>Manage cookie preferences</li>
                    <li>Control data sharing with third parties</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Legal Protections</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Object to processing for legitimate interests</li>
                    <li>Withdraw consent where applicable</li>
                    <li>File complaints with supervisory authorities</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
                <p className="text-green-800 dark:text-green-200">
                  <strong>Exercise Your Rights:</strong> To exercise any of these rights, please contact us at 
                  privacy@webbound.dev. We will respond to your request within 30 days.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Data Retention */}
          <section className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">7. Data Retention</h2>
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We retain personal information only as long as necessary to fulfill the purposes for which it was 
                collected, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Account Information</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Retained while account is active plus 3 years after closure
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Project Data</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Retained for 7 years after project completion for legal and business purposes
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Marketing Data</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Retained until you opt out or 2 years of inactivity
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Contact Information */}
          <section className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">8. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">General Inquiries</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p><strong>Email:</strong> privacy@webbound.dev</p>
                  <p><strong>Phone:</strong> +1 (208) 900-9315</p>
                  <p><strong>Address:</strong> 9169 W State St #2156, Garden City, ID 83714</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Data Protection Officer</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p><strong>Email:</strong> dpo@webbound.dev</p>
                  <p><strong>Response Time:</strong> Within 30 days</p>
                  <p><strong>Languages:</strong> English</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="brutalist-container inline-block p-8 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              QUESTIONS ABOUT YOUR PRIVACY?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our privacy team is here to help you understand and exercise your rights.
            </p>
            <button className="brutalist-button">
              CONTACT PRIVACY TEAM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;