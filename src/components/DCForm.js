
function DCForm(props){
  return (
    <div>
      <p>Update view:</p>
      <form onSubmit={props.changeView}>
        <input type="text" name="user" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default DCForm;
