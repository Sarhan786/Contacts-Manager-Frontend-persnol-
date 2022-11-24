import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userData } from '../../../CommonUtils/Context'
import { useContext } from 'react'

const Delete = () => {
    const { setOnDeleteButtonClick } = useContext(userData)
    return (
        <>
            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom" onClick={() => { setOnDeleteButtonClick(true) }}><DeleteOutlineIcon fontSize="medium" /> Delete</button>
        </>
    )
}

export default Delete;