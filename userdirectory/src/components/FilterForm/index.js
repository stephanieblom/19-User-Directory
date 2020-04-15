import React, {useState, useRef} from "react";

function Form( props ){
    
    const [mySearch, setMySearch] = useState()
    const selectLocation = useRef();
        

    function handleInputChange( event ) {
        console.log('[Handle input change]', event.target.value)
        // Getting the value and name of the input which triggered the change
        //const value = event.target.value;
        const { value } = event.target;
        console.log(`value: ${value}`)

        setMySearch( value );
        
    };

    function handleFormSubmit( event ){
        // const foodRating = document.querySelector('#rating').value;
        event.preventDefault();
        console.log(`[ChangeRating]:`, selectLocation.current.value )
        const value = selectLocation.current.value;
        console.log(`value: ${value}`)
        setMySearch( value );
        console.log( `[mySearch] was just set to`, mySearch)
        props.updateSearch( mySearch )
        setMySearch([]);
      }

    // function handleFormSubmit( event ){
    //     // Preventing the default behavior of the form submit (which is to refresh the page)
    //     event.preventDefault();
    //     console.log(`calling update search with ${mySearch}`)
    //     props.updateSearch( mySearch )
    
    //     setMySearch("");
    // };
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
        <div className='row'>
            <div className='col'>
                <form className="form">
                <label >Select Location: </label>
                <select onChange={handleInputChange} ref={selectLocation} className="custom-select" id="rating">
                    <option>All</option>
                    <option>Krusty Krab</option>
                    <option>A Secret Laboratory</option>
                    <option>Nowhere</option>
                    <option>A Rabbit Burrow</option>
                    <option>Bluffington</option>
                    <option>Aron City</option>
                    <option>California</option>
                    <option>Earth</option>
                    <option>Under a City Dump</option>

                </select>
                
                <button onClick={handleFormSubmit}>Filter</button>
            </form>

            </div>
        </div>
        );
    
}

export default Form;
