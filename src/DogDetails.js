import { useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const dogName = useParams();
  const dog = dogs.find((dog) => dog.name === dogName.name);

  return (
    <div>
      <h2>{dog.name}</h2>
      <h2>{dog.age}</h2>
      <img src={dog.src} />
      <h2>
        {dog.facts.map((each) => (
          <h3>{each}</h3>
        ))}
      </h2>
    </div>
  );
};
export default DogDetails;
