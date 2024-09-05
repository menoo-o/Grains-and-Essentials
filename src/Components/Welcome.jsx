import { NavLink } from "react-router-dom"

const Welcome = () => {
  return (
    <>
              <section className="welcom">
                    <div className="para">
                        <h2 className='para-heading'>Health Begins with the Right Essentials</h2>
                        <p>Grains & Essentials offers an abundance of high quality, locally grown, farm-to-table whole foods & products.</p>
                    </div>
            </section>

                <div className="headingList">
                    <h3>Browse Categories</h3>
                    <NavLink to='shop'>
                      <a href="" className="shop-all"> Shop all </a>  
                    </NavLink>    
                </div> 
    </>
  )
}

export default Welcome
