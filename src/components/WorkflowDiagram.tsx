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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-12 text-center text-paper font-bold text-xs uppercase">
      {steps.map((step) => (
        <div key={step.num} className="p-6 bg-surface rounded border border-line shadow-2xl space-y-2 hover:border-blue hover:shadow-blue/10 transition-all duration-200 relative">
          <span className="corner tl"></span>
          <span className="corner br"></span>
          <span className={`material-symbols-outlined ${step.accent ? "text-moss" : "text-blue"} text-3xl`}>
            {step.icon}
          </span>
          <div className="pt-2">{step.num}. {step.label}</div>
        </div>
      ))}
    </div>
  );
}
