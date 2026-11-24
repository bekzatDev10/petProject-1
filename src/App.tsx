import './App.css';
import CarCard from './CarRoom';
import Car from './lib/Car';
import './carRoom.css'
import bmwPhoto from './assets/cars/bmw-m5-f90.jpg';
import teslaPhoto from './assets/cars/tesla-model-3.jpg';
import camryPhoto from './assets/cars/toyota-camry-70.jpg'


const bmw = new Car('BMW', 'M5 F90', 70000, 2018, bmwPhoto);
const tesla = new Car("TESLA","MODEL 3",40000,2022,teslaPhoto)
const camry = new Car("TOYOTA","CARY 70",12000,2019,camryPhoto)
const cars = [bmw, tesla,camry];

const App = () => {
    return (
        <div className="App">
            {cars.map((car,index) => (
                <CarCard car={car} key={index} />
            ))}
        </div>
    );
};

export default App;