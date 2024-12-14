import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ProduitList } from "./produit/ProduitList";
import { ProduitCreate } from "./produit/ProduitCreate";
import { ProduitEdit } from "./produit/ProduitEdit";
import { ProduitShow } from "./produit/ProduitShow";
import { LigneDeVenteList } from "./ligneDeVente/LigneDeVenteList";
import { LigneDeVenteCreate } from "./ligneDeVente/LigneDeVenteCreate";
import { LigneDeVenteEdit } from "./ligneDeVente/LigneDeVenteEdit";
import { LigneDeVenteShow } from "./ligneDeVente/LigneDeVenteShow";
import { VenteList } from "./vente/VenteList";
import { VenteCreate } from "./vente/VenteCreate";
import { VenteEdit } from "./vente/VenteEdit";
import { VenteShow } from "./vente/VenteShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { FactureList } from "./facture/FactureList";
import { FactureCreate } from "./facture/FactureCreate";
import { FactureEdit } from "./facture/FactureEdit";
import { FactureShow } from "./facture/FactureShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AuthService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Produit"
          list={ProduitList}
          edit={ProduitEdit}
          create={ProduitCreate}
          show={ProduitShow}
        />
        <Resource
          name="LigneDeVente"
          list={LigneDeVenteList}
          edit={LigneDeVenteEdit}
          create={LigneDeVenteCreate}
          show={LigneDeVenteShow}
        />
        <Resource
          name="Vente"
          list={VenteList}
          edit={VenteEdit}
          create={VenteCreate}
          show={VenteShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Facture"
          list={FactureList}
          edit={FactureEdit}
          create={FactureCreate}
          show={FactureShow}
        />
      </Admin>
    </div>
  );
};

export default App;
