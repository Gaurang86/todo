/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import Input from '../../Components/Input'
import * as Yup from 'yup'
import { SingInStyle } from './style'
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
  const navigate = useNavigate()
  const singupData = useSelector((data) => data.SignUpReducer)

  const singInValidation = Yup.object().shape({})
  const signInData = {
    email: '',
    password: '',
  }
  const onSubmit = (values) => {
    if (
      singupData?.findIndex(
        (list) =>
          list.email === values.email && list.password === values.password,
      ) > -1
    ) {
      navigate('/todolist')
    } else {
      alert('Please Check you email and password')
      navigate('/')
    }
  }
  const login = singupData?.findIndex((x) => x.email && x.password) > -1
  useEffect(() => {
    if (login) {
      navigate('/signin')
    } else {
      navigate('/')
    }
  }, [])

  return (
    <SingInStyle>
      <div className="Formik">
        <label className="title">SignIn</label>
        <Formik
          initialValues={signInData}
          validationSchema={singInValidation}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form>
              <Input
                name="email"
                className="SingUp_Input"
                placeholder={'Email'}
                onChange={handleChange}
                values={values.email}
                error={touched.email && errors.email}
              />
              <Input
                name="password"
                type="password"
                className="SingUp_Input"
                placeholder={'Password'}
                onChange={handleChange}
                values={values.password}
                error={touched.password && errors.password}
              />
              <button className="sbtn" type="submit">
                SignIn
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </SingInStyle>
  )
}

export default SignIn
