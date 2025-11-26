import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/vadidate"


const LogIn = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errMessage, setErrMessage] = useState("")

    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    const handleFormValidate = () => {

        const message = checkValidData(email.current.value, password.current.value, name.current.value)
        setErrMessage(message)

    }

    const toggleSignTitle = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="bg-cover "
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_small.jpg"
                    alt="bg-img" />
            </div>
            <form onSubmit={(e) => e.preventDefault()}
                className="absolute w-3/12 p-12  my-36 mx-auto right-0 left-0 text-white bg-black/80">
                <h1 className="text-3xl font-bold py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && <input
                    ref={name}
                    type="text"
                    placeholder="Enter Name"
                    className="p-4 my-4 w-full bg-gray-600" />}
                <input
                    type="text"
                    placeholder="Email address"
                    ref={email}
                    className="p-4 my-4 w-full bg-gray-600" />

                <input
                    type="Password"
                    ref={password}
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-600" />
                <p className="text-red-600 font-bold text-lg py-2">{errMessage}</p>

                <button
                    className="bg-red-600 text-white p-4 my-4 w-full"
                    onClick={handleFormValidate}>
                    {isSignInForm ? "Sign In" : "Sign Up"}

                </button>

                <h5 className="p-5 cursor-pointer " onClick={toggleSignTitle}>
                    {isSignInForm ? " New to Netfilx? Singn up now" : "Already registered? Sign in Now."}
                    .</h5>
            </form>
        </div>
    )
}
export default LogIn