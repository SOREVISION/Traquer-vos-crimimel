export interface Target {
  id: string;
  name: string;
  threat: 'CRITICAL' | 'HIGH' | 'MODERATE' | 'LOW';
  scanProgress: number;
  lastKnownLoc: string;
  bounty: string;
  image: string;
  alias?: string;
  wantedFor?: string[];
  biometrics?: {
    ht: string;
    wt: string;
    eyes: string;
    dna: string;
  };
}

export const targets: Target[] = [
  {
    id: 'ALPHA-09',
    name: 'VIKTOR_KRAV',
    threat: 'CRITICAL',
    scanProgress: 88,
    lastKnownLoc: 'NEO-TOKYO SECTOR 7',
    bounty: '750,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAHxtNEOgDbf57izQXENpKZLg17tLqe-5-SC9F7TMFc6BUBZJtTULy7t5SRwA2JyC3vfMcWU_8MHzYydPC7huMBrGHL8DndPum6r8N5PMYBig8WMY99IyA9gmQGnNzw1AVFz3cZlELiIW53tu07AcfNytUl4Gq-y-1MvzUeJLCgSlf1mOILsIvBVgEcy87HZS9IAtjpMur0gg5RoA-4-0_MS1R1MsW__WhPAIT8jQ94MVGuhZkDEx5z8ApHvfJTQ6FrIH2F9rgP9pI',
    alias: 'VIKTOR "THE VULTURE" KRAV',
    wantedFor: ['CYBER_TERRORISM', 'DATA_EXTORTION', 'SYSTEM_HIJACKING'],
    biometrics: {
      ht: '192CM',
      wt: '88KG',
      eyes: 'SYNTH_OPTIC_R3',
      dna: '[ENCRYPTED]'
    }
  },
  {
    id: 'DELTA-42',
    name: 'ELARA_FLUX',
    threat: 'HIGH',
    scanProgress: 42,
    lastKnownLoc: 'OFF-SHORE GRID 02',
    bounty: '320,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAyogQp2F9H_u81b3eTX1cawNzmovsYbJ6LrlrRB1_jKQ-uA7jh3sg_5oV1DDpx6fZqCvUo8bn-PkG2Fhh9Xpd29lHe4YIxehvRJTRNCU7zQiFfxr1LubRxGowh9fzDm9QvrDYcCvpURsDjpDfkVC-mSUacye-P8zmQsGGFjCU2vekOj5yYDvfAwGmgPjsFgSt08wUp3H-9TrR3ENnV9ANoo0vlvSmRb8lXXEbRwDLcyKN4M_kveK3uxkpvO6XU8Gwh8HWcvMthHIC',
    alias: 'ELARA "NEON" FLUX',
    wantedFor: ['INTEL_THEFT', 'GRID_DISRUPTION'],
    biometrics: {
      ht: '174CM',
      wt: '62KG',
      eyes: 'NATURAL_EMERALD',
      dna: '[ENCRYPTED]'
    }
  },
  {
    id: 'SIGMA-11',
    name: 'MARCUS_VANE',
    threat: 'MODERATE',
    scanProgress: 100,
    lastKnownLoc: 'WASTELAND JUNCTION',
    bounty: '125,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS0GtlS6uyEiLeqKToZBWG8xuWEJEex-IiOkzd9UE9no9xLVdGHi94WHWU5Sesi40mQloGZiAnplQuZLJCRnFm8mQmnpkkA_fy0VzBwU4hjYylJ8rPIwJIEp244upz83tlgHnzxs56p-0tbraE21WWI8f1epp1OWU-iCS6AMMSVDUAp3FkgTOP42VGcaeEtCIiGWFYvavxhI5gfhdbK_D7z9CaETYH9YcKyJ7qJHBFuk8fQfRDEfC8U_zAU0SosBsE5WAtUUd-0hOM',
    alias: 'MARCUS "GHOST" VANE',
    wantedFor: ['SMUGGLING', 'ARMS_TRAFFICKING'],
    biometrics: {
      ht: '188CM',
      wt: '92KG',
      eyes: 'OCULAR_IMPLANT_V2',
      dna: '[ENCRYPTED]'
    }
  }
];

export const intelLogs = [
  { time: '14:22:09', type: 'CAPTURE', message: 'Target OMEGA-02 neutralized in Berlin Sector.' },
  { time: '13:55:12', type: 'UPDATE', message: "High-Value Target 'VIKTOR_KRAV' spotted at HKIA." },
  { time: '12:01:45', type: 'BOUNTY_INC', message: 'ELARA_FLUX pool increased by 50,000₮.' },
  { time: '11:30:00', type: 'SCAN', message: 'Satellite linkage established over Sector 9.' }
];
