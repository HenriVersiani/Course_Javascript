import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchSearch } from "../../services/fetchApi";
import Loading from "../../components/Loading";

export function Search(){

const params = useParams();

const[data, setData] = useState(null)
const[value, setValue] = useState(10)

useEffect(()=>{

async function getResult() {
    const result = await fetchSearch(params)
    setData(result.results)
    console.log('dados:',result.results)
}

getResult()

},[])

function handleClick(){
    setValue(value + 10)
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
            <button onClick={handleClick}>More...</button>
        </>
    )
} 