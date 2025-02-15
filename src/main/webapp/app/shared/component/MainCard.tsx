import React from 'react';

const MainCard = ({children}: any) => {
  return (
      <div
          className="p-3 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800">
        {children}
      </div>
  )
}

export default MainCard;