import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) =>{
    return(
        <div className='ListGroup'>
            {products.map(produ => <Item key={produ.id} {...produ}/>)}
        </div>
    )
}

export default ItemList