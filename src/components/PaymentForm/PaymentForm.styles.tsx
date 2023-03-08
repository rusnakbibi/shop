import styled from 'styled-components';
import { ButtonComponent } from '..';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 55%;
  width: 100%;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  width: 100%;
`;

export const PaymentButton = styled(ButtonComponent)`
  margin-left: auto;
  margin-top: 30px;
`;
