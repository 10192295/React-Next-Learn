
import { Button, Card } from "antd";
import { useRouter } from 'next/router'

export async function getStaticProps() {
  const db = process.env.LOCALHOST;
  console.log(db);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Home() {
  const router = useRouter()
  function handleClick() {
    router.push('/menu')
  }
  return (
    <div className="main-page">
      <Card>
      <Button onClick={handleClick}>Login in</Button>
      </Card>
    </div>
  )
}
