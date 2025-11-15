// app/components/Navigation.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import Button from '../atoms/Button';

// IMPORT YOUR LOGO
// app/components/Navigation.tsx
import Logo from '~/assets/logo/casa-logo.png';

const links = [
  { name: 'Services', href: '#services' },
  { name: 'How it works', href: '#how' },
  { name: 'Why is different', href: '#why' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Lock scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-white relative z-[70] pt-[58px] px-15 ">
        <div
          className={clsx(
            'mx-auto max-w-[1435px] w-full h-[58px] flex items-center justify-between gap-[112px]',
          )}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center shrink-0 h-[56.37px] max-w-[151px] max-2xl:max-w-[120px]"
          >
            <img
              src={Logo}
              alt="Facto Logo"
              className="w-full h-full select-none"
            />
          </a>

          {/* Center nav — only visible on 2xl and larger */}
          <div className="justify-center flex-1 hidden min-w-0 2xl:flex">
            <nav
              className="flex items-center gap-12 overflow-x-auto whitespace-nowrap no-scrollbar max-2xl:gap-8"
              role="navigation"
              aria-label="Primary"
            >
              {links.map((ln) => (
                <a
                  key={ln.name}
                  href={ln.href}
                  className="text-text-default font-roboto font-normal text-[18px] leading-[30px] hover:text-brand transition-colors flex-shrink-0"
                >
                  {ln.name}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA Buttons + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Show CTA on xl and above */}
            <div className="items-center hidden gap-6 xl:flex">
              {/* Sign In: use the 'soft' variant and smaller 'hug' or 'navSm' size */}
              <Button variant="soft" size="hug" aria-label="Sign in">
                Sign In
              </Button>

              {/* Sign Up: solid dark button using 'dark' variant */}
              <Button variant="dark" size="navSm" aria-label="Sign up">
                Sign Up
              </Button>
            </div>

            {/* Hamburger visible up to 2xl */}
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="inline-flex items-center justify-center block p-2 rounded-md text-text-default focus:outline-none focus:ring-2 focus:ring-brand 2xl:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] 2xl:hidden "
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* MOBILE / TABLET / XL DRAWER */}
      <div
        className={clsx(
          'fixed top-0 left-0 h-full w-[280px] bg-white z-[80] 2xl:hidden transform transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-hidden={!open}
      >
        <div className="flex flex-col h-full px-[20px]">
          {/* Drawer Header  */}
          <div className="flex items-center h-[80px] border-b border-neutral-200">
            <img
              src="/images/logo.svg"
              alt="Facto Logo"
              className="w-auto h-10 select-none"
            />
          </div>

          {/* Drawer Content */}
          <nav className="flex-1 pt-4 pb-6 space-y-3 overflow-y-auto">
            {links.map((ln) => (
              <a
                key={ln.name}
                href={ln.href}
                onClick={() => setOpen(false)}
                className="block text-text-default font-roboto text-[18px] leading-[30px] py-2"
              >
                {ln.name}
              </a>
            ))}

            <div className="my-2 border-t border-neutral-100" />

            {/* CTA Buttons visible on sm–lg, hidden on xl+ */}
            <div className="flex flex-col gap-3 xl:hidden">
              <Button variant="soft" size="hug" aria-label="Sign in">
                Sign In
              </Button>

              {/* Sign Up: solid dark button using 'dark' variant */}
              <Button variant="dark" size="navSm" aria-label="Sign up">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
