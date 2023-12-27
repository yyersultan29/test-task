import { ChangeEvent, FC } from "react"

interface FormInputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const FormInput: FC<FormInputProps> = (props) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">Email</span>
      </div>
      <input type="email" {...props} placeholder="Type here" className="input" />
      {/* <div className="label">
              <span className="label-text-alt">Helper text</span>
          </div> */}
    </label>
  )
}