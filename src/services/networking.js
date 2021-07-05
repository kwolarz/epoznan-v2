// export const getData = async (path) => {
//     try {
//         let response = await fetch(path);
//         let json = await response.json();
//         return json;
//       } catch (error) {
//         console.error(error);
//       }
// };
import { useState } from 'react';



export const getData = path => {
    const [data, setData] = useState([]);

    fetch(path)
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error(error))
    .finally(() => { return data; });
};

