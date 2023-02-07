import { useState, useContext } from 'react';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils';
import { UserContext } from '../../context';

import { FormInputComponent, ButtonComponent } from '..';

import styles from './SignInForm.module.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          alert('Something went wrong');
          break;
        default:
          console.log(error);
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('User with this email not found');
          break;
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className={styles.signInContainer}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInputComponent
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInputComponent
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className={styles.buttonsContainer}>
          <ButtonComponent type='submit'>Sign In</ButtonComponent>
          <ButtonComponent
            buttonType='google'
            onClick={signInWithGoogle}
            type='button'
          >
            Google sign In
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
