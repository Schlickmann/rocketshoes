import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/87aa967b-de41-46bd-9e6d-8cd4aeb5910e/air-max-270-react-eng-shoe-KP30mK.jpg"
                alt=""
              />
            </td>
            <td>
              <strong>Nike Air Max 270</strong>
              <span>$150.5</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>$301.00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Check out</button>
        <Total>
          <span>TOTAL</span>
          <strong>$451.5</strong>
        </Total>
      </footer>
    </Container>
  );
}
