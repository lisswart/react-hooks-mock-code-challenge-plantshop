import { useState } from "react";

function NewPlantForm({ onAddNewPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("./images/pothos.jpg");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const plantData = {name, image, price};

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(plantData)
    })
    .then(r => r.json())
    .then(newPlant => {
      console.log(newPlant);
      onAddNewPlant(newPlant);
    });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
