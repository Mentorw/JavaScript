class Auto {
    constructor(brand, model, year, vinCode) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vinCode = vinCode;
    }

    log() {
        console.log("Brand: " + this.brand + "\nModel: " + this.model + "\nYear: " + this.year);
    }

    checkVin() {
        console.log(String(this.vinCode).length === 16 ? 'true' : 'false');
        return String(this.vinCode).length === 16 ? 'true' : 'false';
    }
}

class Auto_Fuel extends Auto {
    constructor(brand, model, year, vinCode, engineDisplacement, fuelConsumption) {
        super(brand, model, year, vinCode);
        this.engineDisplacement = engineDisplacement;
        this.fuelConsumption = fuelConsumption;
    }

    showFuelConsumption() {
        console.log("Engine displacement: " + this.engineDisplacement + "\nFuel consumption: " + this.fuelConsumption);
        return this.brand + " " + this.model + "\nEngine displacement: " + this.engineDisplacement + "\nFuel consumption: " + this.fuelConsumption;
    }
}

class Auto_Electric extends Auto {
    constructor(brand, model, year, vinCode, batteryCapacity) {
        super(brand, model, year, vinCode);
        this.batteryCapacity = batteryCapacity;
    }

    showBatteryConfig() {
        console.log("Battery capacity: " + this.batteryCapacity);
        return this.brand + " " + this.model + "\nBattery capacity: " + this.batteryCapacity;
    }
}

let honda = new Auto("HONDA", "	CR-V 2.4 RVSi", 2007, "JHLRE48577C41549");
honda.log();
honda.checkVin();

let bmw = new Auto_Fuel("BMW", "E-85(Z4)", 2004, "4USBT53544LT26841", "2.9L", 9.1);
bmw.log();
bmw.checkVin();
bmw.showFuelConsumption();

let tesla = new Auto_Electric("Tesla", "Model X", 2020, "AF12124AEGJ32413", "100 кВт/ч");
tesla.log();
tesla.checkVin();
tesla.showBatteryConfig();