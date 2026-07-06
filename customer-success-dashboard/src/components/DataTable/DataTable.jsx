import React from 'react';
import './DataTable.css';

/**
 * DataTable Component
 * Tabla de datos con formato de filas alternadas y totales
 * Tipo: Tabla de datos con totales (Data Table)
 */
const DataTable = ({ 
  title = "Resumen por Región",
  data = null,
  columns = null,
  showTotal = true
}) => {
  
  // Default columns
  const defaultColumns = [
    { key: 'region', label: 'Región', align: 'left' },
    { key: 'centros', label: 'Centros', align: 'right' },
    { key: 'arr', label: 'ARR (M€)', align: 'right' },
    { key: 'churn', label: 'Churn %', align: 'right' }
  ];

  // Default data based on mockup
  const defaultData = [
    { region: 'España', centros: 980, arr: '24,50', churn: '6,8%' },
    { region: 'LATAM', centros: 350, arr: '8,20', churn: '9,2%' },
    { region: 'Portugal', centros: 180, arr: '3,75', churn: '5,4%' },
    { region: 'Otros', centros: 50, arr: '1,00', churn: '12,1%' }
  ];

  // Total row
  const totalRow = {
    region: 'Total',
    centros: 1560,
    arr: '37,45',
    churn: '7,42%'
  };

  const tableColumns = columns || defaultColumns;
  const tableData = data || defaultData;

  return (
    <section className="data-table-section">
      {/* Section Title */}
      <h2 className="data-table-section__title">{title}</h2>
      
      {/* Table */}
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              {tableColumns.map((col, index) => (
                <th 
                  key={col.key} 
                  className={`data-table__th data-table__th--${col.align}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className="data-table__row">
                {tableColumns.map((col) => (
                  <td 
                    key={col.key} 
                    className={`data-table__td data-table__td--${col.align}`}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
            {showTotal && (
              <tr className="data-table__row data-table__row--total">
                {tableColumns.map((col) => (
                  <td 
                    key={col.key} 
                    className={`data-table__td data-table__td--${col.align} data-table__td--total`}
                  >
                    {totalRow[col.key]}
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DataTable;
