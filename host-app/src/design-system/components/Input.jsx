import React from 'react';
import { theme } from '../theme';

export const Input = ({ value, onChange, placeholder, type = 'text', className = '' }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={` ${className} w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 `}
            style={{
                borderColor: theme.colors.border,
                backgroundColor: theme.colors.surface,
                color: theme.colors.textPrimary,
                fontFamily: theme.font.family,
         }}/>
    );
};
