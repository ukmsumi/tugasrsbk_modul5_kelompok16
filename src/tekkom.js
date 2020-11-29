import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";
export default class tekkom extends Component {
    constructor(props) {

super(props);
this.state = {
tekkom: [],
visible: false,
nama: "",
asal: "",
nim: "",
};
}

handleButton = (nama) => {
    alert(nama);
};
handleTambahOrang = () => {
    this.setState({
        visible: true,
    });
};
handleNama = (e) => {
    this.setState({
        nama: e.target.value,
});
    console.log(this.state.nama);
};
handleNim = (e) => {
    this.setState({
        nim: e.target.value,
        });
console.log(this.state.nim);
    };
handleAsal = (e) => {
    this.setState({
        asal: e.target.value,
    });
    console.log(this.state.asal);
};
handleSubmit = () => {
    if (
        this.state.nama !== "" &&
        this.state.nim !== "" &&
        !this.state.asal !== ""
) {
    axios({
        method: "post",
        url: "https://backendcatatantugas.herokuapp.com/mahasiswa/add",
        headers: {
            accept: "*/*",
        },
        data: {
            nama: this.state.nama,
            nim: this.state.nim,
            asal: this.state.asal,
        },
    })
        .then((data) => {
            alert("berhasil menambahkan");
            window.location.reload();   
        })
        .catch((error) => {
            alert("gagal lur");
        });
    } else {
        alert("pastikan semua kolom terisi");
    }
};
componentDidMount() {
    axios({
        method: "get",
        url: "https://api.magicthegathering.io/v1/cards",
        headers: {
            accept: "*/*",
        },
        })
        .then((data) => {
            console.log(data.data.cards);
            this.setState({
            tekkom: data.data.cards,
    });
})
    .catch((error) => {
        console.log(error);
    });
}

    render() {
        return (
            <div>           
                <div className="#85aefa">
                    <center>
                        <h1>PRAKTIKUM REKAYASA PERANGKAT LUNAK BERBASIS KOMPONEN</h1>
                        <h1>List Kartu Magic</h1>
                        <h2>KELOMPOK 16 </h2>
                    </center>

        <Modal
        title="Add New Place"
            centered
            visible={this.state.visible}
            onOk={this.handleSubmit}
            onCancel={() => this.setState({ visible: false })}
            width={500}
        >
    <div style={{ textAlign: "center" }}>
    <p>Place Name : </p>{" "}
    <input
    type="text"
    placeholder="name"
    onChange={this.handleNama}
/   >
    <br />
    <p>City : </p>{" "}
        <input type="text" placeholder="city" onChange={this.handleNim} />
    <br />
    <p>State : </p>{" "}
    <input
        type="text"
        placeholder="state"
        onChange={this.handleAsal}
/>
<br />
        <p>Number : </p>{" "}
        <input
        type="text"
        placeholder="number"
        onChange={this.handleAsal}
/>
            </div>
        </Modal>

{this.state.tekkom.map((results, index) => {

return (

<div style={{ padding: "30px", background: "#85aefa", border: "1px solid black" }}  key={results.id}>
    <center> 
    <img src={results.imageUrl}style={{height:"200px", width:"200px"}}/>    
    <h6 style={{ color: " #070707" }}>Name : {results.name}</h6>
    <h6 style={{ color: " #070707" }}>Colors: {results.colors}</h6>
    <h6 style={{ color: " #070707" }}>Type  : {results.type}</h6>
    <h6 style={{ color: " #070707" }}>Rarity  : {results.rarity}</h6>
    <h6 style={{ color: " #070707" }}>setName: {results.setName}</h6>
    <h6 style={{ color: " #070707" }}>Text: {results.text}</h6>
    
    
    
                            </center>
                        <div >
                    </div>
                </div>
                );
            })}
        </div>
        </div>
        );
    }
}