import { NextPageWithLayout } from '../page';
import PrimaryLayout from '@/components/layout/primary/PrimaryLayout';
import SidebarLayout from '@/components/layout/sidebar/SidebarLayout';
import { mockSidebarLayoutProps } from '@/components/layout/sidebar/SidebarLayout.mocks';

const About: NextPageWithLayout = () => {
  return (
    <>
      <div>About</div>
    </>
  );
};

export default About;

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout {...mockSidebarLayoutProps.base} />
      {page}
    </PrimaryLayout>
  );
};
