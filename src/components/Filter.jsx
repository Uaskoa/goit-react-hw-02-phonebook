const Filter = ({ value, onChange }) => (
  <>
    <h3>Find contacts by name</h3>
        <input type="text" value={value} name="filter" onChange={onChange}></input>
         </>
);

export default Filter;
