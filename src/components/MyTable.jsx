import React from 'react';
import { Table } from 'react-bootstrap';

const MyTable = () => {
    return (
        <Table striped bordered>
            <thead>
            <tr>
                <th></th>
                <th className="ml-1">Managing</th>
                <th className="ml-10">Analysing</th>
                <th className="ml-10">Advising</th>
                <th className="ml-10">Designing</th>
                <th className="ml-10">Realising</th>
                <th></th>
                <th>Personal Leadership</th>
                <th>Targeted Interaction</th>
                <th>Future-Oriented Organisation</th>
                <th>Investigative problem solving</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td>User interaction</td>
                <td style={{background: "cadetblue", color: "black"}}>1</td>
                <td style={{background: "cadetblue", color: "black"}}>1</td>
                <td style={{background: "green", color: "black"}}>2</td>
                <td style={{background: "yellow", color: "black"}}>3</td>
                <td style={{background: "yellow", color: "black"}}>3</td>
                <td style={{background: "black", color: "black"}}>_</td>
                <td style={{background: "yellow", color: "black", borderRadius: "40px 0 0 0"}}>3</td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}>3</td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}>3</td>
                <td style={{background: "yellow", color: "black", borderRadius: "0 40px 0 0"}}>3</td>
            </tr>
            <tr>
                <td>Business processes</td>
                <td>0</td>
                <td style={{background: "green", color: "black"}}>2</td>
                <td>0</td>
                <td style={{background: "green", color: "black"}}>2</td>
                <td style={{background: "cadetblue", color: "black"}}>1</td>
                <td style={{background: "black", color: "black"}}>_</td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}></td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}></td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}></td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}></td>
            </tr>
            <tr>
                <td>Software</td>
                <td style={{background: "yellow", color: "black"}}>3</td>
                <td style={{background: "yellow", color: "black"}}>3</td>
                <td style={{background: "yellow", color: "black"}}>3</td>
                <td style={{background: "yellow", color: "black"}}>3</td>
                <td style={{background: "yellow", color: "black"}}>3</td>

                <td style={{background: "black", color: "black"}}>_</td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}></td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}></td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}></td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}></td>

            </tr>
            <tr>
                <td>Hardware</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>

                <td style={{background: "black", color: "black"}}>_</td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}></td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}></td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}></td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}></td>

            </tr>
            <tr>
                <td>Infrastructure</td>
                <td style={{background: "cadetblue", color: "black"}}>1</td>
                <td style={{background: "cadetblue", color: "black"}}>1</td>
                <td style={{background: "cadetblue", color: "black"}}>1</td>
                <td style={{background: "green", color: "black"}}>2</td>
                <td style={{background: "green", color: "black"}}>2</td>

                <td style={{background: "black", color: "black"}}>_</td>
                <td style={{background: "yellow", color: "black", borderRadius: "0 0 0 40px"}}></td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}></td>
                <td style={{background: "yellow", color: "black", borderRadius: 0}}></td>
                <td style={{background: "yellow", color: "black", borderRadius: "0 0  40px 0"}}></td>
            </tr>
            </tbody>
            <br/>
            <div style={{display: "-webkit-box"}}>
                <h1 className="m-3 p-2" style={{background: "cadetblue", color: "black", borderRadius:40}}>Level 1</h1>
                <h1 className="m-3 p-2" style={{background: "green", color: "black",  borderRadius:40}}>Level 2</h1>
                <h1 className="m-3 p-2" style={{background: "yellow", color: "black",  borderRadius:40}}>Level 3</h1>
            </div>
        </Table>
    );
};

export default MyTable;
