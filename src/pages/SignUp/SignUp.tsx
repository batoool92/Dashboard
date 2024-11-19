import Form from "../../components/Form/Form"

const SignUp = () => {
 
  const inputs: {
    label: string,
    type: string,
    placeholder: string,
    name: string
  } [] = [
    {
      label: 'First Name',
      type: 'text',
      placeholder: "First Name",
      name: 'first_name'
    },
    {
      label: 'Last Name',
      type: 'text',
      placeholder: "Last Name",
      name: 'last_name' 
    },
    {
      label: 'User Name',
      type: 'text',
      placeholder: "User Name",
      name: 'user_name'
    },
    {
      label: 'Email Adress:',
      type: 'email',
      placeholder: "example@gmail.com",
      name: 'email'
    },
    {
      label: 'Password:',
      type: 'password',
      placeholder: "Password",
      name: 'password'
    },
    {
      label: 'Confirmation Password:',
      type: 'Confirmation Password',
      placeholder: "Password",
      name: 'password_confirmation'
    },
    {
      label: 'personal image',
      type: 'file',
      placeholder: " ",
      name: 'profile_image'
    },
      
  ]
  return (
    <div className="">
      <Form title="Create an Account"
      desc="Create an account to continue"
      inputs={inputs}
      btn="SignUp"
      end="Already have an account? Log in"
      URL="https://vica.website/api/register" />
    </div>
  )
}

export default SignUp