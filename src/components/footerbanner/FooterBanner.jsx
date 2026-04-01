import React from 'react';

const FooterBanner = () => {
    return (
      <section class="hero  py-16 bg-linear-to-r from-indigo-600 to-purple-600 text-white">
        <div class="hero-content container w-10/12 mx-auto text-center">
          <div class="max-w-xl">
            <h1 class="text-4xl md:text-5xl font-bold">
              Ready To Transform Your Workflow?
            </h1>

            <p class="py-4 text-sm md:text-base text-white/80">
              Join thousands of professionals who are already using Digitools to
              work smarter. Start your free trial today.
            </p>

            <div class="flex justify-center gap-4 mt-4 flex-wrap">
              <button class="btn btn-white text-indigo-600 bg-white border-none hover:bg-gray-100 rounded-full px-6">
                Explore Products
              </button>

              <button class="btn btn-outline border-white text-white hover:bg-white hover:text-indigo-600 rounded-full px-6">
                View Pricing
              </button>
            </div>

            <p class="mt-4 text-xs text-white/70">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    );
};

export default FooterBanner;