import React from 'react';
import { Shield, FileText, AlertTriangle, Scale } from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = 'July 15, 2025';

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: FileText,
      content: `By accessing and using the Webbound.dev website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: Shield,
      content: `Webbound.dev provides technology solutions including web development, mobile application development, desktop applications, AI/ML solutions, e-commerce development, custom IT solutions, digital marketing, and WhatsApp business solutions. We reserve the right to modify, suspend, or discontinue any service at any time without notice.`
    },
    {
      id: 'user-obligations',
      title: 'User Obligations',
      icon: AlertTriangle,
      content: `Users must provide accurate information, maintain the confidentiality of account credentials, use services in compliance with applicable laws, not engage in any activity that could harm our systems or other users, and respect intellectual property rights.`
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms',
      icon: Scale,
      content: `Payment terms are specified in individual project agreements. Generally, payments are due according to project milestones. Late payments may incur additional charges. All fees are non-refundable unless otherwise specified in writing.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            TERMS OF <span className="gradient-text">SERVICE</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Please read these terms of service carefully before using our website and services.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="brutalist-container p-6 bg-white dark:bg-gray-800 mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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

        {/* Terms Content */}
        <div className="space-y-12">
          {/* Section 1: Acceptance of Terms */}
          <section id="acceptance" className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 text-blue-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              By accessing and using the Webbound.dev website (the "Service") operated by Webbound.dev ("us", "we", or "our"), 
              you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              If you do not agree to abide by the above, please do not use this service. These terms apply to all visitors, 
              users, and others who access or use the service.
            </p>
          </section>

          {/* Section 2: Description of Services */}
          <section id="services" className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-green-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">2. Description of Services</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Webbound.dev provides comprehensive technology solutions including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-6">
              <li>Web development and design services</li>
              <li>Mobile application development (iOS and Android)</li>
              <li>Desktop application development</li>
              <li>AI and Machine Learning solutions</li>
              <li>E-commerce development and integration</li>
              <li>Custom IT solutions and consulting</li>
              <li>Digital marketing and SEO services</li>
              <li>WhatsApp Business API solutions</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any service at any time without prior notice. 
              Service availability may vary based on technical requirements and business considerations.
            </p>
          </section>

          {/* Section 3: User Obligations */}
          <section id="user-obligations" className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-orange-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">3. User Obligations</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              By using our services, you agree to:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">You Must:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of account credentials</li>
                  <li>Use services in compliance with applicable laws</li>
                  <li>Respect intellectual property rights</li>
                  <li>Pay for services according to agreed terms</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">You Must Not:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Engage in any illegal or harmful activities</li>
                  <li>Attempt to harm our systems or other users</li>
                  <li>Share account access with unauthorized parties</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on others' intellectual property</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Payment Terms */}
          <section id="payment-terms" className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <div className="flex items-center mb-6">
              <Scale className="w-8 h-8 text-purple-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">4. Payment Terms</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Payment Schedule</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Payment terms are specified in individual project agreements. Generally, payments are structured 
                  according to project milestones and deliverables. Typical payment schedules include upfront deposits 
                  and milestone-based payments.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Late Payments</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Late payments may incur additional charges as specified in the project agreement. 
                  We reserve the right to suspend services for accounts with overdue payments.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Refund Policy</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  All fees are generally non-refundable unless otherwise specified in writing. 
                  Refund requests will be evaluated on a case-by-case basis according to the specific 
                  circumstances and project agreement terms.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Intellectual Property */}
          <section className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">5. Intellectual Property</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Ownership</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Upon full payment, clients receive ownership of custom-developed code and content created specifically 
                  for their project. However, we retain rights to our proprietary tools, frameworks, and methodologies.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Third-Party Components</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Projects may include third-party components, libraries, or services that are subject to their 
                  respective licenses and terms of use.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Limitation of Liability */}
          <section className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">6. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              In no event shall Webbound.dev, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential, or punitive damages, including without 
              limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our total liability for any claim arising out of or relating to these terms or our services shall not 
              exceed the amount paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          {/* Section 7: Termination */}
          <section className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">7. Termination</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason 
              whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Upon termination, your right to use the service will cease immediately. All provisions of the Terms 
              which by their nature should survive termination shall survive termination.
            </p>
          </section>

          {/* Section 8: Changes to Terms */}
          <section className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">8. Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              What constitutes a material change will be determined at our sole discretion. By continuing to access 
              or use our service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          {/* Section 9: Contact Information */}
          <section className="brutalist-container p-8 bg-white dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">9. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p><strong>Email:</strong> legal@webbound.dev</p>
              <p><strong>Address:</strong> 9169 W State St #2156, Garden City, ID 83714</p>
              <p><strong>Phone:</strong> +1 (208) 408 1463</p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="brutalist-container inline-block p-8 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              QUESTIONS ABOUT OUR TERMS?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our legal team is here to help clarify any questions you may have.
            </p>
            <a href="mailto:legal@webbound.dev" className="brutalist-button">
              CONTACT LEGAL TEAM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;