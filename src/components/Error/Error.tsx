// MUI Elements
import Alert from '@mui/material/Alert'

// Functional Component
import { FC } from 'react'

// Types
import { errorProps } from '../../store/types'


const Error: FC<errorProps> = ({ error }) => {

    return <Alert severity="error">{error}</Alert>
}

export default Error