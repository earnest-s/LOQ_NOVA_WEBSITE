import React from "react";
import { CardStack } from "./ui/card-stack"; // Adjusted import path

const items = [
    {
        id: 1,
        title: "Hardware Telemetry",
        description: "Direct register access for CPU and GPU thermal indexing.",
        imageSrc: "/Images/dashboard.png",
        href: "#",
    },
    {
        id: 2,
        title: "Performance Logic",
        description: "Native Fn+Q state management for immediate thermal mode transitions.",
        imageSrc: "/Images/performance.png",
        href: "#",
    },
    {
        id: 3,
        title: "HID Lighting Engine",
        description: "Per-zone RGB control via hardware-level USB HID commands.",
        imageSrc: "/Images/lighting.png",
        href: "#",
    },
    {
        id: 4,
        title: "Power Subsystem",
        description: "Precision discharge rate tracking via embedded controller interface.",
        imageSrc: "/Images/power1.png",
        href: "#",
    },
    {
        id: 5,
        title: "Automation Layer",
        description: "Event-driven system profile management with internal state machine.",
        imageSrc: "/Images/automation.png",
        href: "#",
    },
];

export default function CardStackDemoPage() {
    return (
        <div className="w-full flex justify-center py-20 bg-transparent">
            <div className="mx-auto w-full max-w-5xl p-8">
                <CardStack
                    items={items}
                    initialIndex={0}
                    autoAdvance={true}
                    intervalMs={2000}
                    pauseOnHover={true}
                    showDots={true}
                />
            </div>
        </div>
    );
}
