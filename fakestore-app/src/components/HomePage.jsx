import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function HomePage() {

  return (
    <Container>
        <Row>
          <Col>
            <div>
            <h1>Welcome to FakeStoreApp</h1>
            <p>This is a simple React application that demonstrates the use of Vite and React together.</p>
            </div>
      
            <div className="card">
            <Button onClick={() => window.location.href = 'components/ProductListing'} className="card">
            Shop
            </Button>
            </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage