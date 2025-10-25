# 🛡️ 3DS Flow Demo — Payment Gateway Checkout UX (Public Design)

This repository showcases a **complete, production-grade 3D Secure (3DS) authentication flow** used in modern Payment Gateway checkout systems.
It has been designed by **[ITIO Innovex Pvt Ltd](https://www.itio.in)** — a global fintech software provider specializing in white-label payment gateway and digital banking solutions.

> 💡 **Open Source & Public Use:**
> This design is publicly available so developers, designers, and fintech startups can study, customize, or integrate it into their sandbox or PCI-DSS compliant environments.

---

## 📘 Overview

The **3DS Flow Demo** covers every customer-facing step after checkout, showing what happens during authentication with a user’s issuing bank.

| Phase | Folder                      | Description                                                                          |
| ----- | --------------------------- | ------------------------------------------------------------------------------------ |
| 1️⃣   | `/phase1_redirect_screen/`  | Redirect / Verification screen — simulates secure redirect and fraud-check animation |
| 2️⃣   | `/phase2_otp_auth_screen/`  | 3D Secure OTP authentication page (bank-style UI)                                    |
| 3️⃣   | `/phase3_simulation_modal/` | Sandbox modal for simulating success/failure outcomes                                |
| 4️⃣   | `/phase4_result_success/`   | Payment authentication successful screen                                             |
| 5️⃣   | `/phase5_result_failure/`   | Payment authentication failed screen                                                 |
| ⚙️    | `/tokens_components/`       | Shared tokens, icons, and reusable UI components                                     |

Each folder is a **microservice-ready module** — easy to embed, modify, or plug into real payment gateway flows.

---

## 🧩 Tech & Design Stack

| Layer            | Tools / Languages                                                |
| ---------------- | ---------------------------------------------------------------- |
| 🎨 Design        | React Design using lovable AI   |
| 🧱 Frontend Code | React + TailwindCSS (exportable components)                      |
| 📐 Layout        | Responsive grid for desktop & mobile                             |
| 💡 Typography    | Inter / SF Pro / System UI stack                                 |
| 🔐 Accessibility | WCAG AA contrast, keyboard focus, 44px tap height                |
| 🎬 Motion        | Smooth CSS transitions, fade, countdown, and checkmark animation |

---

## 🚀 How to Use

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2️⃣ Install Dependencies

If using React + Tailwind:

```bash
npm install
# or
yarn install
```

### 3️⃣ Run the Demo

```bash
npm run dev
```

The local server will start and open the 3DS Flow Demo in your browser.

---

## 🧭 Folder Structure

```
3DS_Flow_Demo/
│
├── phase1_redirect_screen/       # Pre-OTP redirect / verification
├── phase2_otp_auth_screen/       # OTP authentication (bank challenge)
├── phase3_simulation_modal/      # Sandbox modal for QA testing
├── phase4_result_success/        # Success confirmation
├── phase5_result_failure/        # Failure / retry page
└── tokens_components/            # Shared UI tokens and components
```

Each folder includes:

* Desktop & mobile frames
* Component specs & motion notes
* Accessibility & behavior annotations

---

## 💬 Key Features

✅ Visa / Mastercard-style 3DS experience
✅ Secure redirect simulation & countdown timer
✅ Demo OTP `123456` for sandbox testing
✅ Auto-redirect & success/failure simulation
✅ 100% responsive and accessible
✅ Modular — each phase works standalone
✅ Developer & auditor-friendly for PCI DSS testing

---

## 🧠 UX Philosophy

The design emphasizes **trust, clarity, and calmness**, mimicking how real banks handle cardholder authentication.

* Subtle animations — not distracting
* Clear reassurance messages (“Your details are protected and encrypted”)
* Transparent but non-alarming language (“Securely verifying your transaction…”)
* Realistic test flow — OTP, resend delay, countdown timers
* Smooth transitions between screens (0.4–0.5s fades)

---

## 🧩 Integration Scenarios

You can embed this demo in:

* Payment Gateway SDKs
* Fintech sandbox environments
* PCI DSS training modules
* QA or compliance audit demos
* Developer testing dashboards

---

## ⚙️ Customization

All shared colors, text, and animations are managed from `/tokens_components/`.

```css
--accent-blue: #3066f8;
--success-green: #1ab874;
--error-red: #e74c3c;
--radius-card: 12px;
--font-family: "Inter", "SF Pro", system-ui;
```

You can easily swap branding, typography, or icons to match your own payment system.

---

## 🧰 Technical Notes

* This demo **does not perform any real transactions**.
* OTP `123456` is used for test simulation only.
* The Simulation Modal allows manual success/failure outcomes.
* Designed to fit microservice-style iframe integration in live Payment Gateway systems.

---

## 📸 Preview

| Phase            | Screenshot                             |
| ---------------- | -------------------------------------- |
| Redirect Screen  | ![Redirect Screen](assets/phase1.png)  |
| OTP Screen       | ![OTP Screen](assets/phase2.png)       |
| Simulation Modal | ![Simulation Modal](assets/phase3.png) |
| Success Page     | ![Success](assets/phase4.png)          |
| Failure Page     | ![Failure](assets/phase5.png)          |

*(Replace paths with your actual hosted images)*

---

## 🏢 About ITIO Innovex Pvt Ltd

**[ITIO Innovex Pvt Ltd](https://www.itio.in)** is a leading fintech technology company specializing in **white-label payment gateway**, **digital banking**, **neo-bank**, and **crypto payment** platforms.
We provide **ready-made fintech solutions with full source code**, PCI DSS compliance assistance, and scalable microservice architecture for payment processing businesses.

🔹 If you’re looking for a **complete white-label Payment Gateway Source Code**,
visit 👉 [https://itio.in/payment-gateway-software](https://itio.in/payment-gateway-software)

ITIO Innovex helps startups and enterprises **launch their own payment gateway in record time** — fully customizable, PCI DSS ready, and feature-rich.

---

## 🧾 License

This project is released under the **MIT License**.
You are free to use, modify, and distribute this design — attribution to
**“3DS Flow Demo — by ITIO Innovex Pvt Ltd”** is appreciated.

---
