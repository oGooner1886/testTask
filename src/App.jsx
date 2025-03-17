import { useEffect, useState } from "react";
import { instance } from "./api/api";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Context from "./Context/Context";
import Preloader from "./components/Common/Preloader/Preloader";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await instance.get("/fronttemp");
      setData(response.data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <Preloader />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  const context = {
    data,
    loading,
    error,
  };

  return (
    <Context.Provider value={context}>
      <Header />
      <Main />
    </Context.Provider>
  );
}

export default App;
