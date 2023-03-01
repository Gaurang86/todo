import React from 'react'
import Input from '../../Components/Input'
import { Formik, Form } from 'formik'
import { SignUpStyle } from './style'
import { SignUpAction } from '../../redux/SignUp/action'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const singUpValidation = Yup.object().shape({
    email: Yup.string().email().required('Please Enter your Email'),
    password: Yup.string()
      .max(19, 'invalid')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Password Should have 1 UpperCase, 1 Number, 1 Special character and atleast length of 8.',
      )
      .required('Please Enter Password'),
  })
  const signUpData = {
    email: '',
    password: '',
  }
  const onSubmit = (values, actions) => {
    dispatch(SignUpAction(values))
    actions.resetForm()
    navigate('/signin')
    console.log(values)
  }

  return (
    <SignUpStyle>
      <div className="Formik">
        <label className="title">SignUp</label>
        <Formik
          initialValues={signUpData}
          validationSchema={singUpValidation}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form>
              <Input
                name="email"
                className="SingUpInput"
                placeholder={'Email'}
                onChange={handleChange}
                values={values.email}
                error={touched.email && errors.email}
              />
              <Input
                name="password"
                className="SingUpInput"
                placeholder={'Password'}
                onChange={handleChange}
                values={values.password}
                error={touched.password && errors.password}
              />
              <button className="sbtn" type="submit">
                SignUp
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </SignUpStyle>
  )
}

export default SignUp
