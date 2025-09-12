import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <img className='h-[32px]' src="/logo.png" />,
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
    ],
  };
}
