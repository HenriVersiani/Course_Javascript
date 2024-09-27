import { useEffect, useState } from "react"
import { fetchPhones, fetchTech } from "../../services/fetchApi"
import Header from "../../components/Header"

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
            <h2>SmartPhones</h2>
                <div className="content">
                    {data ? data.map((element)=> (
                        
                            <div className="card">
                                <h2>{element.title}</h2>
                                <img src={element.thumbnail} alt="Not found" />
                                <h3>R${element.price}</h3>
                            </div>  
                        
                    )): <p className="loading">loading</p>} 
                </div>
             </div>  
       </> 
    )
}