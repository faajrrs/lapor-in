import ButtonFilter from "./ButtonFilter";
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";

export default function Filter() {
  return (
    <div class="filters-container">
      <div class="filter-group">
        <FilterInput
          type="search"
          placeholder="Pencarian"
          className="filter-input"
          ariaLabel="Filter by search"
        />
        <FilterInput
          type="date"
          placeholder="dd/mm/yyyy"
          className="filter-input"
          ariaLabel="Filter by date"
        />
        <FilterSelect>
          <option value="" key="">
            Status
          </option>
          <option value="" key="">
            Masuk
          </option>
          <option value="" key="">
            Proses
          </option>
          <option value="" key="">
            Selesai
          </option>
        </FilterSelect>
        <ButtonFilter
          type="button"
          className="btn btn-primary"
          text="Terapkan"
        />
      </div>
      <div class="filter-group">
        <ButtonFilter type="button" className="btn btn-primary" text="Cetak" />
        <ButtonFilter type="button" className="btn btn-danger" text="Hapus" />
      </div>
    </div>
  );
}
