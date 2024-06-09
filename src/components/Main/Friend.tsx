import React from 'react';

interface FriendProps {
  src: string;
  alt: string;
  className?: string; // className is optional
}

const Friend: React.FC<FriendProps> = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
);

export default Friend;