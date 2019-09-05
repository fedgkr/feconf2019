import React, {CSSProperties} from 'react';
import css from './HoverButton.scss';
import cc from "classcat";

interface HoverButtonProps {
  title: string;
  style?: CSSProperties;
  filled?: boolean;
  width?: number | string;
  href?: string;
  onClick?: () => void;
}

const HoverButton: React.FC<HoverButtonProps> = ({
  title = '',
  filled = true,
  width = 300,
  href = '#',
  style = {},
  onClick = () => null,
}) => {
  return (
    <a
      href={href}
      className={cc([css.HoverButton, 'kr-text', filled ? css.filled : ''])}
      style={{ ...style, width }}
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      <span>{title}</span>
      <span className="extended">{title}</span>
    </a>
  );
}

export default HoverButton;
