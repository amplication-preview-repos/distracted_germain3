import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ReelList } from "./reel/ReelList";
import { ReelCreate } from "./reel/ReelCreate";
import { ReelEdit } from "./reel/ReelEdit";
import { ReelShow } from "./reel/ReelShow";
import { TextInputList } from "./textInput/TextInputList";
import { TextInputCreate } from "./textInput/TextInputCreate";
import { TextInputEdit } from "./textInput/TextInputEdit";
import { TextInputShow } from "./textInput/TextInputShow";
import { CustomizationList } from "./customization/CustomizationList";
import { CustomizationCreate } from "./customization/CustomizationCreate";
import { CustomizationEdit } from "./customization/CustomizationEdit";
import { CustomizationShow } from "./customization/CustomizationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Kahani"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Reel"
          list={ReelList}
          edit={ReelEdit}
          create={ReelCreate}
          show={ReelShow}
        />
        <Resource
          name="TextInput"
          list={TextInputList}
          edit={TextInputEdit}
          create={TextInputCreate}
          show={TextInputShow}
        />
        <Resource
          name="Customization"
          list={CustomizationList}
          edit={CustomizationEdit}
          create={CustomizationCreate}
          show={CustomizationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
