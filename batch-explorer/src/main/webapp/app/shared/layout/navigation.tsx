import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {IconDatabase, IconHome, IconNetwork} from '@tabler/icons-react';

const NavLink = ({to, children, icon}: any) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = location.pathname === to;

  const activeClass = isActive ? 'text-indigo-500 border-b-2 border-b-indigo-500' : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-500 hover:border-b-indigo-500 hover:border-b-2';

  return (
      <li className="me-2" role="presentation">
        <button className={`p-4 rounded-t-lg flex focus:ring-0 hover:cursor-pointer ${activeClass}`}
                tabIndex={-1}
                id="profile-styled-tab"
                type="button" role="tab" aria-controls="profile"
                aria-selected="false"
                onClick={() => navigate(to)}
        >
          <span className="mr-2" aria-hidden="true">
            {icon}
          </span>
          {children}
        </button>
      </li>
  );
};

const Navigation = () => {

  return (
      <div className="mb-4 border-b border-gray-300">
        <ul className="flex flex-wrap -mb-px m-0 text-sm font-medium text-center"
            id="default-styled-tab">
          <NavLink to="/" icon={<IconHome/>}>
            Home
          </NavLink>
          <NavLink to="/batch-socket" icon={<IconNetwork/>}>
            Batch Socket
          </NavLink>
          <NavLink to="/entities/datasource" icon={<IconDatabase/>}>
            Datasource
          </NavLink>
        </ul>
      </div>
  )
};

export default Navigation;
