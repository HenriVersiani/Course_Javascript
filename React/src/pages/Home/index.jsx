import Footer from "../../components/Footer"
import { useEffect, useState } from "react"
import { fetchTvs } from "../../services/fetchApi"
import Header from "../../components/Header"
import './Home.css'



function Home() {

    const [destaque, setDestaque] = useState(null)
    const [promo, setPromo] = useState(null)
  
    
    useEffect(() =>{
  
      async function getResult() {
        const result = await fetchTvs()
        setDestaque(result.results.filter((element) => element.listing_type_id === 'gold_special').slice(0,4))
       // console.log(result.results.filter((element) => element.listing_type_id === 'gold_special').slice(0,4))
        setPromo(result.results.filter((element) => element.original_price !== null).slice(0,4))
       // console.log(result.results.filter((element) => element.original_price !== null))
      
      }
      
      getResult()
  
    }, [])
  
  return(
    <>
      <Header />
      
      <div className="container">
        <h2>Produtos em destaque</h2>
        <div className="content">
        {destaque ? destaque.map((element) => (
              <div className="card">
                <img src={element.thumbnail} alt="" />
                <h2 className="nome-produto" >{element.title}</h2>
                <h3>R${element.price}</h3>
              </div>
          )) : <p className="loading">loading</p>}
        </div>
      </div>

      <section>
        Preenchimento de conteudo
      </section>

    <div className="container">
        <h2>Produtos em Promoção</h2>
        <div className="content">
          {promo ? promo.map((element)=>(
              <div className="card">
                <img src={element.thumbnail} alt="" />
                <h2 className="nome-produto">{element.title}</h2>
                <s>{element.original_price}</s>
                <h3>R${element.price}</h3>
              </div>
            )): <p className="loading">loading</p>}
          </div>
    </div>

      <Footer />
    </>
  )

}

export default Home