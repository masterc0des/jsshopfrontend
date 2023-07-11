import React from 'react';
import './pages.css';

class Stoebern extends React.Component {

    constructor() {
      super()
        this.state = {
            isFetching: true,
            products: []
        };
    };

    async componentDidMount() {
        const response = await fetch("http://infinitecodes.de:8080/api/all");
        const data = await response.json();
        this.setState({products: data});
        this.setState({isFetching: false});
    };

    render() {
        return (
          <div className='div-explore'>
          <table className='table-product'>
                <tbody>
                  {this.state.products.map((item, index) => {
                    return (
                      <div className='div-product'>
                          <img className='img-product' src={item.p_Bild} alt='product'></img>
                          <br></br>
                          <a id="a-product-link" href='amazon.de' className='a-product-description'>{item.p_Produktname}</a>
                          <br></br>
                          <p className='p-price'>Von {item.p_Hersteller}, nur {item.p_Produktpreis}€</p>
                          <br></br>
                          <br></br>
                      </div>
                    );
                })}  
              </tbody>
            </table>
          </div>
        )
    }
}

export default Stoebern;