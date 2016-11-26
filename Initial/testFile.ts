interface Vehicle {
    make: string;
}
class Car implements Vehicle {
    private distanceRun: number = 0;
    color: string;
    private carMake: string;

    constructor(public isHybrid: boolean, color: string = 'red', make:string = 'Ford') {
        this.color = color;
        this.carMake = make;
    }

    getGasConsumption(): string {
        return this.isHybrid ? 'Very Low' : 'Too Much!';
    }

    drive(distance: number): void {
        this.distanceRun += distance;
    }

    static honk(): string {
        return 'HOOONK!';
    }

    get distance(): number {
        return this.distanceRun
    }

    get make(): string {
        return this.carMake;
    }
}

class Sedan extends Car {
    model: String;

    constructor(isHybrid: boolean, make: string, model: string) {
        super(isHybrid,undefined,make);

        this.model = model;
    }
}

var myCar = new Sedan(false, 'Ford', 'Fusion');

console.log(myCar.color); //red

console.log(myCar.distance); // 0

myCar.drive(15);

console.log(myCar.distance); //15

console.log(Car.honk());

console.log(myCar.make);

console.log(myCar.model);