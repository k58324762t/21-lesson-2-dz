function login(){
    const login = document.getElementById('login');
    const pass = document.getElementById('pass');

const user ={
    name:login.value,
    username:pass.value
}

const post ={
    method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
}

    fetch('https://jsonplaceholder.typicode.com/users',post).then(
       response => {    
          return response.text();
       }
    ).then(
       text => {
          document.getElementById('result').innerHTML = text;
       }
    );
 }