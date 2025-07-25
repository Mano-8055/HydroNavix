import hullDesignImage from '../assets/studio/hull.png';
import structuralAnalysisImage from '../assets/studio/analysis.png';
import pipingLayoutImage from '../assets/studio/pipe.png';
import electricalControlImage from '../assets/studio/electric.png';
import productionSupportImage from '../assets/studio/workshop.png';
import digitalTwinImage from '../assets/studio/digital-twin.png'; // Reuse or replace with actual VR/AR image

const DigitalExpertise = [
  {
    id: 1,
    title: "naval-architecture-hull-design",
    color: "#012A4A",
    image: hullDesignImage,
    content: {
      "content-title": "Naval Architecture & Hull Design",
      "content-data": [
        "3D modeling",
        "CFD",
        "Hydrostatics",
        "Trim simulations",
        "Seakeeping simulations"
      ]
    }
  },
  {
    id: 2,
    title: "structural-offshore-analysis",
    color: "#263238",
    image: structuralAnalysisImage,
    content: {
      "content-title": "Structural & Offshore Analysis",
      "content-data": [
        "Finite Element Analysis (FEA)",
        "Load analysis",
        "Stress & fatigue analysis",
        "Jack-up platform modeling"
      ]
    }
  },
  {
    id: 3,
    title: "piping-hvac-machinery-layouts",
    color: "#1B4332",
    image: pipingLayoutImage,
    content: {
      "content-title": "Piping, HVAC & Machinery Layouts",
      "content-data": [
        "2D/3D design",
        "Routing optimization",
        "System schematics"
      ]
    }
  },
  {
    id: 4,
    title: "electrical-control-systems",
    color: "#1E1E2F",
    image: electricalControlImage,
    content: {
      "content-title": "Electrical, E&I, and Control Systems",
      "content-data": [
        "Integrated control diagrams",
        "Cable trays",
        "Loop drawings"
      ]
    }
  },
  {
    id: 5,
    title: "shipbuilding-production-support",
    color: "#37474F",
    image: productionSupportImage,
    content: {
      "content-title": "Shipbuilding Production Support",
      "content-data": [
        "Plate nesting",
        "Workshop drawings",
        "Panel management"
      ]
    }
  },
  {
    id: 6,
    title: "digital-twin-vr-ar",
    color: "#0F172A",
    image: digitalTwinImage,
    content: {
      "content-title": "Digital Twin & VR/AR Platforms",
      "content-data": [
        "Scan-to-model",
        "Real-time walkthroughs",
        "Cloud-based visualization"
      ]
    }
  }
];

export default DigitalExpertise;
