import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Move, Layers, Zap, DollarSign } from 'lucide-react';
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
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background'>
          <div className='container px-4 md:px-6 mx-auto max-w-4xl'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className=''>
                <h1 className='text-3xl text-accent-foreground font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Create Beautiful Designs with Ease
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl'>
                  Artify: The intuitive drag and drop paint tool for
                  professionals and hobbyists alike.
                </p>
              </div>
              <div className='space-x-4'>
                <Button>Try for Free</Button>
                <Button variant='outline' className='text-foreground'>
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
        <section
          id='demo'
          className='w-full py-12 md:py-24 lg:py-32 bg-background'
        >
          <div className='container px-4 md:px-6 mx-auto max-w-4xl '>
            <h2 className='text-3xl text-foreground font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
              See It in Action
            </h2>
            <div className='aspect-video rounded-xl overflow-hidden bg-foreground'>
              <Image
                src='/placeholder.svg?height=720&width=1280'
                alt='Artify Demo'
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
    </div>
  );
}
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className='flex flex-col items-center text-center'>
      <CardHeader className='mb-4'>{icon}</CardHeader>
      <CardTitle className='text-xl font-bold mb-2'>{title}</CardTitle>
      <CardContent className='text-gray-500'>{description}</CardContent>
    </Card>
  );
}

function PricingCard({
  title,
  price,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card
      className={`flex flex-col p-6 rounded-lg shadow-lg ${
        highlighted ? 'ring-2 ring-primary' : ''
      }`}
    >
      <CardTitle className='text-2xl font-bold mb-4'>{title}</CardTitle>
      <CardHeader className='text-4xl font-bold mb-4'>{price}</CardHeader>
      <CardContent className='mb-6 space-y-2'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center'>
            <DollarSign className='h-5 w-5 text-green-500 mr-2' />
            {feature}
          </li>
        ))}
      </CardContent>
      <Button
        className={`mt-auto ${
          highlighted ? 'bg-primary text-primary-foreground' : ''
        }`}
      >
        Get Started
      </Button>
    </Card>
  );
}
