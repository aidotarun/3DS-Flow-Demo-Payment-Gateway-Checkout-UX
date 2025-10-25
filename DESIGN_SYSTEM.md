# 3DS Flow Design System - Enhanced UX v2

Complete design tokens and component library for the 3D Secure authentication flow.
Production-ready for PCI DSS / payment gateway environments.

## Color Tokens

All colors are defined as HSL values in `src/index.css` for consistency across light/dark modes.

### Neutral Colors
```css
--background: 220 15% 97%        /* Page background */
--card: 0 0% 100%                /* Card/modal background */
--border: 220 15% 88%            /* Border stroke color */
--foreground: 220 40% 15%        /* Primary text */
--muted-foreground: 220 15% 45%  /* Secondary/helper text */
```

### Semantic Colors
```css
--primary: 214 84% 42%           /* Accent/interactive elements (trust blue) */
--success: 142 76% 36%           /* Success states (calm green) */
--destructive: 0 84% 60%         /* Error states (calm red) */
--secondary: 220 15% 96%         /* Secondary backgrounds */
```

### Usage in Components
Always use semantic tokens, never hardcoded colors:
```tsx
// ✅ Correct
className="bg-card text-foreground border-border"

// ❌ Wrong
className="bg-white text-black border-gray-300"
```

### Status & Error State Colors
```tsx
// Neutral helper text
className="text-muted-foreground"

// Error/warning text
className="text-destructive"

// Success text
className="text-success"
```

---

## Typography Tokens

### Sizes & Weights

| Token | Desktop | Mobile | Weight | Usage |
|-------|---------|--------|--------|-------|
| Headline | 20px | 18px | Semibold (600) | Page titles, card titles |
| Body | 16px | 14-16px | Regular (400) | Main content, descriptions |
| Helper | 13px | 12px | Medium (500) | Meta text, timestamps, hints |
| Button | 14px | 14px | Medium (500) | All button labels |

### Implementation
```tsx
// Headlines
<h1 className="text-xl md:text-2xl font-semibold">

// Body text
<p className="text-sm md:text-base">

// Helper/meta text
<span className="text-xs md:text-sm text-muted-foreground">
```

---

## Spacing & Layout

### Card/Modal Container
```tsx
<div className="bg-card rounded-lg shadow-lg border border-border p-6 md:p-8 max-w-md w-full mx-auto">
  {/* Content */}
</div>
```

**Specs:**
- Border radius: 8-12px (`rounded-lg`)
- Padding: 16px mobile / 24px desktop
- Shadow: `0 4px 16px rgba(0, 0, 0, 0.12)`
- Max width: 448px (`max-w-md`)

---

## Component Library

### 1. SecureCard
**Location:** `src/components/ui/secure-card.tsx`

White card container with banking-grade shadow, used for all main content areas.

```tsx
import { SecureCard } from "@/components/ui/secure-card";

<SecureCard>
  {/* Your content */}
</SecureCard>
```

**Props:**
- `children: ReactNode` - Card content
- `className?: string` - Optional additional classes

---

### 2. CountdownTimer
**Location:** `src/components/CountdownTimer.tsx`

Displays countdown timer with mono-spaced numbers to prevent jumping.

```tsx
import { CountdownTimer } from "@/components/CountdownTimer";

// Phase 1: Redirect countdown
<CountdownTimer seconds={10} format="seconds" onComplete={handleRedirect} />
// Output: "10"

// Phase 2: OTP expiry
<CountdownTimer seconds={120} format="mm:ss" />
// Output: "02:00"
```

**Props:**
- `seconds: number` - Initial countdown value
- `format?: "seconds" | "mm:ss"` - Display format (default: "seconds")
- `onComplete?: () => void` - Callback when countdown reaches 0

**Styling:**
- Uses `font-mono` for tabular numbers
- Color: `text-primary`
- Weight: `font-semibold`

---

### 3. ProgressBar
**Location:** `src/components/ui/progress-bar.tsx`

Thin horizontal progress bar with smooth animation.

```tsx
import { ProgressBar } from "@/components/ui/progress-bar";

<ProgressBar duration={10} />
```

**Props:**
- `duration?: number` - Animation duration in seconds (default: 10)
- `className?: string` - Optional additional classes

