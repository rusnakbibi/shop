import { SignUpFormComponent, SignInFormComponent } from '../../components';

import styles from './Authentication.module.scss';

const Authentication = () => {
  return (
    <div className={styles.authenticationContainer}>
      <SignInFormComponent />
      <SignUpFormComponent />
    </div>
  );
};

export default Authentication;
