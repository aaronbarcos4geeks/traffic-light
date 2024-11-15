import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [colors, setColors] = useState(["red", "yellow", "green"]);

    const handleLightClick = (selectedColor) => {
        setColor(selectedColor);
    };

    const toggleColor = () => {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    };

    const addPurpleLight = () => {
        if (!colors.includes("purple")) {
            setColors([...colors, "purple"]);
        }
    };

    return (
        <div>
            <div
                style={{
                    backgroundColor: "black",
                    width: "1rem",
                    height: "6rem",
                    margin: "0 auto",
                }}
            ></div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "0 auto",
                    backgroundColor: "black",
                    maxWidth: "8rem",
                    borderRadius: "20px",
                    padding: "10px",
                }}
            >
                {colors.map((lightColor) => (
                    <div
                        key={lightColor}
                        onClick={() => handleLightClick(lightColor)}
                        style={{
                            backgroundColor: color === lightColor ? lightColor : "#555",
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            margin: "10px",
                            cursor: "pointer",
                            boxShadow: color === lightColor ? `0 0 20px 5px ${lightColor}` : "none",
                        }}
                    ></div>
                ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button
                    onClick={toggleColor}
                    style={{
                        padding: "10px 20px",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "none",
                        backgroundColor: "#007bff",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Alternar Color
                </button>
                <button
                    onClick={addPurpleLight}
                    style={{
                        padding: "10px 20px",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "none",
                        backgroundColor: "#6f42c1",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Añadir Luz Púrpura
                </button>
            </div>
        </div>
    );
};

export default TrafficLight;
