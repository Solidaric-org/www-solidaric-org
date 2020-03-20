import React from 'react';
import Scrollspy from 'react-scrollspy';

import Tab from './Tab';

const Sidebar = () => {
  const [tabs] = React.useState([
    { content: 'Willkommen', href: 'start' },
    { content: 'Solidaric', href: 'about' },
    { content: 'Was ist zu tun', href: 'contribute' },
    { content: 'Mitmachen', href: 'engage' },
    { content: 'Kontakt', href: 'contact' },
  ]);

  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
          >
            {tabs.map(tab => <Tab key={tab.href} {...tab} />)}
          </Scrollspy>
        </nav>
      </div>
    </section>
  );
}

export default Sidebar;
