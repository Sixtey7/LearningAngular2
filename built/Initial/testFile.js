var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Car = (function () {
    function Car(isHybrid, color, make) {
        if (color === void 0) { color = 'red'; }
        if (make === void 0) { make = 'Ford'; }
        this.isHybrid = isHybrid;
        this.distanceRun = 0;
        this.color = color;
        this.carMake = make;
    }
    Car.prototype.getGasConsumption = function () {
        return this.isHybrid ? 'Very Low' : 'Too Much!';
    };
    Car.prototype.drive = function (distance) {
        this.distanceRun += distance;
    };
    Car.honk = function () {
        return 'HOOONK!';
    };
    Object.defineProperty(Car.prototype, "distance", {
        get: function () {
            return this.distanceRun;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "make", {
        get: function () {
            return this.carMake;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
var Sedan = (function (_super) {
    __extends(Sedan, _super);
    function Sedan(isHybrid, make, model) {
        _super.call(this, isHybrid, undefined, make);
        this.model = model;
    }
    return Sedan;
}(Car));
var myCar = new Sedan(false, 'Ford', 'Fusion');
console.log(myCar.color); //red
console.log(myCar.distance); // 0
myCar.drive(15);
console.log(myCar.distance); //15
console.log(Car.honk());
console.log(myCar.make);
console.log(myCar.model);
