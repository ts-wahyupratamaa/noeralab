import { DiscordLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa6';

const footerSocials = [
  {
    href: '#',
    name: 'Instagram',
    icon: <FaInstagram className='h-4 w-4' />,
  },
  {
    href: '#',
    name: 'Discord',
    icon: <DiscordLogoIcon className='h-4 w-4' />,
  },
  {
    href: '#',
    name: 'Customer Service',
    icon: <RiCustomerService2Fill className='h-4 w-4' />,
  },
];

export function SiteFooter() {
  return (
    <footer
      className='fixed bottom-0 left-0 w-full z-50 pointer-events-none'
      aria-label='Site footer'
    >
      <div className='mx-auto w-full max-w-screen-xl xl:pb-2'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-md py-4 px-8 gap-3 bg-white/80 dark:bg-black/60 backdrop-blur border-t border-neutral-200/30 dark:border-neutral-800/30'>
          <nav aria-label='Social links' className='pointer-events-auto'>
            <ul className='flex space-x-5 sm:justify-center sm:mt-0'>
              {footerSocials.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    aria-label={social.name}
                    className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600'
                  >
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <span className='text-[12px] text-gray-500 sm:text-center dark:text-gray-400'>
            © {new Date().getFullYear()}{' '}
            <span className='cursor-pointer'>Kognifx </span>
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
