import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const LisenceAndCertification = ({ open,
    handleClose,
    onChangeLisenceInfo,
    data
}) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" >
                <DialogTitle id="form-dialog-title">Add Certification And Trainings</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="certificationName"
                        label="Name"
                        type="text"
                        value={data.certificationName}
                        onChange={onChangeLisenceInfo}
                        placeholder="Ex: CCNA"
                        fullWidth
                        required
                    />
                    
                    <TextField
                        margin="dense"
                        name="credentialId"
                        label="Credential ID"
                        type="text"
                        value={data.credentialId}
                        onChange={onChangeLisenceInfo}
                        fullWidth
                        placeholder="Enter Credential ID"
                        required
                    />
                    <TextField
                        margin="dense"
                        name="organization"
                        label="Issuing Organization"
                        type="text"
                        value={data.organization}
                        onChange={onChangeLisenceInfo}
                        fullWidth
                        placeholder="Ex: Cisco"
                        required
                    />
                    <div className='row'>
                        <div style={{ width: '68%' }}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid >
                                    <KeyboardDatePicker
                                        className="educationDatePickerFiled"
                                        margin="normal"
                                        id='certificationStartDate'
                                        label="Issue Date"
                                        format="MM/dd/yyyy"
                                        value={data.certificationIssueDate}
                                        name='educationStartDate'
                                        onChange={(e, date, name) => onChangeLisenceInfo(e, date, 'certificationIssueDate')}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        required
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <KeyboardDatePicker
                                        className="educationDatePickerFiled"
                                        margin="normal"
                                        label="End Date"
                                        format="MM/dd/yyyy"
                                        value={data.certificationEndDate}
                                        name='certificationEndDate'
                                        onChange={(e, date, name) => onChangeLisenceInfo(e, date, 'certificationEndDate')}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        required
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </div>
                        <div >
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="This credential does not expire"
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <TextField
                        name="score"
                        label="Score"
                        fullWidth
                        value={data.score}
                        onChange={onChangeLisenceInfo}
                        placeholder="Enter Credential URL"
                        required
                    />
                    <TextField
                        name="credentialUrl"
                        label="Credential URL"
                        fullWidth
                        value={data.credentialUrl}
                        onChange={onChangeLisenceInfo}
                        placeholder="Enter Credential URL"
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default LisenceAndCertification; 