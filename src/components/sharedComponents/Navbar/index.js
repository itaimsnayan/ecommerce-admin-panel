import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateLocationAction } from "../../../redux/actions/locationAction";
import { navigationService } from "../../../services/navigationService";
import "./style.css"

function Navbar() {
    const dispatch = useDispatch();
    const currentlocation = useLocation();
    const location = useSelector(state => state.location);

    useEffect(() => {
        const { pathname } = currentlocation;
        pathname && dispatch(updateLocationAction(pathname));
    }, [dispatch, currentlocation])

    return (
        <div className={`navbar-container px-4 d-flex align-items-center ${!(navigationService.showNavbar).includes(location) && 'd-none'}`}>
            Navbar
        </div>
    )

}

export default Navbar;