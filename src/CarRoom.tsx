import type Car from './lib/Car';

type Props = {
    car: Car;
};

const CarCard = (props: Props) => {
    return (
       <div className="car-card">
           <img
               src={props.car.image}
               alt={`${props.car.brand} ${props.car.model}`}
           />
           <h2>{props.car.brand} {props.car.model}</h2>
           <p>Год: {props.car.year}</p>
           <p>Цена: {props.car.price}$</p>
       </div>
    );
};

export default CarCard;