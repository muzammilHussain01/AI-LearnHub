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
import { Breadcrumb, Carousel, Accordion } from "react-bootstrap";
import NavbarsDoc from "./bootstrap/component/NavbarsDoc.jsx";
import NavsAndTabs from "./bootstrap/component/NavsAndTabs.jsx";
import OffcanvasDoc from "./bootstrap/component/OffcanvasDoc.jsx";
import OverlayDoc from "./bootstrap/component/OverlayDoc.jsx";

const Docs = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <nav style={{ backgroundColor: "#f1fdf6" }} className="col-md-3 col-lg-2 d-md-block border-end shadow-sm min-vh-100">
                    <div className="position-sticky pt-4">
                        <Accordion alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Getting Started</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="nav flex-column px-2">
                                        <li className="nav-item mb-2">
                                            <Link className="nav-link fw-semibold text-primary" to="/docs">
                                                Introduction
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>🧱 Layout</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="nav flex-column px-2">
                                        <li><Link className="nav-link text-dark" to="/docs/breakpoints">📐 Breakpoints</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/grid">🧱 Grid</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/stack">📦 Stacks</Link></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>🧩 Components</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="nav flex-column px-2">
                                        <li><Link className="nav-link text-dark" to="/docs/accordion">Accordion</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/alerts">Alerts</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/badges">Badges</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/breadcrumbs">Breadcrumbs</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/button-group">Button Group</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/button">Button</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/card">Card</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/carousels">Carousels</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/close-button">Close Button</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/dropdown">Dropdown</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/listgroup">ListGroup</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/modals">Modals</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/navbar">Navbars</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/navs-and-tabs">Navs and Tabs</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/offcanvas">Offcanvas</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/overlay">Overlay</Link></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>🛠️ Utilities</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="nav flex-column px-2">
                                        <li><Link className="nav-link text-dark" to="/docs/transition">Transitions</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/ratios">Ratios</Link></li>
                                        <li><Link className="nav-link text-dark" to="/docs/restart-ui">@restart/ui</Link></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>🎨 About</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="nav flex-column px-2">
                                        <li><Link className="nav-link text-dark" to="/docs/about">About</Link></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
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
