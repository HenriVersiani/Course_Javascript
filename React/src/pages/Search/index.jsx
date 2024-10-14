import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchSearch } from "../../services/fetchApi";
import Loading from "../../components/Loading";
import './search.css'

export function Search(){

const params = useParams();

const[data, setData] = useState([])
const[value, setValue] = useState(10)
const[buttonValue, setButtonValue] = useState(null)

useEffect(()=>{

async function getResult() {
    const result = await fetchSearch(params)
    setData(result.results)
}

getResult()

},[])

function handleClick(){
    setValue(value + 10)

    console.log(data)
    console.log(data.length)
    console.log(value)  
    
    disableButton()
}

function disableButton(){
    if(value + 10 >= data.length){
        console.log('sumir com a bomba do botao')
        setButtonValue(true) 
 }
}


    return(
        <>
        <h1>Search</h1>
        {data ? data.map((element)=>(
            <div className="card">
            <img src={element.thumbnail} alt="" />
            <h2 className="nome-produto" >{element.title}</h2>
            <h3>R${element.price}</h3>
          </div>
        )).slice(0,value) : <Loading/> }
            <button  className="more-button" hidden={buttonValue} onClick={handleClick}>More...</button>
        </>
    )
} 