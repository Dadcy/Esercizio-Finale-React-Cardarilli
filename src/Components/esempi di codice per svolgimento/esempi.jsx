// import React, { useState } from 'react';
// import axios from 'axios';

// const MyComponent = () => {
//   const [data, setData] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleUpdate = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axios.put('/api/data', data);
//       setData(response.data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     setIsLoading(true);
//     try {
//       await axios.delete('/api/data');
//       setData({});
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       {isLoading && <p>Caricamento...</p>}
//       {error && <p>Errore: {error}</p>}
//       {data && <p>{data.value}</p>}
//       <button onClick={handleUpdate}>Aggiorna</button>
//       <button onClick={handleDelete}>Elimina</button>
//     </div>
//   );
// };

// export default MyComponent;
