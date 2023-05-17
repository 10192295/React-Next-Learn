import { Button, Card, Input, Row } from "antd";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
    function handleClick() {
      router.push('/')
    }
    return (
      <div className="main-page">
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
    )
}
