import React from "react";

const encabezadosNormales = React.useMemo(
  () => [
    {
      Header: "First Name",
      accessor: "firstName",
      Footer: "First Name",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
  ],
  []
);

const encabezadoConCeldaPerzonalizada = React.useMemo(
  () => [
    {
      Header: "Age",
      accessor: "age",
      Cell: (e: any) => <strong>{e.value}</strong>,
    },
  ],
  []
);

const agrupacionEncabezados = React.useMemo(
  () => [
    {
      Header: "Name",
      columns: [
        {
          Header: "First Name",
          accessor: "firstName",
          Footer: "First Name",
        },
        {
          Header: "Last Name",
          accessor: "lastName",
        },
      ],
    },
    {
      Header: "Info",
      columns: [
        {
          Header: "Edad",
          accessor: "age",
        },
        {
          Header: "Visits",
          accessor: "visits",
        },
      ],
    },
  ],
  []
);
