# Group-an-array-of-objects-by-key
JS, ES6, JavaScript


function groupBy(list, props) {
  return list.reduce((a, b) => {
     (a[b[props]] = a[b[props]] || []).push(b);
     return a;
  }, {});
}

let users = [{
  id: 1,
  group: 'user',
  name: 'User #1',
}, {
  id: 2,
  group: 'admin',
  name: 'User #2',
}, {
  id: 3,
  group: 'moderator',
  name: 'User #3',
}, {
  id: 4,
  group: 'user',
  name: 'User #4',
}, {
  id: 5,
  group: 'moderator',
  name: 'User #5',
}];


groupBy(users, 'group');


//Out put

{
  "user": [
    {
      "id": 1,
      "group": "user",
      "name": "User #1"
    },
    {
      "id": 4,
      "group": "user",
      "name": "User #4"
    }
  ],
  "admin": [
    {
      "id": 2,
      "group": "admin",
      "name": "User #2"
    }
  ],
  "moderator": [
    {
      "id": 3,
      "group": "moderator",
      "name": "User #3"
    },
    {
      "id": 5,
      "group": "moderator",
      "name": "User #5"
    }
  ]
}
