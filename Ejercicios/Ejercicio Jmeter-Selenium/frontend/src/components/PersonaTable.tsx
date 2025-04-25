import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { useState } from "react";

const MiComponente = () => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 5,
    page: 0,
  });

  const columnas: GridColDef[] = [
    { field: "carnet", headerName: "Carnet", width: 130 },
    { field: "nombre", headerName: "Nombre", width: 200 },
    // más columnas...
  ];

  const personas = [
    { carnet: "123", nombre: "Juan" },
    { carnet: "456", nombre: "María" },
    // más filas...
  ];

  const loading = false;

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={personas}
        columns={columnas}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5]}
        loading={loading}
        getRowId={(row) => row.carnet}
      />
    </div>
  );
};

export default MiComponente;
