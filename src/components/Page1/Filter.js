import React from "react";
import "../../styles/filterp1.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
export default function Filter() {
  return (
    <div className="filter__container">
      <div className="filter__1">
        <h5>Courses teaching</h5>
        <DropdownButton
          className="dropdown__button"
          menuAlign="right"
          title="any language"
          id="dropdown-menu-align-right"
        >
          <Dropdown.Item eventKey="1">Arabic</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="2">German</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="3">Indonesia</Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">India</Dropdown.Item>
        </DropdownButton>
      </div>

      <div className="filter__1">
        <h5>FOR SPEAKERS OF</h5>
        <DropdownButton
          className="dropdown__button"
          menuAlign="right"
          title="any language"
          id="dropdown-menu-align-right"
        >
          <Dropdown.Item eventKey="1">Arabic</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="2">German</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="3">Indonesia</Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">India</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}
