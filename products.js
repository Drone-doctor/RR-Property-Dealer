// products.js – Category switch with detailed specs for UAS, Radio Controllers & Accessories

const categoryInfo = {
  uas: {
    title: 'UAS (UNMANNED AERIAL SYSTEMS)',
    subtitle: 'Micro-category tactical UAV platforms & aerial intelligence systems.',
    products: [
      {
        id: 'signature-1',
        name: 'SIGNATURE-I',
        badge: 'MICRO UAV PLATFORM',
        desc: 'Indigenous micro-category UAV engineered for high-precision surveillance, industrial infrastructure inspection, defense perimeter monitoring, and surveying.',
        image: 'assets/images/signature_1_drone.png',
        specs: [
          { label: 'Weight Class', val: 'Under 1 kg (Micro Category)' },
          { label: 'Flight Endurance', val: 'Up to 30 Minutes' },
          { label: 'Transmission Range', val: '10 km HD Encrypted Link' },
          { label: 'Camera & Optics', val: '1/1.7" Sony 4K Sensor (3-Axis Gimbal)' },
          { label: 'Max Speed', val: '36 km/h (10 m/s Wind Resistance)' },
          { label: 'AI Mission Control', val: 'Human & Vehicle Target Tracking' }
        ]
      }
    ]
  },
  'radio-controllers': {
    title: 'RADIO CONTROLLERS & TRANSMITTERS',
    subtitle: 'High-reliability long-range radio transmitters and CNC hall-effect joysticks.',
    products: [
      {
        id: 'command-1',
        name: 'Command 1 Joystick',
        badge: 'HALL-EFFECT SPLIT-PCB CONTROLLER',
        desc: 'Dual-mode UAV ground control system featuring 12-bit contactless Hall-effect joysticks and split-PCB architecture (LHS/RHS). Operates as a plug-and-play USB HID Gamepad (for Mission Planner / QGC) or in RC/SBUS Mode over UART.',
        image: 'assets/images/controller_tx.png?v=20260810_v2',
        specs: [
          { label: 'Analog Axes', val: '4 Axes (Left X/Y, Right X/Y) 12-Bit Resolution' },
          { label: 'Joystick Technology', val: 'Contactless Hall Effect (Lifetime Drift-Free)' },
          { label: 'Operating Modes', val: 'USB HID Gamepad / RC-SBUS Serial Mode' },
          { label: 'Switches & Buttons', val: '16 Programmable channels' },
          { label: 'SBUS Protocol', val: '100 kbaud Inverted UART (16 Channels)' },
          { label: 'Hardware Architecture', val: 'Split 2-PCB for GCS Integration' },
          { label: 'GCS Compatibility', val: 'Mission Planner, QGroundControl, MAVLink' },
          { label: 'Power Supply', val: '5 V DC (USB Host or 4.8V-5.2V External)' }
        ]
      },
      {
        id: 'pocket-pro',
        name: 'Handheld Ground Controller',
        badge: '15KM MINI HANDHELD GROUND STATION',
        desc: '15-kilometer-range mini handheld ground station with integrated 5.5-inch 1000-nit touchscreen, Qualcomm 8-core CPU, Android 9.0 OS, dual HD low-latency video transmission, and 9-hour battery life.',
        image: 'assets/images/handheld_controller.png?v=20260810_v1',
        specs: [
          { label: 'Transmission Range', val: '15 km (Standard Omni) / 30 km (Patch Antenna)' },
          { label: 'Display Screen', val: '5.5-Inch 1000-Nit High-Brightness Touchscreen' },
          { label: 'Processor & OS', val: 'Qualcomm 8-Core CPU | Android 9.0 OS (2G RAM, 16G ROM)' },
          { label: 'Control Channels', val: '13 Physical Channels, 16 Communication Channels' },
          { label: 'Battery Capacity', val: '10200 mAh 7.4V Li-ion (15 Hours / 30W Fast Charge)' },
          { label: 'GCS Compatibility', val: 'QGroundControl, Mission Planner, SIYI FPV, MAVLink' },
          { label: 'Flight Controller Link', val: 'Pixhawk, APM, JIYI, BOYING, VKFLY, UART/SBUS' },
          { label: 'Form Factor & Weight', val: '189 × 138 × 41 mm | 850 g (IP53 Rating)' }
        ]
      }
    ]
  },
  accessories: {
    title: 'AVIONICS & ACCESSORIES',
    subtitle: 'Precision power electronics, GNSS positioning receivers, GNSS-denied systems, and drone components.',
    products: [
      {
        id: 'gnss-denied-1',
        name: 'NX-VIOS GNSS-Denied System',
        badge: 'NON-GPS AUTONOMOUS POSITIONING',
        desc: 'Autonomous visual-inertial odometry (VIO) and 3D LiDAR navigation payload enabling precision hovering and position hold in GPS/GNSS-denied environments, urban canyons, underground tunnels, and electronic warfare jammer zones.',
        image: 'assets/images/vois_system.png?v=20260810_v1',
        specs: [
          { label: 'Position Hold Accuracy', val: '< 0.5% Distance (Sub-meter Hold)' },
          { label: 'Positioning Technology', val: 'Visual-Inertial Odometry (VIO) + 3D LiDAR' },
          { label: 'Obstacle Avoidance', val: '360° Real-Time 3D Point Cloud Distance Mapping' },
          { label: 'Autopilot Interface', val: 'DroneCAN / MAVLink / ROS2 Compatible' },
          { label: 'Payload Weight', val: '95 g (Lightweight Aerospace Casing)' },
          { label: 'Power Consumption', val: '5 V DC (3.5 W Power)' }
        ]
      },
      {
        id: 'joule-1',
        name: 'NX-Joule 1 Buck Converter',
        badge: '2S-6S WIDE-INPUT BUCK MODULE',
        desc: 'Compact, high-efficiency synchronous buck converter module designed for unmanned aerial, satellite, and embedded aerospace systems. Accepts 7V-25V (2S-6S LiPo) input and delivers regulated 5.0V or 3.3V output up to 2.5A.',
        image: 'assets/images/joule_1_single.png?v=20260811_v1',
        specs: [
          { label: 'Input Voltage Range', val: '7V to 25V (2S–6S LiPo / LiHV)' },
          { label: 'Output Voltage Rails', val: 'Regulated 5.0V or 3.3V Options' },
          { label: 'Continuous Output Current', val: '1.5A (No Heatsink) / 2.5A (With Heatsink)' },
          { label: 'Switching Frequency', val: '750 kHz High Frequency' },
          { label: 'Peak Power Efficiency', val: 'Up to 88% Efficiency' },
          { label: 'Protection & Recovery', val: 'Hiccup Overcurrent & 165°C Thermal Shutdown' },
          { label: 'EMI Compliance', val: 'Meets EN55011 Class B Radiated EMI' },
          { label: 'Form Factor & Weight', val: '25 × 25 mm Footprint (10 g Weight)' }
        ]
      },
      {
        id: 'atlas-1',
        name: 'NX-Atlas 1 GNSS + Compass',
        badge: 'DUAL-BAND GNSS + RM3100',
        desc: 'CAN-based multi-constellation GNSS & 3-axis magnetometer module powered by u-blox NEO-F10N (L1/L5) and PNI RM3100. Supports NavIC, GPS, GLONASS, Galileo, and BeiDou with DroneCAN / UAVCAN v1 compatibility.',
        image: 'assets/images/atlas_1_single.png?v=20260811_v1',
        specs: [
          { label: 'GNSS Receiver', val: 'u-blox NEO-F10N (L1/L5 Dual-Band)' },
          { label: 'Magnetometer', val: 'PNI RM3100 (High-Accuracy 3-Axis)' },
          { label: 'Constellations', val: 'NavIC (IRNSS) + GPS + GLONASS + Galileo + BeiDou' },
          { label: 'Interface Protocol', val: 'CAN 2.0B (DroneCAN / UAVCAN v1)' },
          { label: 'Connectors', val: 'Dual JST-GH 1.25mm 4-Pin (Redundant/Daisy-Chain)' },
          { label: 'Supply Voltage', val: '5 V DC ± 5% (~120 mA @ 5V)' },
          { label: 'Position Accuracy', val: '1.5 m CEP (L1+L5 Open Sky)' },
          { label: 'Dimensions & Weight', val: '48 × 48 mm (~15 g)' }
        ]
      }
    ]
  }
};

