import { useState } from "react"

interface ButtonProps {
  type: 'submit'
  text: string
}

const Button = (props: ButtonProps) => {
	const {type, text} = props

	const [buttonText, setButtonText] = useState(text)
	const [className, setClassName] = useState('')

	const onClickHandler = () => {
		setButtonText('Button clicked!')
		setClassName('btn-info')
	}

	return (
		<div>
			<button type={type} onClick={onClickHandler} className={className}>{buttonText}</button>
		</div>
	)
}

export default Button;