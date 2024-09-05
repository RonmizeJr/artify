import React from 'react';

function PrivacyPolicy() {
  return (
    <div className='privacy-policy'>
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <h2>1. Information We Collect</h2>
      <p>
        We collect information you provide directly to us when using our
        services.
      </p>
      <h2>2. How We Use Your Information</h2>
      <p>
        We use the information we collect to provide, maintain, and improve our
        services.
      </p>
      <h2>3. Data Security</h2>
      <p>
        We implement reasonable security measures to protect your personal
        information.
      </p>
      <h2>4. Changes to This Policy</h2>
      <p>
        We may update this privacy policy from time to time. We will notify you
        of any changes by posting the new policy on this page.
      </p>
      <h2>5. Contact Us</h2>
      <p>
        If you have any questions about this privacy policy, please contact us
        at: privacy@example.com
      </p>
    </div>
  );
}

export default PrivacyPolicy;
