export const activeDirectory = {
  slug: "active-directory-lab",
  num: "03",
  badge: "AD Attack Paths",
  badgeColor: "text-yellow-300 bg-yellow-500/10 border-yellow-500/20",
  title: "Active Directory Attack Lab",
  subtitle: "Full enterprise AD simulation with end-to-end attack chains",
  summary:
    "Designed a full multi-machine AD lab: Domain Controller plus two Win10 workstations plus Kali. Simulated Kerberoasting, AS-REP Roasting, relay attacks, and ADCS privilege escalation.",
  tags: ["BloodHound", "Mimikatz", "Impacket", "Kerberos", "ADCS"],
  date: "2024",
  category: "Active Directory / Internal Network",
  overview: `This project involved designing and deploying a realistic Active Directory lab environment using VMware, then conducting a simulated red team engagement against it. The lab was built to mirror a small enterprise environment which was complete with a Windows Server 2019 Domain Controller, two domain-joined Windows 10 workstations, and a Kali Linux attack machine.

The engagement followed a realistic attack chain: initial access via credential harvesting, internal enumeration, lateral movement, and ultimately domain compromise via multiple privilege escalation paths.`,
  methodology: [
    { phase: "Lab Setup", detail: "Deployed Windows Server 2019 as the DC with Active Directory Domain Services configured. Joined two Windows 10 VMs to the domain with intentionally misconfigured users, SPNs, and delegation settings to create realistic attack paths." },
    { phase: "Enumeration", detail: "Used BloodHound with SharpHound collector to map all AD objects, group memberships, ACLs, and attack paths. PowerView provided supplementary enumeration of SPNs, domain trusts, and user attributes." },
    { phase: "Kerberoasting", detail: "Identified service accounts with SPNs set using PowerView. Requested Kerberos TGS tickets for these accounts and extracted the encrypted ticket hashes. Cracked tickets offline using hashcat with rockyou wordlist." },
    { phase: "AS-REP Roasting", detail: "Identified accounts with Kerberos pre-authentication disabled using Get-DomainUser. Requested AS-REP hashes without authentication and cracked them offline." },
    { phase: "NTLM Relay", detail: "Used Responder to capture NTLMv2 hashes from broadcast protocols (LLMNR/NBT-NS). Relayed captured authentication to a second machine using ntlmrelayx to gain a shell without cracking the hash." },
    { phase: "ADCS Escalation", detail: "Identified vulnerable certificate templates using Certify. Requested a certificate for a domain admin using ESC1 technique (subject alternative name abuse), then used the certificate to authenticate as Domain Admin via PKINIT." },
  ],
  findings: [
    { severity: "Critical", title: "ADCS ESC1 - SAN Abuse", detail: "A certificate template allowed requesters to specify a Subject Alternative Name, enabling impersonation of any domain user including Domain Admin." },
    { severity: "Critical", title: "Kerberoastable Service Accounts", detail: "Three service accounts had weak passwords and SPNs set, cracked within minutes using offline dictionary attacks." },
    { severity: "High", title: "AS-REP Roastable Accounts", detail: "Two accounts had pre-authentication disabled with passwords cracked offline." },
    { severity: "High", title: "LLMNR/NBT-NS Poisoning", detail: "Broadcast protocols enabled on the network allowed hash capture and relay without user interaction." },
    { severity: "Medium", title: "Excessive ACL Permissions", detail: "BloodHound identified a path where a standard user had GenericWrite over a privileged group, enabling group membership manipulation." },
  ],
  tools: ["BloodHound + SharpHound", "PowerView", "Mimikatz", "Impacket suite (ntlmrelayx, secretsdump)", "Responder", "Certify", "Rubeus", "Hashcat"],
  remediation: [
    "Disable LLMNR and NBT-NS via Group Policy",
    "Enforce strong passwords and regular rotation for all service accounts",
    "Enable Kerberos pre-authentication on all accounts",
    "Audit and remediate ADCS certificate templates - disable SAN specification for non-admin templates",
    "Review all ACLs using BloodHound and remove unnecessary GenericWrite/GenericAll permissions",
    "Implement tiered administration to limit lateral movement paths",
  ],
  references: ["SpecterOps - Certified Pre-Owned (ADCS research)", "The Hacker Recipes - AD Attacks", "BloodHound documentation", "MITRE ATT&CK - Active Directory"],
};