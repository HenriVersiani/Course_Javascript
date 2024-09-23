import { useEffect, useState } from "react"
import { fetchPhones } from "../../services/fetchApi"
import Header from "../../components/Header"
import "./smartphone.css"

export default function Smartphone(){

    const [data, setData] = useState(null)
    const [promo,setPromo] = useState(null)

    useEffect(()=>{
        async function getResult(){
            const result = await fetchPhones()
            setPromo(result.results.filter((element)=> element.original_price !== null))
            setData(result.results)
            console.log(result.results)
        }
    getResult()    
    },[]) 

    return( 
        <>
          <Header/>
            <section>
                Preenchimento de conteudo
            </section>
            <h2>SmartPhones</h2>
            <div className="container">
             {data ? data.map((element)=> (
                
                    <div className="card">
                        <h2>{element.title}</h2>
                        <img src={element.thumbnail} alt="Not found" />
                        <h3>R${element.price}</h3>
                    </div>  
                
             )): <p className="loading">loading</p>} 
             </div>             
        </>
    )
}