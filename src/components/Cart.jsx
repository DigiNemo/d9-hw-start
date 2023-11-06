import { Col, Row, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
  const cart = useSelector((state) => state.cart.content)
  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {cart.map((comapny, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: i,
                  })
                }}
              >
              </Button>
              {comapny.title}
            </li>
          ))}
        </ul>
      </Col>
    </Row>
)}

export default Cart