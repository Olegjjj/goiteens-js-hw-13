// 1.
// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.
const bankAccount = {
    ownerName: "David",
    accountNumber: 1322,
    balance: 500,
    deposit(amount) {
        this.balance += amount
        return console.log(`Депозит поповнено на ${amount}`);
    },
    withdraw(amount) {
        if (amount > this.balance) {
            return console.log("Недостатня кількість коштів на вашему рахунку");
        }
        this.balance -= amount
        return console.log(`Вашого рахунку знято ${amount}`);
    },
    showBalance() {
        console.log(`На вашему рахунку ${this.balance}`);
    }
} 
bankAccount.showBalance()
bankAccount.withdraw(900)
bankAccount.deposit(700)
bankAccount.showBalance()
bankAccount.withdraw(1000)
bankAccount.showBalance()
bankAccount.withdraw(1000)
// 2.
// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const input = document.querySelector(".input")
const button = document.querySelector(".button")
button.addEventListener("click", () => {
    const temperature = Number(input.value)
    console.log(temperature);
const weather = {
    temperature,
    humidity: "normal",
    windSpeed: "5 m/s",
    checkTemperature() {
        if (this.temperature < 0) {
            return console.log("температура нижче 0 градусів Цельсія");
        }
        return console.log("температура вище 0 градусів Цельсія");
    }
}
weather.checkTemperature()
})
// 3.
// Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт
const buttonForm = document.querySelector(".buttonFormCheck")
buttonForm.addEventListener("click", () => {
    const nameForm = document.querySelector(".name")
    const emailForm = document.querySelector(".email")
    const passwordForm = document.querySelector(".password")
    const name = nameForm.value
    const email = emailForm.value
    const password = passwordForm.value
    const user = {
        name, 
        email, 
        password,
        login(userName, userEmail, userPassword) {
            if (userName !== this.name) {
                return console.log("name is invalid");
            }
            if (userEmail !== this.email) {
                return console.log("email is invalid");
            }
            if (userPassword !== this.password) {
                return console.log("password is invalid");
            }
            return console.log(`Вітаю ${userName}`);
        }
    }
    user.login("David", "david98@gmail.com", "David90")
})

const h = document.querySelector(".h")
const pDirector = document.querySelector(".pDirector")
const pYear = document.querySelector(".pYear")
const pRating = document.querySelector(".pRating")
const movie = {
    title: "John Wick", 
    director: "Derek Kolstad", 
    year: 2014, 
    rating: 7.5,
    madeAnotherColorText() {
        h.textContent = this.title;
        pDirector.textContent = this.director;
        pYear.textContent = this.year;
        pRating.textContent = this.rating;
        if (this.rating > 8) {
            return h.style.color = "green";
        }
    }
}
movie.madeAnotherColorText()