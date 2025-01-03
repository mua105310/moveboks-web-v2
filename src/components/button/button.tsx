import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  path: string;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    const { path } = this.props;

    return (
      <div>
        <Link
          href={path}
          className="block bg-white p-3.5 text-black text-sm uppercase tracking-widest hover:text-white hover:bg-[var(--secondary)] transition-all duration-500 ease-in-out"
          aria-label="Lej SOUNDBOKS"
        >
          Lej SOUNDBOKS
        </Link>
      </div>
    );
  }
}
