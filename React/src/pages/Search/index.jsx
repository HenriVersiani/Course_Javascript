import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchSearch } from "../../services/fetchApi";
import Loading from "../../components/Loading";
import './search.css'

export function Search() {

    const params = useParams();

    const [data, setData] = useState([])
    const [value, setValue] = useState(10)
    const [buttonValue, setButtonValue] = useState(false)

    useEffect(() => {

        async function getResult() {
            const result = await fetchSearch(params)
            setData(result.results)
        }
        
        getResult()
        
    }, [])

    useEffect(()=>{
        console.log(data)
        if(value >= data.length && data.length > 0){
            setButtonValue(true)
            console.log('estou aqui')
        }
    },[value])

    function handleClick() {
        setValue((prev)=> prev + 10)

        /*    let contador = value
            setValue((prev)=> prev + 10)
            contador += 10
    
            if (contador >= data.length) {
                setButtonValue(true)
            } */
    }
    
    
    
    return (
        <>
            <h1>Search</h1>
            {data ? data.map((element) => (
                <div className="card">
                    <p>?</p>
                    <img src={element.thumbnail} alt="" />
                    <h2 className="nome-produto" >{element.title}</h2>
                    <h3>R${element.price}</h3>
                </div>
            )).slice(0, value) : <Loading />}
            <button className="more-button" hidden={buttonValue} onClick={handleClick}>More...</button>
        </>
    )
} 