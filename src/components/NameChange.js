
function NameChange(props){
  return (
    <div>
      <p>Update username:</p>
      <form onSubmit={props.changeUser}>
        <input type="text" name="user" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default NameChange;
