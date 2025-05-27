import { useState } from "react";
import ButtonFilter from "./ButtonFilter";
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";

export default function Filter({ filterReport}) {
  const [search, setSearch] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    filterReport({ search, tanggal, status });
  }

  function handleReset() {
    setSearch("");
    setTanggal("");
    setStatus("");
    filterReport({ search: "", tanggal: "", status: "" });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="filters-container">
        <div className="filter-group">
          <FilterInput
            type="search"
            placeholder="Cari judul laporan..."
            className="filter-input"
            ariaLabel="Filter by search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FilterInput
            type="date"
            placeholder="dd/mm/yyyy"
            className="filter-input"
            ariaLabel="Filter by date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
          <FilterSelect
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="" key="">
              Status
            </option>
            <option value="masuk" key="1">
              Masuk
            </option>
            <option value="proses" key="2">
              Proses
            </option>
            <option value="selesai" key="3">
              Selesai
            </option>
          </FilterSelect>
          <ButtonFilter
            type="submit"
            className="btn btn-primary"
            text="Terapkan"
          />
          <ButtonFilter
            type="button"
            className="btn btn-danger"
            text="Reset"
            onClick={handleReset}
          />
        </div>
        <div className="filter-group">
          <ButtonFilter
            type="button"
            className="btn btn-primary"
            text="Cetak"
          />
          <ButtonFilter type="button" className="btn btn-danger" text="Hapus" />
        </div>
      </div>
    </form>
  );
}
