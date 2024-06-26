/* INTRODUÇÃO AO TYPESCRIPT */

interface User {
  name: string;
  bio: string;
  age: number;
}

function sumAge(users: User[]) {
  let sum = 0;

  for(const user of users) {
    sum += user.age;
  }

  return sum;
}

const sumOfAllUserAges = sumAge([
  {
    name: 'Carlos',
    bio: 'Full Stack Developer',
    age: 27,
  },
  {
    name: 'Filipe',
    bio: 'Front-End Developer',
    age: 28,
  }
])

console.log(sumOfAllUserAges);
