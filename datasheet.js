/* datasheet.js – Official Datasheet Data & Renderer for NestX Aerospace */

const DATASHEETS = {
  'gnss-denied-1': {
    code: 'NX03-03',
    title: 'NX-VIOS GNSS-Denied System',
    subtitle: 'Visual-Inertial Odometry System (VIO + 3D LiDAR Non-GPS Autonomous Positioning)',
    highlights: 'VIO + 3D LiDAR | < 0.5% Sub-Meter Position Hold | 360° Obstacle Avoidance | DroneCAN / ROS2 | Made in India',
    images: {
      bottom: 'assets/images/vois_system.png?v=20260810_v1',
      top: 'assets/images/vois_system.png?v=20260810_v1'
    },
    description: 'NX-VIOS (Visual-Inertial Odometry System) is an autonomous non-GPS positioning and navigation payload engineered for UAV operations in GPS/GNSS-denied environments. Integrating dual stereo optical vision sensors, high-accuracy 3D LiDAR scanner, and an IMU measurement unit, NX-VIOS delivers sub-meter position hold (< 0.5% distance drift rate), 360-degree real-time 3D point-cloud obstacle mapping, and precise navigation in electronic warfare jamming zones, urban canyons, underground tunnels, and indoor facilities.',
    keyFeatureShowcase: [
      {
        title: 'NON-GPS AUTONOMOUS POSITIONING',
        subtitle: 'Sub-meter hovering & position hold without satellite dependencies.',
        image: 'assets/images/vois_system.png?v=20260810_v1',
        align: 'right',
        points: [
          { title: 'Sub-Meter Accuracy', desc: 'Delivers < 0.5% distance drift rate for stationary hovering and flight paths.' },
          { title: 'Dual Sensor Fusion', desc: 'Combines Visual-Inertial Odometry (VIO) with 3D LiDAR distance mapping.' },
          { title: 'EW Jammer Immune', desc: 'Completely immune to satellite loss, RF jamming, and GNSS spoofing attacks.' }
        ]
      },
      {
        title: '360° REAL-TIME OBSTACLE AVOIDANCE',
        subtitle: 'Real-time 3D point cloud distance mapping for autonomous flight.',
        image: 'assets/images/advance_tech_slide.png',
        align: 'left',
        points: [
          { title: '3D Point Cloud Scanning', desc: 'Generates real-time 3D depth maps of surrounding environment.' },
          { title: 'Omnidirectional Protection', desc: 'Continuous obstacle detection for tight structures, indoor rooms, and tunnels.' },
          { title: 'Low-Light & Dark Operation', desc: '3D LiDAR sensor operates reliably in pitch black conditions.' }
        ]
      }
    ],
    techSpecCategories: [
      {
        title: 'PERFORMANCE & ACCURACY',
        rows: [
          ['Position Hold Accuracy', '< 0.5% Distance (Sub-meter Hold)'],
          ['Positioning Technology', 'Visual-Inertial Odometry (VIO) + 3D LiDAR'],
          ['Obstacle Avoidance', '360° Real-time 3D Point Cloud Mapping'],
          ['Max Flight Speed', '36 km/h (10 m/s) Autonomous VIO Hold']
        ]
      },
      {
        title: 'HARDWARE & COMPATIBILITY',
        rows: [
          ['Autopilot Interface', 'DroneCAN / MAVLink / ROS2 Compatible'],
          ['Communication Ports', 'USB-C / DroneCAN / MAVLink Serial'],
          ['Weight', '95 g (Lightweight Casing)'],
          ['Power Supply', '5V DC (3.5W Power)']
        ]
      },
      {
        title: 'ENVIRONMENTAL & FAILSAFE',
        rows: [
          ['Operating Environment', 'GPS-Denied, EW Jammers, Tunnels, Indoors'],
          ['Failsafe Features', 'Auto Position Hold, Stable Hovering, Depth Mapping'],
          ['Operating Temp', '-10°C to +55°C']
        ]
      }
    ],
    typicalApplications: [
      {
        title: 'GPS-Denied Autonomous Flight',
        desc: 'Autonomous positioning and sub-meter hover hold in RF-jammed military/tactical zones.',
        icon: 'fa-solid fa-satellite-dish'
      },
      {
        title: 'Indoor & Tunnel Inspection',
        desc: 'Navigation inside power plants, mines, building interiors, and underground infrastructure.',
        icon: 'fa-solid fa-building'
      },
      {
        title: '360° Real-time Obstacle Avoidance',
        desc: 'Autonomous collision avoidance using 3D point-cloud LiDAR mapping.',
        icon: 'fa-solid fa-shield-halved'
      }
    ],
    features: [
      'Visual-Inertial Odometry (VIO) + 3D LiDAR dual sensor array',
      '< 0.5% distance sub-meter autonomous position hold accuracy',
      'Immune to GNSS spoofing, satellite loss, and electronic warfare jammers',
      '360-degree real-time 3D point cloud distance mapping',
      'DroneCAN, MAVLink, and ROS2 PX4/ArduPilot integration',
      'Featherweight 95g compact aerospace casing with 5V 3.5W power draw',
      'Designed and manufactured in India'
    ]
  },

  'atlas-1': {
    code: 'NX03-01',
    title: 'NX-Atlas 1',
    subtitle: 'CAN-Based Multi-Constellation GNSS + Magnetometer Module',
    highlights: 'u-blox NEO-F10N | RM3100 | NAVIC + GPS + GLONASS + Galileo + BeiDou | Dual CAN JST-GH | Made in India',
    images: {
      bottom: 'assets/images/atlas_1_single.png?v=20260811_v1',
      top: 'assets/images/atlas_1_single.png?v=20260811_v1'
    },
    description: 'The NX-Atlas 1 is a compact CAN-based GNSS and magnetometer module built around the u-blox NEO-F10N dual-band receiver and the PNI RM3100 high-accuracy magnetometer. It provides a complete heading and positioning solution for unmanned and autonomous platforms, with multi-constellation support across NavIC, GPS, GLONASS, Galileo and BeiDou. Dual JST-GH 1.25mm connectors enable daisy-chain or redundant CAN connection, and the on-board patch antenna delivers reliable acquisition in a 48 × 48 mm footprint.',
    techSpecCategories: [
      {
        title: 'LED INDICATORS',
        rows: [
          ['LED1 (PPS)', 'Green', 'Blinking (1 Hz) — 3D GNSS fix acquired. Solid — no fix.'],
          ['LED2 (MCU-LED)', 'Blue', 'Blinking (1 Hz) — MCU running normally. Solid ON / OFF — fault condition.']
        ]
      },
      {
        title: 'MECHANICAL DIMENSIONS',
        rows: [
          ['PCB Dimensions', '48.0 mm × 48.0 mm'],
          ['PCB Thickness', '1.6 mm (standard FR4)'],
          ['Mounting', 'M2 corner holes'],
          ['Weight', '~15 g (without cable harness)'],
          ['Origin', 'Made in India']
        ]
      },
      {
        title: 'CONNECTOR PINOUT — JST-GH 1.25 mm, 4-Pin (×2)',
        rows: [
          ['Pin 1', '5V', 'Power In: 5 V DC supply input'],
          ['Pin 2', 'CANH', 'Bidirectional: CAN bus high-side differential signal'],
          ['Pin 3', 'CANL', 'Bidirectional: CAN bus low-side differential signal'],
          ['Pin 4', 'GND', 'Power: Ground reference']
        ]
      }
    ],
    typicalApplications: [
      {
        title: 'UAV / UAS Autopilot GNSS & Heading',
        desc: 'Precision 3D positioning and heading solution for commercial drones, VTOLs, and fixed-wing aircraft.',
        icon: 'fa-solid fa-plane'
      },
      {
        title: 'GCS Base Nodes & RTK Field Hubs',
        desc: 'Ground control station satellite reference tracking and precision positioning base node.',
        icon: 'fa-solid fa-tower-broadcast'
      },
      {
        title: 'Precision Agriculture & Surveying',
        desc: 'High-accuracy NavIC + GPS satellite tracking for agricultural mapping and surveying.',
        icon: 'fa-solid fa-wheat-awn'
      },
      {
        title: 'Robotics & Autonomous Teleoperation',
        desc: 'Ground rovers, USV marine boats, and autonomous vehicle navigation.',
        icon: 'fa-solid fa-robot'
      },
      {
        title: 'Defense NavIC-Compliant Systems',
        desc: 'Strategic indigenous NavIC (IRNSS) multi-constellation tactical deployment.',
        icon: 'fa-solid fa-shield-halved'
      }
    ],
    features: [
      'u-blox NEO-F10N L1/L5 dual-band GNSS receiver',
      'NavIC (IRNSS) + GPS + GLONASS + Galileo + BeiDou support',
      'PNI RM3100 high-accuracy 3-axis magneto-inductive compass',
      'CAN bus communication interface (DroneCAN / UAVCAN v1 compatible)',
      'Dual JST-GH 1.25 mm 4-pin connectors for redundant/daisy-chain CAN wiring',
      '5 V single-supply power input (~120 mA peak current)',
      'Compact 48 × 48 mm FR4 form factor (15g lightweight)',
      'On-board high-performance patch antenna',
      'Status LEDs for 3D fix (PPS Green) and MCU health (Blue)',
      'Designed and manufactured in India'
    ],
    sections: [
      {
        heading: 'Electrical Specifications',
        type: 'table',
        headers: ['Parameter', 'Specification'],
        rows: [
          ['Supply Voltage', '5 V DC ± 5%'],
          ['Supply Current (Typical)', '~120 mA @ 5 V (acquisition), ~80 mA (tracking)'],
          ['Supply Current (Peak)', '< 200 mA'],
          ['Logic Level', '3.3 V (internal)'],
          ['ESD Protection', 'On all external-facing signals'],
          ['Operating Temperature', '−40 °C to +85 °C'],
          ['Storage Temperature', '−55 °C to +125 °C']
        ]
      },
      {
        heading: 'Connector Pinout — JST-GH 1.25 mm, 4-Pin (×2)',
        type: 'pinout',
        headers: ['Pin', 'Signal', 'Direction', 'Description'],
        rows: [
          ['1', '5V', 'Power In', '5 V DC supply input'],
          ['2', 'CANH', 'Bidirectional', 'CAN bus high-side differential signal'],
          ['3', 'CANL', 'Bidirectional', 'CAN bus low-side differential signal'],
          ['4', 'GND', 'Power', 'Ground reference']
        ]
      }
    ]
  },

  'command-1': {
    code: 'NX02-01',
    title: 'NX-Command 1',
    subtitle: 'Dual-Mode UAV Controller',
    highlights: 'Hall Effect Joystick • Split-PCB Design • SBUS / USB HID Dual Mode | Made in India',
    images: {
      bottom: 'assets/images/controller_tx.png?v=20260810_v2',
      top: 'assets/images/controller_tx.png?v=20260810_v2'
    },
    description: 'The NX-Controller is a dual-mode gamepad controller module purpose-built for Unmanned Aerial Vehicle (UAV) ground control applications. Employing hall-effect sensing technology on both axes, the NX-Controller delivers smooth, precise, drift-free analog input across the full operating life of the product. The controller is physically partitioned into two matched PCBs - Left Hand Side (LHS) and Right Hand Side (RHS) - enabling flexible mechanical integration into custom GCS enclosures, display-based controllers, and handheld consoles.',
    operatingModes: [
      {
        title: 'Gamepad / USB HID Mode',
        icon: 'fa-solid fa-gamepad',
        points: [
          'Controller enumerates as a standard USB HID Gamepad on any host computer.',
          'All 4 analog axes are reported at full 12-bit resolution.',
          '16 buttons available.',
          'Compatible with Mission Planner, QGroundControl, and any GCS that supports MAVLink RC Override.',
          'No driver installation required (Windows / macOS / Linux plug-and-play).',
          'Powered directly from the USB host at 5 V; no external supply needed.'
        ]
      },
      {
        title: 'RC / SBUS Mode',
        icon: 'fa-solid fa-radio',
        points: [
          '4 × Flight Mode select buttons (mapped to SBUS channel 5).',
          '2 × ARM / DISARM dedicated buttons (mapped to SBUS channel 6).',
          '12 RC Switches total in this mode (4 flight-mode combined, 2 ARM/DISARM, 6 user-assignable).',
          'SBUS output on UART_TX: 100 kbaud, 8E2, inverted — standard Futaba SBUS specification.',
          '16 SBUS channels are always transmitted.',
          'An external SBUS-capable board is required in the airborne radio to decode SBUS and forward to the FC RCIN port.'
        ]
      }
    ],
    systemIntegration: {
      rcMode: {
        title: 'RC Mode - Ground to Air Link',
        headers: ['NX-CONTROLLER', 'Ground Radio', '→', 'Air Radio', 'NX-SBUS', 'Flight Controller'],
        row: ['UART / Ethernet', 'UART / Ethernet', '→', 'UART / Ethernet', 'UART / Ethernet', 'RCIN / SBUSIN']
      },
      gamepadMode: {
        title: 'Gamepad Mode - USB HID Link',
        headers: ['NX-CONTROLLER', '→', 'GCS Computer', '→', 'FC via MAVLink Override'],
        row: ['USB HID Gamepad', '→', 'Mission Planner / QGC', '→', 'Telemetry']
      },
      diagram: {
        title: 'Typical Hardware Wiring Diagram'
      }
    },
    keyFeatureShowcase: [
      {
        title: 'ERGONOMIC DESIGN',
        subtitle: 'Designed for pilot comfort during extended operations.',
        image: 'assets/images/controller_tx.png?v=20260810_v2',
        align: 'right',
        points: [
          { title: 'Familiar Console Feel', desc: 'Designed like a standard Radio Controller for intuitive use.' },
          { title: 'Comfortable Grip', desc: 'Ergonomically designed for extended handheld use without fatigue.' }
        ]
      },
      {
        title: 'PRECISION & PERFORMANCE',
        subtitle: '',
        image: 'assets/images/surveillance_drone_slide.png',
        align: 'left',
        points: [
          { title: 'Hall Effect Sensors', desc: 'Contactless technology for precise, drift-free control.' },
          { title: 'High Precision', desc: '12-bit resolution for smooth and accurate maneuvering.' },
          { title: 'Low Latency', desc: 'Instant response for critical missions where every millisecond counts.' }
        ]
      },
      {
        title: 'BUILT FOR DRONE UTILITY',
        subtitle: '',
        image: 'assets/images/advance_tech_slide.png',
        align: 'right',
        points: [
          { title: 'Arming & Disarming', desc: 'Support for Arming and Disarming functions directly from the joystick.' },
          { title: 'Customizable Operations', desc: 'One-touch controls for Loiter, Auto/Nav, RTL, and Land modes.' },
          { title: 'Easy Setup & Use', desc: 'Smooth and responsive control for ascent, descent, and horizontal movement.' }
        ]
      }
    ],
    techSpecCategories: [
      {
        title: 'PERFORMANCE',
        rows: [
          ['Sensor Type', 'Contactless Hall Effect'],
          ['Resolution', '1000-2000 PWM'],
          ['Linearity', '±0.5%'],
          ['Life cycle', '> 1000 Hours']
        ]
      },
      {
        title: 'ELECTRONIC',
        rows: [
          ['Supply Voltage', '5V DC ±0.5V'],
          ['Comm. Port', 'USB/type-C'],
          ['Current Consumption', '< 50mA']
        ]
      },
      {
        title: 'MECH. & ENVIRONMENTAL',
        rows: [
          ['Operating Temp', '-10°C to +40°C'],
          ['IP Rating', 'IP54'],
          ['Weight', '150 g']
        ]
      }
    ],
    compatibilityCategories: [
      {
        title: 'HARDWARE',
        rows: [
          ['PC', 'Windows 10 & 11'],
          ['Android', 'Tablet / Phone'],
          ['Apple', 'MacBook / iPhone']
        ]
      },
      {
        title: 'SOFTWARE',
        rows: [
          ['Mission Planner', 'Supported'],
          ['Q-Ground Controller', 'Supported'],
          ['Solex', 'Supported'],
          ['Betaflight Controller', 'Supported']
        ]
      },
      {
        title: 'DRONE',
        rows: [
          ['FPV / Nano type', 'Supported'],
          ['Small type', 'Supported'],
          ['Medium type', 'Supported'],
          ['Large type', 'Supported']
        ]
      }
    ],
    typicalApplications: [
      {
        title: 'Fixed-wing, Multirotor & VTOL UAV GCS',
        desc: 'Fixed-wing, multirotor, and VTOL UAV ground control stations.',
        icon: 'fa-solid fa-plane'
      },
      {
        title: 'Custom Integrated GCS Consoles',
        desc: 'Custom GCS consoles with integrated display (USB HID Joystick Mode).',
        icon: 'fa-solid fa-desktop'
      },
      {
        title: 'Long-Range Radio Operations',
        desc: 'Long-range UAV operations using UART / Ethernet radio links (RC Mode).',
        icon: 'fa-solid fa-tower-broadcast'
      },
      {
        title: 'Rover & Ground Robot Teleoperation',
        desc: 'Rover and ground robot teleoperation.',
        icon: 'fa-solid fa-robot'
      },
      {
        title: 'Industrial Inspection Drone Control',
        desc: 'Industrial inspection drone remote control.',
        icon: 'fa-solid fa-helmet-safety'
      },
      {
        title: 'Control Systems & MAVLink Prototyping',
        desc: 'Development and prototyping of UAV control systems using MAVLink.',
        icon: 'fa-solid fa-code-branch'
      }
    ],
    features: [
      'Hall Effect - contactless, drift-free, lifetime-rated',
      '4 × Analog (Left X/Y, Right X/Y) — 12-bit resolution',
      'Split 2-PCB design for easy display-controller integration',
      '16 × programmable buttons',
      '12 RC Switch channels: 4 for Flight Mode select, 2 for ARM/DISARM',
      'USB HID Gamepad - Compatible with all major GCS software',
      'SBUS (standard 100 kbaud inverted UART)',
      'UART SBUS output for radio integration (UART / Ethernet radio)',
      'On-board LED (LHS & RHS) for power indication',
      '5 V DC (USB) / 4.8 V–5.2 V (external)',
      'Designed and manufactured in India'
    ],
    sections: [
      {
        heading: 'Electrical Specifications',
        type: 'table',
        headers: ['Parameter', 'Min', 'Typ', 'Max', 'Unit'],
        rows: [
          ['Supply Voltage (USB)', '4.8', '5.0', '5.2', 'V'],
          ['Supply Current (Idle)', '—', '80', '150', 'mA'],
          ['Supply Current (Active)', '—', '120', '200', 'mA'],
          ['Joystick Axis Resolution', '—', '12', '—', 'bits'],
          ['UART_TX Voltage Level', '—', '3.3', '—', 'V'],
          ['SBUS Baud Rate', '—', '100', '—', 'kbaud'],
          ['Operating Temperature', '−20', '25', '+70', '°C']
        ]
      },
      {
        heading: 'Power & USB Connector (4-Pin)',
        type: 'pinout',
        headers: ['Pin', 'Signal', 'Type', 'Description'],
        rows: [
          ['1', '5V', 'Power In', '5 V supply input'],
          ['2', 'USB+', 'USB D+', 'USB data positive (D+)'],
          ['3', 'USB−', 'USB D−', 'USB data negative (D−)'],
          ['4', 'GND', 'Ground', 'Common ground reference']
        ]
      },
      {
        heading: 'Serial / RC Connector (4-Pin)',
        type: 'pinout',
        headers: ['Pin', 'Signal', 'Type', 'Description'],
        rows: [
          ['1', 'UART_RX', 'Digital In', 'UART receive (3.3 V logic level)'],
          ['2', 'UART_TX', 'Digital Out', 'UART transmit (3.3 V logic level / SBUS)'],
          ['3', 'GND', 'Ground', 'Serial ground reference'],
          ['4', 'GND', 'Ground', 'Additional ground']
        ]
      }
    ]
  },

  'pocket-pro': {
    code: 'NX15',
    title: 'Handheld Ground Controller',
    subtitle: '15 KM Mini Handheld Ground Station with Integrated HD Video Link',
    highlights: '15 KM Range • 5.5" 1000-Nit Touchscreen • Qualcomm 8-Core CPU • 15h Battery | Made in India',
    images: {
      bottom: 'assets/images/handheld_controller.png?v=20260810_v1',
      top: 'assets/images/handheld_controller.png?v=20260810_v1'
    },
    description: 'The NX-15 Handheld Ground Controller is a 15-kilometer-range mini handheld ground station based on dual HD low-latency image transmission technology. Powered by a Qualcomm 8-core CPU platform running Android 9.0 OS, it integrates real-time 1080p 60fps video streaming, telemetry datalink, and remote control into a single ergonomic console with a 5.5-inch 1000-nit sunlight-readable touchscreen.',
    operatingModes: [
      {
        title: 'Enterprise Ground Station Mode',
        icon: 'fa-solid fa-desktop',
        points: [
          'Runs QGroundControl, Mission Planner, and SIYI FPV directly on Android 9.0 OS.',
          'Full-band 4G cellular network integration for cloud video streaming.',
          'Standard HDMI output for external enterprise monitors and command centers.',
          'Dual operator mode: One controller for flight control, one for gimbal/payload control.',
          'Remote control relay mode for extended 30 KM dual-station missions.'
        ]
      },
      {
        title: 'Multi-Protocol Datalink & RC Mode',
        icon: 'fa-solid fa-radio',
        points: [
          '13 Physical channels (joysticks, 3-stage switches, dials, assignable buttons).',
          '16 Communication Channels with standard SBUS output.',
          'Supported Flight Controllers: Pixhawk, APM, JIYI (K3A/K++), BOYING (Paladin), VKFLY (V7AG).',
          'Multiple datalink connection types: UART, USB COM, Bluetooth, Upgrade Port, UDP.',
          'Configurable joystick deadzone, failsafe, and channel mapping.'
        ]
      }
    ],
    systemIntegration: {
      rcMode: {
        title: 'Standard Airborne & Datalink Stream',
        headers: ['HANDHELD GCS', 'Ground Antenna', '→', 'Air Unit', 'S.BUS / UART', 'Flight Controller'],
        row: ['Qualcomm 8-Core CPU', '5 dBi Omni / Patch', '→', 'MK15 Air Unit', 'SBUS 16Ch / UART', 'Pixhawk / ArduPilot']
      },
      gamepadMode: {
        title: 'Video & Telemetry Stream Link',
        headers: ['HANDHELD GCS', '→', 'GCS App (QGC/SIYI FPV)', '→', 'HDMI Monitor / Cloud'],
        row: ['5.5" 1000-Nit Touchscreen', '→', 'Hardware H.264/H.265 1080p', '→', 'HDMI Out / 4G Network']
      },
      diagram: {
        title: 'Typical Datalink & Video Stream Architecture'
      }
    },
    keyFeatureShowcase: [
      {
        title: '15 KM DIGITAL HD IMAGE TRANSMISSION',
        subtitle: 'Low-latency dual Full HD real-time video link up to 30 km with patch antennas.',
        image: 'assets/images/15km_range_diagram.png?v=20260810_v1',
        align: 'left',
        points: [
          { title: 'Extreme Range', desc: 'Up to 15 km with standard omni antennas and 30 km with directional patch antennas.' },
          { title: 'Ultra-Low Latency', desc: '180ms average latency hardware H.264/H.265 decoding.' },
          { title: 'Frequency Self-Adapting', desc: 'Automatically searches and adapts to frequency bands with least interference.' }
        ]
      },
      {
        title: 'SUNLIGHT-READABLE 1000-NIT DISPLAY',
        subtitle: '5.5-inch High-Definition high-brightness LCD touchscreen.',
        image: 'assets/images/handheld_controller.png?v=20260810_v1',
        align: 'right',
        points: [
          { title: '1000-Nit Brightness', desc: 'Crystal clear visibility even under direct sunlight.' },
          { title: 'Qualcomm 8-Core Processor', desc: 'High performance Android 9.0 platform (2GB RAM + 16GB ROM).' },
          { title: 'Built-in GCS Software', desc: 'Pre-installed with SIYI TX, SIYI FPV, QGroundControl, and Ping Tools.' }
        ]
      },
      {
        title: 'ALL-DAY 9-HOUR BATTERY LIFE',
        subtitle: '10200 mAh 7.4V Li-ion battery with 30W PD fast charging.',
        image: 'assets/images/advance_tech_slide.png',
        align: 'left',
        points: [
          { title: '9-Hour Operating Time', desc: 'Continuous flight operations without power swapping.' },
          { title: '30W Fast Charging', desc: 'Rapid replenishment via USB Type-C PD protocol.' },
          { title: 'IP53 Weather Resistance', desc: 'Protected against dust, moisture, and outdoor field environments (-10°C to +50°C).' }
        ]
      }
    ],
    techSpecCategories: [
      {
        title: 'GROUND UNIT (REMOTE CONTROLLER)',
        rows: [
          ['Monitor', '5.5" 1000-Nit HD LCD Touchscreen'],
          ['Processor & OS', 'Qualcomm 8-Core CPU / Android 9.0'],
          ['Memory', '2 GB RAM, 16 GB ROM'],
          ['Dimensions', '189 × 138 × 41 mm (Antenna Overlapped)'],
          ['Weight', '850 g'],
          ['Battery', '10200 mAh 7.4V 2S Li-ion (75.48 Wh)'],
          ['Battery Life', '15 Hours (PD 30W Fast Charge)'],
          ['IP Rating', 'IP53 Water & Dust Resistant']
        ]
      },
      {
        title: 'AIR UNIT (AIRBORNE TRANSCEIVER)',
        rows: [
          ['Signal Output', '16 Channels SBUS / 5 Channels PWM'],
          ['Air Unit Interface', 'S.BUS 3-Pin, UART 4-Pin, Ethernet 8-Pin'],
          ['Power Input', '14.8V – 58.8V (4S ~ 14S LiPo Input)'],
          ['Dimensions', '70 × 55 × 16 mm (Cooling Fan Included)'],
          ['Weight', '100 g (BEC Included)'],
          ['Antenna Gain', 'Standard Omni: 5 dBi']
        ]
      },
      {
        title: 'COMMUNICATION & PORTS',
        rows: [
          ['Max Range', '15 km (Omni) / 30 km (Patch)'],
          ['Video Output', 'Standard HDMI Port (Enterprise Edition)'],
          ['Datalink Interfaces', 'UART, USB COM, Bluetooth, UDP, Type-C'],
          ['Expansion Slots', 'MicroSD / TF Card, SIM Card (4G LTE)'],
          ['Operating Temp', '-10°C to +50°C']
        ]
      }
    ],
    compatibilityCategories: [
      {
        title: 'FLIGHT CONTROLLERS',
        rows: [
          ['Pixhawk / APM', 'Supported'],
          ['JIYI K3A / K++', 'Supported'],
          ['BOYING Paladin', 'Supported'],
          ['VKFLY V7AG', 'Supported']
        ]
      },
      {
        title: 'GCS SOFTWARE',
        rows: [
          ['QGroundControl', 'Supported'],
          ['Mission Planner', 'Supported (H.264 Video)'],
          ['SIYI FPV App', 'Supported'],
          ['BOYING / JIYI Agri', 'Supported']
        ]
      },
      {
        title: 'VEHICLE PLATFORMS',
        rows: [
          ['Commercial UAV Drones', 'Supported'],
          ['VTOL & Fixed-Wing', 'Supported'],
          ['UGV Unmanned Rovers', 'Supported'],
          ['USV Unmanned Boats', 'Supported']
        ]
      }
    ],
    typicalApplications: [
      {
        title: 'Fixed-wing, Multirotor & VTOL UAV GCS',
        desc: 'Long-range ground station control for commercial drones and VTOL UAVs.',
        icon: 'fa-solid fa-plane'
      },
      {
        title: 'Dual-Operator Payload & Gimbal Control',
        desc: 'Dual station setup: Pilot flight control and payload operator camera control.',
        icon: 'fa-solid fa-users'
      },
      {
        title: 'Long-Range Datalink Operations (30 KM)',
        desc: '30-kilometer-range missions using directional patch antennas and relay link.',
        icon: 'fa-solid fa-tower-broadcast'
      },
      {
        title: 'UGV & USV Teleoperation',
        desc: 'Unmanned ground rovers and unmanned surface boat control.',
        icon: 'fa-solid fa-robot'
      },
      {
        title: 'Industrial Inspection Drones',
        desc: 'Power line, pipeline, and infrastructure inspection with HD video streaming.',
        icon: 'fa-solid fa-helmet-safety'
      },
      {
        title: 'Agriculture & Spraying UAV Control',
        desc: 'Agriculture drone field operations with JIYI Agri-Assistant and BOYING GCS.',
        icon: 'fa-solid fa-wheat-awn'
      }
    ],
    features: [
      '15 KM Unobstructed wireless digital image transmission range',
      '5.5-inch 1000-nit high-brightness sunlight-readable LCD touchscreen',
      'Qualcomm 8-core CPU platform running Android 9.0 OS',
      '10200 mAh battery delivering 15 hours operating endurance',
      'PD 30W fast charging via USB Type-C',
      'Standard HDMI video output port for external monitors',
      '16 Channels SBUS output and 5 PWM channels on air unit',
      'IP53 rated weather-sealed ground station console'
    ]
  },

  'joule-1': {
    code: 'NX01-01',
    title: 'NX-Joule 1',
    subtitle: '2S – 6S Wide-Input Buck Converter Module',
    highlights: 'Regulated 5V / 3.3V Output | Up to 2.5A | EN55011 Class B EMI | Made in India',
    images: {
      bottom: 'assets/images/joule_1_single.png?v=20260811_v1',
      top: 'assets/images/joule_1_single.png?v=20260811_v1'
    },
    description: 'The NX-Joule 1 is a compact, high-efficiency synchronous buck converter module designed for unmanned aerial, satellite, and embedded aerospace applications. Accepting a wide 2S–6S LiPo / LiHV battery input (7V–28V), it delivers regulated 5V or 3.3V output at up to 2.5A continuous current with heatsink (1.5A without heatsink). Built around an industrial-grade IC with Hiccup overcurrent protection, 165°C thermal shutdown, and EN55011 Class B EMI compliance.',
    keyFeatureShowcase: [
      {
        title: 'EFFICIENCY VS. OUTPUT CURRENT',
        subtitle: 'Peak efficiency up to 88% across standard operating loads.',
        image: 'assets/images/joule1_efficiency_graph.png?v=20260810_v1',
        align: 'right',
        points: [
          { title: 'High Thermal Efficiency', desc: 'Maintains >80% efficiency across 0.2A to 2.5A output load current.' },
          { title: 'Dual Regulated Output', desc: 'Available in fixed 5.0V (88% typ) and 3.3V (83% typ) rail configurations.' },
          { title: '750 kHz Switching', desc: 'High frequency synchronous switching minimizes output ripple and heat generation.' }
        ]
      },
      {
        title: 'MECHANICAL & HOLE PATTERN',
        subtitle: 'Ultra-compact 25 × 25 mm FR4 footprint with M2.5 diagonal standoffs.',
        image: 'assets/images/joule1_dimensions_diagram.png?v=20260810_v1',
        align: 'left',
        points: [
          { title: '25 × 25 mm Footprint', desc: 'Compact square FR4 PCB with 3.2mm standard board thickness.' },
          { title: '17.6mm Standoff Pitch', desc: 'Diagonal M2.5 mounting holes (2.8mm inner / 5.2mm outer pad diameter).' },
          { title: 'Flat SMD Copper Pads', desc: 'Heavy copper solder pads for perimeter ground and high-current power connections.' }
        ]
      }
    ],
    techSpecCategories: [
      {
        title: 'ELECTRICAL SPECIFICATIONS (TA = 25°C)',
        rows: [
          ['Input Voltage (VIN)', '7 V Min | 28 V Max'],
          ['Output Voltage — 5V Option', '4.90 V Min | 5.00 V Typ | 5.10 V Max'],
          ['Output Voltage — 3.3V Option', '3.24 V Min | 3.30 V Typ | 3.36 V Max'],
          ['Output Current (No Heatsink)', '1.5 A Max Continuous'],
          ['Output Current (With Heatsink)', '2.5 A Max Continuous'],
          ['Switching Frequency', '750 kHz Typical'],
          ['Efficiency (VOUT = 5V @ 1A)', '88 % Typical'],
          ['Efficiency (VOUT = 3.3V @ 1A)', '83 % Typical'],
          ['Short-Circuit Recovery', 'Auto (Hiccup Mode)'],
          ['Thermal Shutdown Threshold', '165 °C Typical']
        ]
      },
      {
        title: 'MECHANICAL & COMPLIANCE',
        rows: [
          ['PCB Dimensions', '25.0 mm × 25.0 mm'],
          ['Board Thickness', '3.2 mm (Standard FR4)'],
          ['Weight', '10 g (Without Heatsink)'],
          ['Mounting Pattern', 'M2.5 threaded standoffs (×2 diagonal, 17.6mm pitch)'],
          ['Connector Interface', 'Flat SMD copper pads'],
          ['PCB Finish & Color', 'Black ENIG Finish'],
          ['EMI Radiated Emissions', 'Meets EN55011 Class B'],
          ['Country of Origin', 'Made in India']
        ]
      },
      {
        title: 'THERMAL & OPERATING CONDITIONS',
        rows: [
          ['IC Junction Temp (TJ)', '-40 °C to +125 °C'],
          ['Operating Ambient Temp (TA)', '-40 °C to +85 °C'],
          ['Storage Temperature', '-55 °C to +150 °C']
        ]
      }
    ],
    typicalApplications: [
      {
        title: 'Application Note 1',
        desc: 'Ensure adequate airflow or thermal path when running at maximum current (2.5A).',
        icon: 'fa-solid fa-wind'
      },
      {
        title: 'Application Note 2',
        desc: 'Ground pads must be soldered completely on all perimeter pads for optimal EMI and thermal performance.',
        icon: 'fa-solid fa-microchip'
      },
      {
        title: 'Application Note 3',
        desc: 'The M2.5 mounting holes are ground-connected; use non-conductive standoffs if isolation is required.',
        icon: 'fa-solid fa-bolt'
      }
    ],
    features: [
      'Wide input voltage range: 7 V to 28 V (2S–6S LiPo / LiHV battery)',
      'Fixed output options: 5.0 V (88% efficiency) or 3.3 V (83% efficiency)',
      'Continuous output current: 1.5A (no heatsink) / 2.5A (with heatsink)',
      'Hiccup mode automatic short-circuit protection recovery',
      '165°C thermal shutdown threshold protection',
      'Meets EN55011 Class B Radiated EMI standards',
      '25 × 25 mm FR4 footprint with 3.2mm board thickness and 10g weight',
      'Diagonal M2.5 mounting holes with 17.6mm standoff spacing',
      'Designed and manufactured in India'
    ]
  },

  'signature-1': {
    code: 'SIGNATURE I',
    title: 'SIGNATURE-I',
    subtitle: 'Micro-Category Inspection & Surveillance UAV Platform',
    highlights: 'Under 1kg Micro UAV | 30-Min Endurance | 10 km Range | 4K Sony Sensor | Made in India',
    images: {
      bottom: 'assets/images/signature_1_drone.png',
      top: 'assets/images/signature_1_drone.png'
    },
    description: 'SIGNATURE-I is an indigenous micro-category unmanned aerial vehicle engineered for high-precision surveillance, industrial infrastructure inspection, perimeter security, and GIS photogrammetry. Equipped with a 1/1.7" 4K Sony sensor and 3-axis stabilized gimbal, it offers up to 30 minutes of continuous flight endurance and 10 km encrypted transmission range.',

    // 1. Visual Feature Badges (Matching User Image 1)
    featureBadges: [
      { icon: 'fa-solid fa-gears', title: 'Easy Assembly & Disassembly', filled: true },
      { icon: 'fa-solid fa-user-check', title: 'Operable by Single Person', filled: false },
      { icon: 'fa-solid fa-plane-arrival', title: 'Automatic Take-off & Landing', filled: false },
      { icon: 'fa-solid fa-battery-three-quarters', title: 'Smart Battery Failsafe', filled: true },
      { icon: 'fa-solid fa-eye', title: 'AI Smart Identification & Tracking', filled: false },
      { icon: 'fa-solid fa-tower-broadcast', title: 'Failsafe for Communication Loss', filled: false },
      { icon: 'fa-solid fa-briefcase', title: 'Easy to Carry', filled: false },
      { icon: 'fa-solid fa-map-location-dot', title: 'Geo-Fencing (Inclusion/Exclusion)', filled: true }
    ],

    // 2. Technical Specifications Badges (Matching User Image 2)
    techSpecBadges: [
      { icon: 'fa-solid fa-stopwatch', val: 'Up to 30 minutes', label: 'Endurance', filled: true },
      { icon: 'fa-solid fa-gauge-high', val: '36 km/h or 10 m/s', label: 'Speed', filled: false },
      { icon: 'fa-solid fa-route', val: '10 km', label: 'Range', filled: false },
      { icon: 'fa-solid fa-weight-hanging', val: 'Under 1 kg', label: 'Weight', filled: true },
      { icon: 'fa-solid fa-arrows-up-to-line', val: '120 m or 400 ft.', label: 'Operational Altitude', filled: false },
      { icon: 'fa-solid fa-mountain', val: '2500 m AMSL', label: 'Service Ceiling', filled: false },
      { icon: 'fa-solid fa-temperature-half', val: '-10°C to 55°C', label: 'Temperature', filled: false },
      { icon: 'fa-solid fa-wind', val: '36 km/h or 10 m/s', label: 'Wind Resistance', filled: true }
    ],

    // 3. AI Monitoring and Tracking (Matching User Image 3)
    aiTracking: [
      {
        icon: 'fa-solid fa-person-military-pointing',
        title: 'Human, Vehicle & Boat Recognition',
        desc: 'SIGNATURE-I supports target recognition and tracking based on artificial intelligence technology, automatically recognizes and records pedestrians, vehicle (including cars, trucks, and buses), and boats in the monitoring area.'
      },
      {
        icon: 'fa-solid fa-users-viewfinder',
        title: 'Multi-target Recognition',
        desc: 'SIGNATURE-I supports simultaneous monitoring of multiple targets in the monitoring area.'
      },
      {
        icon: 'fa-solid fa-camera-rotate',
        title: 'Gimbal Camera Collaborative Anti-lost Tracking',
        desc: 'During the tracking process, if the target is blocked or briefly leaves the monitoring screen, this can automatically recognise and continue tracking when it re-enters the monitoring screen.'
      }
    ],

    // 4. Competitive Advantage (Matching User Image 4)
    competitiveAdvantage: [
      {
        icon: 'fa-solid fa-indian-rupee-sign',
        title: 'Price',
        desc: 'Price is an important concern willing to buy',
        filled: true
      },
      {
        icon: 'fa-solid fa-hand-pointer',
        title: 'Ease of Use',
        desc: 'Handheld Controller and Android Application for Monitoring and Control',
        filled: false
      },
      {
        icon: 'fa-solid fa-box-open',
        title: 'Packaging',
        desc: 'Small Bag Packs, Easy to Carry',
        filled: false
      },
      {
        icon: 'fa-solid fa-crosshairs',
        title: 'AI Tracking',
        desc: 'Human, Vehicle & Boat Multi-Target Recognition',
        filled: true
      },
      {
        icon: 'fa-solid fa-battery-three-quarters',
        title: 'Smart Battery',
        desc: 'Enabling UAV Safety & Increased Endurance',
        filled: false
      },
      {
        icon: 'fa-solid fa-feather-pointed',
        title: 'Light Weight',
        desc: 'The Indigenous Design has offered an Opportunity to Optimize both Size and Weight',
        filled: true
      }
    ],

    features: [
      'Micro-category compliance (<1 kg operational weight)',
      '30-minute flight endurance on high-density LiHV smart battery',
      '10 km encrypted dual-band C2 and HD video link',
      '1/1.7" Sony 4K Ultra HD sensor with 3-axis mechanical gimbal',
      'AI onboard target tracking (Human, Vehicle, Object recognition)',
      'Wind resistance up to 36 km/h (Level 5 wind rated)',
      'Failsafe auto Return-to-Home (RTH) on signal loss or low battery',
      'Designed and manufactured in India'
    ],
    sections: [
      {
        heading: 'Platform Specifications Table',
        type: 'table',
        headers: ['Specification', 'Value'],
        rows: [
          ['Weight Class', 'Under 1 kg (Micro Category)'],
          ['Flight Endurance', 'Up to 30 Minutes'],
          ['Transmission Distance', '10 km Max Control Range'],
          ['Max Speed', '36 km/h (10 m/s)'],
          ['Operational Ceiling', '120 m (400 ft.) AGL | 2500 m AMSL'],
          ['Camera Sensor', '1/1.7" Sony 8MP CMOS (4K Ultra HD)'],
          ['Gimbal Stabilization', '3-Axis Mechanical Gimbal'],
          ['AI Computer Vision', 'Human / Vehicle Auto-Tracking']
        ]
      }
    ]
  }
};

function renderDatasheetPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'signature-1';
  const data = DATASHEETS[id] || DATASHEETS['signature-1'];

  document.title = `${data.title} Datasheet | NestX Aerospace`;

  const app = document.getElementById('datasheet-app');
  if (!app) return;

  // Feature Badges Grid HTML
  let featureBadgesHtml = '';
  if (data.featureBadges && data.featureBadges.length > 0) {
    let badgeCards = data.featureBadges.map(b => `
      <div class="ds-badge-card">
        <i class="${b.icon} ds-badge-icon"></i>
        <div class="ds-badge-title">${b.title}</div>
      </div>
    `).join('');
    featureBadgesHtml = `
      <div class="ds-block">
        <h3 class="ds-section-title">FEATURES</h3>
        <div class="ds-badge-grid">${badgeCards}</div>
      </div>
    `;
  }

  // Technical Specification Badges Grid HTML
  let techSpecBadgesHtml = '';
  if (data.techSpecBadges && data.techSpecBadges.length > 0) {
    let specCards = data.techSpecBadges.map(s => `
      <div class="ds-badge-card">
        <i class="${s.icon} ds-badge-icon"></i>
        <div class="ds-badge-val">${s.val}</div>
        <div class="ds-badge-label">${s.label}</div>
      </div>
    `).join('');
    techSpecBadgesHtml = `
      <div class="ds-block">
        <h3 class="ds-section-title">TECHNICAL SPECIFICATIONS</h3>
        <div class="ds-badge-grid">${specCards}</div>
      </div>
    `;
  }

  // AI Monitoring and Tracking HTML
  let aiTrackingHtml = '';
  if (data.aiTracking && data.aiTracking.length > 0) {
    let aiCards = data.aiTracking.map(a => `
      <div class="ds-ai-card">
        <div class="ds-ai-icon-wrap"><i class="${a.icon}"></i></div>
        <div class="ds-ai-title">${a.title}</div>
        <div class="ds-ai-desc">${a.desc}</div>
      </div>
    `).join('');
    aiTrackingHtml = `
      <div class="ds-block">
        <h3 class="ds-section-title">AI MONITORING AND TRACKING</h3>
        <div class="ds-ai-grid">${aiCards}</div>
      </div>
    `;
  }

  // Competitive Advantage HTML
  let competitiveHtml = '';
  if (data.competitiveAdvantage && data.competitiveAdvantage.length > 0) {
    let compCards = data.competitiveAdvantage.map(c => `
      <div class="ds-comp-card">
        <div class="ds-comp-icon-wrap"><i class="${c.icon}"></i></div>
        <div class="ds-comp-title">${c.title}</div>
        <div class="ds-comp-desc">${c.desc}</div>
      </div>
    `).join('');
    competitiveHtml = `
      <div class="ds-block">
        <h3 class="ds-section-title">COMPETITIVE ADVANTAGE</h3>
        <div class="ds-comp-grid">${compCards}</div>
      </div>
    `;
  }

  // Key Feature Showcase HTML (Alternating 2-Column Rows)
  let keyFeatureShowcaseHtml = '';
  if (data.keyFeatureShowcase && data.keyFeatureShowcase.length > 0) {
    let rowsHtml = data.keyFeatureShowcase.map((item) => {
      const isImageLeft = item.align === 'left';
      const textBlock = `
        <div class="ds-showcase-text">
          <h4 class="ds-showcase-title">${item.title}</h4>
          ${item.subtitle ? `<p class="ds-showcase-sub">${item.subtitle}</p>` : ''}
          <div class="ds-showcase-points">
            ${item.points.map(pt => `
              <div class="ds-showcase-point">
                <strong>${pt.title}</strong>
                <p>${pt.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      const imgBlock = `
        <div class="ds-showcase-img-wrap">
          <img src="${item.image}" alt="${item.title}" class="ds-showcase-img" />
        </div>
      `;

      return `
        <div class="ds-showcase-row ${isImageLeft ? 'image-left' : 'image-right'}">
          ${isImageLeft ? imgBlock + textBlock : textBlock + imgBlock}
        </div>
      `;
    }).join('');

    keyFeatureShowcaseHtml = `
      <div class="ds-block ds-showcase-block">
        <div class="ds-center-header" style="text-align: center; margin-bottom: 2rem;">
          <h3 class="ds-section-title" style="font-size: 1.6rem; letter-spacing: 2px;">KEY FEATURES</h3>
          <p style="color: #cbd5e1; font-size: 0.95rem; margin-top: 0.4rem;">Advanced technology meeting ergonomic excellence.</p>
        </div>
        <div class="ds-showcase-grid">
          ${rowsHtml}
        </div>
      </div>
    `;
  }

  // Technical Specification Categories Grid HTML (3-Column Layout)
  let techSpecCategoriesHtml = '';
  if (data.techSpecCategories && data.techSpecCategories.length > 0) {
    let catCards = data.techSpecCategories.map(cat => {
      let rowsHtml = cat.rows.map(r => `
        <tr>
          <td class="ds-spec-name">${r[0]}</td>
          <td class="ds-spec-val">${r[1]}</td>
        </tr>
      `).join('');
      return `
        <div class="ds-spec-cat-card">
          <h4 class="ds-spec-cat-title">${cat.title}</h4>
          <table class="ds-spec-cat-table">
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      `;
    }).join('');

    techSpecCategoriesHtml = `
      <div class="ds-block">
        <div class="ds-center-header" style="text-align: center; margin-bottom: 1.5rem;">
          <h3 class="ds-section-title" style="font-size: 1.6rem; letter-spacing: 2px;">TECHNICAL SPECIFICATIONS</h3>
          <p style="color: #cbd5e1; font-size: 0.95rem; margin-top: 0.4rem;">Built to perform in the most demanding environments.</p>
        </div>
        <div class="ds-3col-grid">
          ${catCards}
        </div>
      </div>
    `;
  }

  // Compatibility Categories Grid HTML (3-Column Layout)
  let compatibilityCategoriesHtml = '';
  if (data.compatibilityCategories && data.compatibilityCategories.length > 0) {
    let compCards = data.compatibilityCategories.map(cat => {
      let rowsHtml = cat.rows.map(r => `
        <tr>
          <td class="ds-spec-name">${r[0]}</td>
          <td class="ds-spec-val highlight-green">${r[1]}</td>
        </tr>
      `).join('');
      return `
        <div class="ds-spec-cat-card">
          <h4 class="ds-spec-cat-title">${cat.title}</h4>
          <table class="ds-spec-cat-table">
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      `;
    }).join('');

    compatibilityCategoriesHtml = `
      <div class="ds-block">
        <div class="ds-center-header" style="text-align: center; margin-bottom: 1.5rem;">
          <h3 class="ds-section-title" style="font-size: 1.6rem; letter-spacing: 2px;">COMPATIBILITY</h3>
          <p style="color: #cbd5e1; font-size: 0.95rem; margin-top: 0.4rem;">Seamless integration with leading platforms and software.</p>
        </div>
        <div class="ds-3col-grid">
          ${compCards}
        </div>
      </div>
    `;
  }

  // Typical Applications HTML
  let typicalApplicationsHtml = '';
  if (data.typicalApplications && data.typicalApplications.length > 0) {
    let appCards = data.typicalApplications.map(a => `
      <div class="ds-app-card">
        <div class="ds-app-icon-wrap"><i class="${a.icon}"></i></div>
        <div class="ds-app-title">${a.title}</div>
        <div class="ds-app-desc">${a.desc}</div>
      </div>
    `).join('');
    typicalApplicationsHtml = `
      <div class="ds-block">
        <h3 class="ds-section-title">TYPICAL APPLICATIONS</h3>
        <div class="ds-app-grid">${appCards}</div>
      </div>
    `;
  }

  let operatingModesHtml = '';
  if (data.operatingModes && data.operatingModes.length > 0) {
    let modeCards = data.operatingModes.map(m => `
      <div class="ds-mode-card">
        <h4 class="ds-mode-title"><i class="${m.icon} text-cyan"></i> ${m.title}</h4>
        <ul class="ds-mode-list">
          ${m.points.map(pt => `<li><i class="fa-solid fa-circle-dot text-cyan"></i> ${pt}</li>`).join('')}
        </ul>
      </div>
    `).join('');
    operatingModesHtml = `
      <div class="ds-block">
        <h3 class="ds-section-title">OPERATING MODES</h3>
        <div class="ds-mode-grid">${modeCards}</div>
      </div>
    `;
  }

  let systemIntegrationHtml = '';
  if (data.systemIntegration) {
    const si = data.systemIntegration;
    systemIntegrationHtml = `
      <div class="ds-block">
        <h3 class="ds-section-title">SYSTEM INTEGRATION DIAGRAM</h3>
        
        <!-- RC Mode Table -->
        <h4 style="font-size: 1.05rem; color: #00f3ff; margin-bottom: 0.6rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-network-wired"></i> ${si.rcMode.title}
        </h4>
        <div style="overflow-x: auto; margin-bottom: 1.5rem;">
          <table class="ds-table ds-integration-table">
            <thead>
              <tr>
                ${si.rcMode.headers.map(h => `<th>${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              <tr>
                ${si.rcMode.row.map(cell => `<td>${cell}</td>`).join('')}
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Gamepad Mode Table -->
        <h4 style="font-size: 1.05rem; color: #00f3ff; margin-bottom: 0.6rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-gamepad"></i> ${si.gamepadMode.title}
        </h4>
        <div style="overflow-x: auto; margin-bottom: 2rem;">
          <table class="ds-table ds-integration-table">
            <thead>
              <tr>
                ${si.gamepadMode.headers.map(h => `<th>${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              <tr>
                ${si.gamepadMode.row.map(cell => `<td>${cell}</td>`).join('')}
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Typical Hardware Wiring Diagram -->
        <h4 style="font-size: 1.05rem; color: #00f3ff; margin-bottom: 0.85rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-diagram-project"></i> ${si.diagram.title}
        </h4>
        <div class="ds-wiring-diagram">
          <div class="ds-diagram-node">
            <div class="ds-node-box">
              <span class="ds-node-title">NX-Controller</span>
              <span class="ds-node-pins">TX / RX / GND</span>
            </div>
          </div>
          <div class="ds-diagram-arrow"><i class="fa-solid fa-arrow-right"></i></div>
          <div class="ds-diagram-node">
            <div class="ds-node-box">
              <span class="ds-node-title"><i class="fa-solid fa-tower-broadcast"></i> Ground Radio</span>
              <span class="ds-node-pins">Antenna Link</span>
            </div>
          </div>
          <div class="ds-diagram-arrow ds-rf-link">
            <span><i class="fa-solid fa-wifi"></i> RF Link</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div class="ds-diagram-node">
            <div class="ds-node-box">
              <span class="ds-node-title"><i class="fa-solid fa-satellite-dish"></i> Air Radio</span>
              <span class="ds-node-pins">RX / TX / GND</span>
            </div>
          </div>
          <div class="ds-diagram-arrow"><i class="fa-solid fa-arrow-right"></i></div>
          <div class="ds-diagram-node">
            <div class="ds-node-box">
              <span class="ds-node-title">NX-Sbus</span>
              <span class="ds-node-pins">Sbus / G</span>
            </div>
          </div>
          <div class="ds-diagram-arrow"><i class="fa-solid fa-arrow-right"></i></div>
          <div class="ds-diagram-node">
            <div class="ds-node-box highlight">
              <span class="ds-node-title"><i class="fa-solid fa-microchip"></i> Flight Controller</span>
              <span class="ds-node-pins">RCIN / SBUSIN (G)</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  let featuresHtml = data.features ? data.features.map(f => `<li><i class="fa-solid fa-check text-cyan"></i> ${f}</li>`).join('') : '';

  let sectionsHtml = data.sections ? data.sections.map(sec => {
    let rowsHtml = sec.rows.map(row => `
      <tr>
        ${row.map(cell => `<td>${cell}</td>`).join('')}
      </tr>
    `).join('');

    return `
      <div class="ds-section">
        <h3 class="ds-section-title">${sec.heading}</h3>
        <table class="ds-table">
          <thead>
            <tr>
              ${sec.headers.map(h => `<th>${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  }).join('') : '';

  app.innerHTML = `
    <div class="ds-page">
      <!-- Datasheet Top Header -->
      <header class="ds-header">
        <div class="ds-header-brand">
          <img src="assets/images/nestx_logo.png" alt="NestX Logo" class="ds-logo" />
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <button onclick="window.print()" class="btn btn-primary btn-sm no-print" style="display: inline-flex; align-items: center; gap: 8px; font-weight: 700; background: linear-gradient(135deg, #00f3ff, #0066ff); color: #080c14; border: none; border-radius: 8px; padding: 8px 18px; cursor: pointer; box-shadow: 0 4px 15px rgba(0, 243, 255, 0.35);">
            <i class="fa-solid fa-file-pdf"></i> Download PDF Datasheet
          </button>
          <div class="ds-header-code">${data.code} | DATASHEET</div>
        </div>
      </header>

      <!-- Main Title Block -->
      <div class="ds-title-block">
        <h1 class="ds-main-title">${data.title}</h1>
        <h2 class="ds-sub-title">${data.subtitle}</h2>
        <div class="ds-highlights">${data.highlights}</div>
      </div>

      <!-- Description Block -->
      <div class="ds-block">
        <h3 class="ds-section-title">General Description</h3>
        <p class="ds-desc">${data.description}</p>
      </div>

      <!-- Features Badges Grid -->
      ${featureBadgesHtml}

      <!-- Technical Specifications Badges Grid -->
      ${techSpecBadgesHtml}

      <!-- Key Feature Showcase (Alternating 2-Column Rows) -->
      ${keyFeatureShowcaseHtml}

      <!-- Technical Specifications Categories (3-Column Layout) -->
      ${techSpecCategoriesHtml}

      <!-- Compatibility Categories (3-Column Layout) -->
      ${compatibilityCategoriesHtml}

      <!-- Typical Applications Grid -->
      ${typicalApplicationsHtml}

      <!-- AI Monitoring and Tracking -->
      ${aiTrackingHtml}

      <!-- Competitive Advantage -->
      ${competitiveHtml}

      <!-- Key Features List -->
      ${featuresHtml ? `
        <div class="ds-block">
          <h3 class="ds-section-title">Key Highlights</h3>
          <ul class="ds-features-list">
            ${featuresHtml}
          </ul>
        </div>
      ` : ''}

      <!-- Operating Modes -->
      ${operatingModesHtml}

      <!-- System Integration Diagram -->
      ${systemIntegrationHtml}

      <!-- Tables and Specs -->
      ${sectionsHtml}

      <!-- Footer -->
      <footer class="ds-footer">
        <p>© 2026 NestX Aerospace Pvt. Ltd. All rights reserved. | info@nestx.co.in | +91 9353671254</p>
      </footer>

      <!-- Bottom Actions Bar (Download PDF) -->
      <div class="ds-actions no-print" style="margin-top: 2rem; text-align: center;">
        <button onclick="window.print()" class="btn btn-primary btn-lg" style="display: inline-flex; align-items: center; gap: 10px; font-weight: 700; background: linear-gradient(135deg, #00f3ff, #0066ff); color: #080c14; border: none; border-radius: 8px; padding: 12px 28px; cursor: pointer; box-shadow: 0 6px 20px rgba(0, 243, 255, 0.4);">
          <i class="fa-solid fa-file-pdf"></i> Download Standard PDF Datasheet
        </button>
      </div>

    </div>
  `;

  if (window.location.search.includes('download=true')) {
    setTimeout(() => {
      window.print();
    }, 600);
  }
}

document.addEventListener('DOMContentLoaded', renderDatasheetPage);
