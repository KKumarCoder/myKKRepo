import React from 'react';

const CustomerStories = () => {
  const stories = [
    {
      type: 'Consulted for Skin',
      name: 'Sophie Moore',
      location: 'Chennai',
      date: '17/02/24',
      rating: 5,
      feedback: 'One of a kind service',
    },
    {
      type: 'Consulted for Hair',
      name: 'Sophie Moore',
      location: 'Mumbai',
      date: '17/02/24',
      rating: 5,
      feedback: 'One of a kind service',
    },
    {
      type: 'Consulted for Hair',
      name: 'Sophie Moore',
      location: 'Chennai',
      date: '17/02/24',
      rating: 5,
      feedback: 'One of a kind service',
    },
  ];

  return (
    <div className="bg-amber-50 py-8 px-4 md:px-8">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-green-800 mb-6">
        Stories from our valued customers!
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
        {stories.map((story, index) => (
          <div
            key={index}
            className="max-w-xs md:max-w-sm bg-white shadow-lg rounded-lg border-t-4"
          >
            {/* Card Top Background */}
            <div
              className={`py-2 px-4 rounded-t-lg ${
                story.type.includes('Skin') ? 'bg-purple-100' : 'bg-green-100'
              }`}
            >
              <span className="text-black text-sm font-semibold">
                {story.type}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-bold text-gray-700">{story.name}</h4>
                  <p className="text-sm text-gray-500">{story.location}</p>
                </div>
                <div className="ml-auto text-sm text-gray-400">{story.date}</div>
              </div>

              {/* Rating */}
              <div className="flex mb-2">
                {Array.from({ length: story.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Feedback */}
              <h3 className="font-semibold italic text-gray-800 mb-2">
                “{story.feedback}”
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
                diam sit amet nisl suscipit adipiscing.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {stories.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === 0 ? 'bg-green-600' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CustomerStories;
