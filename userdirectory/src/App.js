import React, { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import FilterForm from "./components/FilterForm";
import SortForm from "./components/SortForm";
import employees from "./friends.json";
import "./App.css";

// FUNCTION COMPONENT
function App() {
  const [ employeeList, setEmployeeList ]= useState( [] );
  //const [ employeeList, setEmployeeList ]= useState( [] );

  // useEffect(
  //   function(){
  //     console.log( `[useEffect] was run` );
  //     if( employeeList.length < 1 ){
  //       loadEmployees( employees );
  //     }
  //   }
  // );

  // async function loadFriends( search ){
  //   //const query = "kittens";
  //   const loadUrl = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&limit=20`;
  //   const giffyList = await fetch(loadUrl).then( result=>result.json() );
  //   let simpleList = [];
  //   giffyList.data.forEach( item =>{ simpleList.push( { id: item.id, title: item.title, image: item.images.downsized.url } ) } );
  //   console.log( simpleList );
  //   setFriendsList( simpleList );
  // }

 
  async function loadEmployees( search ){
    const employeeArray = employees;
    if(search === "All"){
      console.log(`employeeList`, employeeList)
      console.log(`Displaying all employees`)
      setEmployeeList(employeeArray)
    }else{
      console.log(`employeeList`, employeeList)
      console.log(`Filtering by location ${search} `)
      let filterList = employeeArray.filter(employee => employee.location === search);
      console.log(`[filterList]`, filterList);
      setEmployeeList( filterList );
    }
  
  }

  async function loadEmployeesSort( sort ){
    const employeeArray = employees;

    if( sort === "Ascending"){
      employeeArray.sort(function(a, b){return a.startYear - b.startYear});
      console.log(`Sorted Array Ascending`)
    }else{
      employeeArray.sort(function(a, b){return b.startYear - a.startYear});
      console.log(`Sorted Array Descending`)
    }

      console.log(`employeeList`, employeeArray)
      console.log(`[filterList]`, employeeArray);
      setEmployeeList( employeeArray );
  
  }

  function updateSearch( search ){

    //setEmployeeList( employeeArray )
    console.log(`[updated search] search ${search}`);
    loadEmployees( search );
  }

  function updateSort( sort ){
    console.log(`[updated sort] sort: ${sort}`);
    loadEmployeesSort( sort );
  }

  return (
    <Wrapper>
      <h1 className="title">Employee List</h1>
      <div className="row">
        <FilterForm updateSearch={updateSearch} />
        <SortForm updateSort={updateSort} />
      </div>
      <div className="row">
        {employeeList.map( employee=><EmployeeCard {...employee} />)}
      </div>
    </Wrapper>
      
  );
}
export default App;
