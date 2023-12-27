import { useContext, useState } from "react";

import { useHistory } from "react-router";

import { LoginContext } from "../login";
import { Modal } from '../../../components';


export const Step2 = () => {

  const history = useHistory();

  const { email } = useContext(LoginContext);

  const [open, setOpen] = useState(false);

  const [isError, setIsError] = useState(false);

  const handleCloseModal = () => setOpen(false);

  const handleBack = () => history.push("/login/step-1");

  const handleSubmit = () => {

    fetch("api/endpoint", {
      method: "POST",
      body: JSON.stringify({ email })
    })
      .then((res) => {
        setIsError(res.status > 300 ? true : false);
      })
      .catch(() => {
        console.log("Error");
        setIsError(true)
      })
      .finally(() => setOpen(true))
  }

  return (
    <>
      <div className="w-full h-full flex justify-end items-end">
        <div className="w-full flex gap-2.5 justify-between mt-2.5">
          <button className="w-[48%] btn btn-light" onClick={handleBack} >Back</button>
          <button className="w-[48%] btn btn-primary" onClick={handleSubmit}>Comfirm</button>
        </div>
      </div>

      <Modal isOpen={open} onClose={handleCloseModal} isError={isError} />

    </>
  )
}