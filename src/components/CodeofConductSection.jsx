'use client';

import React from 'react';

const objectives = [
  {
    title: 'KRA 1: Forest and Tree Cover Expansion for Climate Mitigation and Adaptation',
    details: [
      'Increase the National Tree Cover from 13% to 21.03% in 5 years towards 30% by 2032.',
      'Increase the National Forest Cover from 8.3% to 10% in 5 years towards 10% by 2030.',
    ],
  },
  {
    title: 'KRA 2: Conservation and Protection of Forests for Climate Change Resilience',
    details: [
      'Strengthen enforcement capacity in forest protection and secure corporate assets.',
      'Improve governance for sustainable forest management.',
      'Strengthen climate change actions and response capacities.',
      'Reverse degradation of Mangrove ecosystems for climate mitigation.',
    ],
  },
  {
    title: 'KRA 3: Economic Development and Livelihood Improvement',
    details: [
      'Strengthen nature-based enterprises for improving livelihoods and climate resilience.',
      'Develop commercial forest plantations on public, community, and private lands.',
      'Collaborate with private sectors for climate finance and carbon project development.',
    ],
  },
  {
    title: 'KRA 4: Organizational Capacity Building and Collaboration',
    details: [
      'Promote operational efficiency and effectiveness to deliver on mandate.',
      'Strengthen partnerships and increase resource mobilization capacity.',
    ],
  },
];

const CodeOfConductSection = () => {
  return (
    <div className="py-10 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side: Image and Logo */}
        <div>
          <img
            src="https://www.kbc.co.ke/wp-content/uploads/2023/09/KFS.jpeg"
            alt="KFS Personnel"
            className="w-full rounded-xl"
          />

          <div className="flex flex-col items-start mt-4">
            <img
              src="https://th.bing.com/th/id/R.e05b02abfe95029c425adbc0ba7b900c?rik=3o4JFkXm2MflHQ&pid=ImgRaw&r=0"
              alt="KFS Logo"
              className="w-36 mb-2"
            />
            <p className="text-sm text-gray-500">THE CODE OF CONDUCT AND ETHICS 2021</p>
          </div>
        </div>

        {/* Right Side: Strategic Objectives */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center text-black">Strategic Objectives</h2>
          <p className="text-lg mb-6 text-black">
            The Strategic Objectives serve as a roadmap to achieve the Kenya Forest Service’s mission and vision. The service will therefore focus on the following strategic objectives:
          </p>

          <div className="flex flex-col gap-4">
            {objectives.map((item, index) => (
              <div 
                key={index} 
                className="group w-full p-4 rounded-lg bg-green-600 text-white transition-all duration-300 hover:bg-green-700 cursor-pointer"
              >
                <p className="text-lg font-semibold">{item.title}</p>

                {/* Details - Hidden by Default, Shown on Hover */}
                <div className="mt-2 space-y-1 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-screen">
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-sm text-white">• {detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConductSection;
