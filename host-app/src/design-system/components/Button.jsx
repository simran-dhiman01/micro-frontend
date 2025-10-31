import { theme } from '../theme';

export const Button = ({ children }) => (
  <button
    className="px-5 py-2 rounded-lg text-white font-medium"
    style={{
      background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
      fontFamily: theme.font.family,
    }} >
    {children}
  </button>
);
