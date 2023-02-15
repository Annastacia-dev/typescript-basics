// Enums - a way to define a set of named constants
//Used when you have restricted values 

// Syntax - enum EnumName {value1, value2, value3}
// By default, the first value is 0, the second is 1, and so on
// You can also assign values to the enums
// Example - airplane seating

enum SeatType {
    window,
    aisle = "aisle", // if you asign a string value, you have to assign a value to all the other enums
    //cockpit,  //error -  Enum member must have initializer.
    middle = 10,
    emergencyExit
}

const seat: SeatType = SeatType.window




//This code defines an enumeration type called SeatType with four possible values: window, aisle, middle, and emergencyExit.

//The first two values are assigned integer values implicitly, starting with 0 for window and incrementing by 1 for each subsequent value, so window has the value 0 and aisle has the value 1.

//The third value, middle, is assigned the explicit integer value of 10, and the fourth value, emergencyExit, is assigned the value of 11.

//Note that the commented-out value cockpit causes a compilation error, since an enum member must have an initializer (a value assigned to it).

//Overall, this code creates an enumeration that can be used to represent different types of seats on an airplane.

export{}