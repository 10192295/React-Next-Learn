import PrimaryLayout from '@/components/layout/primary/PrimaryLayout';
import SidebarLayout from '@/components/layout/sidebar/SidebarLayout';
import { mockSidebarLayoutProps } from '@/components/layout/sidebar/SidebarLayout.mocks';
import { NextPageWithLayout } from '../page';

const Menu: NextPageWithLayout = () => {
return (
  <section>
    <h2>Layout Example (Menu)</h2>
  </section>
);
};

export default Menu;

Menu.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout {...mockSidebarLayoutProps.base} />
      {page}
    </PrimaryLayout>
  );
};