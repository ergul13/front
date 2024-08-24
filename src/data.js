import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'Ödünç AL',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/Ödünç AL' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/Ödünç AL' },
      { label: 'connect', icon: <FaCreditCard />, url: '/Ödünç AL' },
    ],
  },
  {
    page: 'İade ET',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/Ödünç AL' },
      { label: 'libraries', icon: <FaBook />, url: '/Ödünç AL' },
      { label: 'help', icon: <FaBook />, url: '/Ödünç AL' },
      { label: 'billing', icon: <FaBook />, url: '/Ödünç AL' },
    ],
  },
  {
    page: 'Kitap ARA',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/Ödünç AL' },
      { label: 'customers', icon: <FaBriefcase />, url: '/Ödünç AL' },
    ],
  },
];

export default sublinks;
