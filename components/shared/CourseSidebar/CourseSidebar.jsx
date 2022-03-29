import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const CourseSidebar = () => {
  return (
    <div>
      <Box>
        <Typography sx={{ fontSize: 15 }} variant="subtitle1">
          Sort By
        </Typography>
        <Box sx={{ my: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Option</InputLabel>
            <Select label="Select Option">
              <MenuItem value={10}>Option 1</MenuItem>
              <MenuItem value={20}>Option 2</MenuItem>
              <MenuItem value={30}>Option 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* Certifications Platforms */}
        <Box sx={{ my: 3 }}>
          <Typography sx={{ fontSize: 16, fontWeight: 700 }} variant="h5">
            Certifications Platforms
          </Typography>
          <FormGroup sx={{ my: 2 }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Amazon Web Services"
            />
            <FormControlLabel control={<Checkbox />} label="Microsoft Azure" />
            <FormControlLabel
              control={<Checkbox />}
              label="Google Cloud Platform"
            />
            <FormControlLabel control={<Checkbox />} label="Salesforce" />
            <FormControlLabel control={<Checkbox />} label="VMWare" />
            <FormControlLabel control={<Checkbox />} label="Dataiku " />
          </FormGroup>
        </Box>
        {/* Job Roles */}
        <Box sx={{ my: 3 }}>
          <Typography sx={{ fontSize: 16, fontWeight: 700 }} variant="h5">
            Job Roles
          </Typography>
          <FormGroup sx={{ my: 2 }}>
            <FormControlLabel control={<Checkbox />} label="Cloud Architect" />
            <FormControlLabel control={<Checkbox />} label="Data Engineer" />
            <FormControlLabel
              control={<Checkbox />}
              label="Google Cloud Platform"
            />
            <FormControlLabel control={<Checkbox />} label="DevOps Engineer" />
            <FormControlLabel
              control={<Checkbox />}
              label="Machine Learning Engineer"
            />
            <FormControlLabel control={<Checkbox />} label="Administrator" />
            <FormControlLabel
              control={<Checkbox />}
              label="Solutions Architect"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Data Fundamentals"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Data Fundamentals"
            />
          </FormGroup>
        </Box>
      </Box>
    </div>
  );
};

export default CourseSidebar;
