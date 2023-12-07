// import { Navigate } from 'react-router-dom';

import { useGetObjQuery } from "../store/Service/Service";

const Home = () => {
const {data , isLoading} = useGetObjQuery()

if(isLoading) return <div>идет загрузка</div>

console.log(data);
  return (
    <div>

    </div>
  );
};

export default Home;
