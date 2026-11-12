// EDIT THIS FILE FIRST: replace example copy, measurements, and URLs with your verified information.
export const profile = {
  name: 'elaine chen',
  headline: 'electrical engineering · hardware · embedded systems',
  intro: "Hi! I'm Elaine, a UC Berkeley student who loves turning curious ideas into things you can actually build.",
  email: 'YOUR_EMAIL@example.com', // TODO: replace
  github: 'https://github.com/', // TODO: replace with your profile
  linkedin: 'https://www.linkedin.com/', // TODO: replace
  resume: '', // TODO: put resume.pdf in public/ and set '/resume.pdf'
};
export const projects = [
  {slug:'power-distribution-board',title:'Power Distribution Board',category:'Hardware',tags:['KiCad','Power Electronics','Protection'],summary:'A power-distribution design exploring input protection, conversion, regulation, and monitoring for a solar vehicle.',role:'Hardware design and integration',status:'In progress',visual:'pcb',github:'',photos:[],challenge:'Build a reliable power path under electrical and packaging constraints.',process:['Define voltage and current requirements','Develop protection and conversion architecture','Capture schematics and review layout','Validate with simulation and bench tests when available'],results:'Add verified measurements, test photos, and a clear account of your individual contribution.',lessons:'Document tradeoffs, design revisions, and what you would improve.'},
  {slug:'wearable-voc-sensor',title:'Wearable VOC Sensor',category:'Embedded',tags:['Sensors','Arduino','Prototyping'],summary:'A wearable sensing concept for collecting and analyzing air-quality data.',role:'Prototype and sensing development',status:'Project',visual:'sensor',github:'',photos:[],challenge:'Create a compact wearable platform that collects useful sensor readings.',process:['Choose sensor and controller','Prototype data acquisition','Develop logging and analysis','Test repeatability and enclosure design'],results:'Add real prototype images, data plots, and sensor performance results.',lessons:'Describe calibration, power, size, and accuracy tradeoffs.'},
  {slug:'fusion-magnet-studies',title:'Fusion Magnet Studies',category:'Simulation',tags:['Python','C++','Electromagnetics'],summary:'Numerical studies and analysis tools for electromagnetic field behavior in fusion-related systems.',role:'Simulation and analysis',status:'Research',visual:'magnet',github:'',photos:[],challenge:'Explore complex electromagnetic behavior with numerical tools.',process:['Set up model and assumptions','Run simulations','Analyze field outputs','Compare numerical behavior and performance'],results:'Insert plots and results that are approved for public release.',lessons:'Explain modeling assumptions, numerical limitations, and validation.'},
  {slug:'pwm-motor-controller',title:'PWM Motor Controller',category:'Hardware',tags:['555 Timer','PCB Design','Analog'],summary:'A compact pulse-width modulation motor controller concept, from circuit design to layout.',role:'Circuit and PCB design',status:'Example project',visual:'wave',github:'',photos:[],challenge:'Control motor speed with a simple adjustable PWM circuit.',process:['Design oscillator and switching stage','Simulate timing and duty cycle','Capture schematic and lay out PCB','Measure output waveform on hardware if built'],results:'Replace this sample text with your actual frequency, duty-cycle range, and test evidence.',lessons:'Explain component choices, protection, and board layout decisions.'},
];
export const experience = [
 {date:'2026 — present',role:'EECS Engineer',org:'CalSol · UC Berkeley',description:'Electrical systems and PCB design for a solar vehicle. Customize with your specific responsibilities and results.'},
 {date:'2026 — present',role:'Contract Consultant',org:'Proxima Fusion',description:'Electromagnetic simulation and numerical analysis. Share only information cleared for publication.'},
 {date:'2025',role:'Research & Development',org:'Sensor research',description:'Wearable sensing, embedded prototypes, and experimental analysis.'},
];
export const skills = [
 {title:'hardware & electronics',icon:'cpu',items:'KiCad · PCB design · schematics · soldering'},
 {title:'programming',icon:'code',items:'Python · C++ · MATLAB · Java'},
 {title:'simulation & analysis',icon:'chart',items:'NumPy · SciPy · Matplotlib · numerical modeling'},
 {title:'design & prototyping',icon:'box',items:'Fusion 360 · SolidWorks · Arduino'},
];
export const leadership = [
 {title:'Student Body President',description:'Student representation and organization leadership.'},
 {title:'Research Club Founder',description:'Building a community around research opportunities.'},
 {title:'Math Education & Tutoring',description:'Helping students grow their confidence in STEM.'},
];
