import data from '../data/tabs.json';

import { Link } from 'react-router-dom';

const tabStyle = {
  border: '2px solid black',
  padding: 20,
  margin: 10,
};

const tabsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  borderBottom: '2px solid black',
};

const linkStyle = {
  color: 'black',
  outline: 'none',
  textDecoration: 'none',
  margin: 10,
  padding: 20,
};

const AllTabs = () => {
  const sortedTabs = data.sort((a, b) => a.order - b.order);

  return (
    <div style={tabsContainerStyle}>
      {sortedTabs.map((tab) => {
        return (
          <div key={tab.id} style={tabStyle}>
            <Link style={linkStyle} to={tab.id}>
              {tab.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllTabs;
