import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import Import from '../../ImportComponent/Import';
import Export from '../../Export/Export';
import Delete from '../../Delete/Delete'

const Button = () => {

  return (
    <>
      <div style={{ dispaly: "grid", girdTemplateColoums: "60% 40%" }}>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"><CalendarMonthIcon /> SelectDate <KeyboardArrowDownIcon size="small" /></button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right"><FilterListIcon size="small" /> Filters |<KeyboardArrowDownIcon size="small" /></button>
      </div>
      <div>
        <Delete />
        <Import />
        <Export />
      </div>

    </>
  )
}

export default Button;