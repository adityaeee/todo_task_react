import PropTypes from "prop-types";
import { Component } from "react";
import {
  IconAccessible,
  IconApps,
  IconAsset,
  IconChevronDown,
  IconDoorExit,
  IconHome2,
  IconListDetails,
  IconReceipt,
  IconUser,
  IconUsers,
  IconAlarm,
} from "@tabler/icons-react";
import Dashboard from "../../../pages/Dashboard/Dashboard";
import Todo from "../../../pages/Todo/Todo";
import Product from "../../../pages/Product/Product";
import Login from "../../../pages/Authentication/Login";
import Register from "../../../pages/Authentication/Register";
import Home from "../../../pages/Home/Home";
import PetsPage from "../../../pages/Pets/PetsPage";
import { IconCat } from "@tabler/icons-react";
import Counter from "../../../pages/Counter/Counter";

export default class Sidebar extends Component {
  handleLogout = () => {
    if (!confirm("Apakah yakin ingin logout?")) return;
    this.props.handleAuthentication(false);
  };
  render() {
    const { navigateTo } = this.props;
    return (
      <div
        className={"bg-primary text-white p-4 shadow"}
        style={{ width: 300, minHeight: "100dvh" }}
      >
        <div className="font-logo text-center mb-5">
          <h2 className="fs-2">
            <i>
              <b>Enigma</b> Shop
            </i>
          </h2>
          <h2 className="fs-6 my-4 font-primary fw-bold">Backoffice V1.0.0</h2>
        </div>
        <nav>
          <ul className="d-flex flex-column gap-3 nav-list list-unstyled">
            <p
              onClick={() => navigateTo(<Dashboard />)}
              className="cursor-pointer fw-bold"
            >
              Dashboard
            </p>
            <li
              className="cursor-pointer text-white"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="true"
            >
              <i className="me-3">
                <IconApps />
              </i>
              <span>Master</span>
              <i className="ms-3">
                <IconChevronDown />
              </i>
            </li>
            <div className="collapse" id="dashboard-collapse">
              <ul className="text-white cursor-pointer d-flex flex-column gap-3 btn-toggle-nav list-unstyled mx-4">
                <li
                  onClick={() => navigateTo(<Home />)}
                  className="cursor-pointer"
                >
                  <i className="me-3">
                    <IconHome2 />
                  </i>
                  <span>Home</span>
                </li>
                <li
                  onClick={() => navigateTo(<Todo />)}
                  className="cursor-pointer"
                >
                  <i className="me-3">
                    <IconListDetails />
                  </i>
                  <span>Todo</span>
                </li>
                <li
                  onClick={() => navigateTo(<Product />)}
                  className="cursor-pointer"
                >
                  <i className="me-3">
                    <IconAsset />
                  </i>
                  <span>Product</span>
                </li>
                <li
                  onClick={() => navigateTo(<Home />)}
                  className="cursor-pointer"
                >
                  <i className="me-3">
                    <IconUsers />
                  </i>
                  <span>Customer</span>
                </li>
                <li
                  onClick={() => navigateTo(<Login />)}
                  className="cursor-pointer"
                >
                  <i className="me-3">
                    <IconAccessible />
                  </i>
                  <span>Admin</span>
                </li>
                <li
                  onClick={() => navigateTo(<PetsPage />)}
                  className="cursor-pointer"
                >
                  <i className="me-3">
                    <IconCat />
                  </i>
                  <span>Pets</span>
                </li>
                <li
                  onClick={() => navigateTo(<Counter />)}
                  className="cursor-pointer"
                >
                  <i className="me-3">
                    <IconAlarm />
                  </i>
                  <span>Counter</span>
                </li>
              </ul>
            </div>
            <p className="fw-bold mt-4">Transaction</p>
            <li className="cursor-pointer text-white">
              <i className="me-3">
                <IconReceipt />
              </i>
              <span>Transaction</span>
            </li>
            <p className="fw-bold mt-4">Settings</p>
            <li
              onClick={() => navigateTo(<Register />)}
              className="cursor-pointer text-white"
            >
              <i className="me-3">
                <IconUser />
              </i>
              <span>User</span>
            </li>
            <hr />
            <li
              onClick={this.handleLogout}
              className="cursor-pointer text-white"
            >
              <i className="me-3">
                <IconDoorExit />
              </i>
              <span>Logout</span>
            </li>
            <hr />
          </ul>
        </nav>
      </div>
    );
  }
}

Sidebar.propTypes = {
  navigateTo: PropTypes.func,
  handleAuthentication: PropTypes.func,
};
