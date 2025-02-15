import React from 'react';

const MainCard = ({children}: any) => {
  return (
      <div className="p-3 border border-gray-200 rounded-md shadow-sm bg-white">
        {children}
      </div>
  )
}

export default MainCard;