**Animation:**
- Fills smoothly from 0% to 100% over specified duration
- Uses `animate-progress-fill` keyframe defined in `tailwind.config.ts`
- Track: `bg-secondary` (light gray)
- Fill: `bg-primary` (accent color)

---

### 4. InfoBox
**Location:** `src/components/InfoBox.tsx`

Informational alert box with icon, used for demo/testing instructions.

```tsx
import { InfoBox } from "@/components/InfoBox";

<InfoBox>
  <strong className="block mb-1">For demo/testing environment enter: 123456</strong>
  <span>This is a test environment — no real money will be deducted. The payment gateway is currently in test mode.</span>
</InfoBox>
```

**Props:**
- `children: ReactNode` - Alert content
- `className?: string` - Optional additional classes

**Styling:**
- Background: `bg-secondary` (light gray)
- Border: `border-border`
- Icon: AlertCircle from lucide-react
- Text: `text-muted-foreground`

---

### 5. Button
**Location:** `src/components/ui/button.tsx`

Primary interaction element with multiple variants.

```tsx
import { Button } from "@/components/ui/button";

// Primary action
<Button>Submit</Button>

// Secondary/ghost action
<Button variant="ghost">Resend OTP</Button>

// Return to merchant
<Button variant="outline">Return to Merchant</Button>
```

**Variants:**
- `default` - Solid primary button
- `outline` - Border with transparent background
- `ghost` - Text-only button
- `secondary` - Secondary background

**Sizes:**
- `default` - 40px tall (44px with focus ring for WCAG)
- `lg` - 44px tall
- `sm` - 36px tall

**States:**
- Hover: Subtle background change
- Focus: 2px ring with offset
- Disabled: 50% opacity, pointer-events none

---

## Status Icons

Using lucide-react for all icons. Consistent sizing across the app.

### Lock Icon (Security)
```tsx
import { Lock } from "lucide-react";

<Lock className="w-4 h-4 text-muted-foreground" />
```

**Usage:**
- Phase 1: "Secure connection" indicator
- Phase 2: Transaction details encryption notice

---

### Success Icon (Green Check)
```tsx
import { CheckCircle2 } from "lucide-react";

<div className="w-16 h-16 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
  <CheckCircle2 className="w-8 h-8 text-success" />
</div>
```

**Styling:**
- Icon: 32px (`w-8 h-8`)
- Container: 64px rounded circle with `bg-success/10`
- Color: `text-success`

---

### Error Icon (Red Cross)
```tsx
import { XCircle } from "lucide-react";

<div className="w-16 h-16 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
  <XCircle className="w-8 h-8 text-destructive" />
</div>
```

**Styling:**
- Icon: 32px (`w-8 h-8`)
- Container: 64px rounded circle with `bg-destructive/10`
- Color: `text-destructive`

---

### Info Icon (Alert)
```tsx
import { AlertCircle } from "lucide-react";

<AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
```

**Usage:** InfoBox component

---

## Animation Tokens

Defined in `tailwind.config.ts`:

### Keyframes
```javascript
keyframes: {
  "progress-fill": {
    from: { width: "0%" },
    to: { width: "100%" }
  },
  "spin-slow": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  },
  "fade-in": {
    from: { opacity: "0", transform: "translateY(10px)" },
    to: { opacity: "1", transform: "translateY(0)" }
  }
}
```

### Animations
```javascript
animation: {
  "progress-fill": "progress-fill 10s linear",
  "spin-slow": "spin-slow 1s linear infinite",
  "fade-in": "fade-in 0.4s ease-out"
}
```

**Usage:**
```tsx
// Progress bar
<div className="animate-progress-fill" />

// Loading spinner
<div className="animate-spin-slow" />

// Page entrance
<div className="animate-fade-in" />
```

---

## Copy Reference

All UI strings used across the 5 phases:

### Phase 1: Redirect Screen
```typescript
const COPY = {
  headline: "Please wait — we are redirecting you to your bank for authentication.",
  subtext: "This may take a few seconds while we verify your transaction for security.",
  countdown: "Redirecting to 3D Secure page in",
  countdownSuffix: "seconds",
  secure: "Secure connection",
  transactionSummary: {
    amount: "Amount:",
    card: "Card:",
    merchant: "Merchant:",
    encryption: "Your details are protected and encrypted."
  }
}
```

