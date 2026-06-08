import React from 'react';

const PageNotFound = () => {
  return (
    <div>
      <div
          className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert">
        The page does not exist. Please check the URL in the address bar and try again.
      </div>
    </div>
  );
};

export default PageNotFound;
