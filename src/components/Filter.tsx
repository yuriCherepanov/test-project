import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fakeEmployeesData } from "../constants";
import { setEmployeeData } from "../store/table/actions";
import { filteredEmployeesSelector } from "../store/table/selectors";

export function Filter() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const filteredData = useSelector(filteredEmployeesSelector(value));

  useEffect(() => {
    dispatch(setEmployeeData(filteredData));
  }, [value]);
  
  const reset = () => {
    dispatch(setEmployeeData(fakeEmployeesData));
  };

  const filterEmployees = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <form className="filter-container">
      <input
        className="filter-input"
        type="text"
        placeholder="Поиск по ФИО"
        onChange={ filterEmployees }
      />
      <div className="filter-select__mg">
        <select className="filter-select">
          <option value="">Выберите роль</option>
        </select>
      </div>
      <div className="filter-select__mg">
        <select className="filter-select">
          <option value="">Выберите доступ</option>
        </select>
      </div>
      <button
        className="filter-btn"
        type="reset"
        onClick={ reset }
      >Сбросить</button>
    </form>
  );
}
