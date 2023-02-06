import { useDispatch, useSelector } from "react-redux"
import { changeColor, changeGender, changePrice, changeType } from "../../redux/products/productsSlice"
import { colors, gender, prices, types } from "../../constants/filterConstants"
import "./index.css"

const Sidebar = () => {
    const filterList = useSelector((state) => state.allProducts.filterList)
    const dispatch = useDispatch();

    const onChangeColor = (event) => {
        if (event.target.checked) {
            dispatch(changeColor(event.target.id))
        }
        else {
            dispatch(changeColor(""))
        }
    }

    const onChangeGender = (event) => {
        if (event.target.checked) {
            dispatch(changeGender(event.target.id))
        }
        else {
            dispatch(changeGender(""))
        }
    }

    const onChangePrice = (event) => {
        if (event.target.checked) {
            const priceRange = event.target.id;
            const pricesArray = priceRange.split("-").map(item => parseInt(item))
            dispatch(changePrice(pricesArray))
        }
        else {
            dispatch(changePrice(""))
        }

    }

    const onChangeType = (event) => {
        if (event.target.checked) {
            dispatch(changeType(event.target.id))
        }
        else {
            dispatch(changeType(""))
        }
    }

    return (
        <div className="p-2 mt-5 shadow rounded fixed d-none d-md-block" style={{ width: 15 + "%", height: 560 + "px" }}>
            <p className="filter-name">Colour</p>
            {colors.map(item => {
                return (
                    <div>
                        <input type="checkbox" id={item.id} className="filter-checkbox" onChange={onChangeColor} />
                        <label htmlFor={item.id} className="filter-label">{item.color}</label>
                    </div>
                )
            })}
            <p className="filter-name">Gender</p>
            {gender.map(item => {
                return (
                    <div>
                        <input type="checkbox" id={item.id} className="filter-checkbox" onChange={onChangeGender} />
                        <label htmlFor={item.id} className="filter-label">{item.gender}</label>
                    </div>
                )
            })}
            <p className="filter-name">Price</p>
            {prices.map(item => {
                return (
                    <div>
                        <input type="checkbox" id={item.id} className="filter-checkbox" onChange={onChangePrice} />
                        <label htmlFor={item.id} className="filter-label">{item.price}</label>
                    </div>
                )
            })}
            <p className="filter-name">Type</p>
            {types.map(item => {
                return (
                    <div>
                        <input type="checkbox" id={item.id} className="filter-checkbox" onChange={onChangeType} />
                        <label htmlFor={item.id} className="filter-label">{item.type}</label>
                    </div>
                )
            })}
        </div>
    )
}
export default Sidebar;