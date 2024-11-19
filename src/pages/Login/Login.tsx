import Form from "../../components/Form/Form"


const Login = () => {
const inputs: {
  label: string,
  type: string,
  placeholder: string,
  name: string,
} [] = [
  {
    label: 'Email Adress:',
    type: 'email',
    placeholder: "example@gmail.com",
    name:'email'
  },
  {
    label: 'Password:',
    type: 'password',
    placeholder: "Password ",
    name:'password'
  }
    
]

  return (
    <div>
      <Form title="Login to Account"
      desc="Please enter your email and password to continue"
      inputs={inputs}
      btn='Sign in'
      end="Don't have an account? Create Account"
      URL="https://vica.website/api/login" />
    </div>
  )
}

export default Login