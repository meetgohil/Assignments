
class Rapido {
    
    constructor() {
        this.riders = new Map()
        this.customers = new Map()
        this.rides = new Map()
        this.rideId = 0; 
    }

    addRider = (firstname, lastname, phonenumber, dlnumber) => {
        let newRider = {
            firstName: firstname,
            lastName: lastname,
            dlNumber: dlnumber,
            phoneNumber: phonenumber,
            isAvailable: true
        };
        this.riders.set(phonenumber, newRider);
        console.log(`Rider ${firstname} is added`);
    }

    addCustomer = (firstname, lastname, phonenumber) => {
        let newCustomer = {
            firstName: firstname,
            lastName: lastname,
            phoneNumber: phonenumber
        };
        this.customers.set(phonenumber, newCustomer);
        console.log(`Customer ${firstname} is added`);
    }

    bookRide = (newCustomerNumber, newDistance) => {
        let rideBooked = false;
        for(let [key,rider] of this.riders) {
            if(rider.isAvailable === true) {
                rider.isAvailable = false;
                this.rides.set(this.rideId, {
                    status: 'booked',
                    customerPhoneNumber: newCustomerNumber,
                    riderPhoneNumber: rider.phoneNumber,
                    distance: newDistance
                })
                rideBooked = true;
                console.log(`${this.customers.get(newCustomerNumber).firstName}'s ride is booked!`);
                break;
            }
        }
        if(rideBooked === false) {
            console.log('We are Busy');
        }
        this.rideId++;
    }

    startRide = (rideid) => {
        let customerPhoneNumber = this.rides.get(rideid).customerPhoneNumber;
        if(this.rides.get(rideid).status === 'canceled') {
            console.log(`Hello ${this.customers.get(customerPhoneNumber).firstName}, your ride is canceled`);
        }
        else {
            this.rides.get(rideid).status = 'started';
            console.log(`${this.customers.get(customerPhoneNumber).firstName}'s ride is started!`);
        }
    }

    calculateAmount = (rideid) => {
        let amount = 0;
        let ride = this.rides.get(rideid);
        let distance=ride.distance;
        if(distance <= 10) 
            amount = 100*distance;
        else 
            amount = 100*distance + (distance-10)*50; 

        if(ride.status === 'cancled')
            console.log('This ride was cancled.');
        console.log(`${this.customers.get(ride.customerPhoneNumber).firstName}'s amount to be paid: `);
        return amount;
    }

    cancelRide = (rideid, phoneNumber) => {
        let ride = this.rides.get(rideid);
        if(ride.riderPhoneNumber === phoneNumber || ride.customerPhoneNumber === phoneNumber) {
            let riderNumber = ride.riderPhoneNumber;
            let customerNumber = ride.customerPhoneNumber;
            if(ride.status === 'canceled')
                return;
            else if(ride.status === 'started') 
                console.log(`Sorry ${this.customers.get(customerNumber).firstName}, your ride can't be canceled!`);
            else{
                this.riders.get(riderNumber).isAvailable = true;
                ride.status = 'canceled'
                console.log(`${this.customers.get(customerNumber).firstName}'s Ride cancled!`);
            }
            return;
        }
    }

    updateRide = (rideid, newDistance) => {
        let ride = this.rides.get(rideid);
        let customerNumber = ride.customerPhoneNumber;
        if(ride.status !== 'started' && ride.status !== 'canceled') {
            ride.distance=newDistance;
            console.log(`${this.customers.get(customerNumber).firstName}'s ride updated!`);
        }
        else {
            console.log(`Sorry ${this.customers.get(customerNumber).firstName}, your ride can't be updated!`);
        }
    }
}

ride = new Rapido();
ride.addRider("Ram", "Shyam", 2738657874, "GGSR76479");
ride.addRider("Lakshman", "Syam", 2738657875, "RRSR76470");
console.log('Riders:-', ride.riders)

ride.addCustomer("Ajay", "Singh", 9080706050);
console.log('Customers:-', ride.customers)

ride.bookRide(9080706050, 14);
console.log('Riders:-', ride.riders)

// ride.startRide(0)

// let amount = ride.calculateAmount(0);
// console.log(amount);

// ride.cancelRide(0, 9080706050);
let amount = ride.calculateAmount(0);
console.log(amount);
ride.updateRide(0, 9);

let updatedAmount = ride.calculateAmount(0);
console.log(updatedAmount);

// console.log(ride.riders);
