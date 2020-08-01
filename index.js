import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {

    const data = [{
      task: 'Kaplan Test 1',
      status: 'completed',
      quants: '160',
      verbal:'150',
    }, {
      task: 'Ets Prep 1',
      status: 'completed',
      quants: '162',
      verbal:'148',
    },
    {
      task: 'Princeton 1',
      status: 'completed',
      quants: '165',
      verbal:'146',  
    }
    ,
    {
      task: 'Magoosh 1',
      status: 'completed',
      quants: '158',
      verbal:'152',  
    
    },
    {
      task: 'Jamboree 6',
      status: 'completed',
      quants: '158',
      verbal:'152',  
    
    },
    {
      task: 'Manhattan 5',
      status: 'completed',
      quants: '166',
      verbal:'152',  
    
    },
    {
      task: 'Jamboree 4',
      status: 'completed',
      quants: '161',
      verbal:'149',  
    
    },
    {
      task: ' Ets Prep 2',
      status: 'pending',
      quants: '',
      verbal:'',  
    
    }
    ]

    const columns = [{
      Header: 'Test Name',
      accessor: 'task',
    },
    {
      Header: 'Verbal Score',
      accessor: 'verbal',
      Cell: row => {
        if (row.value<=150 && row.value>=140){

        row.styles['backgroundColor'] = 'Crimson';

        }
        else if(row.value>150){
           row.styles['backgroundColor'] = 'lightblue';
        }
        else{
        row.styles['backgroundColor'] = 'white';
        }
        return row.value;
    }
    },
    {
      Header: 'Quants Score',
      accessor: 'quants',
      Cell: row => {
        if (row.value<=160 && row.value>=150){

        row.styles['backgroundColor'] = 'khaki';

        }
        else if(row.value>160){
           row.styles['backgroundColor'] = 'lightblue';
        }
        else{
        row.styles['backgroundColor'] = 'white';
        }
        return row.value;
    }
    },
     {
      Header: 'Status',
      accessor: 'status',
      Cell: row => {
        row.styles['color'] = '#fff';
        row.styles['backgroundColor'] = row.value == 'pending' ? 'red' : 'green';
        return row.value.toUpperCase();
      } 
    },

    ];

    return (
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={5}
        className="-striped -highlight"
      />
    );
  }
}

render(<App />, document.getElementById('root'));
