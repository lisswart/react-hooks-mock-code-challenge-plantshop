import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(setPlants);
  }, [])

  function handleAddNewPlant(newPlant) {
    const updatedPlantsArray = [newPlant, ...plants];
    setPlants(updatedPlantsArray);
  }

  function handleSearch(newSearch) {
    setSearch(newSearch);
  }

  return (
    <main>
      <NewPlantForm onAddNewPlant={handleAddNewPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plants={plants} setPlants={setPlants} search={search} />
    </main>
  );
}

export default PlantPage;
