const FilterBy = ({ setFilterBy }) => {
  const onChange = (event) => {
    setFilterBy(event.target.value);
  };

  return (
    <>
      <div className="filterBy">
        <label htmlFor="category">Filter by</label>
        <select id="category" onChange={onChange}>
          <option value="all">All</option>
          <option value="Accessories">Accessories</option>
          <option value="Costumes">Costumes</option>
        </select>
      </div>
    </>
  );
};

export default FilterBy;
