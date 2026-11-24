class Car  {
        public brand: string;
        public model: string;
        public price: number;
        public year: number;
        public image: string;
        public description: string;


    constructor(brand: string, model: string, price: number, year: number,image: string,description: string) {
     this.brand = brand;
     this.model = model;
     this.price = price;
     this.year = year;
     this.image = image;
     this.description = description;
    }
}

export default Car;