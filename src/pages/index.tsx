import PictureCard from '@/components/cards/picture/PictureCard'
import { mockPictureCardProps } from '@/components/cards/picture/PictureCard.mocks';
import { mockSidebarLayoutProps } from '@/components/layout/sidebar/SidebarLayout.mocks';
import { NextPageWithLayout } from './page';
import PrimaryLayout from '@/components/layout/primary/PrimaryLayout';
import SidebarLayout from '@/components/layout/sidebar/SidebarLayout';

export async function getStaticProps() {
  const db = process.env.LOCALHOST
  console.log(db)
  return {
    props: {}, // will be passed to the page component as props
  }
}

const Home: NextPageWithLayout = () => {
  return (
    <section >
      <PictureCard {...mockPictureCardProps.base} />
    </section>
  );
};
export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout {...mockSidebarLayoutProps.base} />
      {page}
    </PrimaryLayout>
  );
};