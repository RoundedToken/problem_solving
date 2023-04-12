// https://www.codewars.com/kata/537e18b6147aa838f600001b/train/javascript

function justify(text, width) {
    text = text.split(' ');
    let format = [];
    let string = { length: 0, arr: [] };
    let l = -1;
    for (let i in text) {
        v = text[i];
        if (l + v.length + 1 <= width) {
            l += v.length + 1;
            string.arr.push(v + ' ');
        } else {
            string.length = l;
            string.arr[string.arr.length - 1] = string.arr[string.arr.length - 1].trim();
            format.push(string);
            string = { length: 0, arr: [] };
            string.arr.push(v + ' ');
            l = v.length;
        }
        if (i == text.length - 1) format.push(string);
    }

    format.forEach((v, i) => {
        if (v.arr.length > 1 && i !== Object.keys(format).length - 1) {
            let rest = width - v.length;
            let pos = 0;
            while (rest !== 0) {
                v.arr[pos] = v.arr[pos] + ' '.repeat(Math.ceil(rest / (v.arr.length - pos - 1)));
                rest -= Math.ceil(rest / (v.arr.length - pos - 1));
                pos++;
            }
        }
        console.log(v);
        if (i !== Object.keys(format).length - 1) format[i] = v.arr.join('') + '\n';
        else {
            v.arr[v.arr.length - 1] = v.arr[v.arr.length - 1].trim();
            format[i] = v.arr.join('');
        }
    });
    console.log(format);
    return format.join('');
}

function main() {
    let text =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';

    let width = 30;
    console.log(justify(text, width));
}
if (require.main === module) {
    main();
}

`Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.`;
