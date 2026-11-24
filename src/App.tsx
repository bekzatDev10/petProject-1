import './App.css';
import CarCard from './CarRoom';
import Car from './lib/Car';
import './carRoom.css'
import bmwPhoto from './assets/cars/bmw-m5-f90.jpg';
import teslaPhoto from './assets/cars/tesla-model-3.jpg';
import camry70Photo from './assets/cars/toyota-camry-70.jpg';
import mercedesPhoto from './assets/cars/mercedes-s-class-w220.jpg';
import changanPhoto from './assets/cars/changan-x5-plus.jpg';
import lexusPhoto from './assets/cars/lexus-es350.jpg';
import camry80Photo from './assets/cars/toyota-camry-80.jpg';



const bmw = new Car('BMW', 'M5 F90', 70000, 2018, bmwPhoto);
const tesla = new Car("TESLA","MODEL 3",40000,2022,teslaPhoto)
const camry70 = new Car("TOYOTA","CAMRY 70",12000,2019,camry70Photo)
const mercedes = new Car("MERCEDES","220",30000,2022,mercedesPhoto)
const changan = new Car("CHANGAN","X5-PLUS",30000,2026,changanPhoto)
const lexus = new Car("LEXUS","220",30000,2021,lexusPhoto)
const camry80 = new Car("TOYOTA","CAMRY 80",12000,2019,camry80Photo)

const cars = [bmw, tesla,camry70,mercedes,changan,lexus,camry80];


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