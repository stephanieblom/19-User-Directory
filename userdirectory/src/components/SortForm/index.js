import React, {useState, useRef} from "react";

function Form( props ){
    
    const [mySort, setMySort] = useState()
    const selectSort = useRef();
        

    function handleInputChange( event ) {
                // setMySearch([]);
        console.log('[Handle input change]', event.target.value)
        // Getting the value and name of the input which triggered the change
        //const value = event.target.value;
        const { value } = event.target;
        console.log(`value: ${value}`)

        setMySort( value );
        
    };

    function handleFormSubmit( event ){
        // const foodRating = document.querySelector('#rating').value;
        event.preventDefault();
        console.log(`[Sort Employees]:`, selectSort.current.value )
        const value = selectSort.current.value;
        console.log(`value: ${value}`)
        setMySort( value );
        console.log( `[Sort] was just set to`, mySort)
        props.updateSort( mySort )
      }
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
        <div className='row'>
            <div className='col'>
                <form className="form">
                <label >Sort Employees by Hire Year: </label>
                <select onChange={handleInputChange} ref={selectSort} className="custom-select" id="rating">
                    <option>Ascending</option>
                    <option>Descending</option>

                </select>
                
                <button onClick={handleFormSubmit}>Filter</button>
            </form>

            </div>
        </div>
        );
    
}

export default Form;