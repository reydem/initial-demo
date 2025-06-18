import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: '5px',
      padding: '10px',
    }}>
      <div>
        {children}
      </div>
    </div>
  );
};