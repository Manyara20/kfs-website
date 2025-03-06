import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';

const CodeOfConductSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
          <h2 className="text-3xl font-bold mb-4 text-centre !text-black">Strategic Objectives</h2>
          <p className="text-lg mb-6  !text-black">
            The Strategic Objectives serve as a roadmap to achieve the Kenya Forest Service’s mission and vision. The service will therefore focus on the following strategic objectives:
          </p>

          <div className="flex flex-col gap-4">
            {objectives.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => handleToggle(index)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    expandedIndex === index
                      ? 'bg-green-700'
                      : 'bg-green-600 hover:bg-green-700'
                  } text-white focus:outline-none`}
                >
                  {item.title}
                </button>

                {expandedIndex === index && (
                  <div className="mt-2 ml-4">
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-sm !text-black mb-1">• {detail}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConductSection;
