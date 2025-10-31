import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { theme } from '../design-system/theme';

const Navbar = ({ onSelectApp }) => {
  return (
    <nav
      className="flex items-center justify-center px-6 py-3 shadow-md"
      style={{
        background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
        color: theme.colors.surface,
        fontFamily: theme.font.family,
      }} >
      <div className='flex items-center justify-between w-7xl'>
        {/* Logo */}
        <div className="text-xl font-semibold tracking-wide">
          Bluebash&nbsp;
          <span className="font-light">Connect</span>
        </div>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 hover:opacity-90 transition"
            onClick={() => onSelectApp('chat')}>
            <MessageCircle size={22} />
            <span className="hidden sm:inline font-semibold">Chat</span>
          </button>

          <button className="flex items-center gap-2 hover:opacity-90 transition"
            onClick={() => onSelectApp('email')}>
            <Mail size={22} />
            <span className="hidden sm:inline font-semibold">Email</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;