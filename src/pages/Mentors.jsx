import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Mentors = () => {
    const teamMembers = [
        {
          id: 1,
          name: 'Aarav Sharma',
          designation: 'Founder & CEO',
          image: 'https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?t=st=1732546479~exp=1732550079~hmac=84443d62626bb265d35fe595baa17247ebcb9dd90e08f183fcb827c35acb2139&w=1380',
        },
        {
          id: 2,
          name: 'Isha Gupta',
          designation: 'Chief Technology Officer',
          image: 'https://img.freepik.com/free-photo/front-view-girl-wearing-crown-concept_23-2148693179.jpg?t=st=1732546287~exp=1732549887~hmac=f81eb99a61d5ce8075e98e149e63e70fa06a460b1c9b9ad4c957038a7027863c&w=1380',
        },
        {
          id: 3,
          name: 'Rohan Mehta',
          designation: 'Project Manager',
          image: 'https://img.freepik.com/free-photo/businessman-black-suit-buttoning-his-blazer_114579-15883.jpg?t=st=1732546516~exp=1732550116~hmac=f94bf4bfde8ce9d1672269427369b76a7df3318716d57bbf940a6610465c52d6&w=2000',
        },
        {
          id: 4,
          name: 'Priya Kapoor',
          designation: 'UI/UX Designer',
          image: 'https://img.freepik.com/free-photo/brunette-businesswoman-posing_23-2148142767.jpg?t=st=1732546422~exp=1732550022~hmac=da72e3e08e041846c7d12f394ea51f674645037f74dcb98720f0b87d8375f4e2&w=1380',
        },
      ];
  return (
    <div className="bg-gray-50 py-10">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
      <div className="flex flex-nowrap justify-center gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="team-card w-full sm:w-[calc(100%/2)] md:w-[calc(100%/4)] p-4"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4 text-white">
                    <a href="#" className="hover:text-blue-500">
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                    <a href="#" className="hover:text-blue-400">
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href="#" className="hover:text-blue-700">
                      <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-500">{member.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Mentors