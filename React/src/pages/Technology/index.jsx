import { useEffect, useState } from "react"
import { fetchPhones, fetchTech } from "../../services/fetchApi"
import Header from "../../components/Header"
import Loading from "../../components/Loading"

export default function Technology(){
    const [data, setData] = useState(null)
    const [promo, setPromo] = useState(null)

    useEffect(()=>{
        async function getResult(){
            const result = await fetchTech()
            setPromo(result.results.filter((element)=> element.original_price !== null))
            setData(result.results)
        }

    getResult()
        
    },[]) 

    return(
       <>
        <Header/>
            <section>
                Preenchimento de conteudo
            </section>
            <div className="container">
            <h2>Tecnology</h2>
                <div className="content">
                    {data ? data.map((element)=> (
                        
                            <div className="card">
                                <img src={element.thumbnail} alt="Not found" />
                                <h2 className="nome-produto">{element.title}</h2>
                                <h3>R${element.price}</h3>
                            </div>  
                        
                    )): <Loading/>} 
                </div>
             </div>  
       </> 
    )
}