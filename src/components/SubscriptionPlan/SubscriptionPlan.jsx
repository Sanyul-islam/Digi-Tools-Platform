import React from 'react';

const SubscriptionPlan = () => {
    return (
      <section class="container w-10/12 mx-auto bg-base-100 py-16">
        <div class="max-w-6xl mx-auto px-4 text-center">
          <h2 class="text-3xl md:text-4xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <p class="text-gray-500 mt-2 mb-10">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>

          <div class="grid md:grid-cols-3 gap-6 bg-base-100">
            <div class="card bg-[#F2F2F2] shadow-lg p-6 text-left">
              <h3 class="font-semibold text-lg">Starter</h3>
              <p class="text-sm text-gray-500 mb-4">
                Perfect for getting started
              </p>

              <h2 class="text-3xl font-bold mb-4">
                $0<span class="text-sm font-normal">/Month</span>
              </h2>

              <ul class="space-y-2 text-sm mb-6">
                <li>✔ Access to 10 free tools</li>
                <li>✔ Basic templates</li>
                <li>✔ Community support</li>
                <li>✔ 1 project per month</li>
              </ul>

              <button class="btn w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white border-none rounded-full">
                Get Started Free
              </button>
            </div>

            <div
              class="card shadow-lg p-6 text-left text-white relative 
                  bg-linear-to-r from-indigo-600 to-purple-600 scale-105"
            >
              <div class="absolute -top-4 left-1/2 -translate-x-1/2">
                <span class="badge bg-[#FEF3C6] text-xs px-3 py-2 rounded-full">
                  Most Popular
                </span>
              </div>

              <h3 class="font-semibold text-lg">Pro</h3>
              <p class="text-sm opacity-90 mb-4">Best for professionals</p>

              <h2 class="text-3xl font-bold mb-4">
                $29<span class="text-sm font-normal">/Month</span>
              </h2>

              <ul class="space-y-2 text-sm mb-6">
                <li>✔ Access to all premium tools</li>
                <li>✔ Unlimited templates</li>
                <li>✔ Priority support</li>
                <li>✔ Unlimited projects</li>
                <li>✔ Cloud sync</li>
                <li>✔ Advanced analytics</li>
              </ul>

              <button class="btn w-full bg-white text-purple-600 border-none rounded-full">
                Start Pro Trial
              </button>
            </div>

            <div class="card bg-[#F2F2F2] shadow-lg p-6 text-left">
              <h3 class="font-semibold text-lg">Enterprise</h3>
              <p class="text-sm text-gray-500 mb-4">For teams and businesses</p>

              <h2 class="text-3xl font-bold mb-4">
                $99<span class="text-sm font-normal">/Month</span>
              </h2>

              <ul class="space-y-2 text-sm mb-6">
                <li>✔ Everything in Pro</li>
                <li>✔ Team collaboration</li>
                <li>✔ Custom integrations</li>
                <li>✔ Dedicated support</li>
                <li>✔ SLA guarantee</li>
                <li>✔ Custom branding</li>
              </ul>

              <button class="btn w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white border-none rounded-full">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SubscriptionPlan;