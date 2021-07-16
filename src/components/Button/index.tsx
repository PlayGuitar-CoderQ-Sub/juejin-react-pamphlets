import React from 'react';
import type { FC } from 'react';

interface ButtonProps {
  title: string;
}

const MimicryButton: FC<ButtonProps> = ({ title }) => {
  return <div>MimicryButton, {title}</div>;
};

export default MimicryButton;
