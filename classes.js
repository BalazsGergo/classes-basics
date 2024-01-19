class Student {
	constructor(name, age, hasFinishedStudies) {
		this.name = name
		this.age = age
		this.hasFinishedStudies = hasFinishedStudies
	}

	canGraduate() {
		return this.age > 17 && this.hasFinishedStudies

		/* if (this.age > 17 && this.hasFinishedStudies === true) {
			return true
		} else {
			return false
		} */
	}
}

class GraduatingStudents {
	static getNumberOfGraduatingStudents (students) {
		return students.filter(student => student.canGraduate()).length
		
		/* let counter = 0

		for (let i = 0; i < students.length; i++) {
			if (students[i].canGraduate() === true) {
				counter ++
			}
		}

		return counter */
	}
}

const student1 = new Student("Ricsi", 29, true)
const student2 = new Student("Géza", 17, false)
const student3 = new Student("Anna", 23, false)
const student4 = new Student("Kálmán", 16, true)
const student5 = new Student("Jóska", 77, true)

const students = [student1, student2, student3, student4, student5]

/* console.log(student1.canGraduate())
console.log(student1)

console.log(student2.canGraduate()) */

console.log(GraduatingStudents.getNumberOfGraduatingStudents(students))



class Car {
	constructor(km, brand, age,isChinese) {
		this.km = km
		this.brand = brand
		this.age = age
        this.isChinese = isChinese

    }

         getGoodCar() {
            return this.km < 200000 && this.isChinese === false
         }


}


const car1 = new Car(120000,'Mercedes',10,false)
const car2 = new Car(340000,'Toyota',15,false)
const car3 = new Car(20000,'BYD',4,true)

const cars = [car1,car2,car3]


class GoodCars {
	static getGoodCars (cars) {
		return cars.filter(car => car.getGoodCar()).length


    }

}

console.log(GoodCars.getGoodCars(cars))