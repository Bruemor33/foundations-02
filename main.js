(function(){ 

    // Intro to javascript

    var hello = ' Hello world, my name is Andrew';

    // console.log(hello);

    var magicNumber = 1;

    var firstNumber = 3;

    var secondNumber = '10';

    var sum = firstNumber + secondNumber;

    // console.log(sum);




    // Objects 

    var person = {
        name: "Jenny", // name is a property
        role: 'BaseUser',
        age: 45,
        favoriteColor: "blue",
    }




    // If Else logic (if true, do something, else something else)
    if (person.role == 'BaseUser') {
        // console.log(person.name + ' is a base user.');
    } else if (person.role == 'Admin') {
        // console.log(person.name + ' is a super user!');
    }




    // Object with arrays as properties

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
    // console.log(dog.medicalRecords.length);

    // For Loop to list out dog object medical record array values
    for(var i = 0; i < dog.medicalRecords.length; i++) {
        // console.log(dog.medicalRecords[i]);
    }



    

   // JQUERY INTRO
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
        // console.log(li);
        $('.left-nav').append(li);
    }

    var btn = $('.btn-white');

    btn.on('click', function () {
        btn.addClass('btn-black');
    })



    // Javascript Maths

    function multiply(a, b, c) {
        return a * b * c;
    }

    var answer = multiply(2, 4, 9);

    // console.log(answer);

}()); 
