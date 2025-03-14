import React, { useEffect, useState } from 'react'

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);
 
  useEffect(() => {
    fetch(`data/${checked ? 'sale_': ''}products.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log('데이터 받아옴');
      setProducts(data);
    });
    return () => {
      console.log('데이터 삭제')
    }
  }, [checked])
  return (
    <>
    <input id = "checkbox" type="checkbox" value={checked} onClick={handleChange}/>
    <label htmlFor='checkbox' >Show only sale</label>
      <ul>
        {products.map((products) => (
          <li key ={products.id}>
            <article>
              <h3>{products.name}</h3>
              <p>{products.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  )
}
