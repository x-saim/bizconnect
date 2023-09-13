import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
  FingerPrintIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Comprehensive Networking',
    description:
      'Connect with professionals from various fields and expand your network.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Knowledge Sharing',
    description:
      'Share your knowledge and industry insights through articles and posts.',
    icon: LockClosedIcon,
  },
  {
    name: 'Job Opportunities',
    description:
      'Browse and apply for job opportunities tailored to your skills.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Freelance Services',
    description: 'Offer your freelance services to businesses and individuals.',
    icon: FingerPrintIcon,
  },
];

export default function AboutPage() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            Discover Our Features
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Everything you need to succeed
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Our platform offers a wide range of features to help you grow your
            network, share your expertise, find exciting job opportunities, and
            offer your freelance services. Here's what you can expect:
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
