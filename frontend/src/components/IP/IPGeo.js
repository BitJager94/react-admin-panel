import React, { Component } from "react";
import './IPGeo.css';
import { Link } from "react-router-dom";
import axios from "axios";
import {REMOTE_SERVER} from '../../env';

class IPGeo extends Component
{
    state = {
        ip:null,
        city:null,
        reigon:null,
        location:null,
        showModal:false,
    }

    setIP(event)
    {
        this.setState({ip: event.target.value});
    }


    FetchLocation()
    {
        axios.get(`${REMOTE_SERVER}/ipgeo/get/${this.state.ip}`).then(res => {
            this.setState({city:res.data.city, reigon:res.data.reigon, location: res.data.loc, showModal:true});
        })
        .catch(err => {
            window.alert('An Error Occured')
        })
    }

    setShowModal(value)
    {
        this.setState({showModal:value});
    }

    render()
    {
        return(<div className="geo">
        <div className="max-w-7xl mx-auto mt-20 p-10 shadow items-center justify-center">
            <p className="text-3xl font-bold  ">IP Geolocation</p>
            <div className="flex items-center justify-between mt-10 w-70">
                <Link to="/" className="border-2 border-purple-600 text-black px-5 py-3 rounded-md text-1xl font-medium hover:bg-purple-600 transition duration-300">Back</Link>
            </div>

            <main className="mt-5 mx-auto flex min-h-screen w-full items-center justify-center bg-purple-900 text-white">

                <section className="flex w-[30rem] flex-col space-y-10">
                    <div className="text-center text-4xl font-medium">Get Location</div>

                    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                        <input
                            type="text"
                            placeholder="Enter IP Address"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                            value={this.state.ip}
                            onChange={(event) => { this.setIP(event)}}/>
                    </div>

                    <button onClick={() => {this.FetchLocation()}} className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
                        Get Location
                    </button>

                    
                </section>
            </main>


            {this.state.showModal ? (
            <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                        Modal Title
                    </h3>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => this.setShowModal(false)}
                    >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                    </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td className="text-grey-800">IP</td>
                                    <td>{this.state.ip}</td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td>{this.state.city != null ? this.state.city : 'Not Available'}</td>
                                </tr>
                                <tr>
                                    <td>Reigon</td>
                                    <td>{this.state.reigon != null ? this.state.reigon : 'Not Available'}</td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>{this.state.location != null ? this.state.location : 'Not Available'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => this.setShowModal(false)}>
                        Close
                    </button>

                    </div>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        </div>
    </div>);
    }
}


export default IPGeo;