import { ChangeEvent, FC, useContext, useEffect, useState } from "react"

import { useHistory } from "react-router"

import { FormCheckbox } from "../../../components"
import { LoginContext } from "../login"



export const Step1: FC = () => {

  const history = useHistory();

  const { isValidEmail } = useContext(LoginContext);

  const [isValid, setIsValid] = useState(true);

  const [isAgree, setIsAgree] = useState(false);

  const [timer, setTimer] = useState(0);

  const [isPressed, setIsPressed] = useState(false);


  const handleChangeCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAgree(e.target.checked);
  }

  const handleMouseDown = () => setIsPressed(true);

  const handleMouseUp = () => setIsPressed(false);

  useEffect(() => {

    let timerId: NodeJS.Timeout;

    timerId = setInterval(() => {

      if (isPressed) {
        setTimer(prev => {
          if (prev === 500) {
            clearInterval(timerId);
            history.push("/login/step-2");
          }
          return prev + 1
        });

      } else {
        setTimer(prev => {
          if (prev === 0) clearInterval(timerId)
          return prev - 1
        });
      }

    }, 1)

    return () => clearInterval(timerId);

  }, [isPressed])


  useEffect(() => {
    setIsValid(isValidEmail && isAgree);
  }, [isValidEmail, isAgree])

  return (
    <>

      <div className="p-1"></div>
      <FormCheckbox checked={isAgree} onChange={handleChangeCheckBox} />
      <button
        className="btn btn-primary mt-auto"
        disabled={!isValid}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}

      >
        Hold to proceed
        {timer > 0 ? timer : null}
      </button>
    </>
  )
}