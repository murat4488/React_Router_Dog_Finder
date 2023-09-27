import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <div>
      {dogs.map((dog) => (
        <p>
          <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
        </p>
      ))}
    </div>
  );
};
export default DogList;
