import React, { useState } from "react";

function Calc(){

    const [oldQuantity, setOldQuantity] = useState(0);
    const [averagePrice, setAveragePrice] = useState(0);
    const [currentQty, setCurrentQty] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [revisedAverage, setRevisedAverage] = useState(0);
    function handleChange(e)
    {
        const { name, value} = e.target;
        console.log(name)
        console.log(value)
    }

   function calculatePrice(event)
    {
        event.preventDefault();
        let result = ((oldQuantity * averagePrice ) + (currentQty * currentPrice)) / (parseFloat(oldQuantity) + parseFloat(currentQty));
        console.log(result)
        // console.log("Existing proice: " + (oldQuantity * averagePrice));
        // console.log("currentPrice: " +  (currentQty * currentPrice));
        // console.log("Sum: "+ ((oldQuantity * averagePrice ) + (currentQty * currentPrice)))
        // console.log("Denominator: " + (parseFloat(oldQuantity) + parseFloat(currentQty)))
        // console.log(averagePrice);
        // console.log(currentQty);
        // console.log(currentPrice);
        // console.log(result)
        // console.log("calculated")
        // setRevisedAverage(result);        
        // console.log(revisedAverage)
    }

return(
    <form onSubmit={calculatePrice}>
        <label>Existing quantity</label> <input type="number" name="eQuant" onChange={handleChange} id="existQuant" ></input>
        <label>Average price</label>  <input type="number" id="averagePrice" value={averagePrice} onChange={(e)=>setAveragePrice(e.target.value)} ></input>
        <label>Current quantity</label>  <input type="number" id="currentQuant" value={currentQty} onChange={(e) => setCurrentQty(e.target.value)} ></input>
        <label>Current price</label>  <input type="number" id="currentPrice" value={currentPrice} onChange={(e)=> setCurrentPrice(e.target.value)} ></input>        
        <input id="btnSubmit" type="submit" value="Submit"></input>
        </form>

);
}

export default Calc