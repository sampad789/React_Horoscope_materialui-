import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import HoroscopeSimpleCard from '../Views/HoroscopeSimpleCard';

const signs  = [
    {
      value: 'Aries',
      label: 'Aries',
    },
    {
      value: 'Taurus',
      label: 'Taurus',
    },
    {
      value: 'Gemini',
      label: 'Gemini',
    },
    {
      value: 'Cancer',
      label: 'Cancer',
    },
    {
        value: 'Leo',
        label: 'Leo',
      },
      {
        value: 'Virgo',
        label: 'Virgo',
      },
      {
        value: 'Libra',
        label: 'Libra',
      },
      {
        value: 'Scorpio',
        label: 'Scorpio',
      },
      {
        value: 'Capricorn',
        label: 'Capricorn',
      },

       {
      value: 'Aquarius',
      label: 'Aquarius',
    },
    {
        value: 'Pisces',
        label: 'Pisces',
      },
      {
        value: 'Sagittarius',
        label: 'Sagittarius',
      },
  ];

class Basic extends Component {
    
    constructor(props){
        super(props);
        this.state = {
          data: {},
          horoscope :'',
          newData:[],
        }
    }

    handleChange  = (e)=>{
        e.preventDefault();
        this.setState({horoscope:e.target.value})
        
       
    }

 

    fetchurl = () => {
        const URL = 'https://aztro.sameerkumar.website/?sign='+this.state.horoscope+'&day=today';

        fetch(URL, {
            method: 'POST'
        }).then(response  => response.json())
        
        .then(data => { this.setState({data});
     this.setState({newData :[...this.state.newData, data]})
     console.log(this.state.newData)
    });

        
    }

  


    render() {
        const renderCards = this.state.newData.map((item,index) =>
        <HoroscopeSimpleCard key={index}
        description = {item.description}
       
              compatibility= {item.compatibility} 
              lucky_number= {item.lucky_number} 
              lucky_time= {item.lucky_time} 
              color= {item.color} 
              mood= {item.mood} 
              
        />
      );

        return (


          <div>
          
          <TextField
          select label="Select"
          value={this.state.horoscope}
          onChange={this.handleChange}
          helperText="Please select your horoscope"
          margin="normal" variant ="outlined"

        >
          {signs.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div>
                <Button variant="contained" color="primary" onClick={this.fetchurl}>
                Check your Luck 
     
    </Button>

     <div>
             
          </div>
            <div> {renderCards}</div>
           
    </div>        
          </div>
        );
    }
}

export default Basic;