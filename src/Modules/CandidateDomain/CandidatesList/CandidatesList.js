import React from "react";
import Widget from "components/Widget";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from "react-router-dom";

const CandidatesTable = ({ data,
    onCandidateEditClick,
    candidateStatus,
    onChangeCandidateStatus,
    candidateStagefilter
}) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                <div>
                    <FormControl style={{ width: '20%', paddingLeft: '1%' }}>
                        <InputLabel style={{ paddingLeft: '5%' }}>Filter Jobs</InputLabel>
                        <Select
                            name='candidateStatus'
                            value={candidateStatus}
                            onChange={onChangeCandidateStatus}
                        >
                            <MenuItem value='All'>All</MenuItem>
                            <MenuItem value='Active'>Active</MenuItem>
                            <MenuItem value='Rejected'>Rejected</MenuItem>
                            <MenuItem value='Hired'>Hired</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <hr />
                <table border='2' className='customers' style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            <th>Select</th>
                            <th>Id</th>
                            <th >Name</th>
                            <th >Phone No.</th>
                            <th >Recruiter</th>
                            <th >Stage</th>
                            <th >Applied Date</th>
                        </tr>
                        {
                            data.map((candidates, index) => {
                                return (
                                    <tr onClick={() => onCandidateEditClick(candidates)} key={index}>
                                        <td>
                                            1
                            </td>
                                        <td>
                                            {index}
                                        </td>
                                        <td>
                                            <Link to='/candidateDetails'> {candidates.name}</Link>
                                        </td>
                                        <td>
                                            {candidates.phoneNo}
                                        </td>
                                        <td>
                                            {candidates.recruiter}
                                        </td>
                                        <td >
                                            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                                <div style={{ color: candidates.stage === 'Hired' &&candidateStagefilter=== 'Hired' ? 'red' :
                                                 candidates.stage === 'Ready For Hire' &&candidateStagefilter=== 'Ready For Hire' ? 'blue':
                                                 candidates.stage==='Ready To Apply' &&candidateStagefilter==='Ready To Apply' ?'maroon':
                                                 candidates.stage==='InterView' &&candidateStagefilter==='InterView' ?'aqua' :
                                                 candidates.stage==='New Application' &&candidateStagefilter==='New Application'?'orange' :
                                                 candidates.stage==='Short List' &&candidateStagefilter==='Short List' ?'olive' :
                                                 candidates.stage==='Background Check' &&candidateStagefilter==='Background Check'?'purple' :
                                                 candidates.stage==='Assesments' &&candidateStagefilter==='Assesments'?'gray' :
                                                 candidates.stage==='Offers' &&candidateStagefilter==='Offers'?'green' : '' 
                                                 }}>
                                                    {candidates.stage}
                                                </div>
                                                <div>
                                                    <CreateIcon fontSize='small' className='stages' onClick={() => onCandidateEditClick(candidates)} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {candidates.appliedDate}
                                        </td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default CandidatesTable;