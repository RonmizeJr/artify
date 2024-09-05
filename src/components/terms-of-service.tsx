import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className='container mx-auto max-w-4xl py-8 px-4'>
      <h1 className='text-3xl font-bold mb-6'>Terms of Service</h1>
      <div className='space-y-4'>
        <section>
          <h2 className='text-xl font-semibold mb-2'>1. Acceptance of Terms</h2>
          <p>
            By using Artify, you agree to these Terms of Service. If you do not
            agree, please do not use our service.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold mb-2'>
            2. Description of Service
          </h2>
          <p>
            Artify provides an online platform for creating digital artwork
            using drag and drop tools.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold mb-2'>3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account and password. You agree to accept responsibility for all
            activities that occur under your account.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold mb-2'>4. Content Ownership</h2>
          <p>
            You retain all ownership rights to the content you create using
            Artify. However, by using our service, you grant us a license to
            use, modify, and display your content for the purpose of providing
            and improving our service.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold mb-2'>
            5. Prohibited Activities
          </h2>
          <p>
            You agree not to use Artify for any unlawful purposes or to conduct
            any unlawful activity, including, but not limited to, fraud,
            embezzlement, money laundering, or insider trading.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold mb-2'>6. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your account at any
            time for any reason, without prior notice or liability.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold mb-2'>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will
            provide notice of any material changes by posting the new Terms on
            the site. Your continued use of DragDropPaint after such
            modifications will constitute your acknowledgment of the modified
            Terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
