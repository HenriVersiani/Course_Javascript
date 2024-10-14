import { useState, useEffect } from "react"
import { fetchAppliances } from "../../services/fetchApi"
import Header from "../../components/Header"
import Loading from "../../components/Loading"

export default function Appliances() {

    const [data, setData] = useState()
    const [promo, setPromo] = useState()

    useEffect(() => {
        async function getResult() {
            const result = await fetchAppliances()
            console.log(result)
            setPromo(result.results.filter((element) => element.original_price !== null))
            setData(result.results)

        }

        getResult()

    }, [])



    return (
        <>
            <Header />
            <section>
                Preenchimento de conteudo
            </section>
            <div className="container">
                <h2>Home Appliances</h2>
                <div className="content">
                    {data ? data.map((element) => (

                        <div className="card">
                            <img src={element.thumbnail} alt="Not found" />
                            <h2 className="nome-produto">{element.title}</h2>
                            <h3>R${element.price}</h3>
                        </div>

                    )) : <Loading/>}
                </div>
            </div>
        </>
    )
}