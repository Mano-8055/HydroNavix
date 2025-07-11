import auditAndCommissioningImage from '../assets/assetintegrity/audit.png';
import inspectionRepairAndMaintenanceImage from '../assets/assetintegrity/inspection.png';
import corrosionControlImage from '../assets/assetintegrity/corrosion.png';
import offshoreConstructionAndInstallationImage from '../assets/assetintegrity/offshore.png';
import drillingStructureProductsAndServicesImage from '../assets/assetintegrity/drilling.png';
import decommissioningImage from '../assets/assetintegrity/decommissioning.png';

export const AssetIntegrity = [
  {
    id: "audit-and-commissioning",
    title: "audit-and-commissioning",
    color: "#0077B6",
    image: auditAndCommissioningImage,
    content: {
      "content-title": "Audit And Commissioning",
      "content-data": [
        "Commissioning",
        "Pre Contract Audits And Condition Surveys",
        "Fair Market Valuation",
        "Preventative Maintenance System Audits And Gap Analysis"
      ]
    }
  },
  {
    id: "inspection-repair-and-maintenance",
    title: "inspection-repair-and-maintenance",
    color: "#00B4D8",
    image:  inspectionRepairAndMaintenanceImage,
    content: {
      "content-title": "Inspection Repair And Maintenance",
      "content-data": [
        "Dropped Objects Specialists",
        "Derrick Services",
        "Bolt Inspection Surveys",
        "Lifting Gear Inspection"
      ]
    }
  },
  {
    id: "corrosion-control",
    title: "corrosion-control",
    color: "#FB8500",
    image: corrosionControlImage,
    content: {
      "content-title": "Corrosion Control",
      "content-data": [
        "Corrosion Control",
        "Non-destructive Examination",
        "Specialty Services"
      ]
    }
  },
  {
    id: "offshore-construction-and-installation",
    title: "offshore-construction-and-installation",
    color: "#219EBC",
    image: offshoreConstructionAndInstallationImage,
    content: {
      "content-title": "Offshore Construction And Installation",
      "content-data": [
        "Engineering",
        "Fabrication",
        "Installation",
        "Commission"
      ]
    }
  },
  {
    id: "drilling-structure-products-and-services",
    title: "drilling-structure-products-and-services",
    color: "#3A0CA3",
    image: drillingStructureProductsAndServicesImage,
    content: {
      "content-title": "Drilling Structure Products And Services",
      "content-data": [
        "Land Rig Refurbishment & Upgrade",
        "Racking Board Assemblies",
        "Guide Tracks/rails",
        "Casing Stabbing Board",
        "Derrick Assembly"
      ]
    }
  },
  {
    id: "decommissioning",
    title: "decommissioning",
    color: "#4361EE",
    image: decommissioningImage,
    content: {
      "content-title": "Decommissioning",
      "content-data": [
        "Asset Simplification"
      ]
    }
  }
];
export default AssetIntegrity;