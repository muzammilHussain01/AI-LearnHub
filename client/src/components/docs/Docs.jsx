import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import BootstrapIntro from './bootstrap/BootstrapIntro.jsx';
import BreakpointsDoc from './bootstrap/BreakpointsDoc.jsx';
import ComponentsDoc from './bootstrap/ComponentsDoc.jsx';
import Grid from './bootstrap/Grid.jsx';
import UtilitiesDoc from './bootstrap/UtilitiesDoc.jsx';
import AboutDoc from './bootstrap/AboutDoc.jsx';
import StackDoc from './bootstrap/StackDoc.jsx';
import RatiosDoc from './bootstrap/RatiosDoc.jsx';
import TransitionDoc from './bootstrap/TransitionDoc.jsx';
import RestartUI from './bootstrap/RestartUI.jsx';
import AccordionDoc from './bootstrap/component/AccordionDoc.jsx';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Alerts from "./bootstrap/component/Alerts.jsx";
import BadgesDoc from "./bootstrap/component/BadgesDoc.jsx";
import ButtonGroupDoc from "./bootstrap/component/ButtonGroupDoc.jsx";
import BreadcrumbsDoc from "./bootstrap/component/BreadcrumbsDoc.jsx";
import ButtonDoc from "./bootstrap/component/ButtonDoc.jsx";
import CardDoc from "./bootstrap/component/CardDoc.jsx";
import CarouselsDoc from "./bootstrap/component/CarouselsDoc.jsx";
import CloseButtonDoc from "./bootstrap/component/CloseButtonDoc.jsx";
import DropdownDoc from "./bootstrap/component/DropdownDoc.jsx";
import ListGroupDoc from "./bootstrap/component/ListGroupDoc.jsx";
import ModalsDoc from "./bootstrap/component/ModalsDoc.jsx";
import {Breadcrumb, Carousel} from "react-bootstrap";
import NavbarsDoc from "./bootstrap/component/NavbarsDoc.jsx";
import NavsAndTabs from "./bootstrap/component/NavsAndTabs.jsx";
import OffcanvasDoc from "./bootstrap/component/OffcanvasDoc.jsx";
import OverlayDoc from "./bootstrap/component/OverlayDoc.jsx";

const Docs = () => {
    return (
        <div className="container-fluid">
            <div className="row" >
                {/* Sidebar */}
                <nav style={{backgroundColor:"#f1fdf6"}} className="col-md-3 col-lg-2 d-md-block border-end shadow-sm min-vh-100">
                    <div className="position-sticky pt-4">
                        <ul className="nav flex-column px-3">
                            <li className="nav-item mb-2">
                                <Link className="nav-link fw-semibold text-primary" to="/docs">
                                    Getting started
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Dropdown as={ButtonGroup}>
                                    <Button variant="transparent">🧱 Layout</Button>
                                    <Dropdown.Toggle split variant="transparent" id="dropdown-split-basic" />
                                    <Dropdown.Menu
                                        className="py-2 shadow-sm border-0"
                                        style={{ backgroundColor: "#f8f9fa", borderRadius: "0.5rem", minWidth: "200px" }}
                                    >
                                        <Dropdown.Item as={Link} to="/docs/breakpoints" className="text-dark">
                                            📐 Breakpoints
                                        </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/docs/grid" className="text-dark">
                                            🧱 Grid
                                        </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/docs/stack" className="text-dark">
                                            📦 Stacks
                                        </Dropdown.Item>
                                    </Dropdown.Menu>


                                </Dropdown>
                            </li>
                            <li className="nav-item mb-2">
                                <li className="nav-item mb-2">
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="transparent">🧩 Components</Button>
                                        <Dropdown.Toggle split variant="transparent" id="dropdown-split-basic" />
                                        <Dropdown.Menu
                                            className="py-2 shadow-sm border-0"
                                            style={{ backgroundColor: "#f8f9fa", borderRadius: "0.5rem", minWidth: "200px" }}
                                        >
                                            <Dropdown.Item as={Link} to="/docs/accordion" className="text-dark">
                                                Accordion
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/alerts" className="text-dark">
                                                Alerts
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/badges" className="text-dark">
                                                Badges
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/Breadcrumbs" className="text-dark">
                                                Breadcrumbs
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/button-group" className="text-dark">
                                                Buttongroup
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/button" className="text-dark">
                                                Button
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/card" className="text-dark">
                                                Card
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/carousels" className="text-dark">
                                                Carousels
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/close-button" className="text-dark">
                                                CloseButton
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/dropdown" className="text-dark">
                                                Dropdown
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/listgroup" className="text-dark">
                                                ListGroup
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/modals" className="text-dark">
                                                Modals
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/navbar" className="text-dark">
                                                Navbars
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/navs-and-tabs" className="text-dark">
                                                Navs and Tabs
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/offcanvas" className="text-dark">
                                                Offcanvas
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/overlay" className="text-dark">
                                                Overlay
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>

                            </li>
                            <li className="nav-item mb-2">
                                <li className="nav-item mb-2">
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="transparent">🛠️ Uitilities</Button>
                                        <Dropdown.Toggle split variant="transparent" id="dropdown-split-basic" />
                                        <Dropdown.Menu
                                            className="py-2 shadow-sm border-0"
                                            style={{ backgroundColor: "#f8f9fa", borderRadius: "0.5rem", minWidth: "200px" }}
                                        >
                                            <Dropdown.Item as={Link} to="/docs/transition" className="text-dark">
                                                Transitions
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/ratios" className="text-dark">
                                                Ratios
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/docs/restart-ui" className="text-dark">
                                                @restart/ui
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/docs/about">
                                    🎨 About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
                    <Routes>
                        <Route path="/" element={<BootstrapIntro />} />
                        <Route path="breakpoints" element={<BreakpointsDoc />} />
                        <Route path="grid" element={<Grid />} />
                        <Route path="stack" element={<StackDoc />} />
                        <Route path="components" element={<ComponentsDoc />} />
                        <Route path="utilities" element={<UtilitiesDoc />} />
                        <Route path="about" element={<AboutDoc />} />
                        <Route path="transition" element={<TransitionDoc />} />
                        <Route path="ratios" element={<RatiosDoc />} />
                        <Route path="restart-ui" element={<RestartUI />} />
                        <Route path="accordion" element={<AccordionDoc />} />
                        <Route path="alerts" element={<Alerts />} />
                        <Route path="badges" element={<BadgesDoc />} />
                        <Route path="breadcrumbs" element={<BreadcrumbsDoc />} />
                        <Route path="button-group" element={<ButtonGroupDoc />} />
                        <Route path="button" element={<ButtonDoc />} />
                        <Route path="card" element={<CardDoc />} />
                        <Route path="carousels" element={<CarouselsDoc />} />
                        <Route path="close-button" element={<CloseButtonDoc />} />
                        <Route path="dropdown" element={<DropdownDoc />} />
                        <Route path="listgroup" element={<ListGroupDoc />} />
                        <Route path="modals" element={<ModalsDoc />} />
                        <Route path="navbar" element={<NavbarsDoc />} />
                        <Route path="navs-and-tabs" element={<NavsAndTabs />} />
                        <Route path="offcanvas" element={<OffcanvasDoc />} />
                        <Route path="overlay" element={<OverlayDoc />} />
                        <Route path="*" element={<h4>Select a section from the sidebar</h4>} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default Docs;
