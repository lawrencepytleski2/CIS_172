/**
 * Quiz 3 focuses on Objects
 *
 * @category    Quiz 3 Alt
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      LAWRENCE PYTLESKI <ljjpytleski@hawkmail.hfcc.edu>
 * @date        2020.02.27
 * @grade       7 / 10
 */

// #1, 2, & 3
let FoodTruck =
{
    Name: "Lester's Taco Truck",
    MPG: 20,
    FoodType: "tacos",
    Sales: 3000,
    Stops: 12,
    Employees: 4,
    addStop : function ()
    {
        FoodTruck.Stops++;
    }
};

// #4
FoodTruck.addStop();