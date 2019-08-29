import React, {CSSProperties} from 'react';
import css from './HoverButton.scss';
import cc from "classcat";

interface HoverButtonProps {
  title: string;
  style?: CSSProperties;
  filled?: boolean;
  width?: number;
  href?: string;
}

const HoverButton: React.FC<HoverButtonProps> = ({
  title = '',
  filled = true,
  width = 300,
  href = '#',
  style = {},
}) => {
  return (
    <a
      href={href}
      className={cc([css.HoverButton, 'kr-text', filled ? css.filled : ''])}
      style={{ ...style, width }}
    >
      {title}
      <div className="extended"/>
    </a>
  );
}

export default HoverButton;
