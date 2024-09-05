import { Button } from '@/components/ui/button';
import { Move, Layers, Zap, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1 bg-secondary'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='container px-4 md:px-6 mx-auto max-w-4xl'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className=''>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Create Beautiful Designs with Ease
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl'>
                  Artify: The intuitive drag and drop paint tool for
                  professionals and hobbyists alike.
                </p>
              </div>
              <div className='space-x-4'>
                <Button>Try for Free</Button>
                <Button variant='outline' className='text-white'>
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id='features'
          className='w-full py-12 md:py-24 lg:py-32 text-black bg-white'
        >
          <div className='container px-4 md:px-6 mx-auto max-w-4xl'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
              Powerful Features
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <FeatureCard
                icon={<Move className='h-10 w-10 text-primary' />}
                title='Intuitive Drag & Drop'
                description='Easily move and arrange elements on your canvas with our intuitive drag and drop interface.'
              />
              <FeatureCard
                icon={<Layers className='h-10 w-10 text-primary' />}
                title='Layer Management'
                description='Organize your artwork with advanced layer management tools for complex designs.'
              />
              <FeatureCard
                icon={<Zap className='h-10 w-10 text-primary' />}
                title='Quick Effects'
                description='Apply stunning effects to your artwork with just a few clicks using our preset library.'
              />
            </div>
          </div>
        </section>
        <section id='demo' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6 mx-auto max-w-4xl '>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
              See It in Action
            </h2>
            <div className='aspect-video rounded-xl overflow-hidden'>
              <Image
                src='/placeholder.svg?height=720&width=1280'
                alt='DragDropPaint Demo'
                width={1280}
                height={720}
                className='object-cover w-full h-full'
              />
            </div>
          </div>
        </section>
        <section
          id='pricing'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100'
        >
          <div className='container px-4 md:px-6 mx-auto max-w-5xl'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
              Simple Pricing
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <PricingCard
                title='Basic'
                price='$9.99'
                features={[
                  '5 Projects',
                  'Basic Tools',
                  '1GB Storage',
                  'Email Support',
                ]}
              />
              <PricingCard
                title='Pro'
                price='$19.99'
                features={[
                  'Unlimited Projects',
                  'Advanced Tools',
                  '10GB Storage',
                  'Priority Support',
                ]}
                highlighted={true}
              />
              <PricingCard
                title='Enterprise'
                price='Custom'
                features={[
                  'Custom Solutions',
                  'API Access',
                  'Unlimited Storage',
                  '24/7 Support',
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <div className='container mx-auto max-w-4xl flex flex-col sm:flex-row justify-between items-center'>
          <p className='text-xs text-gray-500'>
            © 2023 DragDropPaint. All rights reserved.
          </p>
          <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
            <Link
              className='text-xs hover:underline underline-offset-4'
              href='#'
            >
              Terms of Service
            </Link>
            <Link
              className='text-xs hover:underline underline-offset-4'
              href='#'
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='mb-4'>{icon}</div>
      <h3 className='text-xl font-bold mb-2'>{title}</h3>
      <p className='text-gray-500'>{description}</p>
    </div>
  );
}

function PricingCard({
  title,
  price,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col p-6 bg-white rounded-lg shadow-lg ${
        highlighted ? 'ring-2 ring-primary' : ''
      }`}
    >
      <h3 className='text-2xl font-bold mb-4'>{title}</h3>
      <div className='text-4xl font-bold mb-4'>{price}</div>
      <ul className='mb-6 space-y-2'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center'>
            <DollarSign className='h-5 w-5 text-green-500 mr-2' />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={`mt-auto ${
          highlighted ? 'bg-primary text-primary-foreground' : ''
        }`}
      >
        Get Started
      </Button>
    </div>
  );
}