### Phase 2: OTP Authentication
```typescript
const COPY = {
  title: "Cardholder Authentication",
  instruction: "Please verify your transaction by entering the One-Time Password (OTP) sent to your registered mobile number ending ••45 or your email.",
  infoLine1: "For demo/testing environment enter: 123456",
  infoLine2: "This is a test environment — no real money will be deducted. The payment gateway is currently in test mode.",
  otpLabel: "Enter OTP",
  otpHelper: "OTP expires in",
  attemptsRemaining: "You have 3 attempts remaining.",
  attemptsError: "That code didn't match. You have 2 attempts remaining.",
  resendCooldown: "You can request a new code in",
  submitButton: "Submit",
  resendButton: "Resend OTP",
  noChargeNotice: "No funds will be charged unless authentication succeeds.",
  footer: "Need help? Contact your bank.",
  encryption: "Your details are protected and encrypted.",
  cardLabel: "Card:",
  merchantLabel: "Merchant:",
  amountLabel: "Amount:"
}
```

### Phase 3: Simulation Modal
```typescript
const COPY = {
  title: "Simulation Result",
  body: "Choose the result you want to simulate for this authentication attempt.",
  successButton: "Simulate Success",
  failureButton: "Simulate Failure",
  helper: "In production this step will be automatic based on the bank's response."
}
```

### Phase 4: Success
```typescript
const COPY = {
  heading: "Authentication Successful",
  subtext: "Your payment has been authenticated. Returning to merchant…",
  merchantRedirect: "You are being redirected to ExampleStore.com.",
  autoRedirect: "You don't need to do anything. This window will close automatically in a few seconds.",
  button: "Return to Merchant"
}
```

### Phase 5: Failure
```typescript
const COPY = {
  heading: "Authentication Failed",
  subtext: "The authentication could not be completed. Please try again or contact your bank.",
  noChargeHeading: "No money has been charged.",
  noChargeBody: "Your transaction was not completed and no funds have been deducted from your account.",
  reasonLabel: "Reason:",
  retryButton: "Retry Authentication",
  returnButton: "Return to Merchant"
}
```

---

## Responsive Breakpoints

Using Tailwind's default breakpoints:

- **Mobile:** Default (< 640px)
- **Tablet:** `sm:` (≥ 640px)
- **Desktop:** `md:` (≥ 768px)

### Responsive Rules for All Phases

#### Mobile Adaptations (< 640px)
1. **Card Width**
   - Expand close to full width with 16px horizontal padding on each side
   - Max width constraint removed on mobile

2. **Typography**
   - Headline font size reduces by 2px (20px → 18px or 18px → 16px)
   - Body text remains readable without zoom

3. **Buttons**
   - Full width with minimum 44px height
   - Stacked vertically with 12-16px gap between them
   - 16px horizontal safe-area padding

4. **Layout Changes**
   - Two-column layouts (Card / Merchant / Amount) stack vertically
   - Clear labels positioned above values
   - Adequate touch spacing between interactive elements

5. **Input Fields**
   - OTP input triggers numeric keypad (`inputMode="numeric"`)
   - Large tap targets for input fields
   - Visible focus rings with sufficient size

### Common Responsive Patterns
```tsx
// Text sizing with mobile-first approach
<h1 className="text-lg md:text-xl">

// Card padding adaptation
<div className="p-4 md:p-8">

// Button layout - stacked on mobile, inline on desktop
<div className="flex flex-col md:flex-row gap-3 md:gap-4">

// Transaction summary - vertical on mobile
<div className="flex flex-col md:flex-row justify-between">
  <span className="text-muted-foreground">Amount:</span>
  <span className="font-semibold">INR 1,234.56</span>
</div>
```

---

## Accessibility Standards

All components meet WCAG AA requirements for PCI DSS compliance:

### Touch Targets
- Minimum 44px height for all interactive elements
- Adequate spacing between adjacent buttons (minimum 12-16px vertical gap on mobile)
- Full-width buttons on mobile with 16px horizontal safe padding

### Focus States
```tsx
// All interactive elements include:
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
```

