import PrimaryLayout from '@/components/layout/primary/PrimaryLayout';
import { Button, Card, Input, Row } from 'antd';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../page';
import styles from './Login.module.css'

const Login: NextPageWithLayout = () => {
  const router = useRouter();
  function handleClick() {
    router.push('/menu');
  }
  return (
    <div className={styles.page}>
      <Card style={{ width: 600, height: 600 }}>
        <Row justify={'center'} className="form-row">
          <Input name="accountInput" className="normal-input" />
        </Row>
        <Row justify={'center'} className="form-row">
          <Input.Password name="pswInput" className="normal-input" />
        </Row>
        <Button onClick={handleClick}>Login in</Button>
      </Card>
    </div>
  );
}

export default Login

Login.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};