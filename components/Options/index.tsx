import * as React from 'react';
import {FormControl, FormControlLabel, InputLabel, MenuItem, OutlinedInput, Select, Switch} from "@mui/material";
import styled from "styled-components";

import OptionsController from "./controller";

const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

interface OptionsProps {
  setCopyString: (str: string) => void;
}

const Options: React.FC<OptionsProps> = ({setCopyString}) => {

  const [packageManager, setPackageManager] = React.useState(OptionsController.packageManagers[0].id);
  const [withTypescript, setWithTypescript] = React.useState(true);
  const [framework, setFramework] = React.useState(OptionsController.frameworks[0].id);

  React.useEffect(() => {

    let tempString: string = "";
    switch (framework) {
      case "vanilla":
        switch (packageManager) {
          case "yarn":
            tempString = "yarn create react-app my-app";
            break;
          case "npm":
            tempString = "npm init react-app my-app";
            break;
          case "npx":
            tempString = "npx create-react-app my-app";
            break;
        }
        if (withTypescript) {
          tempString += " --template typescript"
        }
        break;
      case "nextjs":
        switch (packageManager) {
          case "yarn":
            tempString = "yarn create next-app";
            break;
          case "npm":
            tempString = "npm init create-next-app@latest";
            break;
          case "npx":
            tempString = "npx create-next-app@latest";
            break;
        }
        if (withTypescript) {
          tempString += " typescript"
        }
        break;
      // todo: remove yarn and npm / block them if remix chosen
      case "remix":
        switch (packageManager) {
          case "yarn":
            tempString = "yarn create remix";
            break;
          case "npm":
            tempString = "npm init create-next-app@latest";
            break;
          case "npx":
            tempString = "npx create-remix@latest";
            break;
        }
        break;
    }


    setCopyString(tempString);
  }, [packageManager, withTypescript, framework]);


  return (
    <OptionsWrapper>
      <FormControl sx={{minWidth: 140}}>
        <InputLabel id="framework" sx={{minWidth: 140}}>Vanilla or Framework</InputLabel>
        <Select
          labelId="framework"
          id="framework"
          value={framework}
          label="Vanilla or Framework"
          onChange={(event) => {
            setFramework(event.target?.value ?? framework);
          }}
          input={<OutlinedInput label="Vanilla or Framework"/>}
        >
          {
            OptionsController.frameworks?.map((item) => {
              return <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>
            })
          }
        </Select>
      </FormControl>

      <FormControl sx={{minWidth: 120}}>
        <InputLabel id="package-manager" sx={{minWidth: 140}}>Package Manager</InputLabel>
        <Select
          labelId="package-manager"
          id="package-manager"
          value={packageManager}
          label="Package Manager"
          onChange={(event) => {
            setPackageManager(event.target?.value ?? packageManager);
          }}
          input={<OutlinedInput label="Package Manager"/>}
        >
          {
            OptionsController.packageManagers?.map((item) => {
              return <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>
            })
          }
        </Select>
      </FormControl>
      <FormControl sx={{minWidth: 120}}>
        <FormControlLabel
          control={
            <Switch checked={withTypescript}
                    onChange={(event, checked) => setWithTypescript(checked)}
                    name="Typescript"/>
          }
          label="TypeScript"
        />
      </FormControl>
    </OptionsWrapper>
  )
};

export default React.memo<OptionsProps>(Options);