export const honeypotGcp = {
  slug: "honeypot-gcp",
  num: "04",
  badge: "Threat Intelligence",
  badgeColor: "text-blue-300 bg-blue-500/10 border-blue-500/20",
  title: "Honeypot Deployment - Google Cloud",
  subtitle: "Real-world attacker behaviour analysis via T-Pot on GCP",
  summary:
    "Deployed T-Pot multi-honeypot on GCP to capture real-world attack traffic. Implemented GCP firewall rules, SSH hardening, and iptables. Monitored attacker TTPs via ELK stack.",
  tags: ["T-Pot", "GCP", "ELK Stack", "Docker", "iptables"],
  date: "2024",
  category: "Threat Intelligence / Cloud Security",
  overview: `This project deployed a production-grade honeypot infrastructure on Google Cloud Platform to capture, analyse, and document real-world attacker behaviour. The T-Pot multi-honeypot framework was chosen for its breadth of simulated services and built-in ELK-based logging stack.

The deployment was carefully secured to enable controlled threat exposure.The attackers could interact with honeypots while being prevented from pivoting to other cloud resources.`,
  methodology: [
    { phase: "Infrastructure Setup", detail: "Provisioned a GCP e2-standard-4 VM running Ubuntu 22.04. Deployed T-Pot via Docker Compose, bringing up 20+ honeypot services including Cowrie (SSH/Telnet), Dionaea (malware capture), Conpot (ICS/SCADA), and Elasticpot." },
    { phase: "Security Hardening", detail: "Configured GCP firewall rules to expose only honeypot ports externally while restricting management access to a specific IP. Implemented iptables rules and SSH hardening (key-only auth, non-standard management port) to prevent honeypot escape." },
    { phase: "Traffic Monitoring", detail: "Used T-Pot's integrated ELK stack to visualise attack patterns in real time. Created custom Kibana dashboards for geographic source mapping, top attacked ports, and credential spray patterns." },
    { phase: "Threat Analysis", detail: "Analysed collected logs over a 4-week period. Documented attacker TTPs mapped to MITRE ATT&CK, extracted malware samples captured by Dionaea, and identified common credential combinations used in automated spray attacks." },
  ],
  findings: [
    { severity: "Info", title: "SSH Credential Spraying", detail: "Over 50,000 SSH login attempts recorded within the first 24 hours. Top credentials: root/root, admin/admin, pi/raspberry." },
    { severity: "Info", title: "Top Targeted Ports", detail: "Ports 22 (SSH), 23 (Telnet), 80 (HTTP), 8080, and 5900 (VNC) received the highest volume of scanning traffic." },
    { severity: "Info", title: "Malware Samples Captured", detail: "Dionaea captured 12 unique malware samples including Mirai botnet variants targeting exposed Telnet services." },
    { severity: "Info", title: "Geographic Sources", detail: "Top attacking countries: China, Russia, United States, Netherlands, Germany." },
    { severity: "Info", title: "ICS/SCADA Probing", detail: "Conpot honeypot recorded multiple interactions probing Modbus and S7comm protocols, indicating targeted ICS scanning." },
  ],
  tools: ["T-Pot (multi-honeypot framework)", "Docker + Docker Compose", "ELK Stack (Elasticsearch, Logstash, Kibana)", "GCP Firewall", "iptables", "Cowrie", "Dionaea"],
  remediation: [
    "Disable Telnet entirely; enforce SSH key authentication with fail2ban",
    "Never expose ICS/SCADA protocols to the public internet",
    "Implement geo-blocking for known malicious ASNs at the firewall level",
    "Use threat intelligence feeds to proactively block known scanner IPs",
  ],
  references: ["T-Pot GitHub documentation", "MITRE ATT&CK - Initial Access techniques", "Mirai botnet analysis reports"],
};