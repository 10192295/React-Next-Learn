import PrimaryLayout from '@/components/layout/primary/PrimaryLayout';
// import { useRouter } from 'next/router'
import { NextPageWithLayout } from './page';
import Carouse from '@/components/Carouse';

export async function getStaticProps() {
  const db = process.env.LOCALHOST;
  console.log(db);
  return {
    props: {}, // will be passed to the page component as props
  };
}

const Home: NextPageWithLayout = () => {
  // const router = useRouter()
  // function handleClick() {
  //   router.push('/menu')
  // }
  return (
    <div className="main-page">
      <Carouse />
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
