import React from 'react';

const teamMembers = [
  { name: "John Doe", role: "Founder & CEO" },
  { name: "Jane Smith", role: "Head of Operations" },
  { name: "Mike Johnson", role: "Customer Experience Manager" },
];

const values = [
  { title: "Quality", description: "We never compromise on the quality of our products" },
  { title: "Integrity", description: "Honest and transparent in all our dealings" },
  { title: "Innovation", description: "Constantly evolving to serve you better" },
];

const AboutPage = () => {
  return (
    <div className="container bg-transparent mx-auto px-4 py-8">
      
      {/* Mission Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <p className="text-lg text-gray-700 text-center">
            At Zoya Store, we strive to provide our customers with the finest selection of products while ensuring 
            a seamless shopping experience. Our commitment to quality and customer satisfaction drives everything we do.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center p-6 bg-white shadow-lg rounded-lg">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div>
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
