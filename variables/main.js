/*
Процесс реализации
Объявите три переменные:
algebra;
geography;
physics;
Задайте переменным значения в соответствии с оценками. Оценки можете проставить на своё усмотрение. Например:
algebra: 5;
geography: 4;
physics: 4;
Составьте выражение, используя переменные и математические операторы и вычислите среднюю оценку за три предмета.
Присвойте результат переменной и выведите его в консоль.
*/

let algebra;
let geography;
let physics;

algebra = 5;
geography = 4;
physics = 4;

console.log((algebra + geography + physics) / 3);

/*
Журнал, который сделала Мария Степановна понравился ее коллегам, поэтому ей пришлось добавить туда личный кабинет. Для начала нужно написать приветственное обращение на экране. Текст обращения: Привет, мир! Меня зовут <ваше имя>.

Процесс реализации

Объявите переменную name и присвойте ей в качестве значения своё имя.

Используя шаблоны для подстановки значений сформируйте соответствующее сообщение и запишите результат в переменную message.

Выведите результат в консоль.
*/

let name = "Николай";
let message = `Привет, мир! Меня зовут ${name}.`;
console.log(message);

/*
Ученику 7 класса ”Б” Васе очень не нравится решать примеры, зато ему нравится программирование. Но пока он не очень хорошо разбирается в нем. Помогите Васе в трудной ситуации и напишите программу, которая решит следующий пример: x * y + 5 * z + x - 1, где x = 2, y = 22, z = 0 и выведет результат на экран.

Процесс реализации:

Объявите три переменные:
x;
y;
z;
Задайте созданным переменным соответствующие значения:
x: 2;
y: 22;
z: 0;
Вычислите ответ для примера x * y + 5 * z + x - 1 и запишите его в переменную result;

Выведите переменную result в консоль с помощью console.log().
*/

let x;
let y;
let z;

x = 2;
y = 22;
z = 0;

let result;
result = (x * y + 5 * z + x - 1);
console.log(result);