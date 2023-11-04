import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './Navigation.scss';
// import axios from 'axios';
import tabs from '../../tabs.json';

export default function Navigation() {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  // const tabsLinks = JSON.parse(tabs);
  // const [error, setError] = useState(null);
  useEffect(() => {
    // setLoading(true);
    // axios
    //   .get(
    //     `${process.env.REACT_APP_API_DOMAIN}/${process.env.REACT_APP_API_KEY}`,
    //   )
    //   .then(({ data }) => {
    //     setLinks(
    //       data.record.tabs.sort((a, b) =>
    //         a.order > b.order ? 1 : b.order > a.order ? -1 : 0,
    //       ),
    //     );
    //   })
    //   .catch(error => setError(error))
    //   .finally(() => setLoading(false));
    setLinks(
      tabs.tabs.sort((a, b) =>
        a.order > b.order ? 1 : b.order > a.order ? -1 : 0,
      ),
    );
  }, []);
  return (
    <>
      {loading ? (
        <p>Loading…</p>
      ) : (
        <ul className="Navigation">
          <li className="Navigation__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'NavLink NavLink__active' : 'NavLink'
              }
            >
              Home Page
            </NavLink>
          </li>
          {links.map(link => (
            <li key={link.id} className="Navigation__item">
              <NavLink
                to={`/${link.id}`}
                className={({ isActive }) =>
                  isActive ? 'NavLink NavLink__active' : 'NavLink'
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

Navigation.propTypes = {
  //   imageData: PropTypes.shape.isRequired,
};
