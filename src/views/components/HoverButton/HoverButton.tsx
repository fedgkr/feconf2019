import React, {CSSProperties} from 'react';
import css from './HoverButton.scss';
import cc from "classcat";

interface HoverButtonProps {
  title: string;
  style?: CSSProperties;
  filled?: boolean;
  width?: number | string;
  target?: string;
  href?: string;
  onClick?: () => void;
}

const HoverButton: React.FC<HoverButtonProps> = ({
  title = '',
  target = '_self',
  filled = true,
  width = 300,
  href = '#',
  style = {},
  onClick = () => null,
}) => {
  return (
    <a
      target={target}
      href={href}
      className={cc([css.HoverButton, 'kr-text', filled ? css.filled : ''])}
      style={{ ...style, width }}
      onClick={e => {
        if (href === '#') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <span>{title}</span>
      <span>{title}</span>
    </a>
  );
}

export default HoverButton;