### Color Contrast
- Text on white: 4.5:1 minimum ratio (WCAG AA)
- Primary button: sufficient contrast between text and background
- Error/success states: distinguishable by text, not just color
- Focus rings must be visible in both light and dark modes

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Modal dialogs trap focus and can be closed with ESC
- First focusable element receives focus on page load
- Tab order follows logical reading sequence

### Mobile Input Behavior
```tsx
// OTP input triggers numeric keypad
<Input 
  type="text"
  inputMode="numeric"
  pattern="[0-9]*"
/>
```

### Screen Reader Support
```tsx
// Phase 1 announcement
"Secure connection. We are redirecting you to your bank for authentication."

// Phase 2 announcement
"Cardholder Authentication. Enter the one-time password sent to your registered number ending ••45."

// Phase 4 announcement
"Authentication Successful. You will be returned to ExampleStore.com."

// Phase 5 announcement
"Authentication Failed. No money has been charged."

// Semantic HTML
<button type="button">Submit</button>
<label htmlFor="otp">Enter OTP</label>

// ARIA labels and descriptions
<Input 
  id="otp"
  aria-describedby="otp-helper"
/>
<div id="otp-helper" role="status">
  You have 3 attempts remaining.
</div>
```

---

## File Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── button.tsx          # Primary button component
│   │   ├── secure-card.tsx     # Card container
│   │   ├── progress-bar.tsx    # Animated progress bar
│   │   ├── dialog.tsx          # Modal/dialog (simulation)
│   │   └── toast.tsx           # Toast notifications
│   ├── CountdownTimer.tsx      # Countdown timer
│   └── InfoBox.tsx             # Info alert box
├── pages/
│   ├── Index.tsx               # Landing/start page
│   ├── RedirectScreen.tsx      # Phase 1
│   ├── OtpAuthScreen.tsx       # Phase 2
│   ├── SuccessScreen.tsx       # Phase 4
│   └── FailureScreen.tsx       # Phase 5
├── index.css                   # Design tokens & globals
└── App.tsx                     # Routes & layout

tailwind.config.ts              # Theme extensions & animations
```

---

## Usage Examples

### Building a New 3DS-Style Page

```tsx
import { SecureCard } from "@/components/ui/secure-card";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

export const CustomAuthPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <SecureCard>
        {/* Header with security indicator */}
        <div className="flex items-center gap-2 mb-6">
          <Lock className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Secure connection</span>
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-2xl font-semibold mb-4">
          Your Page Title
        </h1>

        {/* Body text */}
        <p className="text-sm md:text-base text-muted-foreground mb-6">
          Your instructions or content here.
        </p>

        {/* Action buttons */}
        <div className="flex gap-3">
          <Button className="flex-1">Primary Action</Button>
          <Button variant="ghost" className="flex-1">Secondary</Button>
        </div>
      </SecureCard>
    </div>
  );
};
```

---

## Deployment Notes

This design system is built for:
- **Microservice architecture**: Each phase can be isolated as an independent module
- **Iframe embedding**: Screens designed to work inside payment gateway iframes
- **Production-ready**: All components follow banking/fintech standards
- **Test environment**: Includes simulation features for QA/testing

**To deploy as separate modules:**
1. Each phase page (`src/pages/*.tsx`) can be exported independently
2. Shared components (`src/components/`) must be included in each module
3. Design tokens (`src/index.css` and `tailwind.config.ts`) must be included
4. Route configuration in `src/App.tsx` can be customized per deployment

---

## Motion & Transition System

All animations follow a consistent, calm motion language suitable for financial interfaces.

### Animation Tokens

```javascript
// Defined in tailwind.config.ts
keyframes: {
  "progress-fill": {
    from: { width: "0%" },
    to: { width: "100%" }
  },
  "spin-slow": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  },
  "fade-in": {
    from: { opacity: "0", transform: "translateY(10px)" },
    to: { opacity: "1", transform: "translateY(0)" }
  }
}
```

### Motion Rules by Phase

#### Phase 1: Redirect Screen
- **Spinner**: Slow, smooth rotation (1s linear infinite) - not nervous
- **Progress Bar**: Linear fill from 0% → 100% over 10 seconds
- **Countdown**: Uses monospace/tabular numerals to prevent layout jumping
- **Transition to Phase 2**: Fade 0.4s ease

#### Phase 2: OTP Screen
- **Page Load**: Fade in 0.4s ease-out
- **Submit Action**: Button shows inline spinner for ~0.5s before modal appears
- **Input Focus**: Smooth focus ring transition 0.2s ease
- **Error State**: Red border fades in 0.2s, error text appears with subtle slide

#### Phase 3: Simulation Modal
- **Background**: Blur or dim backdrop
- **Modal Entry**: Scale from 0.96 → 1.0 + fade in 200-250ms ease-out
- **Modal Exit**: Reverse animation (scale 1.0 → 0.96 + fade out)
- **Focus Trap**: First focus goes to modal heading

#### Phase 4: Success Screen
- **Green Check Icon**: Short "check draw" animation or gentle fade/scale pop-in
- **Redirect Dots**: Gentle pulse animation looping (indicates "we're working")
- **Auto-redirect**: Countdown with smooth fade transition after 3 seconds

#### Phase 5: Failure Screen
- **Red Cross Icon**: Tiny 1-2px horizontal shake once (subtle, not playful)
- **Error Message**: Fades in with reassurance text

### Transition Timing Reference
```css
/* Micro-interactions */
--transition-fast: 0.15s ease;

