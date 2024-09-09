import React from 'react';

// Define the type for props
interface QuoteBoxProps {
  quote: string;
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ quote }) => {
  // Define the background image URL (replace 'url-to-your-image.jpg' with your actual image URL)
  const backgroundImageUrl = ''; // Replace with your image URL

  return (
    <div 
      className="relative bg-gray-200 shadow-lg rounded-lg p-6 m-4 transition-shadow duration-300 ease-in-out hover:shadow-xl"
      style={{ 
        backgroundImage: `url(${backgroundImageUrl})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)' }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '' }}
    >
      <p className="text-black text-lg mb-4">{quote}</p>
      <p className="text-gray-700 text-right">- Vishwaguru Basavana</p>
    </div>
  );
};

export default QuoteBox;
