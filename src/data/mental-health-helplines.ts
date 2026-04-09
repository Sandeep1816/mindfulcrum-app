/** Mental Health and Suicide Prevention — state-wise helpline reference (India). */

export type HelplineBlock = {
  name: string;
  detail: string;
};

export type StateHelplines = {
  state: string;
  blocks: HelplineBlock[];
};

export const telemanasNational = {
  title: "TeleMANAS across India",
  numbers: ["1-8008914416", "14416"],
  note: "National mental health helpline (TeleMANAS) — available across states where listed below.",
};

export const stateHelplines: StateHelplines[] = [
  {
    state: "Andhra Pradesh",
    blocks: [
      { name: "Life", detail: "Helpline: 7893078930" },
      { name: "GGH-Kakinada", detail: "Helpline: 98499-03870" },
      { name: "Roshni, Secunderabad", detail: "Helpline: 040 7904646" },
    ],
  },
  {
    state: "Andaman and Nicobar",
    blocks: [{ name: "TeleMANAS", detail: "Helpline: 1-8008914416 / 14416" }],
  },
  {
    state: "Arunachal Pradesh",
    blocks: [{ name: "TeleMANAS", detail: "Helpline: 1-8008914416 / 14416" }],
  },
  {
    state: "Assam",
    blocks: [{ name: "Sarathi, Assam", detail: "Helpline: 104" }],
  },
  {
    state: "Bihar",
    blocks: [{ name: "TeleMANAS", detail: "Helpline: 1-8008914416 / 14416" }],
  },
  {
    state: "Chandigarh",
    blocks: [
      {
        name: "Asha Helpline, Chandigarh",
        detail: "+91 172 2735436, +91 172 2735446 — Monday to Saturday: 8am to 7pm",
      },
    ],
  },
  {
    state: "Chhattisgarh",
    blocks: [
      {
        name: "Arogya Seva — Health Care and Health Counseling Center",
        detail: "Helpline: 104 (24×7)",
      },
    ],
  },
  {
    state: "Delhi",
    blocks: [
      {
        name: "Sumaitri, New Delhi",
        detail:
          "Helpline: 011 23389090, 011 46018404, 9315767849 — Mon–Fri 2pm–10pm; Sat–Sun 10am–10pm",
      },
      {
        name: "Sanjeevani",
        detail: "Helpline: 011 24311918, 011 24318883 — Mon–Fri (10am–5:30pm)",
      },
      { name: "Snehi, New Delhi", detail: "Helpline: 011 65978181 — Daily (2pm–6pm)" },
      {
        name: "Sanjeevani, New Delhi (additional)",
        detail:
          "011-24311918, 011-24318883 (Mon–Fri) | 011-26862222, 011-26864488, 011-40769002 (Mon–Sat)",
      },
      {
        name: "Fortis Stress Helpline, Delhi",
        detail: "Helpline: +91 8376804102 — 24×7",
      },
    ],
  },
  {
    state: "Dadra and Nagar Haveli and Daman and Diu",
    blocks: [{ name: "TeleMANAS", detail: "Helpline: 1-8008914416 / 14416" }],
  },
  {
    state: "Gujarat",
    blocks: [
      {
        name: "Amam Counseling Center & Amam Foundation, Vadodara",
        detail: "Helpline: 9824372039",
      },
      {
        name: "Saath, Ahmedabad",
        detail: "Helpline: +91 79 26305544, +91 79 26300222 — Daily (1pm–7pm)",
      },
      {
        name: "Jeevan Aastha Helpline, Gandhinagar",
        detail: "Helpline: 1800 233 3330",
      },
    ],
  },
  {
    state: "Goa",
    blocks: [
      {
        name: "COOJ Mental Health Foundation",
        detail: "Helpline: +91 8322252525, +91 98225 62522 — Mon–Fri (3pm–7pm)",
      },
    ],
  },
  {
    state: "Haryana",
    blocks: [{ name: "TeleMANAS", detail: "Helpline: 1-8008914416 / 14416" }],
  },
  {
    state: "Himachal Pradesh",
    blocks: [
      { name: "TeleMANAS", detail: "Helpline: 1-8008914416 / 14416" },
      { name: "State health line", detail: "104 (24×7)" },
    ],
  },
  {
    state: "Jammu and Kashmir",
    blocks: [
      { name: "Healing Minds Foundation", detail: "Helpline: 1800 180 7020" },
      {
        name: "The Sara, Jammu Tawi",
        detail: "Helpline: +91-9697-606060 — Daily (10am–5pm)",
      },
      { name: "Chat bot", detail: "9797600601" },
      {
        name: "Kashmir Lifeline, Srinagar",
        detail: "1800 180 7020 — Sunday to Thursday: 10am–5pm",
      },
    ],
  },
  {
    state: "Jharkhand",
    blocks: [
      {
        name: "Chikitsa Salah — Health Information Helpline",
        detail: "Helpline: 104 — 24×7",
      },
      {
        name: "Jeevan Suicide Prevention Helpline, Jamshedpur",
        detail:
          "0657 6453841, 0657 6555555, 9297777499 / 9297777500, 9955435500 — Daily (10am–6pm)",
      },
    ],
  },
  {
    state: "Kerala",
    blocks: [
      {
        name: "Thanal, Kozhikode — Suicide Prevention Centre",
        detail: "0495 2760000, 9495714262, 7306509594",
      },
      { name: "Maithri, Kochi", detail: "0484 2540530 — Daily (10am–7pm)" },
      { name: "Pratheeksha", detail: "0484 2448830 — Daily (10am–6pm)" },
      {
        name: "Sanjeevani, Thiruvananthapuram",
        detail: "0471 2533900, 9400033900 — Mon–Sat (1pm–5pm)",
      },
      { name: "Unarve", detail: "04862225544 — Mon–Sat (1pm–5pm)" },
      {
        name: "DISHA",
        detail: "1056 / 104 (24×7) | 0471-2552056, 0471-2551056",
      },
      {
        name: "Pratheeksha, Paravur",
        detail: "+91 0484 2448830 — Daily 10am–6pm",
      },
      {
        name: "Prathyasa, Irinjalakuda",
        detail: "+91 480 2820091",
      },
    ],
  },
  {
    state: "Karnataka",
    blocks: [
      {
        name: "Parivarthan Counseling Helpline Services, Bengaluru",
        detail: "+91 7676 602 602",
      },
      {
        name: "TeleMANAS",
        detail: "1-8008914416 / 14416 — Mon–Fri (4pm–10pm)",
      },
      {
        name: "SAHAI, Bengaluru",
        detail: "+91 080 25497777, +91-9886444075 — Mon–Sat (10am–8pm)",
      },
      {
        name: "Mitram Foundation",
        detail: "08025722573, 9019708133 — 10am–4pm every day",
      },
      {
        name: "Sa-Mudra Yuva Helpline, Bengaluru",
        detail: "+91 9880396331 — 24×7",
      },
      { name: "Arogya Sahayavani", detail: "104 — 24×7" },
      {
        name: "Suicide Lifeline, Mangalore",
        detail: "08242983444, 7338201234 — 24×7",
      },
      {
        name: "NIMHANS Centre for Well-Being",
        detail: "08026685948, 9480829670",
      },
      {
        name: "Arpita Foundation",
        detail:
          "+91 80 23655557 / +91 80 23656667 / 8792677346 — 9am–9pm, all days",
      },
    ],
  },
  {
    state: "Ladakh",
    blocks: [{ name: "TeleMANAS", detail: "Helpline: 1-8008914416 / 14416" }],
  },
  {
    state: "Madhya Pradesh",
    blocks: [
      {
        name: "Spandan, Indore",
        detail: "+91 9630899002, +91 7389366696 — 24×7",
      },
      { name: "Sanjivani, Jabalpur", detail: "1253, 0761-2626622" },
      {
        name: "Jeevan Aadhar (Adolescent Helpline), Bhopal",
        detail: "1800-233-1250 — Daily (9am–5pm)",
      },
    ],
  },
  {
    state: "Maharashtra",
    blocks: [
      {
        name: "Samaritans, Mumbai",
        detail: "+91 84229 84528, +91 84229 84529, 84229 84530 — Daily (3pm–9pm)",
      },
      {
        name: "Vandrevala Foundation, Mumbai",
        detail: "1860-266-2345, 1800-233-3330 — 24×7",
      },
      {
        name: "Tata Institute of Social Sciences — iCall, Mumbai",
        detail: "022 25521111 — Mon–Sat (8am–10pm)",
      },
      { name: "Hitguj, Mumbai", detail: "022-24131212" },
      { name: "Aasra, Navi Mumbai", detail: "+91 9820466726 — 24×7" },
      {
        name: "The Connect Hut, Bhandup (W), Mumbai",
        detail: "+91-7977613060",
      },
      {
        name: "Maitra Helpline, Thane",
        detail: "022 25385447 — Mon–Sat (9am–9pm), Sun (9am–1pm)",
      },
      { name: "BMC Mental Health", detail: "022-24131212" },
      {
        name: "Connecting NGO, Pune",
        detail: "1800 843 4353 (toll-free) / 9922001122 — Daily 12pm–8pm",
      },
      {
        name: "Nagpur Suicide Prevention Helpline",
        detail: "8888817666",
      },
      {
        name: "Shushrusha Counseling, Guidance and Training Institute, Islampur",
        detail: "+91 9422627571, +91 8275038382 — 24×7",
      },
    ],
  },
  {
    state: "Manipur",
    blocks: [{ name: "TeleMANAS", detail: "Helpline: 1-8008914416 / 14416" }],
  },
  {
    state: "Meghalaya",
    blocks: [
      { name: "TeleMANAS", detail: "Helpline: 1-8008914416 / 14416 / 14410" },
    ],
  },
  {
    state: "Mizoram",
    blocks: [{ name: "TeleMANAS", detail: "Helpline: 1-8008914416 / 14416" }],
  },
  {
    state: "Nagaland",
    blocks: [{ name: "TeleMANAS", detail: "Helpline: 1-8008914416 / 14416" }],
  },
  {
    state: "Odisha",
    blocks: [
      { name: "Health Helpline", detail: "104" },
      { name: "TeleMANAS", detail: "1-8008914416 / 14416 — 24×7" },
    ],
  },
  {
    state: "Punjab",
    blocks: [
      { name: "Medical Consultation — Health", detail: "104" },
      { name: "TeleMANAS", detail: "1-8008914416 / 14416 — 24×7" },
    ],
  },
  {
    state: "Puducherry",
    blocks: [
      {
        name: "Maitreyi",
        detail: "+91 0413 2339999 — Daily 2pm–8pm",
      },
      {
        name: "TeleMANAS",
        detail: "1-8008914416 / 14416 — Daily (2pm–8pm)",
      },
    ],
  },
  {
    state: "Rajasthan",
    blocks: [
      { name: "Medical Advice and Helpline", detail: "104" },
      { name: "TeleMANAS", detail: "1-8008914416 / 14416 — 24×7" },
      {
        name: "Hope Helpline for Students",
        detail: "0744-2333666, 0744-2414141 — 24×7",
      },
    ],
  },
  {
    state: "Sikkim",
    blocks: [
      {
        name: "Suicide Prevention Helpline, Gangtok",
        detail: "221152, 18003453225 — 24×7",
      },
      { name: "TeleMANAS", detail: "03592-202111 — 24×7" },
    ],
  },
  {
    state: "Tamil Nadu",
    blocks: [
      {
        name: "Sneha India Foundation, Chennai",
        detail:
          "044-24640050 — 24 hours, Mon–Sun | 044-24640060 — 8am–10pm Mon–Sun",
      },
      { name: "TeleMANAS", detail: "1-8008914416 / 14416 — 24×7" },
      { name: "Medical Helpline", detail: "104 — 24×7" },
      {
        name: "Jeevan Suicide Prevention Hotline, Chennai",
        detail: "044 2656 4444 — 24×7",
      },
      { name: "One Life Foundation", detail: "7893078930" },
      {
        name: "Sumaitri",
        detail: "01146018404 / 919315767849",
      },
    ],
  },
  {
    state: "Telangana",
    blocks: [
      {
        name: "Roshni Trust, Secunderabad",
        detail:
          "040 6620 2000, 040 6620 2001, 8142020033/44 — Mon–Sat 11am–9pm",
      },
      {
        name: "TeleMANAS",
        detail: "1-8008914416 / 14416 — Mon–Sat (11am–9pm)",
      },
      {
        name: "One Life, Hyderabad",
        detail: "+91 7893078930 — 24×7",
      },
      {
        name: "Sevakendram — Health Information Helpline",
        detail: "104 — 24×7",
      },
      {
        name: "Darshika, Secunderabad",
        detail: "040 27755506, 040 27755505",
      },
      {
        name: "Makro Foundation — Suicide Prevention Helpdesk, Hyderabad",
        detail: "040 46004600 — Mon–Fri (10am–7pm)",
      },
    ],
  },
  {
    state: "Tripura",
    blocks: [
      { name: "TeleMANAS", detail: "1800-891-4416 / 14416" },
      { name: "Suicide prevention", detail: "9863100639" },
    ],
  },
  {
    state: "Uttar Pradesh",
    blocks: [{ name: "TeleMANAS", detail: "Helpline: 1-8008914416 / 14416" }],
  },
  {
    state: "Uttarakhand",
    blocks: [
      { name: "TeleMANAS", detail: "1-8008914416 / 14416" },
      { name: "Health line", detail: "104 — 8am–8pm" },
    ],
  },
  {
    state: "West Bengal",
    blocks: [
      {
        name: "Lifeline Foundation, Kolkata",
        detail:
          "033 24637401, 033 24637432, 9088030303, 03340447437 — Mon–Sun (10am–6pm)",
      },
      {
        name: "NIBS Helpline, Kolkata",
        detail: "+91-98364 01234, +91-033 2286 5603 — Mon–Fri (6pm–10pm)",
      },
    ],
  },
];
