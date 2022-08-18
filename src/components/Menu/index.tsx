import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X as CloseIcon,
  List as MenuIcon,
  Play as EpisodeIcon,
  Person as PersonIcon,
  FlagBanner as FlagIcon,
  MapTrifold as LocationIcon,
  Books as BooksIcon,
  Tree as ReligionIcon
} from "phosphor-react";

const menuItems = [
  { url: '/episodes', Icon: EpisodeIcon, title: 'Episodes' },
  { url: '/houses', Icon: FlagIcon, title: 'Houses' },
  { url: '/people', Icon: PersonIcon, title: 'Cast' },
  { url: '/religions', Icon: ReligionIcon, title: 'Religions' },
  { url: '/locations', Icon: LocationIcon, title: 'Locations' },
  { url: '/histories', Icon: BooksIcon, title: 'Histories' },
]

export function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className='z-30 relative'>
      <button onClick={() => setOpen(true)} className="fixed top-4 right-4 cursor-pointer">
        <MenuIcon className="h-7 w-7 text-white " aria-hidden="true" />
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative w-screen max-w-xs">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <CloseIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-black py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="mb-5">
                          <Link href="/">
                            <a>
                              <img src="/assets/images/logo-gray.svg" alt="Game of thrones" className='w-48' />
                            </a>
                          </Link>
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <ul className='text-primary flex flex-col gap-6'>
                          <AnimatePresence exitBeforeEnter mode='wait'>
                            {menuItems.map(item => (
                              <motion.li
                                key={item.title}
                                initial={{ y: -30, opacity: 0.1 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 30, opacity: 0.1 }}
                                transition={{ ease: "easeInOut", duration: 0.7 }}
                                className='list-none'
                              >
                                <Link href={item.url}>
                                  <a className='flex align-middle justify-start gap-2 hover:text-white transition-colors ease-in-out delay-75'>
                                    <item.Icon className='w-6 h-6' /> {item.title}
                                  </a>
                                </Link>
                              </motion.li>
                            ))}
                          </AnimatePresence>
                        </ul>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
