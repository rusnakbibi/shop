import { SignUpFormComponent, SignInFormComponent } from 'components';

import { AuthenticationContainer } from './Authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInFormComponent />
      <SignUpFormComponent />
    </AuthenticationContainer>
  );
};

export default Authentication;
