import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';

const sidebarItems = [
  { text: 'NOW PLAYING', icon: 'play', link: '/player' },
  { text: 'SERIES', icon: 'desktop', link: '/series' },
  { text: 'SEASONS', icon: 'calendar', link: '/seasons' },
  { text: 'PLAYLISTS', icon: 'th-list', link: '/playlists' }
];
const sidebarLogo = { image: '/public/img/raji-logo.svg', text: 'Raji' };
const user = { avatar: '/public/img/user-avatar.jpg', username: 'yayu' };


const App = ({children}) =>
  <div className="container">
    <Sidebar items={sidebarItems} logo={sidebarLogo} user={user} />
    {children}
    <div className="Content-blocker"></div>
  </div>
;


export default App;
