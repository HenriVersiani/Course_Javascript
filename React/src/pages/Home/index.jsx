import { useEffect, useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { fetchTvs } from "../../services/fetchApi"


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

  return (
    <>
      <Header />
      
      <div className="container">
        <h2>Produtos em destaque</h2>
        {destaque ? destaque.map((element) => (
            <div className="card">
              <h2>{element.title}</h2>
              <img src={element.thumbnail} alt="" />
              <h3>R${element.price}</h3>
            </div>
        )) : <p className="loading">loading</p>}
      </div>
      <section>
        Preenchimento de conteudo
      </section>

    <div className="container">
        <h2>Produtos em Promoção</h2>
        {promo ? promo.map((element)=>(
          <div className="card">
            <h2>{element.title}</h2>
            <s>{element.original_price}</s>
            <img src={element.thumbnail} alt="" />
            <h3>R${element.price}</h3>
          </div>
        )): <p className="loading">loading</p>}
    </div>

      <Footer />
    </>
  )

}

export default Home