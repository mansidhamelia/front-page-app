'use client'
import Image from 'next/image'
import { Fragment, useState } from "react"
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon, Bars3Icon, EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import StatItems from '../StatItems'


const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    {
        name: 'Teams',
        icon: UsersIcon,
        current: false,
        children: [
            { name: 'Residential Roofing', href: '#' },
            { name: 'Roofing services repairs & maintenance', href: '#' },
            { name: 'Chimney repairs', href: '#' },
        ],
    },

    { name: 'Roofing Gallery', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Contact', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
    { id: 1, name: 'Residential Roofing', href: '#', initial: 'P', current: false },
    { id: 2, name: 'Roofing services repairs & maintenance', href: '#', initial: 'P', current: false },
    { id: 3, name: 'Chimney repairs', href: '#', initial: 'T', current: false },
]

const clients = [
    {
        id: 1,
        name: 'Tuple',
        imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
        lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
    },
    {
        id: 2,
        name: 'SavvyCal',
        imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
        lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
    },
    {
        id: 3,
        name: 'Reform',
        imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
        lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '$7,600.00', status: 'Paid' },
    },
]

const statuses = {
    Paid: 'text-green-700 bg-green-50 ring-green-600/20',
    Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
    Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Home = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 xl:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar component*/}
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
                                        <div className="flex h-16 shrink-0 items-center">
                                            <Image
                                                className="h-8 w-auto"
                                                src="/next.svg"
                                                alt="Your Company"
                                                width={180}
                                                height={37}
                                                priority
                                            />
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul role="list" className="-mx-2 space-y-1">
                                                        {navigation.map((item) => (
                                                            <li key={item.name}>
                                                                <a
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        item.current
                                                                            ? 'bg-gray-800 text-white'
                                                                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                                        {teams.map((team) => (
                                                            <li key={team.name}>
                                                                <a
                                                                    href={team.href}
                                                                    className={classNames(
                                                                        team.current
                                                                            ? 'bg-gray-800 text-white'
                                                                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                                        {team.initial}
                                                                    </span>
                                                                    <span className="truncate">{team.name}</span>
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li className="-mx-6 mt-auto">
                                                    <a
                                                        href="#"
                                                        className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                                                    >
                                                        <img
                                                            className="h-8 w-8 rounded-full bg-gray-800"
                                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt=""
                                                        />
                                                        <span className="sr-only">Your profile</span>
                                                        <span aria-hidden="true">Tom Cook</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/5">
                        <div className="flex h-16 shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                src="/icons8-react.svg"
                                alt="Your Company"
                            />

                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                {!item.children ? (
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? 'bg-gray-800 text-white'
                                                                : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold '
                                                        )}
                                                    >
                                                        <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                                                        {item.name}
                                                    </a>
                                                ) : (
                                                    <Disclosure as="div">
                                                        {({ open }) => (
                                                            <>
                                                                <Disclosure.Button
                                                                    className={classNames(
                                                                        item.current ? 'bg-gray-800 text-white'
                                                                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                                        'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                                                                    {item.name}
                                                                    <ChevronRightIcon
                                                                        className={classNames(
                                                                            open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                                                            'ml-auto h-5 w-5 shrink-0'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                </Disclosure.Button>
                                                                <Disclosure.Panel as="ul" className="mt-1 px-2">
                                                                    {item.children.map((subItem) => (
                                                                        <li key={subItem.name}>
                                                                            {/* 44px */}
                                                                            <Disclosure.Button
                                                                                as="a"
                                                                                href={subItem.href}
                                                                                className={classNames(
                                                                                    subItem.current ? 'bg-gray-800 text-white'
                                                                                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                                                    'block rounded-md py-2 pr-2 pl-9 text-sm leading-6'
                                                                                )}
                                                                            >
                                                                                {subItem.name}
                                                                            </Disclosure.Button>
                                                                        </li>
                                                                    ))}
                                                                </Disclosure.Panel>
                                                            </>
                                                        )}
                                                    </Disclosure>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="-mx-6 mt-auto">
                                    <a
                                        href="#"
                                        className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                                    >
                                        <img
                                            className="h-8 w-8 rounded-full bg-gray-800"
                                            src="/letter-m.svg"
                                            alt="user Image"
                                        />
                                        <span className="sr-only">Your profile</span>
                                        <span aria-hidden="true">Mansi Dhamelia</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="xl:pl-72">
                    {/* Sticky search header */}
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
                        <button type="button" className="-m-2.5 p-2.5 text-white xl:hidden" onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
                        </button>

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <form className="flex flex-1" action="#" method="GET">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-full">
                                    <MagnifyingGlassIcon
                                        className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"
                                        aria-hidden="true"
                                    />
                                    <input
                                        id="search-field"
                                        className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm"
                                        placeholder="Search..."
                                        type="search"
                                        name="search"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>



                    <main className="   ">
                        {/* stats */}

                        <StatItems />

                        {/* clients table */}
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Recent clients</h2>
                                    <a href="#" className="text-sm font-semibold leading-6 text-gray-600 hover:text-gray-500">
                                        View all<span className="sr-only">, clients</span>
                                    </a>
                                </div>
                                <ul role="list" className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                                    {clients.map((client) => (
                                        <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200">
                                            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                                                <img
                                                    src={client.imageUrl}
                                                    alt={client.name}
                                                    className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                                                />
                                                <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>
                                                <Menu as="div" className="relative ml-auto">
                                                    <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                                                        <span className="sr-only">Open options</span>
                                                        <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                                                    </Menu.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active ? 'bg-gray-50' : '',
                                                                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                                        )}
                                                                    >
                                                                        View<span className="sr-only">, {client.name}</span>
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active ? 'bg-gray-50' : '',
                                                                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                                        )}
                                                                    >
                                                                        Edit<span className="sr-only">, {client.name}</span>
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Home