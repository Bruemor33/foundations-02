(function(){ 
    var hello = ' Hello world, my name is Andrew';

    // console.log(hello);

    var magicNumber = 1;

    var firstNumber = 3;

    var secondNumber = '10';

    var sum = firstNumber + secondNumber;

    // console.log(sum);

    var person = {
        name: "Jenny", // name is a property
        role: 'BaseUser',
        age: 45,
        favoriteColor: "blue",
    }

    if (person.role == 'BaseUser') {
        console.log(person.name + ' is a base user.');
    } else if (person.role == 'Admin') {
        console.log(person.name + ' is a super user!');
    }

    var dog = {
        name: 'Lucy',
        age: 9,
        color: 'black and white',
        breed: 'mut',
        medicalRecords: [
            'shots',
            'checkups',
            'adoptionDate',
            'something else'
        ],
        sizes: [
            'lg',
            'md',
            'sm'
        ],
        colors: [
            'red',
            'green'
        ]
    };

    var whatColor = 'color';

    console.log(dog.medicalRecords.length);

    for(var i = 0; i < dog.medicalRecords.length; i++) {
        console.log(dog.medicalRecords[i]);
    }

    // dog.medicalRecords[0]
    // dog.medicalRecords[1]
    // dog.medicalRecords[3]

    // console.log(dog.medicalRecords[0]);

    var newsFeed = document.getElementsByClassName('news-feed');

    function addClass(className) {
        var newClasses = newsFeed + ' ' + className
        return newClasses;
    }
    console.log(addClass('loading'));

    // console.log(newsFeed);

    var emptyArray = [];
    console.log(emptyArray);

    function myFunction() {

    }

    var myFunction = function() {

    }





    var myArray = [
        "this",
        "that",
        "and other things",
        "something",
        "else"
    ]

    for(var i = 0; i < myArray.length; i++) {
        var listItemContent = myArray[i];
        var li = "<li>" + listItemContent + "</li>";
        console.log(li);
        $('.left-nav').append(li);
    }

    $('.btn-white').on('click', function () {
        $('.btn-white').html('I was clicked!');
    })




    function multiply(a, b, c) {
        return a * b * c;
    }

    var answer = multiply(2, 4, 9);

    console.log(answer);






    // this will throw a scope error!
    var twoForOneCoupon = true;
    var veggieToppings = ["mushrooms", "spinach", "eggplant"];

    function twoToppingPizza(toppings) {
        var price = 10;

        console.log("You'll get a pizza with " + toppings[0] + " and " + toppings[1]);

        if (twoForOneCoupon === true) {
            console.log("Nice, you get a second pizza free with this coupon!");
        }

        console.log('Your total is ' + price + 'dollars');
    }

    twoToppingPizza(veggieToppings);

}()); 
