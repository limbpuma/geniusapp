import { SignIn } from "@clerk/nextjs";


const SignInpage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
    <SignIn/>
    </div>
  )
}

export default SignInpage