import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { GrFilter } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import { changeColor, changeGender, changePrice, changeType, getSearchTerm } from "../../redux/products/productsSlice"
import { colors, genderList, prices, types } from "../../constants/filterConstants"
import "./index.css"

const Sidebar = () => {
    const [show, setShow] = useState(false);
    const [color, setColor] = useState("");
    const [gender, setGender] = useState("");
    const [price, setPrice] = useState("");
    const [priceRange, setPriceRange] = useState("")
    const [type, setType] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.allProducts.searchTerm)

    const onSearch = (event) => {
        dispatch(getSearchTerm(event.target.value))
    }

    const onChangeColor = (event) => {
        if (event.target.type === "checkbox" && event.target.checked) {
            dispatch(changeColor(event.target.id));
        } else if (event.target.type === "select-one") {
            setColor(event.target.value)
        } else {
            dispatch(changeColor(""));
        }
    };

    const onChangeGender = (event) => {
        if (event.target.type === "checkbox" && event.target.checked) {
            dispatch(changeGender(event.target.id));
        } else if (event.target.type === "select-one") {
            setGender(event.target.value)
        } else {
            dispatch(changeGender(""));
        }
    }

    const onChangePrice = (event) => {
        if (event.target.type === "checkbox" && event.target.checked) {
            let priceRange = event.target.id;
            priceRange = priceRange.replace(/Rs/g, "");
            const pricesArray = priceRange.split("-").map(item => parseInt(item))
            dispatch(changePrice(pricesArray))
        } else if (event.target.type === "select-one") {
            let priceRange = event.target.value;
            setPriceRange(priceRange)
            priceRange = priceRange.replace(/Rs/g, "");
            const pricesArray = priceRange.split("-").map(item => parseInt(item))
            setPrice(pricesArray)
        } else {
            dispatch(changePrice(""));
        }
    }

    const onChangeType = (event) => {
        if (event.target.type === "checkbox" && event.target.checked) {
            dispatch(changeType(event.target.id))
        } else if (event.target.type === "select-one") {
            setType(event.target.value)
        } else {
            dispatch(changeType(""));
        }
    }

    const onSave = () => {
        dispatch(changeColor(color));
        dispatch(changeGender(gender))
        dispatch(changePrice(price))
        dispatch(changeType(type))
        handleClose()
    }

    const onClearFilters = () => {
        dispatch(changeColor(""));
        dispatch(changeGender(""))
        dispatch(changePrice(""))
        dispatch(changeType(""))
        setColor("")
        setGender("")
        setPriceRange("")
        setType("")
        handleClose()
    }

    return (
        <>
            <div className="text-center mb-3 d-sm-block d-md-none">
                <input type="input" placeholder="Search for products.." className="filter-search-input" onChange={onSearch} value={searchTerm} />
                <button type="button" className="filter-buttons">
                    <GoSearch />
                </button>
                <button type="button" className="filter-buttons" onClick={handleShow}>
                    <GrFilter />
                </button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Choose Your Filter</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>Color: </label>
                        <br />
                        <select class="form-select form-control mb-3" aria-label=".form-select-lg example" onChange={onChangeColor} value={color}>
                            <option selected>Please choose color</option>
                            <option>Red</option>
                            <option>Green</option>
                            <option>Blue</option>
                        </select>
                        <br />
                        <label >Gender: </label>
                        <br />
                        <select class="form-select form-control mb-3" aria-label=".form-select-lg example" onChange={onChangeGender} value={gender}>
                            <option selected>Please choose gender</option>
                            <option>Men</option>
                            <option>Women</option>
                        </select>
                        <br />
                        <label >Type: </label>
                        <br />
                        <select class="form-select form-control mb-3" aria-label=".form-select-lg example" onChange={onChangeType} value={type}>
                            <option selected>Please choose type</option>
                            <option>Polo</option>
                            <option>Hoodie</option>
                            <option>Basic</option>
                        </select>
                        <br />
                        <label >Price: </label>
                        <br />
                        <select class="form-select form-control mb-3" aria-label=".form-select-lg example" onChange={onChangePrice} value={priceRange}>
                            <option selected>Please choose price range</option>
                            <option value="0-Rs250">0-Rs250</option>
                            <option value="Rs251-450">Rs251-450</option>
                            <option value="Rs450">Rs450</option>
                        </select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={onClearFilters}>
                            Clear
                        </Button>
                        <Button variant="primary" onClick={onSave}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
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
                {genderList.map(item => {
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
        </>

    )
}
export default Sidebar;