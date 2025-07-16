import "./Button.css"


const Button = ({id, text}) => {
    const handleAction = (e) => {
        action(e)
    }

  return (
    <button id={id} onClick={handleAction}>{text}</button>
  )
}

export default Button