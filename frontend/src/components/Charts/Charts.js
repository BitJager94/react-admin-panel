import React, { Component } from "react";
import './Charts.css';
import { Link } from "react-router-dom";
import axios from "axios";
import {REMOTE_SERVER} from '../../env';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


class ChartContainer extends Component{

    state = {
        cad: null,
        usd: null,
        aed: null,
        chf: null,
    }

    componentDidMount(){
        axios.get(`${REMOTE_SERVER}/charts/exchange`).then(res => {

            console.log(res.data.rates)
            this.setState({cad: res.data.rates.cad.value, usd: res.data.rates.usd.value, aed: res.data.rates.aed.value, chf: res.data.rates.chf.value});

        });
    }

    render(){

        return(<div>
            <div className="charts">
                <div className="max-w-7xl mx-auto mt-20 p-10 shadow items-center justify-center">
                    <p className="text-3xl font-bold  ">Bitcon Exchange</p>
                    <div className="flex items-center justify-between mt-10 w-70">
                        <Link to="/" className="border-2 border-purple-600 text-black px-5 py-3 rounded-md text-1xl font-medium hover:bg-purple-600 transition duration-300">Back</Link>
                    </div>

                    <main className="mt-5 mx-auto w-full flex justify-center bg-grey-900 text-white">
                        <section className="flex w-full flex-col space-y-10">
                            <div className="container mx-auto">
                                <Bar
                                    datasetIdKey='Exchange'
                                    data={{
                                        labels: ['Canadian Dollar','US Dollar','UAE Dirham', 'Swiss Franc'],
                                        datasets: [
                                            {
                                                id: 1,
                                                label: 'BTC Exchange Rate',
                                                data: [this.state.cad, this.state.usd, this.state.aed, this.state.chf],
                                            }
                                        ],
                                    }}
                                />        
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
        );
    }
}


export default ChartContainer;