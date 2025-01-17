import React, { useEffect, useState } from "react";
import { H1, H2, Table, TableHead, TableBody, TableRow, TableCell } from "@adminjs/design-system";
import { ApiClient, useCurrentAdmin } from "adminjs";
import { type DashboardDataTypes } from "../handlers/dashboard.js";


const Dashboard = () => {

    console.log("Componente Dashboard foi montado");

    const api = new ApiClient();
    const [currentAdmin] = useCurrentAdmin();
    const [resources, setResources] = useState<DashboardDataTypes>();

    useEffect(() => {
        api.getDashboard<DashboardDataTypes>().then((res) => { 
            console.log("Dados recebidos:", res.data);
            setResources(res.data);
    })
    .catch((err) => {
        console.log("Erro ao buscar os dados do dashboard: ", err);
    });
             
    }, []);

    return (
        <section style={{ padding: "1.5rem" }}>
      <H1>Seja bem-vindo, {currentAdmin?.firstName}!</H1>

      <section style={{ backgroundColor: "#FFF", padding: "1.5rem" }}>
        <H2>Resumo</H2>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#FF0043" }}>
              <TableCell style={{ color: "#FFF" }}>Recurso</TableCell>
              <TableCell style={{ color: "#FFF" }}>Registros</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resources ? (
              Object.entries(resources).map(([resource, count]) => (
                <TableRow key={resource}>
                  <TableCell>{resource}</TableCell>
                  <TableCell>{count}</TableCell>
                </TableRow>
              ))
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </section>
    </section>
    );
}

export default Dashboard;