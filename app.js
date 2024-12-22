
let button = document.querySelector('#bn1')
let span = document.querySelector('#sn1')
button.addEventListener('click', () => {
    let input = document.querySelector('#in1')
    console.log(input.value)
    if (input.value < 0) {
        span.innerHTML = 'отрицательное'
    }else{
        span.innerHTML = 'обычное'
    }
})
let button2 = document.querySelector('#bn2')
let span2 = document.querySelector('#sn2')
button2.addEventListener('click', () => {
    let input2 = document.querySelector('#in2')
    console.log(input2.value)
span2.innerHTML = input2.value.length
})
let button3 = document.querySelector('#bn3')
let span3 = document.querySelector('#sn3')
button3.addEventListener('click', () => {
    let input3 = document.querySelector('#in3')
    console.log(input3.value)
    let str = input3.value
    let last = str.length - 1;
    span3.innerHTML = str[last]
})
let button4 = document.querySelector('#bn4')
let span4 = document.querySelector('#sn4')
button4.addEventListener('click', () => {
    let input4 = document.querySelector('#in4')
    console.log(input4.value)
    if (input4.value % 2 == 0) {
        span4.innerHTML = 'четное'
    }else{
        span4.innerHTML = 'не четное'
    }
})

let button5 = document.querySelector('#bn5')
let span5 = document.querySelector('#sn5')
button5.addEventListener('click', () => {
    let input5 = document.querySelector('#in5')
    let input25 = document.querySelector('#i2n5')
    console.log(input5.value)
    let str1 = input5.value
    let last1 = str1[0];
    let str2 = input25.value
    let last2 = str2[0];
if (last1 == last2){
    span5.innerHTML = 'совпадает'
}else{span5.innerHTML = 'не совпадает'}
})
let button6 = document.querySelector('#bn6')
let span6 = document.querySelector('#sn6')
button6.addEventListener('click', () => {
    let input6 = document.querySelector('#in6')
    console.log(input6.value)
    let str6 = input6.value
    let last6 = str6.length - 1;
    let second6 = str6.length - 2;
if(str6[last6] == 'ь'){
    span6.innerHTML = str6[second6]
}else{span6.innerHTML = str6[last6]}
})
let button7 = document.querySelector('#bn7')
let span7 = document.querySelector('#sn7')
button7.addEventListener('click', () => {
    let input7 = document.querySelector('#in7')
    console.log(input7.value)
    let str7 = input7.value
    let last1 = str7[0];
span7.innerHTML = last1
})
let button8 = document.querySelector('#bn8')
let span8 = document.querySelector('#sn8')
button8.addEventListener('click', () => {
    let input8 = document.querySelector('#in8')
    console.log(input8.value)
    let str8 = input8.value
    let last2 = str8.length - 1
span8.innerHTML = str8[last2]
})
let button9 = document.querySelector('#bn9')
let span9 = document.querySelector('#sn9')
button9.addEventListener('click', () => {
    let input9 = document.querySelector('#in9')
    console.log(input9.value)
    let str9 = input9.value  
    let last3 = str9.length - 1
   span9.innerHTML = Number(str9[0]) + Number(str9[last3])
})
let button10 = document.querySelector('#bn10')
let span10 = document.querySelector('#sn10')
button10.addEventListener('click', () => {
    let input10 = document.querySelector('#in10')
    console.log(input10.value)
    span10.innerHTML = input10.value.length
})
let button11 = document.querySelector('#bn11')
let span11 = document.querySelector('#sn11')
button11.addEventListener('click', () => {
    let input11 = document.querySelector('#in11')
    let input211 = document.querySelector('#i2n11')
    console.log(input11.value)
    let str11 = input11.value
    let last1 = str11[0];
    let str211 = input211.value
    let last2 = str211[0];
if (last1 == last2){
    span11.innerHTML = 'совпадает'
}else{span11.innerHTML = 'не совпадает'}
})
let button12 = document.querySelector('#bn12')
let span12 = document.querySelector('#sn12')
button12.addEventListener('click', () => {
    let input12 = document.querySelector('#in12')
    console.log(input12.value)
    let str12 = input12.value
        let second12 = str12.length - 2;
if (str12.length > 1) {
    span12.innerHTML = str12[second12]
}else {
    span12.innerHTML = ''
}
})
let button13 = document.querySelector('#bn13')
let span13 = document.querySelector('#sn13')
button13.addEventListener('click', () => {
    let input13 = document.querySelector('#in13')
    let input213 = document.querySelector('#i2n13')
    let str13 = input13.value
    let str213 = input213.value
    let res1 = Number(str13)/Number(str213)
    let res2 = Math.round(res1);
span13.innerHTML = res2
})
let button14 = document.querySelector('#bn14')
let span14 = document.querySelector('#sn14')
button14.addEventListener('click', () => {
    let input14 = document.querySelector('#in14')
    let input214 = document.querySelector('#i2n14')
    let str14 = input14.value
    let str214 = input214.value
    let res = 0;
for (let i = str14; i <= str214 ; i++) {
res = Number(res) + Number(i);
}
console.log(Number(res))
span14.innerHTML = res
})
