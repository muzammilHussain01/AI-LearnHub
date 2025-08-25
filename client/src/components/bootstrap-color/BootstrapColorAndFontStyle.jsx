import React, {useEffect, useState} from "react";
import { Row, Col, Card, Form, InputGroup } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import {getApi} from "../helper/helper.js";

const BootstrapColorAndFontStyle = () => {
    const [themeData, setThemeData] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("color-font");
                setThemeData(response.data.data || []);
            } catch (error) {
                setThemeData([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);
    const [search, setSearch] = useState("");

    const filteredData = themeData.filter((item) =>
        (item.name || item.class || item.label).toLowerCase().includes(search.toLowerCase())
    );

    const renderCards = (items, type) =>
        items.map((item) => {
            if (type === "color") {
                return (
                    <Col xs={6} sm={4} md={3} key={item.name}>
                        <Card
                            bg={item.name}
                            text={item.name === "light" ? "dark" : "white"}
                            className="text-center shadow-lg rounded-4 p-4 mb-3 transition"
                            style={{ cursor: "pointer", transition: "transform 0.2s" }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        >
                            <Card.Body>
                                <Card.Text className="text-capitalize small fw-semibold">.{item.name}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            }
            if (type === "textColor" || type === "fontStyle") {
                const cls = item.class;
                return (
                    <Col xs={12} sm={6} md={4} key={cls}>
                        <div
                            className={`p-3 border rounded-4 shadow-sm text-center ${cls}`}
                            style={{ cursor: "pointer", transition: "transform 0.2s" }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        >
                            .{cls}
                        </div>
                    </Col>
                );
            }
            if (type === "fontFamily") {
                return (
                    <Col xs={12} sm={6} md={4} key={item.label}>
                        <div
                            className="p-3 border rounded-4 shadow-sm text-center bg-white bg-opacity-75"
                            style={{ ...item.style, cursor: "pointer", transition: "transform 0.2s" }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        >
                            {item.label} — The quick brown fox jumps over the lazy dog
                        </div>
                    </Col>
                );
            }
            return null;
        });

    return (
        <div className="container py-5 px-3 px-md-4">
            {/* Search Box */}
            <InputGroup className="mb-5 shadow-sm rounded-pill overflow-hidden">
                <InputGroup.Text className="bg-white border-0">
                    <BiSearch size={20} />
                </InputGroup.Text>
                <Form.Control
                    placeholder="Search colors, text styles, font families..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-0"
                />
            </InputGroup>

            {/* Sections */}
            <section className="mb-5">
                <h2 className="h4 text-dark fw-semibold mb-4 border-start border-4 ps-3 border-primary">🎨 Theme Colors</h2>
                <Row className="g-4">{renderCards(filteredData.filter((i) => i.type === "color"), "color")}</Row>
            </section>

            <section className="mb-5">
                <h2 className="h4 text-dark fw-semibold mb-4 border-start border-4 ps-3 border-primary">🖋️ Text Colors</h2>
                <Row className="g-4">{renderCards(filteredData.filter((i) => i.type === "textColor"), "textColor")}</Row>
            </section>

            <section className="mb-5">
                <h2 className="h4 text-dark fw-semibold mb-4 border-start border-4 ps-3 border-primary">🔤 Font Styles</h2>
                <Row className="g-4">{renderCards(filteredData.filter((i) => i.type === "fontStyle"), "fontStyle")}</Row>
            </section>

            <section className="mb-5">
                <h2 className="h4 text-dark fw-semibold mb-4 border-start border-4 ps-3 border-primary">🖋️ Font Families</h2>
                <Row className="g-4">{renderCards(filteredData.filter((i) => i.type === "fontFamily"), "fontFamily")}</Row>
            </section>
        </div>
    );
};

export default BootstrapColorAndFontStyle;
