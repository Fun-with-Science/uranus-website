export default function WorkflowDiagram() {
  const steps = [
    { num: "1", label: "Mining", icon: "mining" },
    { num: "2", label: "Crushing", icon: "architecture" },
    { num: "3", label: "Screening", icon: "filter_list" },
    { num: "4", label: "QC Testing", icon: "biotech" },
    { num: "5", label: "Stockyard", icon: "inventory_2" },
    { num: "6", label: "Dispatch", icon: "local_shipping", accent: true }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-12 text-center text-dark font-bold text-xs uppercase">
      {steps.map((step) => (
        <div key={step.num} className="p-6 bg-white rounded border border-gray-200 shadow-sm space-y-2 hover:border-primary hover:shadow transition-all duration-200">
          <span className={`material-symbols-outlined ${step.accent ? "text-accent" : "text-primary"} text-3xl`}>
            {step.icon}
          </span>
          <div>{step.num}. {step.label}</div>
        </div>
      ))}
    </div>
  );
}
