function DCForm(props){
  return (
    <div>
      <p>Update view:</p>
      <form onSubmit={props.changeView}>
        <input type="text" name="view" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default DCForm;
