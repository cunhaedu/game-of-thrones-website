import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
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
                              <img src="/assets/images/logo.svg" alt="Game of thrones" className='w-48' />
                            </a>
                          </Link>
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <section className='text-primary flex flex-col gap-6'>
                          <Link href="/episodes">
                            <a className='flex align-middle justify-start gap-2 hover:text-white transition-colors ease-in-out delay-75'>
                              <EpisodeIcon className='w-6 h-6' /> Episodes
                            </a>
                          </Link>

                          <Link href="/houses">
                            <a className='flex align-middle justify-start gap-2 hover:text-white transition-colors ease-in-out delay-75'>
                              <FlagIcon className='w-6 h-6' /> Houses
                            </a>
                          </Link>

                          <Link href="/people">
                            <a className='flex align-middle justify-start gap-2 hover:text-white transition-colors ease-in-out delay-75'>
                              <PersonIcon className='w-6 h-6' /> Cast
                            </a>
                          </Link>

                          <Link href="/religions">
                            <a className='flex align-middle justify-start gap-2 hover:text-white transition-colors ease-in-out delay-75'>
                              <ReligionIcon className='w-6 h-6'/> Religions
                            </a>
                          </Link>

                          <Link href="/locations">
                            <a className='flex align-middle justify-start gap-2 hover:text-white transition-colors ease-in-out delay-75'>
                              <LocationIcon className='w-6 h-6' /> Locations
                            </a>
                          </Link>

                          <Link href="/histories">
                            <a className='flex align-middle justify-start gap-2 hover:text-white transition-colors ease-in-out delay-75'>
                              <BooksIcon className='w-6 h-6' /> Histories
                            </a>
                          </Link>

                        </section>
                        {/* /End replace */}
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
