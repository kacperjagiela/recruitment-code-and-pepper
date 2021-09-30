import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface Props {
    options: string[];
    onChange: (option: string) => void;
    label: string;
}

const TypeSelect: React.FC<Props> = ({ options, onChange, label }: Props) => (
    <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel id={`select_input_${label}`}>{label}</InputLabel>
        <Select
            sx={{ textTransform: 'capitalize' }}
            labelId={`select_input_${label}`}
            label={label}
            id={`select_${label}`}
            onChange={(e) => onChange(e.target.value as string)}
        >
            {options.map((option) => (
                <MenuItem key={option} value={option} sx={{ textTransform: 'capitalize' }}>
                    {option.replace(/_/g, ' ')}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);

export default TypeSelect;
