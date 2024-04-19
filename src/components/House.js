const House = (props) => {
    if(!props.houseInfo) {
        return <h4> .......loading </h4>
    }

    return ( 
    <div>
        <div className="row">
            <div className="col-sm-6">
                <b>Address:</b>{props.houseInfo.address}
            </div>
            <div className="col-sm-6">
                <b>Price :</b>{props.houseInfo.price}
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6"> <img  className="img-thumbnail" src={`imgs/${props.houseInfo.photo}`} alt="house here" /></div>
            <div className="col-sm-6"> {props.houseInfo.description}</div>
        </div>
    </div> );
}
 
export default House;