import { createSelector } from 'reselect';

export const tableSelector = (state: any) => state.table;
export const employeesDataSelector = (state: any) => state.table.currentEmployeesData;

export const filteredEmployeesSelector = (value: string) => createSelector(
  employeesDataSelector,
  (data: any) => data.filter((item: any) => {
    if (value !== '') {
      const regexp = new RegExp(`^${value}`, 'i');
      return regexp.test(item.name);
    }
    return true;
  })
)

export const employeeSelector = (id: number) => createSelector(
  employeesDataSelector,
  (data: any) => data.find((item: any) => {
    return item.id === id;
  })
);
