import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const EmployerSectionOne = ({ open,
    onCloseSection_1,
    onSectionValuesChange,
    onSaveSection,
    jobStatus,
    country,
    jobCreatedDate,
    changeDateSelected,
    externalJobTitle,
    internalJobTitle,
    numberOfOpenings,
    jobSummary,
    houseNo,
    street,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    softSkill1,
    softSkill2,
    softSkill3,
    softSkill4,
    softSkill5,
    city,
    province,
    zipCode,
    targetCountry,
    createdBy,
    changeBy
}) => {

    return (
        <div>
            <Dialog aria-labelledby="form-dialog-title" maxWidth="sm" open={open} onClose={onCloseSection_1}>
                <DialogTitle id="form-dialog-title">Basic Info</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="externalJobTitle"
                        value={externalJobTitle}
                        label="External Job Title"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Web Developer"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="internalJobTitle"
                        value={internalJobTitle}
                        label="Internal Job Title"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Web Designer"
                        className="profileInfoTextField"
                    />
                    <div className='row'>
                        <div>
                            <FormControl component="fieldset">
                                <FormLabel component="legend"><strong>Job Status</strong></FormLabel>
                                <RadioGroup aria-label="position" name="jobStatus" value={jobStatus} onChange={onSectionValuesChange} row>
                                    <FormControlLabel
                                        value="Open"
                                        control={<Radio color="primary" />}
                                        label="Open"
                                        component="legend"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="Closed"
                                        control={<Radio color="primary" />}
                                        label="Closed"
                                        component="legend"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="Paused"
                                        control={<Radio color="primary" />}
                                        label="Paused"
                                        component="legend"
                                        labelPlacement="start"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                            <TextField
                                margin="dense"
                                name="numberOfOpenings"
                                value={numberOfOpenings}
                                label="Number Of Openings"
                                onChange={onSectionValuesChange}
                                type="number"
                                placeholder="Ex: 2"

                            />
                        </div>
                    </div>
                    <TextField
                        id="standard-multiline-static"
                        name="jobSummary"
                        value={jobSummary}
                        label="Job Summary"
                        onChange={onSectionValuesChange}
                        multiline
                        rows="5"
                        fullWidth
                    />
                    <hr />
                    <FormLabel component="legend"><strong>Job Posting Address</strong></FormLabel>
                    <TextField
                        margin="dense"
                        name="houseNo"
                        value={houseNo}
                        label="House/Flat No."
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: A123"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="street"
                        value={street}
                        label="Street"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: 22C"
                        className="profileInfoTextField"
                    />
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Country</InputLabel>
                        <Select
                            value={country}
                            name='country'
                            onChange={onSectionValuesChange}
                        >
                            <MenuItem value='pakistan'>Pakistan</MenuItem>
                            <MenuItem value='usa'>USA</MenuItem>
                            <MenuItem value='uk'>UK</MenuItem>
                        </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="city"
                        label="City"
                        type="text"
                        value={city}
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Islamabad"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="province"
                        label="Province/State"
                        value={province}
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Federal"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="zipCode"
                        value={zipCode}
                        label="Zip Code"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: 44000"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="targetCountry"
                        value={targetCountry}
                        label="Target Country"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Pakistan"
                        fullWidth
                    />
                    <hr />
                    <FormLabel component="legend"><strong>Add Skills</strong></FormLabel>
                    <TextField
                        margin="dense"
                        name="skill1"
                        value={skill1}
                        label="1. Skill"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Javascript"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="skill2"
                        value={skill2}
                        label="2. Skill"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: React Js"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="skill3"
                        value={skill3}
                        label="3. Skill"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: React Native"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="skill4"
                        value={skill4}
                        label="4. Skill"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Jira"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="skill5"
                        value={skill5}
                        label="5. Skill"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Git Hub"
                        className="profileInfoTextField"
                    />
                    <hr />
                    <FormLabel component="legend"><strong>Add Soft Skills</strong></FormLabel>
                    <TextField
                        margin="dense"
                        name="softSkill1"
                        value={softSkill1}
                        label="1. Skill"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Communication"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="softSkill2"
                        value={softSkill2}
                        label="2. Skill"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Ethics"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="softSkill3"
                        value={softSkill3}
                        label="3. Skill"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: React Native"
                        className="profileInfoTextField"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        margin="dense"
                        name="softSkill4"
                        value={softSkill4}
                        label="4. Skill"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Jira"
                        className="profileInfoTextField"
                    />
                    <TextField
                        margin="dense"
                        name="softSkill5"
                        value={softSkill5}
                        label="5. Skill"
                        type="text"
                        onChange={onSectionValuesChange}
                        placeholder="Ex: Git Hub"
                        className="profileInfoTextField"
                    />
                    <hr />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container >
                            <KeyboardDatePicker
                                className="profileInfoTextField"
                                margin="normal"
                                label="Job Create Date"
                                format="MM/dd/yyyy"
                                value={jobCreatedDate}
                                name='jobCreatedDate'
                                onChange={onSectionValuesChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <KeyboardDatePicker
                                className="profileInfoTextField"
                                margin="normal"
                                label="Job Change Date"
                                format="MM/dd/yyyy"
                                value={changeDateSelected}
                                name='changeDateSelected'
                                onChange={onSectionValuesChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Created By</InputLabel>
                        <Select
                            value={createdBy}
                            name='createdBy'
                            onChange={onSectionValuesChange}
                        >
                            <MenuItem value='Salman'>Salman</MenuItem>
                        </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '45%' }}>
                        <InputLabel>Change By</InputLabel>
                        <Select
                            value={changeBy}
                            name='changeBy'
                            onChange={onSectionValuesChange}
                        >
                            <MenuItem value='Salman'>Salman</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onSaveSection} color="primary">
                        Save
                    </Button>
                    <Button onClick={onCloseSection_1} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default EmployerSectionOne; 