import React from 'react'

import Cards from './Components/Cards/Cards'
import Charts from './Components/Chart/Charts'

import CountryPicker from './Components/CountryPicker/CountryPicker'
import styles from  './App.module.css'
import { fetchData } from './Components/API'


export default class App extends React.Component {
  state={
    data:{},
    country:''

  }
   
  async componentDidMount(){
    const fetchedData = await fetchData()
    this.setState({data:fetchedData})
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country)
    this.setState({data:fetchedData,country:country})
    console.log(fetchedData);
  }
  render() {
    const {data,country} = this.state

    return (
      <div className={styles.container}>
         <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Cards data={data} />
       
        <Charts data={data} country={country} />
       
      </div>
    )
  }
}
