//using switchcase

let age = 25;

switch (true) {
    case (age <= 12):
        console.log("Child");
        break;
    case (age >= 13 && age <= 18):
        console.log("Teen");
        break;
    default:
        console.log("Adult");
        break;
}
