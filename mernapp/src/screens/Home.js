import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {

  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFooditem] = useState([]);
  const [search, setSearch] = useState('');


  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFooditem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0],response[1]); 
  }

  useEffect(() => {
    loadData()
  }, [])


  return (
    <div>
      <div><Navbar /></div>
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: 'contain !important' }}>
          <div className="carousel-inner" id="corousel">
            <div className='carousel-caption' style={{ zIndex: '10' }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
            </div>
            <div className="carousel-item">
              <img src="https://media.istockphoto.com/id/2148411932/photo/paneer-lababdar.jpg?s=1024x1024&w=is&k=20&c=CL8o8YO7bF3SKguB1aENDiOX33mhNEKTgY0ImYisAhE=" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
            </div>
            <div className="carousel-item">
              <img src="https://media.istockphoto.com/id/1316145885/photo/food-ready-to-eat.jpg?s=1024x1024&w=is&k=20&c=18oFN9l3US85tncx04bPs73TzN9NaTOqO7TUJ_rUCy8=" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1581797833924-255242b10b3d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {
          // foodCat !== []
          foodCat.length > 0
            ? foodCat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem.length > 0  ? foodItem.filter((item) => (item.CategoryName === data.CategoryName)  && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                  .map(filterItems => {
                    return (
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                        <Card foodItem ={filterItems} options={filterItems.options[0]} ></Card>
                      </div>
                    )
                  }
                  ) : <div>No such data found</div>}
                </div>
              )
            }) : ""
        }
      </div>
      <div><Footer /></div>
    </div>
  )
}
