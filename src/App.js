import { WrapperComponent } from "./components/wrapperComponent";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://demo7919674.mockable.io")
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <Container maxWidth="lg">
      {data.length && <WrapperComponent data={data} />}
    </Container>
  );
}

export default App;
