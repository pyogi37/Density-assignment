import React, { useState, useEffect } from 'react';

const VerticalListWithHighlight = ({ children }) => {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const listItems = document.querySelectorAll('li');
      const listItemOffsets = Array.from(listItems).map((item) =>
        item.getBoundingClientRect().top
      );

      // Find the index of the most visible list item
      const currentIndex = listItemOffsets.findIndex(
        (offset) => offset > 0 && offset < window.innerHeight / 2
      );

      setHighlightedIndex(currentIndex);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check for highlighted item
    handleScroll();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ul className="list-none p-0">
      {React.Children.map(children, (child, index) => {
        const isHighlighted = index === highlightedIndex;

        return (
          <li
            className={`py-2 ${isHighlighted ? 'bg-yellow-200' : ''}`}
            key={index}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
};

export default VerticalListWithHighlight;