/* Standard interactions */
--transition-base: 0.3s ease;

/* Page transitions */
--transition-slow: 0.5s ease-out;

/* Progress/loading */
--transition-linear: linear;
```

---

## Error States & Status Indicators

### OTP Input Error State
```tsx
// Red border around input field
<Input 
  className={cn(
    "text-center text-2xl font-mono tracking-widest",
    hasError && "border-destructive focus-visible:ring-destructive"
  )}
/>

// Error message below input
<div className="text-xs text-destructive text-center">
  That code didn't match. You have 2 attempts remaining.
</div>
```

### Resend OTP States

**Disabled State (Cooldown Active)**
```tsx
<Button 
  variant="ghost" 
  disabled
  className="w-full opacity-50 cursor-not-allowed"
>
  Resend OTP
</Button>
<p className="text-xs text-muted-foreground text-center">
  You can request a new code in 00:25
</p>
```

**Active State**
```tsx
<Button 
  variant="ghost" 
  className="w-full"
  onClick={handleResend}
>
  Resend OTP
</Button>
```

### Attempt Counter States
```tsx
// Normal state (grey text)
<div className="text-xs text-muted-foreground">
  You have 3 attempts remaining.
</div>

// Warning state (amber/orange when 1 attempt left)
<div className="text-xs text-orange-600">
  You have 1 attempt remaining.
</div>

// Error state (red text after failed attempt)
<div className="text-xs text-destructive">
  That code didn't match. You have 2 attempts remaining.
</div>
```

---

## Trust & Security Microcopy

Standardized reassurance language used consistently across phases:

### Security Reassurance
```
"Your details are protected and encrypted."
```
- Used in: Phase 1 (transaction summary), Phase 2 (card details block)
- Always paired with lock icon

### No-Charge Assurance
```
"No funds will be charged unless authentication succeeds."
```
- Used in: Phase 2 (above footer)

```
"No money has been charged."
"Your transaction was not completed and no funds have been deducted from your account."
```
- Used in: Phase 5 (failure page)

### Auto-Redirect Assurance
```
"You will be redirected automatically."
"You don't need to do anything. This window will close automatically in a few seconds."
```
- Used in: Phase 4 (success page)

### Channel Clarity
```
"Please verify your transaction by entering the One-Time Password (OTP) sent to your registered mobile number ending ••45 or your email."
```
- Used in: Phase 2 (instruction text)
- Includes masked phone number for anti-phishing trust

---

## Design Principles

1. **Trust & Security**: Professional banking aesthetic, never playful
2. **Clarity**: Clear hierarchy, obvious next steps, reassuring microcopy
3. **Consistency**: Reuse components, follow tokens, maintain motion language
4. **Accessibility**: WCAG AA compliance, keyboard navigation, screen reader support
5. **Responsiveness**: Mobile-first, works on all devices, 44px touch targets
6. **Performance**: Minimal dependencies, optimized animations, smooth transitions
7. **Reassurance**: Constant user reassurance about security and no-charge guarantees
