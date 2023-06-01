// https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript

function tripledouble(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();

    for (let i = 0; i < 10; i++) {
        const triple = i.toString().repeat(3);
        const double = i.toString().repeat(2);

        if (str1.includes(triple) && str2.includes(double)) return 1;
    }

    return 0;
}

function main() {
    const num1 = 451999277;
    const num2 = 41177722899;

    console.log(tripledouble(num1, num2));
}
if (require.main === module) {
    main();
}

// Test.assertEquals(tripledouble(451999277,41177722899),1);
//   Test.assertEquals(tripledouble(1222345, 12345),0);
//   Test.assertEquals(tripledouble(12345, 12345),0);
//   Test.assertEquals(tripledouble(666789, 12345667),1);
//   Test.assertEquals(tripledouble(10560002, 100),1);
//   Test.assertEquals(tripledouble(1112, 122),0);
