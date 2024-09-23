import React from 'react';

// Example workshops data
const workshops = [
  {
    title: 'Introduction to React',
    date: '2024-05-15',
    instructor: 'Bob Smith',
    description: 'Learn the basics of React.js and build your first application.',
  },
  {
    title: 'Advanced JavaScript',
    date: '2024-06-10',
    instructor: 'Carol Lee',
    description: 'Deep dive into advanced JavaScript concepts and patterns.',
  },
  {
    title: 'Web Design Fundamentals',
    date: '2024-07-20',
    instructor: 'Alice Johnson',
    description: 'Understand the principles of effective web design and user experience.',
  },
  // Add more workshops as needed
];

function Workshops() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Upcoming Workshops</h2>
      <div className="space-y-6">
        {workshops.map((workshop, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold">{workshop.title}</h3>
            <p className="text-gray-600">Date: {new Date(workshop.date).toLocaleDateString()}</p>
            <p className="text-gray-600">Instructor: {workshop.instructor}</p>
            <p className="mt-2 text-gray-700">{workshop.description}</p>
            <div className="mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workshops;