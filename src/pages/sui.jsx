import { useEffect, useState } from "react";

export default function Sucide() {
  const m = [
    [1760267021951, "EGGS"],
    [1760275553478, "Tomato"],
    [1760289732007, "Cabbage"],
    [1760289949535, "bangles"],
    [1760290051043, "mango pickles"],
    [1760290191489, "Samsung watch ultra"],
    [1760290202119, "brinjal"],
    [1760290343748, "broom"],
    [1760290476820, "Samsung s25 ultra"],
    [1760290610329, "Redmagic 10 s Pro"],
    [1760290778181, "Red magic 10 pro GOLDEN SAGA"],
    [1760290874919, "nike air jordan"],
    [1760291134809, "Onion"],
    [1760291223976, "Garlic"],
    [1760291363037, "omega moonwatch"],
    [1760292563625, "7 UP COMBO pack"],
    [1760292631138, "7 UP Can"],
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://productdb.up.railway.app/products")
      .then((res) => res.json())
      .then((data) => {
        const matches = data.filter((x) =>
          !m.some(([id, name]) => id === x.id && name === x.name)
        );
        console.log("Matched:", matches);
        setProducts(matches);
      })
      .catch((err) => console.error("Error fetching:", err));
  }, []);

      console.log("Rendered products:", products);
      for (let x of products){
            fetch(`https://productdb.up.railway.app/delete?id=${x.id}`) 
            .then((res) => res.json())
            .then((data) => {if(data.success){alert("successfully deleted")}else{alert("deletion unsuccessfully ")}})
            .catch((err) => console.error(err));
            }
  return (
    <div>
      <h1>Matched Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} (ID: {p.id})
          </li>
        ))}
      </ul>
    </div>
  );
}
