import React from 'react';

const policySections = [
  {
    title: '1. Information We Collect',
    content:
      'We collect information you provide directly to us when using our services.',
  },
  {
    title: '2. How We Use Your Information',
    content:
      'We use the information we collect to provide, maintain, and improve our services.',
  },
  {
    title: '3. Data Security',
    content:
      'We implement reasonable security measures to protect your personal information.',
  },
  {
    title: '4. Changes to This Policy',
    content:
      'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.',
  },
  {
    title: '5. Contact Us',
    content:
      'If you have any questions about this privacy policy, please contact us at: privacy@example.com',
  },
];

function PrivacyPolicy() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Privacy Policy</h1>
      <p className='text-sm text-gray-600 mb-8 text-center'>
        Last updated: {new Date().toLocaleDateString()}
      </p>
      {policySections.map(({ title, content }) => (
        <section key={title} className='mb-8'>
          <h2 className='text-xl font-semibold mb-3'>{title}</h2>
          <p className='text-gray-700 leading-relaxed'>{content}</p>
        </section>
      ))}
    </div>
  );
}

export default PrivacyPolicy;
