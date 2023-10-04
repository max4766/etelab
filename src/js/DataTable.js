import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { 
    field: 'manageNum',
    headerName: '관리번호',
    width: 150
  },
  {
    field: 'equipName',
    headerName: '장비명',
    width: 150
  },
  {
    field: 'ModelName',
    headerName: '모델명',
    width: 150
  },
  {
    field: 'location',
    headerName: '위치',
    width: 150
  }
];

const rows = [
  { id: 1, manageNum: 'gastest', equipName: 'gastest', ModelName: '0101', location: '신뢰성시험실' },
  { id: 2, manageNum: 'gastest1', equipName: 'gastest1', ModelName: 'gastest1', location: '신뢰성시험실' },
  { id: 3, manageNum: 'ETE-EQ_15', equipName: 'PTC항온항습기', ModelName: 'SE-600-10-10', location: '신뢰성시험실' },
  { id: 4, manageNum: 'ET_GAS_01', equipName: '가스측정기', ModelName: 'test', location: '신뢰성시험실' },
  { id: 5, manageNum: '001-002TES', equipName: '분석시험기', ModelName: '파나카메라', location: '복합시험실' },
  { id: 6, manageNum: '002-002TES', equipName: '시험기TEST', ModelName: '파나카페라', location: '신뢰성시험실' },
  { id: 7, manageNum: 'ETE-EQ_5', equipName: '열충격시험기1', ModelName: 'TS2-100DTW', location: '신뢰성시험실' },
  { id: 8, manageNum: 'ETE-EQ_6', equipName: '열충격시험기2', ModelName: 'TSA-203ES', location: '신뢰성시험실' },
  { id: 9, manageNum: 'ETE-EQ_16', equipName: '열충격시험기3', ModelName: 'TSA-103EL', location: '신뢰성시험실' },
  { id: 10, manageNum: 'ETE-EQ_17', equipName: '열충격시험기4', ModelName: 'TSA-103EL', location: '신뢰성시험실' },
  { id: 11, manageNum: 'ETE-EQ_17', equipName: '열충격시험기4', ModelName: 'TSA-103EL', location: '신뢰성시험실' },
  { id: 12, manageNum: 'ETE-EQ_1', equipName: '온도시험기1', ModelName: 'ARGF-0800-10', location: '신뢰성시험실' },
  { id: 13, manageNum: 'ETE-EQ_1', equipName: '온도시험기1', ModelName: 'ARGF-0800-10', location: '신뢰성시험실' },
];

export default function DataGridDemo() {
  return (
    <>
      <p></p>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
}