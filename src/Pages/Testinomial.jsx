import React from 'react';

const Testinomial = () => {
  return (
    <>
      <section className="bg-[#16382C] text-white py-12 px-5 text-center">
        <h2 className="text-sm uppercase tracking-wide text-[#b2d8d2] mb-2">Testimonials</h2>
        <h1 className="text-2xl font-bold mb-10">What Our Customer Say About Our Products</h1>

        <div className="testimonials flex flex-wrap justify-center gap-5">
          {/* Testimonial 1 */}
          <div className="testimonial-card bg-white text-[#333333] rounded-xl shadow-md p-5 max-w-xs flex-1 min-w-[280px]">
            <p className="text-base leading-6 mb-5">
              The customer service team was very responsive and helpful whenever I had questions or needed assistance.
            </p>
            <h3 className="text-lg font-bold mb-1">Scarlett Jackson</h3>
            <span className="text-sm text-[#666666]">Supplier</span>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card bg-white text-[#333333] rounded-xl shadow-md p-5 max-w-xs flex-1 min-w-[280px]">
            <p className="text-base leading-6 mb-5">
              Easy to navigate and provides a wide range of services to help with importing and exporting products.
            </p>
            <h3 className="text-lg font-bold mb-1">Lydia Morris</h3>
            <span className="text-sm text-[#666666]">Lydia Morris</span>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card bg-white text-[#333333] rounded-xl shadow-md p-5 max-w-xs flex-1 min-w-[280px]">
            <p className="text-base leading-6 mb-5">
              I would highly recommend this website to anyone looking to streamline their import-export operations.
            </p>
            <h3 className="text-lg font-bold mb-1">Frankie Mills</h3>
            <span className="text-sm text-[#666666]">Retailer</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testinomial;
