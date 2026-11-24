class Car  {
        public brand: string;
        public model: string;
        public price: number;
        public year: number;
        public image: string;


    constructor(brand: string, model: string, price: number, year: number,image: string) {
     this.brand = brand;
     this.model = model;
     this.price = price;
     this.year = year;
     this.image = image;
    }
}

export default Car;