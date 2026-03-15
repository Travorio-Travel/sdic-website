export const governmentDiagram = {
  nodes: [
    { id: 'citizens', label: 'Citizens', x: 100, y: 60, type: 'primary' as const },
    { id: 'portal', label: 'Web Portal', x: 280, y: 60, type: 'primary' as const },
    { id: 'gateway', label: 'API Gateway', x: 460, y: 60, type: 'secondary' as const },
    { id: 'auth', label: 'Auth Service', x: 640, y: 60, type: 'tertiary' as const },
    { id: 'docs', label: 'Document Svc', x: 640, y: 140, type: 'tertiary' as const },
    { id: 'payment', label: 'Payment Svc', x: 640, y: 220, type: 'tertiary' as const },
    { id: 'notify', label: 'Notifications', x: 640, y: 300, type: 'tertiary' as const },
    { id: 'db', label: 'Database', x: 460, y: 220, type: 'secondary' as const },
    { id: 'analytics', label: 'Analytics', x: 280, y: 300, type: 'secondary' as const },
  ],
  connections: [
    { from: 'citizens', to: 'portal' },
    { from: 'portal', to: 'gateway' },
    { from: 'gateway', to: 'auth' },
    { from: 'gateway', to: 'docs' },
    { from: 'gateway', to: 'payment' },
    { from: 'gateway', to: 'notify' },
    { from: 'gateway', to: 'db' },
    { from: 'db', to: 'analytics' },
  ],
};

export const healthcareDiagram = {
  nodes: [
    { id: 'patients', label: 'Patients', x: 100, y: 100, type: 'primary' as const },
    { id: 'hospital', label: 'Hospital App', x: 280, y: 60, type: 'primary' as const },
    { id: 'mobile', label: 'Mobile App', x: 280, y: 180, type: 'primary' as const },
    { id: 'ehr', label: 'EHR System', x: 460, y: 60, type: 'secondary' as const },
    { id: 'pharmacy', label: 'Pharmacy Mgmt', x: 460, y: 140, type: 'tertiary' as const },
    { id: 'beds', label: 'Bed Tracking', x: 460, y: 220, type: 'tertiary' as const },
    { id: 'referral', label: 'Referral Engine', x: 460, y: 300, type: 'tertiary' as const },
    { id: 'surveillance', label: 'Surveillance', x: 680, y: 180, type: 'secondary' as const },
    { id: 'ministry', label: 'Ministry Portal', x: 680, y: 60, type: 'primary' as const },
  ],
  connections: [
    { from: 'patients', to: 'hospital' },
    { from: 'patients', to: 'mobile' },
    { from: 'hospital', to: 'ehr' },
    { from: 'mobile', to: 'ehr' },
    { from: 'ehr', to: 'pharmacy' },
    { from: 'ehr', to: 'beds' },
    { from: 'ehr', to: 'referral' },
    { from: 'ehr', to: 'surveillance' },
    { from: 'surveillance', to: 'ministry' },
  ],
};

export const infrastructureDiagram = {
  nodes: [
    { id: 'sensors', label: 'Field Sensors', x: 100, y: 80, type: 'primary' as const },
    { id: 'teams', label: 'Field Teams', x: 100, y: 220, type: 'primary' as const },
    { id: 'ingest', label: 'Data Ingestion', x: 300, y: 80, type: 'secondary' as const },
    { id: 'reports', label: 'Progress Reports', x: 300, y: 220, type: 'secondary' as const },
    { id: 'platform', label: 'Monitoring Platform', x: 500, y: 150, type: 'primary' as const },
    { id: 'dashboard', label: 'Dashboard', x: 700, y: 80, type: 'secondary' as const },
    { id: 'alerts', label: 'Alert System', x: 700, y: 220, type: 'tertiary' as const },
    { id: 'donors', label: 'Donor Portal', x: 700, y: 320, type: 'tertiary' as const },
  ],
  connections: [
    { from: 'sensors', to: 'ingest' },
    { from: 'teams', to: 'reports' },
    { from: 'ingest', to: 'platform' },
    { from: 'reports', to: 'platform' },
    { from: 'platform', to: 'dashboard' },
    { from: 'platform', to: 'alerts' },
    { from: 'platform', to: 'donors' },
  ],
};
