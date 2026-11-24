import type Car from './lib/Car';
import {useState} from "react";

type Props = {
    car: Car;
};

const CarCard = (props: Props) => {
    const [showDescription, setShowDescription] = useState(false);

    return (
       <div className="car-card">
           <img
               src={props.car.image}
               alt={`${props.car.brand} ${props.car.model}`}
           />
           <h2>{props.car.brand} {props.car.model}</h2>
           <p>Год: {props.car.year}</p>
           <p>Цена: {props.car.price}$</p>
           <button onClick={() => setShowDescription(!showDescription)}>Подробнее</button>
           {showDescription && <p>{props.car.description}</p>}
       </div>

    );
};

export default CarCard;