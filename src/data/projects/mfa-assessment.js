export const mfaAssessment = {
  slug: "mfa-vulnerability-assessment",
  num: "01",
  badge: "MSc Dissertation",
  badgeColor: "text-red-300 bg-red-500/10 border-red-500/20",
  title: "Vulnerability Assessment of Multi-Factor Authentication Systems",
  subtitle: "MSc Dissertation - University of Birmingham, supervised by Professor Elisabeth Oswald",
  summary:
    "MSc dissertation project investigating the security of three MFA mechanisms - TOTP, Email OTP, and Push-based authentication - through a custom Flask web application and systematic penetration testing.",
  tags: ["Flask", "PyOTP", "Burp Suite", "Python", "TOTP", "SMTP", "Frida", "Oathtool"],
  date: "September 2025",
  category: "Web Application Security / Academic Research",
  overview: `This MSc dissertation project investigated the effectiveness and vulnerabilities of three commonly deployed Multi-Factor Authentication (MFA) mechanisms: Time-based One-Time Passwords (TOTP), Email-based OTPs, and Push-based authentication.

A custom Flask web application was developed to integrate all three MFA methods in a controlled environment, enabling systematic penetration testing against each mechanism. The project was supervised by Professor Elisabeth Oswald at the School of Computer Science, University of Birmingham.

The findings demonstrate that MFA is not uniformly secure by default. Its resilience depends on correct implementation, strong supporting controls, and user-centred design.`,
  methodology: [
    {
      phase: "Application Development",
      detail: "Built a Flask-based web application integrating three MFA mechanisms: TOTP via PyOTP and QR code provisioning, Email OTP via Gmail SMTP, and simulated Push MFA with approve/deny prompts. Development environment used macOS (host) and Kali Linux in VMware Fusion for penetration testing.",
    },
    {
      phase: "TOTP Attack - Secret Interception",
      detail: "Configured Burp Suite with FoxyProxy to intercept HTTP traffic during TOTP provisioning. The provisioning URI containing the base32 secret (transmitted in plaintext over HTTP) was captured. The intercepted secret was used with Oathtool (oathtool --totp -b <secret>) to generate valid OTPs indefinitely, completely bypassing MFA.",
    },
    {
      phase: "Email OTP Attack - Brute Force",
      detail: "Developed a Python brute-force script using the Requests library to systematically attempt all 1,000,000 six-digit OTP combinations against the email verification endpoint. With no rate-limiting or account lockout, the correct OTP (988102) was found after 4,384 seconds (~1.2 hours) with 988,102 attempts.",
    },
    {
      phase: "Push MFA Attack - Fatigue / Spam",
      detail: "Developed a Python spam script sending approximately 60 push approval requests per minute to the /spam-push endpoint. Simulated trials confirmed that repeated prompts induced users to approve requests out of frustration - replicating the MFA fatigue technique used in the 2022 Uber breach.",
    },
    {
      phase: "Analysis and Reporting",
      detail: "Each attack was evaluated against a defined adversary model (network attacker, automated attacker, social engineer) and assessed for real-world applicability. Findings were mapped to NIST SP 800-63B and OWASP Authentication Cheat Sheet standards.",
    },
  ],
  findings: [
    {
      severity: "Critical",
      title: "TOTP Secret Interception - Complete MFA Bypass",
      detail: "TOTP provisioning URI transmitted in plaintext over HTTP. Secret intercepted via Burp Suite allowed indefinite generation of valid OTPs using Oathtool. A single intercepted secret permanently compromises the account. Real-world likelihood: Medium (affects misconfigured or development systems lacking TLS).",
    },
    {
      severity: "High",
      title: "Email OTP Brute Force - OTP Cracked in 4,384 Seconds",
      detail: "Six-digit email OTP (1,000,000 keyspace) successfully brute-forced using a Python Requests script in the absence of rate-limiting. Correct OTP found after 988,102 attempts in approximately 1.2 hours. With greater computational resources, the attack would be significantly faster.",
    },
    {
      severity: "High",
      title: "Push MFA Fatigue - User Approves After Repeated Prompts",
      detail: "Spam script generated ~60 push requests per minute. Simulated users reported difficulty distinguishing legitimate requests and a tendency to approve after repeated prompts. Replicates the MFA fatigue technique documented in the Uber 2022 breach. Real-world applicability: High.",
    },
    {
      severity: "Medium",
      title: "Session Fixation Post-Authentication",
      detail: "Session tokens were not rotated after successful MFA completion, enabling session fixation attacks. Demonstrated via Burp Suite session cookie replay granting dashboard access without re-authentication.",
    },
    {
      severity: "Low",
      title: "Account Enumeration via Error Messages",
      detail: "Different error messages were returned for invalid usernames versus invalid passwords, enabling attacker enumeration of valid accounts prior to MFA bypass attempts.",
    },
    {
      severity: "Low",
      title: "Plaintext HTTP Transmission",
      detail: "Login POST requests transmitted username, password, and OTP in plaintext over HTTP. Captured via Burp Suite. Mitigated in production by enforcing HTTPS/TLS.",
    },
  ],
  tools: [
    "Flask (Python web framework)",
    "PyOTP (TOTP implementation)",
    "Burp Suite + FoxyProxy (traffic interception)",
    "Oathtool (TOTP generation from intercepted secret)",
    "Python Requests library (brute-force and spam scripts)",
    "smtplib / Gmail SMTP (email OTP delivery)",
    "Kali Linux on VMware Fusion",
  ],
  remediation: [
    "Enforce HTTPS/TLS for all provisioning - TOTP secrets must never be transmitted in plaintext",
    "Store TOTP secrets encrypted at rest (AES-256); avoid logging provisioning URIs",
    "Implement rate-limiting (max 3-5 attempts/minute) and account lockout for OTP endpoints",
    "Set OTP expiry to 60 seconds or less; increase entropy to 8-digit or alphanumeric codes",
    "Implement push notification throttling and number-matching to prevent fatigue attacks",
    "Rotate session tokens after each authentication step to prevent session fixation",
    "Return generic error messages to prevent account enumeration",
    "Migrate towards phishing-resistant MFA: FIDO2/WebAuthn or hardware tokens (YubiKey)",
  ],
  references: [
    "NIST SP 800-63B - Digital Identity Guidelines: Authentication and Lifecycle Management",
    "OWASP Authentication Cheat Sheet",
    "RFC 6238 - TOTP: Time-Based One-Time Password Algorithm",
    "CISA (2022) - Understanding and Mitigating MFA Fatigue Attacks",
    "Microsoft (2022) - MFA Fatigue Attacks on Microsoft Accounts",
    "Uber Security Incident (2022) - MFA Fatigue Attack",
    "GitLab Repository: https://git.cs.bham.ac.uk/projects-2024-25/vxv433",
  ],
};