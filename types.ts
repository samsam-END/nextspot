
export type Role = 'user' | 'model';

export interface Attachment {
  mimeType: string;
  data: string; // Base64
  url: string;
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface Message {
  id: string;
  role: Role;
  content: string;
  attachments?: Attachment[];
  sources?: GroundingSource[];
  isStreaming?: boolean;
  timestamp: number;
}

export enum ModelId {
  FLASH = 'gemini-3-flash-preview',
  PRO = 'gemini-3-pro-preview'
}

export enum TacticalPhase {
  RECON = "Reconnaissance",
  ACCESS = "Initial Access",
  EXECUTION = "Execution",
  PERSISTENCE = "Persistence",
  LATERAL = "Lateral Movement",
  EXFIL = "Exfiltration"
}

export enum Persona {
  GENERAL = "Cybersecurity Lead",
  RED_TEAM = "Red Team Operator",
  EXPLOIT_DEV = "Exploit Engineer",
  BLUE_TEAM = "Defensive Architect",
  BUG_BOUNTY = "Security Researcher"
}
