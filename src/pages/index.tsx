import PrimaryLayout from '@/components/layout/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import Carouse from '@/components/layout/carousel/Carouse';

export async function getStaticProps() {
  const db = process.env.LOCALHOST;
  console.log(db);
  return {
    props: {}, // will be passed to the page component as props
  };
}

const Home: NextPageWithLayout = () => {
  return (
    <div style={{cursor: 'pointer'}}>
      <Carouse isPageLink={true} />
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
