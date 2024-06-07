export function Post(props) {
  return (
    <>
      <p>{props.content}</p>
      <small>{props.author}</small>
    </>
  )
}