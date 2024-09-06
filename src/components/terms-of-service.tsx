import React from 'react';

interface TermSectionProps {
  title: string;
  content: string;
}

const TermSection: React.FC<TermSectionProps> = ({ title, content }) => (
  <div className='mb-6'>
    <h2 className='text-xl font-semibold mb-2'>{title}</h2>
    <p className='text-gray-600'>{content}</p>
  </div>
);

const termsData: TermSectionProps[] = [
  {
    title: 'Acceptance of Terms',
    content:
      'By accessing or using Artify, you agree to be bound by these Terms of Service.',
  },
  {
    title: 'Description of Service',
    content:
      'Artify provides an intuitive drag and drop paint tool for creating digital artwork.',
  },
  {
    title: 'User Accounts',
    content:
      'You are responsible for maintaining the confidentiality of your Artify account and password.',
  },
  {
    title: 'Intellectual Property Rights',
    content:
      'The content and software on Artify are the property of Artify or its licensors and are protected by copyright laws.',
  },
  {
    title: 'User-Generated Content',
    content:
      'You retain ownership of any intellectual property rights in content you create using Artify.',
  },
  {
    title: 'Prohibited Conduct',
    content:
      'You agree not to use Artify for any unlawful purpose or in any way that could damage or impair the service.',
  },
  {
    title: 'Termination',
    content:
      'Artify reserves the right to terminate or suspend your account at any time for any reason without notice.',
  },
];

const TermsOfService: React.FC = () => {
  return (
    <div className='container mx-auto max-w-4xl py-8 px-4'>
      <h1 className='text-3xl font-bold mb-6'>Artify Terms of Service</h1>
      <div className='space-y-4'>
        {termsData.map((term, index) => (
          <TermSection key={index} {...term} />
        ))}
      </div>
    </div>
  );
};

export default TermsOfService;
