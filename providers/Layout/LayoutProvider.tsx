import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { MainLayout } from 'layouts';

interface LayoutProviderProps {
  children: React.ReactNode;
}

const LayoutProvider: FC<LayoutProviderProps> = ({
  children,
}): React.ReactElement => {
  const { pathname } = useRouter();

  // If you want to use a different configuration of the layout, 
  // please add a condition for your new page here
  // e.g if (/^\/yourroute/.test(pathname))

  // Home page
  if (/^\//.test(pathname)) {
    return <MainLayout withFooter>{children}</MainLayout>;
  }

  // Rest of the pages
  return <MainLayout>{children}</MainLayout>;
};

export default LayoutProvider;
