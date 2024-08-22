'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sprout, TreeDeciduous } from 'lucide-react';

const currencies = ['USD', 'CAD', 'GBP', 'AUD', 'EUR'];

const pricingPlans = [
  {
    name: '4 Classes/Month',
    duration: '30 minutes',
    type: 'One to One Class',
    prices: { USD: 30, CAD: 30, GBP: 20, AUD: 30, EUR: 20 },
    icon: Leaf,
  },
  {
    name: '8 Classes/Month',
    duration: '30 minutes',
    type: 'One to One Class',
    prices: { USD: 35, CAD: 35, GBP: 22, AUD: 35, EUR: 22 },
    icon: Sprout,
  },
  {
    name: '12 Classes/Month',
    duration: '30 minutes',
    type: 'One to One Class',
    prices: { USD: 40, CAD: 40, GBP: 25, AUD: 40, EUR: 25 },
    icon: TreeDeciduous,
  },
];

const specialPlans = [
  {
    name: '4 Classes/Month',
    duration: '60 minutes',
    type: 'One to One Class',
    prices: { USD: 50, CAD: 50, GBP: 35, AUD: 50, EUR: 35 },
    icon: Leaf,
  },
  {
    name: '8 Classes/Month',
    duration: '60 minutes',
    type: 'One to One Class',
    prices: { USD: 60, CAD: 60, GBP: 40, AUD: 60, EUR: 40 },
    icon: Sprout,
  },
  {
    name: '12 Classes/Month',
    duration: '60 minutes',
    type: 'One to One Class',
    prices: { USD: 70, CAD: 70, GBP: 50, AUD: 70, EUR: 50 },
    icon: TreeDeciduous,
  },
];

const getCurrencySymbol = (curr: any) => {
  switch (curr) {
    case 'GBP': return '£';
    case 'EUR': return '€';
    default: return '$';
  }
};

const PlanCard = ({ plan, currency, isSpecial }: any) => {
  const Icon = plan.icon;
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-3xl p-8 h-full w-full bg-[#047B5F] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100 shadow-xl "
    >
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#047B5F] opacity-30"></div>
      <Icon className="mb-4 h-12 w-12 text-green-100 " />
      <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
      <p className="mb-4 text-sm opacity-80">{plan.duration} Class</p>
      <p className="mb-4 text-sm opacity-80">{plan.type}</p>
      <div className="mb-4 text-4xl font-bold">
        {getCurrencySymbol(currency)}
        {plan.prices[currency]}
        <span className="text-lg font-normal">/month</span>
      </div>
      <button className="w-full rounded-full  bg-white bg-opacity-20 py-2 px-7 font-semibold text-white transition duration-300 hover:bg-opacity-30">
        Choose Plan
      </button>
    </motion.div>
  );
};

export default function PricingPage() {
  const [currency, setCurrency] = useState('USD');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#069A70] via-[#0DA98B] to-[#14B7A5] py-20 text-[#FFFDE7]">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center text-[#F0E68C] text-5xl font-bold"
        >
          Grow Your Quranic Knowledge
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 text-center text-xl"
        >
          Choose a plan that nurtures your spiritual growth
        </motion.p>

        <div className="mb-12 flex justify-center">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="rounded-full bg-white bg-opacity-40 py-2 px-4 font-semibold text-white"
          >
            {currencies.map((curr) => (
              <option key={curr} value={curr} className="bg-green-400">
                {curr}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-20">
          <h2 className="mb-8 text-center text-3xl text-[#F0E68C] font-semibold">Regular Plans</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {pricingPlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} currency={currency} isSpecial={false} />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="mb-8 text-center text-3xl text-[#F0E68C] font-semibold">Special Plans</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {specialPlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} currency={currency} isSpecial={true} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#047B5F] bg-opacity-70 p-8 backdrop-blur-lg"
        >
          <h2 className="mb-6 text-center text-3xl text-[#FFDAB9] font-semibold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold">Can I switch plans?</h3>
              <p className="text-green-100">Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Is there a long-term commitment?</h3>
              <p className="text-green-100">No, all our plans are billed monthly, and you can cancel at any time without penalty.</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Are there any additional fees?</h3>
              <p className="text-green-100">No hidden fees! The price you see is the price you pay. All course materials are included in your subscription.</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <h2 className="mb-4 text-3xl font-semibold">Need help choosing a plan?</h2>
          <p className="mb-8 text-xl text-green-100">Contact us for a free consultation to find the best plan for your needs.</p>
          <button className="rounded-full bg-gradient-to-r from-green-500 to-emerald-400 py-3 px-8 font-bold text-white transition duration-300 hover:from-green-600 hover:to-emerald-500">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}