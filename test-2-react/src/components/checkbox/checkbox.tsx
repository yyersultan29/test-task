import { ChangeEvent, FC } from "react"

interface FormCheckboxProps {
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const FormCheckbox: FC<FormCheckboxProps> = (props) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer justify-start gap-2">
        <input {...props} type="checkbox" className="checkbox checkbox-primary" />
        <span className="label-text">I agree</span>
      </label>
    </div>
  )
}
