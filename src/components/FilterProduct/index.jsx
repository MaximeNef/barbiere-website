import Container from "../shared/container";

const FilterProduct = (props) => {
  function onFilterValueChanged(event) {
    props.filterValueSelected(event.target.value);
  }
  function onPostalValueChanged(event) {
    props.postalValueSelected(event.target.value);
  }
  const newTodos = [];
  const handleAdd = (page) => {
    const newTodos = [...pages];
    newTodos.push(page.data.slices[0].primary.code_postal);
    setTodos(newTodos);
  };

  return (
    <Container className=' py-5 rounded-[20px] space-y-4 my-4 md:w-full mb-5 '>
      <p className=' text-[20px] md:text-[24px] font-medium leading-[25px] text-left flex flex-col  justify-center '>
        Trier par
      </p>
      <Container className='md:flex-row md:w-full md:space-x-4 space-y-5 md:space-y-0'>
        <Container className='md:w-full'>
          <select
            name='isAvailable'
            onChange={onFilterValueChanged}
            placeholder={"placeholder"}
            className='rounded-[10px] h-10 drop-shadow-xl bg-white outline-0 px-2'
          >
            <option value='all' className='text-white'>
              Types de biens
            </option>

            <option value='maison'>Maison</option>
            <option value='appartement'>Appartement</option>
            <option value='terrain'>Terrain</option>
            <option value='bureaux'>Bureaux</option>
            <option value='garage'>Garage</option>
            <option value='entrepot'>Entrepôt</option>
            <option value='immeuble mixte'>Immeuble mixte</option>
            <option value='ferme'>Ferme</option>
            <option value='commerce'>Commerce</option>
          </select>
        </Container>
        <Container className='md:w-full'>
          <select
            name='isAvailable'
            onChange={onPostalValueChanged}
            className='rounded-[10px] h-10 drop-shadow-xl bg-white outline-0 px-2'
          >
            {" "}
            <option value='all'>{"Localisation (code postal)"}</option>{" "}
            {props.withoutDuplicates.map((codePostal, i) => {
              return (
                <option key={i} value={codePostal}>
                  {codePostal}
                </option>
              );
            })}
          </select>
        </Container>{" "}
      </Container>
    </Container>
  );
};
export default FilterProduct;
