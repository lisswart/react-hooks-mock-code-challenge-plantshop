
import PlantCard from "./PlantCard";

function PlantList({ plants, search, setPlants }) {
  function handleDeletePlant(id) {
    const updatedPlantsArray = plants.filter(plant => plant.id !== id);
    setPlants(updatedPlantsArray);
  }

  function handleUpdatePlant(updatedPlant) {
    const updatedPlantsArray =  plants.map((plant) => {
      if(plant.id === updatedPlant.id) {
        return updatedPlant;
      } else {
        return plant;
      }
    });
    setPlants(updatedPlantsArray);
  }

  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <ul className="cards">{/* render PlantCards components in here */}
      {filteredPlants.map((plant) => {
        return (
          <PlantCard 
            plant={plant} 
            key={plant.id}
            search={search} 
            onDeletePlant={handleDeletePlant} 
            onUpdatePlant={handleUpdatePlant}
          />
        );
      })}      
    </ul>
  );
}

export default PlantList;
