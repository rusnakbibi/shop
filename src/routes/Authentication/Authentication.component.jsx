import { SignUpFormComponent, SignInFormComponent } from '../../components';

import { AuthenticationContainer } from './Authentication.module.jsx';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInFormComponent />
      <SignUpFormComponent />
    </AuthenticationContainer>
  );
};

export default Authentication;
