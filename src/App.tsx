import './App.css';
import CarCard from './CarRoom';
import Car from './lib/Car';
import bmwPhoto from './assets/cars/bmw-m5-f90.jpg';

const bmw = new Car('BMW', 'M5 F90', 70000, 2018, bmwPhoto);

const App = () => {
    return (
        <div className="App">
            <CarCard car={bmw} />
        </div>
    );
};

export default App;