import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";

const App = () => {
  let [data, setData] = React.useState("");
  // let name=[
  //     {label:"a"},
  //     {label:"b"},
  //     {label:"c"},
  //     {label:"d"},
  //     {label:"e"},
  //     {label:"f"},
  // ]
  let colors = ["red", "black", "blue", "yellow", "green"];
  let handleChange = (e, x) => {
    console.log(x);
    setData(x);
  };
  return (
    <div>
      <h1>COLOR : {data}</h1>
      {/* <TextField label="enter names" sx={{width:500}}/><br /><br />
        <Autocomplete disableCloseOnSelect  clearOnEscape sx={{width:500}} options={name} renderInput={ (x)=><TextField {...x} label="names"/>}
        /> */}
      <Autocomplete
        clearOnEscape
        sx={{ width: 500 }}
        options={colors}
        renderInput={(x) => <TextField {...x} label="colors" />}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
