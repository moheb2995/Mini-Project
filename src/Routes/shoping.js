import React from "react";

const Shoping =()=>{
  console.log('feel so good');

  const array =[
    {
      text : 'kiwi',
      number : 1,
      price : 10000,
      tprice : 10000,
    },
  ]

return(
  <div>
    <h1>shoping list</h1>
    <div class="div">
      <input placeholder="name" type="text"  id="name"/>
      <input placeholder="number" type="number"  id="number" min="1" step="1"/>
      <input placeholder="price" type="number"  id="price" min="1000" step="1000"/>
      <button id="btn">add</button>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th class="row">row</th>
            <th class="item">name</th>
            <th class="item">number</th>
            <th class="item">price</th>
          </tr>
        </thead>
        <tbody id="tbody">
          
        </tbody>
        <thead><tr><th class="total">total</th></tr></thead>
        <tfoot><tr><td id="tfoot">10000</td></tr></tfoot>
      </table>
    </div>
  </div>
)
}
export default Shoping