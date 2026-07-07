const projectData = {
    'Material Management Pro': {
        title: 'Material Management Pro',
        images: [
            'assets/material_management/Screenshot 2026-06-26 092357.png',
            'assets/material_management/Screenshot 2026-06-26 092422.png',
            'assets/material_management/Screenshot 2026-06-26 092441.png'
        ],
        features: [
            'Purple-Themed Modern UI with PyQt6',
            'Direct Microsoft SQL Server Integration via pyodbc',
            'Automated Database Table Creation for "MaterialReceipts"',
            'Real-time Search, Filtering, and Pagination (50 rows/page)',
            'Robust Data Validation and Soft Delete Mechanisms',
            'Export to Excel & Role-based Data Access'
        ],
        tech: 'Python, PyQt6, MS SQL Server, pandas',
        details: 'Material Management Pro is an enterprise-grade desktop application designed for streamlined receiving of materials from the store.<br><br>The system connects directly to a Microsoft SQL Server database, automatically handling table creation and schema definitions on launch if they don\'t exist. It features an incredibly intuitive "Purple-Themed" modern UI, built with PyQt6, providing staff with quick keyboard shortcuts for rapid data entry. Administrators can view, filter, sort, and manage hundreds of records efficiently thanks to a built-in pagination system and real-time search functionality. It also includes safe "soft delete" capabilities, ensuring data integrity while keeping the interface clean.'
    },
    'CombControl Planning Pro': {
        title: 'CombControl Planning Pro',
        features: [
            'Advanced Security with Bcrypt Password Hashing',
            'Comprehensive SQL Injection Protection & Parameterized Queries',
            'Unauthenticated HTTP API with Token Binding',
            'Desktop Application Client (PyQt6)',
            'Cross-platform MCP Server Integrations'
        ],
        tech: 'Python, PyQt6, MS SQL Server, FastAPI',
        details: 'CombControl Planning Pro is a specialized enterprise planning system that focuses on high-security standards and data integrity.<br><br>Developed after a rigorous security review, it features state-of-the-art protections against SQL injection using parameterized queries, strictly allow-listed SQL identifiers, and secure schema migrations. User authentication is secured using bcrypt password hashing. Beyond its desktop interface, the system exposes a secure, token-authenticated HTTP API and a Model Context Protocol (MCP) server, allowing it to seamlessly integrate with other automated tools and reporting dashboards.'
    },
    'Plate Making Data Entry Form': {
        title: 'Plate Making Data Entry Form',
        images: [
            'assets/plate_making/Calculator.png',
            'assets/plate_making/Dashboard.png',
            'assets/plate_making/Designe Dept.png',
            'assets/plate_making/Entry Tab.png',
            'assets/plate_making/Plate Type.png',
            'assets/plate_making/Report.png',
            'assets/plate_making/Setting.png'
        ],
        features: [
            'Digital Data Entry Workflows for Pre-Press',
            'Interactive Dashboard Charts and Analytics',
            'Automated PDF Report Generation',
            'Scheduled Email Notifications for Batches',
            'MS SQL Server Storage and Retrieval'
        ],
        tech: 'Python, PySide6, MS SQL Server, ReportLab',
        details: 'This tool is a customized graphical interface specifically designed to modernize digital plate making workflows in Pre-Press departments.<br><br>By replacing manual, paper-based tracking, it facilitates rapid digital data entry and instant synchronization with an MS SQL Server backend. The application features built-in analytics dashboards with interactive charts for visualizing production trends. Additionally, it streamlines reporting by automatically generating detailed PDF documents of daily/weekly batches and dispatching scheduled email notifications to stakeholders, ensuring everyone is kept up to date on production progress.'
    },
    'Finishing and Packing System': {
        title: 'Finishing and Packing System',
        features: [
            'Android App for On-the-floor Data Capture',
            'FastAPI Python Backend Architecture',
            'JWT (JSON Web Token) Authentication',
            'Docker Containerized Deployment',
            'Offline-first Sync Capabilities'
        ],
        tech: 'Android (Java/Kotlin), Python (FastAPI), Docker',
        details: 'The Finishing and Packing System is a complete full-stack solution designed for high-paced factory floors. It features an Android mobile application used by operators across 8 different finishing machines.<br><br>The mobile app connects securely to a robust Python FastAPI backend hosted on the local network via Wi-Fi. It uses JWT-based authentication for role-based access control. To handle poor network connectivity on the factory floor, the system utilizes an offline-first architecture that stores data locally and automatically syncs it to the Microsoft SQL Server backend when a connection is re-established. The entire backend stack is containerized using Docker for easy deployment and scaling.'
    },
    'Budget Tracker PWA': {
        title: 'Budget Tracker PWA',
        features: [
            'Monthly Budget Goal Planning',
            'Detailed Income & Expense Tracking',
            'Real-time Balance and Progress Indicators',
            'Progressive Web App (PWA) Offline Support',
            'Modern Dark Theme UI with Animations'
        ],
        tech: 'HTML, CSS, Vanilla JavaScript (PWA)',
        details: 'The Budget Tracker is a sleek, mobile-optimized Progressive Web App (PWA) designed to help users take control of their finances. It tracks daily expenses and income in Mauritian Rupee (MUR).<br><br>Users can set a monthly budget limit and visually track their remaining balance in real-time through intuitive UI indicators. Transactions can be categorized and filtered easily. Thanks to its PWA architecture, all financial data is stored securely in the local storage of the user\'s device, ensuring complete privacy. Furthermore, the app works entirely offline and can be installed directly to a mobile device\'s home screen, behaving exactly like a native app without requiring an App Store download.'
    },
    'PollenAI Desktop': {
        title: 'PollenAI Desktop',
        features: [
            'Multi-turn AI Chat with Provider Flexibility',
            'Autonomous Deep Research capabilities',
            'Document Upload and RAG Retrieval',
            'Persistent Persona & Custom Agent Skills',
            'Local Desktop Wrapper via PyInstaller'
        ],
        tech: 'Python, FastAPI, PyQt/PyInstaller, Vector DBs',
        details: 'PollenAI is an advanced, self-hosted AI assistant designed to maintain absolute data privacy. It offers a comprehensive suite of features, including multi-turn conversations powered by any major LLM provider (OpenAI, Anthropic, Ollama, etc.), and autonomous multi-step "Deep Research" capabilities pulling from web search, academic papers, and Youtube.<br><br>The platform includes robust document retrieval using Hybrid RAG (Semantic + Keyword), an integrated calendar, and customizable agent skills allowing for isolated subagent delegation. The desktop client wraps the FastAPI backend into a sleek Windows tray application, providing immediate access to a powerful AI ecosystem right from your desktop.'
    },
    'CombControl Dashboard': {
        title: 'CombControl Dashboard',
        images: [
            'assets/combcontrol_dashboard/Screenshot 2026-06-26 093335.png',
            'assets/combcontrol_dashboard/Screenshot 2026-06-26 093418.png',
            'assets/combcontrol_dashboard/Screenshot 2026-06-26 093449.png',
            'assets/combcontrol_dashboard/Screenshot 2026-06-26 093509.png',
            'assets/combcontrol_dashboard/Screenshot 2026-06-26 093527.png',
            'assets/combcontrol_dashboard/Screenshot 2026-06-26 093546.png',
            'assets/combcontrol_dashboard/Screenshot 2026-06-26 093604.png',
            'assets/combcontrol_dashboard/Screenshot 2026-06-26 093722.png'
        ],
        features: [
            'Built with React, Vite, and Recharts',
            'Interactive Data Visualization and Charts',
            'Job Delivery and Planning Management',
            'Dark/Light Theme Support',
            'Seamless API Integration'
        ],
        tech: 'React, Vite, JavaScript, CSS',
        details: 'This is the front-end web dashboard for the CombControl Planning Pro system.<br><br>Developed using React and Vite, it provides a high-performance, responsive user interface for managing printing jobs and analyzing production metrics. The dashboard features interactive charts built with Recharts, comprehensive job management views, and a modern aesthetic with dynamic theming. It seamlessly connects to the CombControl backend API to ensure real-time data synchronization.'
    },
    'NC Portal': {
        title: 'NC Portal — Non-Conformance Management System',
        images: [
            'assets/nc_portal/Login Page.png',
            'assets/nc_portal/Dashboard Tab.png',
            'assets/nc_portal/Sale Entry Tab.png',
            'assets/nc_portal/QC Investigation Tab.png',
            'assets/nc_portal/QC Investigation Tab1.png',
            'assets/nc_portal/Monthly KPI Report .png',
            'assets/nc_portal/Category Breakdownn Report.png',
            'assets/nc_portal/Internal & External Report.png',
            'assets/nc_portal/Executive Report Charts.png',
            'assets/nc_portal/Executive Report Charts1.png',
            'assets/nc_portal/User Management.png'
        ],
        features: [
            'Role-based Secure Login (Admin / Standard) with Per-tab Permissions',
            'Auto-generated NC Numbers & PJC Auto-lookup from the Production Planner',
            'Full QC Investigation: Root Cause, Corrective & Preventive Actions, Cost & Quantity Impact',
            '"Not an NC" Audit Outcome, Excluded from KPIs',
            'Live Dashboard Tiles & Monthly KPI Reports with Target Breach Highlighting',
            'One-click Branded "Non Conformity Report" PDF & CSV Export'
        ],
        tech: 'Python, CustomTkinter, MS SQL Server (pyodbc), ReportLab',
        details: 'NC Portal is an enterprise desktop application built for A World of Labels (Labelling Industries LTD) to manage product non-conformances end to end — from the moment a sales claim is raised, through QC investigation, closure, and KPI reporting. It connects directly to the company\'s Microsoft SQL Server database.<br><br>Sales staff log claims with auto-generated NC numbers and a PJC auto-lookup that pulls Client, Product No, and Total Order Quantity straight from the Production Planner. QC then records type (Internal/External), reasons, root cause, corrective and preventive actions, cost, and quantity impacted — with a "Not an NC" outcome that keeps invalid claims for audit while excluding them from KPIs. A live dashboard surfaces colour-coded status tiles, and monthly KPI reports automatically highlight any category that breaches its target. Closed NCs export as one-click official "Non Conformity Report" PDFs matching the company branding, alongside CSV exports, light/dark theming, and admin-controlled user management.'
    },
    'Plate Archive System': {
        title: 'Plate Archive System',
        features: [
            'USB Barcode Scanning for IN/OUT Plate Tracking',
            'Offline-first Mode with Local SQLite Cache & Automatic Sync',
            'Code128 Label Generation in PNG, PDF, and ZPL (Zebra) Formats',
            'Automated Flagging of Plates Unused for 2+ Years for Destruction',
            'Dual-Database Architecture (SQL Server central + SQLite local)',
            'Immutable, Fully Audited Transaction History with Manager-PIN Destruction'
        ],
        tech: 'Python, PySide6, MS SQL Server (pyodbc), SQLite, ReportLab, python-barcode',
        details: 'Plate Archive System is a production-ready Windows desktop application for managing printing plates across their full lifecycle — from creation and daily IN/OUT movements through to an automated destruction workflow.<br><br>Operators track plates using a USB keyboard-emulation barcode scanner, with instant visual confirmation on every scan. A dual-database design keeps a central Microsoft SQL Server as the source of truth while a local SQLite cache enables full offline operation: scans are queued locally when the connection drops and sync automatically once it is restored. New plates are codified with an auto-incremented sequence (format {ClientCode}{Seq}{YearLetter}{YearYY}) and generate Code128 labels ready to print as PNG, PDF, or Zebra ZPL. A scheduled job automatically flags plates unused for two or more years for destruction, which managers review, snapshot, and confirm with a PIN — plates are marked "Destroyed" but retained for a complete, immutable audit trail. The local database is encrypted at rest via Windows DPAPI.'
    },
    'Vault Pro': {
        title: 'Vault Pro',
        features: [
            'AES-256-GCM Authenticated Encryption for All Credentials',
            'PBKDF2 Key Derivation with High Iteration Counts',
            'Fully Offline — Data Never Leaves Your Computer',
            'Local Encrypted SQLite Vault Stored in %APPDATA%',
            'Customizable Offline Strong-Password Generator',
            'Modern Glassmorphic UI (HTML/CSS + Webview)'
        ],
        tech: 'Python, pywebview, cryptography, SQLite, PyInstaller',
        details: 'Vault Pro is a secure, offline password generator and encrypted credential vault that provides military-grade cryptography while ensuring your data never leaves your computer.<br><br>Every credential is protected with industry-standard AES-256-GCM authenticated encryption, and your master password is strengthened through PBKDF2 key derivation with high iteration counts to resist brute-force attacks. All data lives in a locally encrypted SQLite database inside the Windows %APPDATA% directory — there is no cloud, no telemetry, and no network dependency. A built-in offline generator produces strong, fully customizable passwords on demand. The application is wrapped as a single Windows executable via PyInstaller and presents a beautiful, responsive glassmorphic interface built with HTML/CSS and Webview, distributed with a signed Inno Setup installer.'
    }
};

function openModal(projectName) {
    const data = projectData[projectName];
    if (!data) return;

    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalTech').innerText = data.tech;
    document.getElementById('modalDetails').innerHTML = data.details;

    const gallery = document.getElementById('modalGallery');
    gallery.innerHTML = '';
    if (data.images && data.images.length > 0) {
        data.images.forEach(imgSrc => {
            let img = document.createElement('img');
            img.src = imgSrc;
            img.alt = data.title + ' screenshot';
            img.loading = 'lazy';
            gallery.appendChild(img);
        });
        gallery.style.display = 'flex';
    } else {
        gallery.style.display = 'none';
    }

    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    data.features.forEach(f => {
        let li = document.createElement('li');
        li.innerText = f;
        featuresList.appendChild(li);
    });

    document.getElementById('projectModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

window.addEventListener('click', function (event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