function setCategory(cat) {
  const contentDiv = document.getElementById('category-content');
  if (!contentDiv) return;
  const data = categoryInfo[cat];
  if (!data) return;

  let html = `
    <div style="margin-bottom: 2rem; border-bottom: 1px solid rgba(0, 243, 255, 0.2); padding-bottom: 1rem;">
      <h3 style="font-size: 1.6rem; color: #00f3ff; font-weight: 700; margin-bottom: 0.4rem;">${data.title}</h3>
      <p style="color: #94a3b8; font-size: 0.95rem;">${data.subtitle}</p>
    </div>
    <div style="display: flex; flex-direction: column; gap: 2rem;">
  `;

  data.products.forEach(prod => {
    let specsHtml = prod.specs.map(s => `
      <div style="background: rgba(8, 11, 17, 0.6); padding: 0.65rem 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; gap: 1rem; font-size: 0.85rem;">
        <span style="color: #94a3b8; font-weight: 500;">${s.label}</span>
        <span style="color: #00f3ff; font-weight: 600; text-align: right;">${s.val}</span>
      </div>
    `).join('');

    html += `
      <div style="background: rgba(16, 24, 40, 0.9); border: 1px solid rgba(0, 243, 255, 0.2); border-radius: 12px; padding: 1.5rem; display: grid; grid-template-columns: 220px 1fr; gap: 1.5rem; align-items: start; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <div style="background: #080b11; border-radius: 10px; padding: 1rem; text-align: center; border: 1px solid rgba(0,243,255,0.1);">
          <img src="${prod.image}" alt="${prod.name}" style="max-width: 100%; height: auto; object-fit: contain; max-height: 160px; filter: drop-shadow(0 0 10px rgba(0,243,255,0.2));" />
        </div>
        <div>
          <div style="display: inline-block; background: rgba(0, 243, 255, 0.12); color: #00f3ff; font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: 4px; letter-spacing: 1px; margin-bottom: 0.5rem; border: 1px solid rgba(0,243,255,0.3);">
            ${prod.badge}
          </div>
          <h4 style="font-size: 1.35rem; color: #fff; margin-bottom: 0.5rem; font-weight: 700;">${prod.name}</h4>
          <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1.25rem;">${prod.desc}</p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.6rem; margin-bottom: 1.25rem;">
            ${specsHtml}
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="datasheet.html?id=${prod.id}" target="_blank" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
              <i class="fa-solid fa-eye"></i> View Datasheet
            </a>
            <a href="datasheet.html?id=${prod.id}&download=true" target="_blank" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; background: linear-gradient(135deg, #00f3ff, #0066ff); color: #080c14; font-weight: 700;">
              <i class="fa-solid fa-file-pdf"></i> Download PDF Datasheet
            </a>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  contentDiv.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  const catItems = document.querySelectorAll('.ipet-cat-item');
  setCategory('uas');

  catItems.forEach(item => {
    item.addEventListener('click', () => {
      catItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const cat = item.dataset.category;
      setCategory(cat);
    });
  });
});

