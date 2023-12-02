import { useState } from "react";
import NavBar from "./components/navbar";
import NewsBoard from "./components/newsboard";

export const App = () => {  
  
  const [category, setCategory] = useState("general");

  return (
    <div>
      <NavBar setCategory={setCategory}/>
      <NewsBoard category={category}></NewsBoard>
    </div>    
  )
}

export default App;
