// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://218.145.155.151:9080/workTemplate/management')
//       .then(response => setData(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.post('https://jsonplaceholder.typicode.com/todos', {
//       userId: 1,
//       title: 'delectus aut autem',
//       completed: false
//     })
//       .then(response => setData(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// 위에 놈은 response.data가 배열이 아니여서 오류였다!




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/todos')
//       .then(response => setData(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div>
//       <ul>
//         {data && data.map(item => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      userId: 1,
      title: 'delectus aut autem',
      completed: false
    })
      .then(response => setData([response.data]))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

