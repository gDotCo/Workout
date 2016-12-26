import React, { Component } from 'react';
import { Link } from 'react-router';

class Car extends Component {
    render(){
        // Get data from route props
        const cars = this.props.route.data;
        // Map through cars and return linked cars
        const carNode = cars.map((car) => {
            return (
				<li  key={car.id}>
                <Link
                    to={"/"+car.id}
                    className="list-group-item">
                    {car.name}
                </Link>
				</li>
            )
        });
        return (
            <div>
                <h1>Cars page</h1>
                <div className="list-group">
                    {carNode}
                </div>
            </div>
        );
    }
}

export default Car;


