let num = +prompt('введите число, а мы проверим его кратность к 5')
while (!Number.isInteger(num)){ //проверяю число ли вводит пользователь и целое ли число
  num = +prompt('введите только целое число')
}
if( num < 5){
  console.log('число меньше 5')
}
for(let i = 0; i < num; i++){
  if(i % 5 === 0){
    console.log(' M кратные пяти',i)
  }

}
for (let j = 2; j < num; j++){
  if (num % j === 0){
    console.log('N простые числа',j)
  }
}
