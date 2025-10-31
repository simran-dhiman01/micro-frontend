import React from 'react';
import { theme } from '../theme';

export const Card = ({ title, description, children, className = '',...props }) => {
  return (
    <div className={`p-5 rounded-xl shadow-md border bg-white ${className}`}
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        fontFamily: theme.font.family,
      }}
       {...props}>
      {title && (
        <h3 className="text-lg font-semibold mb-2 text-purple-700">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      )}
      {children}
    </div>
  );
};
