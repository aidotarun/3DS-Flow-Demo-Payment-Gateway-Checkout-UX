# 3DS Flow Design System

Complete design tokens and component library for the 3D Secure authentication flow.

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
--primary: 214 84% 42%           /* Accent/interactive elements */
--success: 142 76% 36%           /* Success states (green check) */
--destructive: 0 84% 60%         /* Error states (red cross) */
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
  secure: "Secure connection"
}
```

### Phase 2: OTP Authentication
```typescript
const COPY = {
  title: "Cardholder Authentication",
  instruction: "Please verify your transaction by entering the One-Time Password (OTP) sent to your registered mobile number/email.",
  infoLine1: "For demo/testing environment enter: 123456",
  infoLine2: "This is a test environment — no real money will be deducted. The payment gateway is currently in test mode.",
  otpLabel: "Enter OTP",
  otpHelper: "OTP expires in",
  submitButton: "Submit",
  resendButton: "Resend OTP",
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
  autoRedirect: "You will be redirected automatically.",
  button: "Return to Merchant"
}
```

### Phase 5: Failure
```typescript
const COPY = {
  heading: "Authentication Failed",
  subtext: "The authentication could not be completed. Please try again or contact your bank.",
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

### Common Patterns
```tsx
// Text sizing
<h1 className="text-lg md:text-xl">

// Padding
<div className="p-4 md:p-8">

// Layout
<div className="flex-col md:flex-row">

// Spacing
<div className="gap-4 md:gap-6">
```

---

## Accessibility Standards

All components meet WCAG AA requirements:

### Touch Targets
- Minimum 44px height for all interactive elements
- Adequate spacing between adjacent buttons

### Focus States
```tsx
// All interactive elements include:
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
```

### Color Contrast
- Text on white: 4.5:1 minimum ratio
- Primary button: sufficient contrast between text and background
- Error/success states: distinguishable by text, not just color

### Screen Reader Support
```tsx
// Semantic HTML
<button type="button">Submit</button>
<label htmlFor="otp-input">Enter OTP</label>

// ARIA labels where needed
<div role="alert" aria-live="polite">
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

## Design Principles

1. **Trust & Security**: Professional banking aesthetic, never playful
2. **Clarity**: Clear hierarchy, obvious next steps
3. **Consistency**: Reuse components, follow tokens
4. **Accessibility**: WCAG AA compliance, keyboard navigation
5. **Responsiveness**: Mobile-first, works on all devices
6. **Performance**: Minimal dependencies, optimized animations
