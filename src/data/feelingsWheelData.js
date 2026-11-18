// Standard 3-Tier Feelings Wheel Taxonomy & Encouraging NIV 2011 Scriptures
// Pre-calculated angles and harmonic color palettes for seamless SVG rendering

export const FEELINGS_HIERARCHY = [
  {
    "id": "happy",
    "label": "Happy",
    "tier": 1,
    "coreId": "happy",
    "parentId": null,
    "startAngle": 0.0,
    "endAngle": 79.02,
    "color": "#d97706",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy"
    ],
    "secondaries": [
      {
        "id": "playful",
        "label": "Playful",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 0.0,
        "endAngle": 8.78,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Playful"
        ],
        "tertiaries": [
          {
            "id": "aroused",
            "label": "Aroused",
            "tier": 3,
            "coreId": "happy",
            "parentId": "playful",
            "startAngle": 0.0,
            "endAngle": 4.39,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Playful",
              "Aroused"
            ]
          },
          {
            "id": "cheeky",
            "label": "Cheeky",
            "tier": 3,
            "coreId": "happy",
            "parentId": "playful",
            "startAngle": 4.39,
            "endAngle": 8.78,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Playful",
              "Cheeky"
            ]
          }
        ]
      },
      {
        "id": "content",
        "label": "Content",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 8.78,
        "endAngle": 17.56,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Content"
        ],
        "tertiaries": [
          {
            "id": "free",
            "label": "Free",
            "tier": 3,
            "coreId": "happy",
            "parentId": "content",
            "startAngle": 8.78,
            "endAngle": 13.17,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Content",
              "Free"
            ]
          },
          {
            "id": "joyful",
            "label": "Joyful",
            "tier": 3,
            "coreId": "happy",
            "parentId": "content",
            "startAngle": 13.17,
            "endAngle": 17.56,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Content",
              "Joyful"
            ]
          }
        ]
      },
      {
        "id": "interested",
        "label": "Interested",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 17.56,
        "endAngle": 26.34,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Interested"
        ],
        "tertiaries": [
          {
            "id": "curious",
            "label": "Curious",
            "tier": 3,
            "coreId": "happy",
            "parentId": "interested",
            "startAngle": 17.56,
            "endAngle": 21.95,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Interested",
              "Curious"
            ]
          },
          {
            "id": "inquisitive",
            "label": "Inquisitive",
            "tier": 3,
            "coreId": "happy",
            "parentId": "interested",
            "startAngle": 21.95,
            "endAngle": 26.34,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Interested",
              "Inquisitive"
            ]
          }
        ]
      },
      {
        "id": "proud",
        "label": "Proud",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 26.34,
        "endAngle": 35.12,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Proud"
        ],
        "tertiaries": [
          {
            "id": "successful",
            "label": "Successful",
            "tier": 3,
            "coreId": "happy",
            "parentId": "proud",
            "startAngle": 26.34,
            "endAngle": 30.73,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Proud",
              "Successful"
            ]
          },
          {
            "id": "confident",
            "label": "Confident",
            "tier": 3,
            "coreId": "happy",
            "parentId": "proud",
            "startAngle": 30.73,
            "endAngle": 35.12,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Proud",
              "Confident"
            ]
          }
        ]
      },
      {
        "id": "accepted",
        "label": "Accepted",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 35.12,
        "endAngle": 43.9,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Accepted"
        ],
        "tertiaries": [
          {
            "id": "respected",
            "label": "Respected",
            "tier": 3,
            "coreId": "happy",
            "parentId": "accepted",
            "startAngle": 35.12,
            "endAngle": 39.51,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Accepted",
              "Respected"
            ]
          },
          {
            "id": "valued",
            "label": "Valued",
            "tier": 3,
            "coreId": "happy",
            "parentId": "accepted",
            "startAngle": 39.51,
            "endAngle": 43.9,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Accepted",
              "Valued"
            ]
          }
        ]
      },
      {
        "id": "powerful",
        "label": "Powerful",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 43.9,
        "endAngle": 52.68,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Powerful"
        ],
        "tertiaries": [
          {
            "id": "courageous",
            "label": "Courageous",
            "tier": 3,
            "coreId": "happy",
            "parentId": "powerful",
            "startAngle": 43.9,
            "endAngle": 48.29,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Powerful",
              "Courageous"
            ]
          },
          {
            "id": "creative",
            "label": "Creative",
            "tier": 3,
            "coreId": "happy",
            "parentId": "powerful",
            "startAngle": 48.29,
            "endAngle": 52.68,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Powerful",
              "Creative"
            ]
          }
        ]
      },
      {
        "id": "peaceful",
        "label": "Peaceful",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 52.68,
        "endAngle": 61.46,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Peaceful"
        ],
        "tertiaries": [
          {
            "id": "loving",
            "label": "Loving",
            "tier": 3,
            "coreId": "happy",
            "parentId": "peaceful",
            "startAngle": 52.68,
            "endAngle": 57.07,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Peaceful",
              "Loving"
            ]
          },
          {
            "id": "thankful",
            "label": "Thankful",
            "tier": 3,
            "coreId": "happy",
            "parentId": "peaceful",
            "startAngle": 57.07,
            "endAngle": 61.46,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Peaceful",
              "Thankful"
            ]
          }
        ]
      },
      {
        "id": "trusting",
        "label": "Trusting",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 61.46,
        "endAngle": 70.24,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Trusting"
        ],
        "tertiaries": [
          {
            "id": "sensitive",
            "label": "Sensitive",
            "tier": 3,
            "coreId": "happy",
            "parentId": "trusting",
            "startAngle": 61.46,
            "endAngle": 65.85,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Trusting",
              "Sensitive"
            ]
          },
          {
            "id": "intimate",
            "label": "Intimate",
            "tier": 3,
            "coreId": "happy",
            "parentId": "trusting",
            "startAngle": 65.85,
            "endAngle": 70.24,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Trusting",
              "Intimate"
            ]
          }
        ]
      },
      {
        "id": "optimistic",
        "label": "Optimistic",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 70.24,
        "endAngle": 79.02,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Optimistic"
        ],
        "tertiaries": [
          {
            "id": "hopeful",
            "label": "Hopeful",
            "tier": 3,
            "coreId": "happy",
            "parentId": "optimistic",
            "startAngle": 70.24,
            "endAngle": 74.63,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Optimistic",
              "Hopeful"
            ]
          },
          {
            "id": "inspired",
            "label": "Inspired",
            "tier": 3,
            "coreId": "happy",
            "parentId": "optimistic",
            "startAngle": 74.63,
            "endAngle": 79.02,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Optimistic",
              "Inspired"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "sad",
    "label": "Sad",
    "tier": 1,
    "coreId": "sad",
    "parentId": null,
    "startAngle": 79.02,
    "endAngle": 131.71,
    "color": "#2563eb",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad"
    ],
    "secondaries": [
      {
        "id": "lonely",
        "label": "Lonely",
        "tier": 2,
        "coreId": "sad",
        "parentId": "sad",
        "startAngle": 79.02,
        "endAngle": 87.8,
        "color": "#3b82f6",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Lonely"
        ],
        "tertiaries": [
          {
            "id": "isolated",
            "label": "Isolated",
            "tier": 3,
            "coreId": "sad",
            "parentId": "lonely",
            "startAngle": 79.02,
            "endAngle": 83.41,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Lonely",
              "Isolated"
            ]
          },
          {
            "id": "abandoned",
            "label": "Abandoned",
            "tier": 3,
            "coreId": "sad",
            "parentId": "lonely",
            "startAngle": 83.41,
            "endAngle": 87.8,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Lonely",
              "Abandoned"
            ]
          }
        ]
      },
      {
        "id": "vulnerable",
        "label": "Vulnerable",
        "tier": 2,
        "coreId": "sad",
        "parentId": "sad",
        "startAngle": 87.8,
        "endAngle": 96.59,
        "color": "#3b82f6",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Vulnerable"
        ],
        "tertiaries": [
          {
            "id": "victimized",
            "label": "Victimized",
            "tier": 3,
            "coreId": "sad",
            "parentId": "vulnerable",
            "startAngle": 87.8,
            "endAngle": 92.2,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Vulnerable",
              "Victimized"
            ]
          },
          {
            "id": "fragile",
            "label": "Fragile",
            "tier": 3,
            "coreId": "sad",
            "parentId": "vulnerable",
            "startAngle": 92.2,
            "endAngle": 96.59,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Vulnerable",
              "Fragile"
            ]
          }
        ]
      },
      {
        "id": "despair",
        "label": "Despair",
        "tier": 2,
        "coreId": "sad",
        "parentId": "sad",
        "startAngle": 96.59,
        "endAngle": 105.37,
        "color": "#3b82f6",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Despair"
        ],
        "tertiaries": [
          {
            "id": "grief",
            "label": "Grief",
            "tier": 3,
            "coreId": "sad",
            "parentId": "despair",
            "startAngle": 96.59,
            "endAngle": 100.98,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Despair",
              "Grief"
            ]
          },
          {
            "id": "powerless",
            "label": "Powerless",
            "tier": 3,
            "coreId": "sad",
            "parentId": "despair",
            "startAngle": 100.98,
            "endAngle": 105.37,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Despair",
              "Powerless"
            ]
          }
        ]
      },
      {
        "id": "guilty",
        "label": "Guilty",
        "tier": 2,
        "coreId": "sad",
        "parentId": "sad",
        "startAngle": 105.37,
        "endAngle": 114.15,
        "color": "#3b82f6",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Guilty"
        ],
        "tertiaries": [
          {
            "id": "ashamed",
            "label": "Ashamed",
            "tier": 3,
            "coreId": "sad",
            "parentId": "guilty",
            "startAngle": 105.37,
            "endAngle": 109.76,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Guilty",
              "Ashamed"
            ]
          },
          {
            "id": "remorseful",
            "label": "Remorseful",
            "tier": 3,
            "coreId": "sad",
            "parentId": "guilty",
            "startAngle": 109.76,
            "endAngle": 114.15,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Guilty",
              "Remorseful"
            ]
          }
        ]
      },
      {
        "id": "depressed",
        "label": "Depressed",
        "tier": 2,
        "coreId": "sad",
        "parentId": "sad",
        "startAngle": 114.15,
        "endAngle": 122.93,
        "color": "#3b82f6",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Depressed"
        ],
        "tertiaries": [
          {
            "id": "empty",
            "label": "Empty",
            "tier": 3,
            "coreId": "sad",
            "parentId": "depressed",
            "startAngle": 114.15,
            "endAngle": 118.54,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Depressed",
              "Empty"
            ]
          },
          {
            "id": "inferior",
            "label": "Inferior",
            "tier": 3,
            "coreId": "sad",
            "parentId": "depressed",
            "startAngle": 118.54,
            "endAngle": 122.93,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Depressed",
              "Inferior"
            ]
          }
        ]
      },
      {
        "id": "hurt",
        "label": "Hurt",
        "tier": 2,
        "coreId": "sad",
        "parentId": "sad",
        "startAngle": 122.93,
        "endAngle": 131.71,
        "color": "#3b82f6",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Hurt"
        ],
        "tertiaries": [
          {
            "id": "disappointed",
            "label": "Disappointed",
            "tier": 3,
            "coreId": "sad",
            "parentId": "hurt",
            "startAngle": 122.93,
            "endAngle": 127.32,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Hurt",
              "Disappointed"
            ]
          },
          {
            "id": "embarrassed",
            "label": "Embarrassed",
            "tier": 3,
            "coreId": "sad",
            "parentId": "hurt",
            "startAngle": 127.32,
            "endAngle": 131.71,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Hurt",
              "Embarrassed"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "disgusted",
    "label": "Disgusted",
    "tier": 1,
    "coreId": "disgusted",
    "parentId": null,
    "startAngle": 131.71,
    "endAngle": 166.83,
    "color": "#059669",
    "lightColor": "#d1fae5",
    "darkColor": "#065f46",
    "path": [
      "Disgusted"
    ],
    "secondaries": [
      {
        "id": "disapproving",
        "label": "Disapproving",
        "tier": 2,
        "coreId": "disgusted",
        "parentId": "disgusted",
        "startAngle": 131.71,
        "endAngle": 140.49,
        "color": "#10b981",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Disapproving"
        ],
        "tertiaries": [
          {
            "id": "judgmental",
            "label": "Judgmental",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "disapproving",
            "startAngle": 131.71,
            "endAngle": 136.1,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Disapproving",
              "Judgmental"
            ]
          },
          {
            "id": "embarrassed_disgusted",
            "label": "Embarrassed",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "disapproving",
            "startAngle": 136.1,
            "endAngle": 140.49,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Disapproving",
              "Embarrassed"
            ]
          }
        ]
      },
      {
        "id": "disappointed_disgusted",
        "label": "Disappointed",
        "tier": 2,
        "coreId": "disgusted",
        "parentId": "disgusted",
        "startAngle": 140.49,
        "endAngle": 149.27,
        "color": "#10b981",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Disappointed"
        ],
        "tertiaries": [
          {
            "id": "appalled",
            "label": "Appalled",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "disappointed_disgusted",
            "startAngle": 140.49,
            "endAngle": 144.88,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Disappointed",
              "Appalled"
            ]
          },
          {
            "id": "revolted",
            "label": "Revolted",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "disappointed_disgusted",
            "startAngle": 144.88,
            "endAngle": 149.27,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Disappointed",
              "Revolted"
            ]
          }
        ]
      },
      {
        "id": "awful",
        "label": "Awful",
        "tier": 2,
        "coreId": "disgusted",
        "parentId": "disgusted",
        "startAngle": 149.27,
        "endAngle": 158.05,
        "color": "#10b981",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Awful"
        ],
        "tertiaries": [
          {
            "id": "nauseated",
            "label": "Nauseated",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "awful",
            "startAngle": 149.27,
            "endAngle": 153.66,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Awful",
              "Nauseated"
            ]
          },
          {
            "id": "detestable",
            "label": "Detestable",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "awful",
            "startAngle": 153.66,
            "endAngle": 158.05,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Awful",
              "Detestable"
            ]
          }
        ]
      },
      {
        "id": "repelled",
        "label": "Repelled",
        "tier": 2,
        "coreId": "disgusted",
        "parentId": "disgusted",
        "startAngle": 158.05,
        "endAngle": 166.83,
        "color": "#10b981",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Repelled"
        ],
        "tertiaries": [
          {
            "id": "horrified",
            "label": "Horrified",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "repelled",
            "startAngle": 158.05,
            "endAngle": 162.44,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Repelled",
              "Horrified"
            ]
          },
          {
            "id": "hesitant",
            "label": "Hesitant",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "repelled",
            "startAngle": 162.44,
            "endAngle": 166.83,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Repelled",
              "Hesitant"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "angry",
    "label": "Angry",
    "tier": 1,
    "coreId": "angry",
    "parentId": null,
    "startAngle": 166.83,
    "endAngle": 237.07,
    "color": "#dc2626",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry"
    ],
    "secondaries": [
      {
        "id": "critical",
        "label": "Critical",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 166.83,
        "endAngle": 175.61,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Critical"
        ],
        "tertiaries": [
          {
            "id": "dismissive",
            "label": "Dismissive",
            "tier": 3,
            "coreId": "angry",
            "parentId": "critical",
            "startAngle": 166.83,
            "endAngle": 171.22,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Critical",
              "Dismissive"
            ]
          },
          {
            "id": "skeptical",
            "label": "Skeptical",
            "tier": 3,
            "coreId": "angry",
            "parentId": "critical",
            "startAngle": 171.22,
            "endAngle": 175.61,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Critical",
              "Skeptical"
            ]
          }
        ]
      },
      {
        "id": "distant",
        "label": "Distant",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 175.61,
        "endAngle": 184.39,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Distant"
        ],
        "tertiaries": [
          {
            "id": "numb",
            "label": "Numb",
            "tier": 3,
            "coreId": "angry",
            "parentId": "distant",
            "startAngle": 175.61,
            "endAngle": 180.0,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Distant",
              "Numb"
            ]
          },
          {
            "id": "withdrawn",
            "label": "Withdrawn",
            "tier": 3,
            "coreId": "angry",
            "parentId": "distant",
            "startAngle": 180.0,
            "endAngle": 184.39,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Distant",
              "Withdrawn"
            ]
          }
        ]
      },
      {
        "id": "frustrated",
        "label": "Frustrated",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 184.39,
        "endAngle": 193.17,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Frustrated"
        ],
        "tertiaries": [
          {
            "id": "annoyed",
            "label": "Annoyed",
            "tier": 3,
            "coreId": "angry",
            "parentId": "frustrated",
            "startAngle": 184.39,
            "endAngle": 188.78,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Frustrated",
              "Annoyed"
            ]
          },
          {
            "id": "infuriated",
            "label": "Infuriated",
            "tier": 3,
            "coreId": "angry",
            "parentId": "frustrated",
            "startAngle": 188.78,
            "endAngle": 193.17,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Frustrated",
              "Infuriated"
            ]
          }
        ]
      },
      {
        "id": "aggressive",
        "label": "Aggressive",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 193.17,
        "endAngle": 201.95,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Aggressive"
        ],
        "tertiaries": [
          {
            "id": "hostile",
            "label": "Hostile",
            "tier": 3,
            "coreId": "angry",
            "parentId": "aggressive",
            "startAngle": 193.17,
            "endAngle": 197.56,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Aggressive",
              "Hostile"
            ]
          },
          {
            "id": "provoked",
            "label": "Provoked",
            "tier": 3,
            "coreId": "angry",
            "parentId": "aggressive",
            "startAngle": 197.56,
            "endAngle": 201.95,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Aggressive",
              "Provoked"
            ]
          }
        ]
      },
      {
        "id": "mad",
        "label": "Mad",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 201.95,
        "endAngle": 210.73,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Mad"
        ],
        "tertiaries": [
          {
            "id": "jealous",
            "label": "Jealous",
            "tier": 3,
            "coreId": "angry",
            "parentId": "mad",
            "startAngle": 201.95,
            "endAngle": 206.34,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Mad",
              "Jealous"
            ]
          },
          {
            "id": "furious",
            "label": "Furious",
            "tier": 3,
            "coreId": "angry",
            "parentId": "mad",
            "startAngle": 206.34,
            "endAngle": 210.73,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Mad",
              "Furious"
            ]
          }
        ]
      },
      {
        "id": "bitter",
        "label": "Bitter",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 210.73,
        "endAngle": 219.51,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Bitter"
        ],
        "tertiaries": [
          {
            "id": "violated",
            "label": "Violated",
            "tier": 3,
            "coreId": "angry",
            "parentId": "bitter",
            "startAngle": 210.73,
            "endAngle": 215.12,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Bitter",
              "Violated"
            ]
          },
          {
            "id": "indignant",
            "label": "Indignant",
            "tier": 3,
            "coreId": "angry",
            "parentId": "bitter",
            "startAngle": 215.12,
            "endAngle": 219.51,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Bitter",
              "Indignant"
            ]
          }
        ]
      },
      {
        "id": "humiliated",
        "label": "Humiliated",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 219.51,
        "endAngle": 228.29,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Humiliated"
        ],
        "tertiaries": [
          {
            "id": "ridiculed",
            "label": "Ridiculed",
            "tier": 3,
            "coreId": "angry",
            "parentId": "humiliated",
            "startAngle": 219.51,
            "endAngle": 223.9,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Humiliated",
              "Ridiculed"
            ]
          },
          {
            "id": "disrespected",
            "label": "Disrespected",
            "tier": 3,
            "coreId": "angry",
            "parentId": "humiliated",
            "startAngle": 223.9,
            "endAngle": 228.29,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Humiliated",
              "Disrespected"
            ]
          }
        ]
      },
      {
        "id": "letdown",
        "label": "Let Down",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 228.29,
        "endAngle": 237.07,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Let Down"
        ],
        "tertiaries": [
          {
            "id": "betrayed",
            "label": "Betrayed",
            "tier": 3,
            "coreId": "angry",
            "parentId": "letdown",
            "startAngle": 228.29,
            "endAngle": 232.68,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Let Down",
              "Betrayed"
            ]
          },
          {
            "id": "resentful",
            "label": "Resentful",
            "tier": 3,
            "coreId": "angry",
            "parentId": "letdown",
            "startAngle": 232.68,
            "endAngle": 237.07,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Let Down",
              "Resentful"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "fearful",
    "label": "Fearful",
    "tier": 1,
    "coreId": "fearful",
    "parentId": null,
    "startAngle": 237.07,
    "endAngle": 289.76,
    "color": "#7c3aed",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful"
    ],
    "secondaries": [
      {
        "id": "scared",
        "label": "Scared",
        "tier": 2,
        "coreId": "fearful",
        "parentId": "fearful",
        "startAngle": 237.07,
        "endAngle": 245.85,
        "color": "#8b5cf6",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Scared"
        ],
        "tertiaries": [
          {
            "id": "helpless",
            "label": "Helpless",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "scared",
            "startAngle": 237.07,
            "endAngle": 241.46,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Scared",
              "Helpless"
            ]
          },
          {
            "id": "frightened",
            "label": "Frightened",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "scared",
            "startAngle": 241.46,
            "endAngle": 245.85,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Scared",
              "Frightened"
            ]
          }
        ]
      },
      {
        "id": "anxious",
        "label": "Anxious",
        "tier": 2,
        "coreId": "fearful",
        "parentId": "fearful",
        "startAngle": 245.85,
        "endAngle": 254.63,
        "color": "#8b5cf6",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Anxious"
        ],
        "tertiaries": [
          {
            "id": "overwhelmed_fear",
            "label": "Overwhelmed",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "anxious",
            "startAngle": 245.85,
            "endAngle": 250.24,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Anxious",
              "Overwhelmed"
            ]
          },
          {
            "id": "worried",
            "label": "Worried",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "anxious",
            "startAngle": 250.24,
            "endAngle": 254.63,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Anxious",
              "Worried"
            ]
          }
        ]
      },
      {
        "id": "insecure",
        "label": "Insecure",
        "tier": 2,
        "coreId": "fearful",
        "parentId": "fearful",
        "startAngle": 254.63,
        "endAngle": 263.41,
        "color": "#8b5cf6",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Insecure"
        ],
        "tertiaries": [
          {
            "id": "inadequate",
            "label": "Inadequate",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "insecure",
            "startAngle": 254.63,
            "endAngle": 259.02,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Insecure",
              "Inadequate"
            ]
          },
          {
            "id": "inferior_fear",
            "label": "Inferior",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "insecure",
            "startAngle": 259.02,
            "endAngle": 263.41,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Insecure",
              "Inferior"
            ]
          }
        ]
      },
      {
        "id": "weak",
        "label": "Weak",
        "tier": 2,
        "coreId": "fearful",
        "parentId": "fearful",
        "startAngle": 263.41,
        "endAngle": 272.2,
        "color": "#8b5cf6",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Weak"
        ],
        "tertiaries": [
          {
            "id": "worthless",
            "label": "Worthless",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "weak",
            "startAngle": 263.41,
            "endAngle": 267.8,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Weak",
              "Worthless"
            ]
          },
          {
            "id": "insignificant",
            "label": "Insignificant",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "weak",
            "startAngle": 267.8,
            "endAngle": 272.2,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Weak",
              "Insignificant"
            ]
          }
        ]
      },
      {
        "id": "rejected",
        "label": "Rejected",
        "tier": 2,
        "coreId": "fearful",
        "parentId": "fearful",
        "startAngle": 272.2,
        "endAngle": 280.98,
        "color": "#8b5cf6",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Rejected"
        ],
        "tertiaries": [
          {
            "id": "excluded",
            "label": "Excluded",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "rejected",
            "startAngle": 272.2,
            "endAngle": 276.59,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Rejected",
              "Excluded"
            ]
          },
          {
            "id": "persecuted",
            "label": "Persecuted",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "rejected",
            "startAngle": 276.59,
            "endAngle": 280.98,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Rejected",
              "Persecuted"
            ]
          }
        ]
      },
      {
        "id": "threatened",
        "label": "Threatened",
        "tier": 2,
        "coreId": "fearful",
        "parentId": "fearful",
        "startAngle": 280.98,
        "endAngle": 289.76,
        "color": "#8b5cf6",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Threatened"
        ],
        "tertiaries": [
          {
            "id": "nervous",
            "label": "Nervous",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "threatened",
            "startAngle": 280.98,
            "endAngle": 285.37,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Threatened",
              "Nervous"
            ]
          },
          {
            "id": "exposed",
            "label": "Exposed",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "threatened",
            "startAngle": 285.37,
            "endAngle": 289.76,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Threatened",
              "Exposed"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "bad",
    "label": "Bad",
    "tier": 1,
    "coreId": "bad",
    "parentId": null,
    "startAngle": 289.76,
    "endAngle": 324.88,
    "color": "#475569",
    "lightColor": "#f1f5f9",
    "darkColor": "#1e293b",
    "path": [
      "Bad"
    ],
    "secondaries": [
      {
        "id": "bored",
        "label": "Bored",
        "tier": 2,
        "coreId": "bad",
        "parentId": "bad",
        "startAngle": 289.76,
        "endAngle": 298.54,
        "color": "#64748b",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Bored"
        ],
        "tertiaries": [
          {
            "id": "indifferent",
            "label": "Indifferent",
            "tier": 3,
            "coreId": "bad",
            "parentId": "bored",
            "startAngle": 289.76,
            "endAngle": 294.15,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Bored",
              "Indifferent"
            ]
          },
          {
            "id": "apathetic",
            "label": "Apathetic",
            "tier": 3,
            "coreId": "bad",
            "parentId": "bored",
            "startAngle": 294.15,
            "endAngle": 298.54,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Bored",
              "Apathetic"
            ]
          }
        ]
      },
      {
        "id": "busy",
        "label": "Busy",
        "tier": 2,
        "coreId": "bad",
        "parentId": "bad",
        "startAngle": 298.54,
        "endAngle": 307.32,
        "color": "#64748b",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Busy"
        ],
        "tertiaries": [
          {
            "id": "pressured",
            "label": "Pressured",
            "tier": 3,
            "coreId": "bad",
            "parentId": "busy",
            "startAngle": 298.54,
            "endAngle": 302.93,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Busy",
              "Pressured"
            ]
          },
          {
            "id": "rushed",
            "label": "Rushed",
            "tier": 3,
            "coreId": "bad",
            "parentId": "busy",
            "startAngle": 302.93,
            "endAngle": 307.32,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Busy",
              "Rushed"
            ]
          }
        ]
      },
      {
        "id": "stressed",
        "label": "Stressed",
        "tier": 2,
        "coreId": "bad",
        "parentId": "bad",
        "startAngle": 307.32,
        "endAngle": 316.1,
        "color": "#64748b",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Stressed"
        ],
        "tertiaries": [
          {
            "id": "overwhelmed",
            "label": "Overwhelmed",
            "tier": 3,
            "coreId": "bad",
            "parentId": "stressed",
            "startAngle": 307.32,
            "endAngle": 311.71,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Stressed",
              "Overwhelmed"
            ]
          },
          {
            "id": "outofcontrol",
            "label": "Out of Control",
            "tier": 3,
            "coreId": "bad",
            "parentId": "stressed",
            "startAngle": 311.71,
            "endAngle": 316.1,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Stressed",
              "Out of Control"
            ]
          }
        ]
      },
      {
        "id": "tired",
        "label": "Tired",
        "tier": 2,
        "coreId": "bad",
        "parentId": "bad",
        "startAngle": 316.1,
        "endAngle": 324.88,
        "color": "#64748b",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Tired"
        ],
        "tertiaries": [
          {
            "id": "sleepy",
            "label": "Sleepy",
            "tier": 3,
            "coreId": "bad",
            "parentId": "tired",
            "startAngle": 316.1,
            "endAngle": 320.49,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Tired",
              "Sleepy"
            ]
          },
          {
            "id": "unfocused",
            "label": "Unfocused",
            "tier": 3,
            "coreId": "bad",
            "parentId": "tired",
            "startAngle": 320.49,
            "endAngle": 324.88,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Tired",
              "Unfocused"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "surprised",
    "label": "Surprised",
    "tier": 1,
    "coreId": "surprised",
    "parentId": null,
    "startAngle": 324.88,
    "endAngle": 360.0,
    "color": "#0891b2",
    "lightColor": "#cffafe",
    "darkColor": "#155e75",
    "path": [
      "Surprised"
    ],
    "secondaries": [
      {
        "id": "startled",
        "label": "Startled",
        "tier": 2,
        "coreId": "surprised",
        "parentId": "surprised",
        "startAngle": 324.88,
        "endAngle": 333.66,
        "color": "#06b6d4",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Startled"
        ],
        "tertiaries": [
          {
            "id": "shocked",
            "label": "Shocked",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "startled",
            "startAngle": 324.88,
            "endAngle": 329.27,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Startled",
              "Shocked"
            ]
          },
          {
            "id": "dismayed",
            "label": "Dismayed",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "startled",
            "startAngle": 329.27,
            "endAngle": 333.66,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Startled",
              "Dismayed"
            ]
          }
        ]
      },
      {
        "id": "confused",
        "label": "Confused",
        "tier": 2,
        "coreId": "surprised",
        "parentId": "surprised",
        "startAngle": 333.66,
        "endAngle": 342.44,
        "color": "#06b6d4",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Confused"
        ],
        "tertiaries": [
          {
            "id": "disillusioned",
            "label": "Disillusioned",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "confused",
            "startAngle": 333.66,
            "endAngle": 338.05,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Confused",
              "Disillusioned"
            ]
          },
          {
            "id": "perplexed",
            "label": "Perplexed",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "confused",
            "startAngle": 338.05,
            "endAngle": 342.44,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Confused",
              "Perplexed"
            ]
          }
        ]
      },
      {
        "id": "amazed",
        "label": "Amazed",
        "tier": 2,
        "coreId": "surprised",
        "parentId": "surprised",
        "startAngle": 342.44,
        "endAngle": 351.22,
        "color": "#06b6d4",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Amazed"
        ],
        "tertiaries": [
          {
            "id": "astonished",
            "label": "Astonished",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "amazed",
            "startAngle": 342.44,
            "endAngle": 346.83,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Amazed",
              "Astonished"
            ]
          },
          {
            "id": "awe",
            "label": "Awe",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "amazed",
            "startAngle": 346.83,
            "endAngle": 351.22,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Amazed",
              "Awe"
            ]
          }
        ]
      },
      {
        "id": "excited",
        "label": "Excited",
        "tier": 2,
        "coreId": "surprised",
        "parentId": "surprised",
        "startAngle": 351.22,
        "endAngle": 360.0,
        "color": "#06b6d4",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Excited"
        ],
        "tertiaries": [
          {
            "id": "eager",
            "label": "Eager",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "excited",
            "startAngle": 351.22,
            "endAngle": 355.61,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Excited",
              "Eager"
            ]
          },
          {
            "id": "energetic",
            "label": "Energetic",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "excited",
            "startAngle": 355.61,
            "endAngle": 360.0,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Excited",
              "Energetic"
            ]
          }
        ]
      }
    ]
  }
];

export const FEELINGS_INDEX = {
  "aroused": {
    "id": "aroused",
    "label": "Aroused",
    "tier": 3,
    "coreId": "happy",
    "parentId": "playful",
    "startAngle": 0.0,
    "endAngle": 4.39,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Playful",
      "Aroused"
    ]
  },
  "cheeky": {
    "id": "cheeky",
    "label": "Cheeky",
    "tier": 3,
    "coreId": "happy",
    "parentId": "playful",
    "startAngle": 4.39,
    "endAngle": 8.78,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Playful",
      "Cheeky"
    ]
  },
  "playful": {
    "id": "playful",
    "label": "Playful",
    "tier": 2,
    "coreId": "happy",
    "parentId": "happy",
    "startAngle": 0.0,
    "endAngle": 8.78,
    "color": "#f59e0b",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Playful"
    ],
    "tertiaries": [
      {
        "id": "aroused",
        "label": "Aroused",
        "tier": 3,
        "coreId": "happy",
        "parentId": "playful",
        "startAngle": 0.0,
        "endAngle": 4.39,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Playful",
          "Aroused"
        ]
      },
      {
        "id": "cheeky",
        "label": "Cheeky",
        "tier": 3,
        "coreId": "happy",
        "parentId": "playful",
        "startAngle": 4.39,
        "endAngle": 8.78,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Playful",
          "Cheeky"
        ]
      }
    ]
  },
  "free": {
    "id": "free",
    "label": "Free",
    "tier": 3,
    "coreId": "happy",
    "parentId": "content",
    "startAngle": 8.78,
    "endAngle": 13.17,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Content",
      "Free"
    ]
  },
  "joyful": {
    "id": "joyful",
    "label": "Joyful",
    "tier": 3,
    "coreId": "happy",
    "parentId": "content",
    "startAngle": 13.17,
    "endAngle": 17.56,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Content",
      "Joyful"
    ]
  },
  "content": {
    "id": "content",
    "label": "Content",
    "tier": 2,
    "coreId": "happy",
    "parentId": "happy",
    "startAngle": 8.78,
    "endAngle": 17.56,
    "color": "#f59e0b",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Content"
    ],
    "tertiaries": [
      {
        "id": "free",
        "label": "Free",
        "tier": 3,
        "coreId": "happy",
        "parentId": "content",
        "startAngle": 8.78,
        "endAngle": 13.17,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Content",
          "Free"
        ]
      },
      {
        "id": "joyful",
        "label": "Joyful",
        "tier": 3,
        "coreId": "happy",
        "parentId": "content",
        "startAngle": 13.17,
        "endAngle": 17.56,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Content",
          "Joyful"
        ]
      }
    ]
  },
  "curious": {
    "id": "curious",
    "label": "Curious",
    "tier": 3,
    "coreId": "happy",
    "parentId": "interested",
    "startAngle": 17.56,
    "endAngle": 21.95,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Interested",
      "Curious"
    ]
  },
  "inquisitive": {
    "id": "inquisitive",
    "label": "Inquisitive",
    "tier": 3,
    "coreId": "happy",
    "parentId": "interested",
    "startAngle": 21.95,
    "endAngle": 26.34,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Interested",
      "Inquisitive"
    ]
  },
  "interested": {
    "id": "interested",
    "label": "Interested",
    "tier": 2,
    "coreId": "happy",
    "parentId": "happy",
    "startAngle": 17.56,
    "endAngle": 26.34,
    "color": "#f59e0b",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Interested"
    ],
    "tertiaries": [
      {
        "id": "curious",
        "label": "Curious",
        "tier": 3,
        "coreId": "happy",
        "parentId": "interested",
        "startAngle": 17.56,
        "endAngle": 21.95,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Interested",
          "Curious"
        ]
      },
      {
        "id": "inquisitive",
        "label": "Inquisitive",
        "tier": 3,
        "coreId": "happy",
        "parentId": "interested",
        "startAngle": 21.95,
        "endAngle": 26.34,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Interested",
          "Inquisitive"
        ]
      }
    ]
  },
  "successful": {
    "id": "successful",
    "label": "Successful",
    "tier": 3,
    "coreId": "happy",
    "parentId": "proud",
    "startAngle": 26.34,
    "endAngle": 30.73,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Proud",
      "Successful"
    ]
  },
  "confident": {
    "id": "confident",
    "label": "Confident",
    "tier": 3,
    "coreId": "happy",
    "parentId": "proud",
    "startAngle": 30.73,
    "endAngle": 35.12,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Proud",
      "Confident"
    ]
  },
  "proud": {
    "id": "proud",
    "label": "Proud",
    "tier": 2,
    "coreId": "happy",
    "parentId": "happy",
    "startAngle": 26.34,
    "endAngle": 35.12,
    "color": "#f59e0b",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Proud"
    ],
    "tertiaries": [
      {
        "id": "successful",
        "label": "Successful",
        "tier": 3,
        "coreId": "happy",
        "parentId": "proud",
        "startAngle": 26.34,
        "endAngle": 30.73,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Proud",
          "Successful"
        ]
      },
      {
        "id": "confident",
        "label": "Confident",
        "tier": 3,
        "coreId": "happy",
        "parentId": "proud",
        "startAngle": 30.73,
        "endAngle": 35.12,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Proud",
          "Confident"
        ]
      }
    ]
  },
  "respected": {
    "id": "respected",
    "label": "Respected",
    "tier": 3,
    "coreId": "happy",
    "parentId": "accepted",
    "startAngle": 35.12,
    "endAngle": 39.51,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Accepted",
      "Respected"
    ]
  },
  "valued": {
    "id": "valued",
    "label": "Valued",
    "tier": 3,
    "coreId": "happy",
    "parentId": "accepted",
    "startAngle": 39.51,
    "endAngle": 43.9,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Accepted",
      "Valued"
    ]
  },
  "accepted": {
    "id": "accepted",
    "label": "Accepted",
    "tier": 2,
    "coreId": "happy",
    "parentId": "happy",
    "startAngle": 35.12,
    "endAngle": 43.9,
    "color": "#f59e0b",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Accepted"
    ],
    "tertiaries": [
      {
        "id": "respected",
        "label": "Respected",
        "tier": 3,
        "coreId": "happy",
        "parentId": "accepted",
        "startAngle": 35.12,
        "endAngle": 39.51,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Accepted",
          "Respected"
        ]
      },
      {
        "id": "valued",
        "label": "Valued",
        "tier": 3,
        "coreId": "happy",
        "parentId": "accepted",
        "startAngle": 39.51,
        "endAngle": 43.9,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Accepted",
          "Valued"
        ]
      }
    ]
  },
  "courageous": {
    "id": "courageous",
    "label": "Courageous",
    "tier": 3,
    "coreId": "happy",
    "parentId": "powerful",
    "startAngle": 43.9,
    "endAngle": 48.29,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Powerful",
      "Courageous"
    ]
  },
  "creative": {
    "id": "creative",
    "label": "Creative",
    "tier": 3,
    "coreId": "happy",
    "parentId": "powerful",
    "startAngle": 48.29,
    "endAngle": 52.68,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Powerful",
      "Creative"
    ]
  },
  "powerful": {
    "id": "powerful",
    "label": "Powerful",
    "tier": 2,
    "coreId": "happy",
    "parentId": "happy",
    "startAngle": 43.9,
    "endAngle": 52.68,
    "color": "#f59e0b",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Powerful"
    ],
    "tertiaries": [
      {
        "id": "courageous",
        "label": "Courageous",
        "tier": 3,
        "coreId": "happy",
        "parentId": "powerful",
        "startAngle": 43.9,
        "endAngle": 48.29,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Powerful",
          "Courageous"
        ]
      },
      {
        "id": "creative",
        "label": "Creative",
        "tier": 3,
        "coreId": "happy",
        "parentId": "powerful",
        "startAngle": 48.29,
        "endAngle": 52.68,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Powerful",
          "Creative"
        ]
      }
    ]
  },
  "loving": {
    "id": "loving",
    "label": "Loving",
    "tier": 3,
    "coreId": "happy",
    "parentId": "peaceful",
    "startAngle": 52.68,
    "endAngle": 57.07,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Peaceful",
      "Loving"
    ]
  },
  "thankful": {
    "id": "thankful",
    "label": "Thankful",
    "tier": 3,
    "coreId": "happy",
    "parentId": "peaceful",
    "startAngle": 57.07,
    "endAngle": 61.46,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Peaceful",
      "Thankful"
    ]
  },
  "peaceful": {
    "id": "peaceful",
    "label": "Peaceful",
    "tier": 2,
    "coreId": "happy",
    "parentId": "happy",
    "startAngle": 52.68,
    "endAngle": 61.46,
    "color": "#f59e0b",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Peaceful"
    ],
    "tertiaries": [
      {
        "id": "loving",
        "label": "Loving",
        "tier": 3,
        "coreId": "happy",
        "parentId": "peaceful",
        "startAngle": 52.68,
        "endAngle": 57.07,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Peaceful",
          "Loving"
        ]
      },
      {
        "id": "thankful",
        "label": "Thankful",
        "tier": 3,
        "coreId": "happy",
        "parentId": "peaceful",
        "startAngle": 57.07,
        "endAngle": 61.46,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Peaceful",
          "Thankful"
        ]
      }
    ]
  },
  "sensitive": {
    "id": "sensitive",
    "label": "Sensitive",
    "tier": 3,
    "coreId": "happy",
    "parentId": "trusting",
    "startAngle": 61.46,
    "endAngle": 65.85,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Trusting",
      "Sensitive"
    ]
  },
  "intimate": {
    "id": "intimate",
    "label": "Intimate",
    "tier": 3,
    "coreId": "happy",
    "parentId": "trusting",
    "startAngle": 65.85,
    "endAngle": 70.24,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Trusting",
      "Intimate"
    ]
  },
  "trusting": {
    "id": "trusting",
    "label": "Trusting",
    "tier": 2,
    "coreId": "happy",
    "parentId": "happy",
    "startAngle": 61.46,
    "endAngle": 70.24,
    "color": "#f59e0b",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Trusting"
    ],
    "tertiaries": [
      {
        "id": "sensitive",
        "label": "Sensitive",
        "tier": 3,
        "coreId": "happy",
        "parentId": "trusting",
        "startAngle": 61.46,
        "endAngle": 65.85,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Trusting",
          "Sensitive"
        ]
      },
      {
        "id": "intimate",
        "label": "Intimate",
        "tier": 3,
        "coreId": "happy",
        "parentId": "trusting",
        "startAngle": 65.85,
        "endAngle": 70.24,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Trusting",
          "Intimate"
        ]
      }
    ]
  },
  "hopeful": {
    "id": "hopeful",
    "label": "Hopeful",
    "tier": 3,
    "coreId": "happy",
    "parentId": "optimistic",
    "startAngle": 70.24,
    "endAngle": 74.63,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Optimistic",
      "Hopeful"
    ]
  },
  "inspired": {
    "id": "inspired",
    "label": "Inspired",
    "tier": 3,
    "coreId": "happy",
    "parentId": "optimistic",
    "startAngle": 74.63,
    "endAngle": 79.02,
    "color": "#fbbf24",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Optimistic",
      "Inspired"
    ]
  },
  "optimistic": {
    "id": "optimistic",
    "label": "Optimistic",
    "tier": 2,
    "coreId": "happy",
    "parentId": "happy",
    "startAngle": 70.24,
    "endAngle": 79.02,
    "color": "#f59e0b",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy",
      "Optimistic"
    ],
    "tertiaries": [
      {
        "id": "hopeful",
        "label": "Hopeful",
        "tier": 3,
        "coreId": "happy",
        "parentId": "optimistic",
        "startAngle": 70.24,
        "endAngle": 74.63,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Optimistic",
          "Hopeful"
        ]
      },
      {
        "id": "inspired",
        "label": "Inspired",
        "tier": 3,
        "coreId": "happy",
        "parentId": "optimistic",
        "startAngle": 74.63,
        "endAngle": 79.02,
        "color": "#fbbf24",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Optimistic",
          "Inspired"
        ]
      }
    ]
  },
  "happy": {
    "id": "happy",
    "label": "Happy",
    "tier": 1,
    "coreId": "happy",
    "parentId": null,
    "startAngle": 0.0,
    "endAngle": 79.02,
    "color": "#d97706",
    "lightColor": "#fef3c7",
    "darkColor": "#92400e",
    "path": [
      "Happy"
    ],
    "secondaries": [
      {
        "id": "playful",
        "label": "Playful",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 0.0,
        "endAngle": 8.78,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Playful"
        ],
        "tertiaries": [
          {
            "id": "aroused",
            "label": "Aroused",
            "tier": 3,
            "coreId": "happy",
            "parentId": "playful",
            "startAngle": 0.0,
            "endAngle": 4.39,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Playful",
              "Aroused"
            ]
          },
          {
            "id": "cheeky",
            "label": "Cheeky",
            "tier": 3,
            "coreId": "happy",
            "parentId": "playful",
            "startAngle": 4.39,
            "endAngle": 8.78,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Playful",
              "Cheeky"
            ]
          }
        ]
      },
      {
        "id": "content",
        "label": "Content",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 8.78,
        "endAngle": 17.56,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Content"
        ],
        "tertiaries": [
          {
            "id": "free",
            "label": "Free",
            "tier": 3,
            "coreId": "happy",
            "parentId": "content",
            "startAngle": 8.78,
            "endAngle": 13.17,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Content",
              "Free"
            ]
          },
          {
            "id": "joyful",
            "label": "Joyful",
            "tier": 3,
            "coreId": "happy",
            "parentId": "content",
            "startAngle": 13.17,
            "endAngle": 17.56,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Content",
              "Joyful"
            ]
          }
        ]
      },
      {
        "id": "interested",
        "label": "Interested",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 17.56,
        "endAngle": 26.34,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Interested"
        ],
        "tertiaries": [
          {
            "id": "curious",
            "label": "Curious",
            "tier": 3,
            "coreId": "happy",
            "parentId": "interested",
            "startAngle": 17.56,
            "endAngle": 21.95,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Interested",
              "Curious"
            ]
          },
          {
            "id": "inquisitive",
            "label": "Inquisitive",
            "tier": 3,
            "coreId": "happy",
            "parentId": "interested",
            "startAngle": 21.95,
            "endAngle": 26.34,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Interested",
              "Inquisitive"
            ]
          }
        ]
      },
      {
        "id": "proud",
        "label": "Proud",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 26.34,
        "endAngle": 35.12,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Proud"
        ],
        "tertiaries": [
          {
            "id": "successful",
            "label": "Successful",
            "tier": 3,
            "coreId": "happy",
            "parentId": "proud",
            "startAngle": 26.34,
            "endAngle": 30.73,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Proud",
              "Successful"
            ]
          },
          {
            "id": "confident",
            "label": "Confident",
            "tier": 3,
            "coreId": "happy",
            "parentId": "proud",
            "startAngle": 30.73,
            "endAngle": 35.12,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Proud",
              "Confident"
            ]
          }
        ]
      },
      {
        "id": "accepted",
        "label": "Accepted",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 35.12,
        "endAngle": 43.9,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Accepted"
        ],
        "tertiaries": [
          {
            "id": "respected",
            "label": "Respected",
            "tier": 3,
            "coreId": "happy",
            "parentId": "accepted",
            "startAngle": 35.12,
            "endAngle": 39.51,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Accepted",
              "Respected"
            ]
          },
          {
            "id": "valued",
            "label": "Valued",
            "tier": 3,
            "coreId": "happy",
            "parentId": "accepted",
            "startAngle": 39.51,
            "endAngle": 43.9,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Accepted",
              "Valued"
            ]
          }
        ]
      },
      {
        "id": "powerful",
        "label": "Powerful",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 43.9,
        "endAngle": 52.68,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Powerful"
        ],
        "tertiaries": [
          {
            "id": "courageous",
            "label": "Courageous",
            "tier": 3,
            "coreId": "happy",
            "parentId": "powerful",
            "startAngle": 43.9,
            "endAngle": 48.29,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Powerful",
              "Courageous"
            ]
          },
          {
            "id": "creative",
            "label": "Creative",
            "tier": 3,
            "coreId": "happy",
            "parentId": "powerful",
            "startAngle": 48.29,
            "endAngle": 52.68,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Powerful",
              "Creative"
            ]
          }
        ]
      },
      {
        "id": "peaceful",
        "label": "Peaceful",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 52.68,
        "endAngle": 61.46,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Peaceful"
        ],
        "tertiaries": [
          {
            "id": "loving",
            "label": "Loving",
            "tier": 3,
            "coreId": "happy",
            "parentId": "peaceful",
            "startAngle": 52.68,
            "endAngle": 57.07,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Peaceful",
              "Loving"
            ]
          },
          {
            "id": "thankful",
            "label": "Thankful",
            "tier": 3,
            "coreId": "happy",
            "parentId": "peaceful",
            "startAngle": 57.07,
            "endAngle": 61.46,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Peaceful",
              "Thankful"
            ]
          }
        ]
      },
      {
        "id": "trusting",
        "label": "Trusting",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 61.46,
        "endAngle": 70.24,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Trusting"
        ],
        "tertiaries": [
          {
            "id": "sensitive",
            "label": "Sensitive",
            "tier": 3,
            "coreId": "happy",
            "parentId": "trusting",
            "startAngle": 61.46,
            "endAngle": 65.85,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Trusting",
              "Sensitive"
            ]
          },
          {
            "id": "intimate",
            "label": "Intimate",
            "tier": 3,
            "coreId": "happy",
            "parentId": "trusting",
            "startAngle": 65.85,
            "endAngle": 70.24,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Trusting",
              "Intimate"
            ]
          }
        ]
      },
      {
        "id": "optimistic",
        "label": "Optimistic",
        "tier": 2,
        "coreId": "happy",
        "parentId": "happy",
        "startAngle": 70.24,
        "endAngle": 79.02,
        "color": "#f59e0b",
        "lightColor": "#fef3c7",
        "darkColor": "#92400e",
        "path": [
          "Happy",
          "Optimistic"
        ],
        "tertiaries": [
          {
            "id": "hopeful",
            "label": "Hopeful",
            "tier": 3,
            "coreId": "happy",
            "parentId": "optimistic",
            "startAngle": 70.24,
            "endAngle": 74.63,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Optimistic",
              "Hopeful"
            ]
          },
          {
            "id": "inspired",
            "label": "Inspired",
            "tier": 3,
            "coreId": "happy",
            "parentId": "optimistic",
            "startAngle": 74.63,
            "endAngle": 79.02,
            "color": "#fbbf24",
            "lightColor": "#fef3c7",
            "darkColor": "#92400e",
            "path": [
              "Happy",
              "Optimistic",
              "Inspired"
            ]
          }
        ]
      }
    ]
  },
  "isolated": {
    "id": "isolated",
    "label": "Isolated",
    "tier": 3,
    "coreId": "sad",
    "parentId": "lonely",
    "startAngle": 79.02,
    "endAngle": 83.41,
    "color": "#60a5fa",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Lonely",
      "Isolated"
    ]
  },
  "abandoned": {
    "id": "abandoned",
    "label": "Abandoned",
    "tier": 3,
    "coreId": "sad",
    "parentId": "lonely",
    "startAngle": 83.41,
    "endAngle": 87.8,
    "color": "#60a5fa",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Lonely",
      "Abandoned"
    ]
  },
  "lonely": {
    "id": "lonely",
    "label": "Lonely",
    "tier": 2,
    "coreId": "sad",
    "parentId": "sad",
    "startAngle": 79.02,
    "endAngle": 87.8,
    "color": "#3b82f6",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Lonely"
    ],
    "tertiaries": [
      {
        "id": "isolated",
        "label": "Isolated",
        "tier": 3,
        "coreId": "sad",
        "parentId": "lonely",
        "startAngle": 79.02,
        "endAngle": 83.41,
        "color": "#60a5fa",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Lonely",
          "Isolated"
        ]
      },
      {
        "id": "abandoned",
        "label": "Abandoned",
        "tier": 3,
        "coreId": "sad",
        "parentId": "lonely",
        "startAngle": 83.41,
        "endAngle": 87.8,
        "color": "#60a5fa",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Lonely",
          "Abandoned"
        ]
      }
    ]
  },
  "victimized": {
    "id": "victimized",
    "label": "Victimized",
    "tier": 3,
    "coreId": "sad",
    "parentId": "vulnerable",
    "startAngle": 87.8,
    "endAngle": 92.2,
    "color": "#60a5fa",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Vulnerable",
      "Victimized"
    ]
  },
  "fragile": {
    "id": "fragile",
    "label": "Fragile",
    "tier": 3,
    "coreId": "sad",
    "parentId": "vulnerable",
    "startAngle": 92.2,
    "endAngle": 96.59,
    "color": "#60a5fa",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Vulnerable",
      "Fragile"
    ]
  },
  "vulnerable": {
    "id": "vulnerable",
    "label": "Vulnerable",
    "tier": 2,
    "coreId": "sad",
    "parentId": "sad",
    "startAngle": 87.8,
    "endAngle": 96.59,
    "color": "#3b82f6",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Vulnerable"
    ],
    "tertiaries": [
      {
        "id": "victimized",
        "label": "Victimized",
        "tier": 3,
        "coreId": "sad",
        "parentId": "vulnerable",
        "startAngle": 87.8,
        "endAngle": 92.2,
        "color": "#60a5fa",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Vulnerable",
          "Victimized"
        ]
      },
      {
        "id": "fragile",
        "label": "Fragile",
        "tier": 3,
        "coreId": "sad",
        "parentId": "vulnerable",
        "startAngle": 92.2,
        "endAngle": 96.59,
        "color": "#60a5fa",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Vulnerable",
          "Fragile"
        ]
      }
    ]
  },
  "grief": {
    "id": "grief",
    "label": "Grief",
    "tier": 3,
    "coreId": "sad",
    "parentId": "despair",
    "startAngle": 96.59,
    "endAngle": 100.98,
    "color": "#60a5fa",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Despair",
      "Grief"
    ]
  },
  "powerless": {
    "id": "powerless",
    "label": "Powerless",
    "tier": 3,
    "coreId": "sad",
    "parentId": "despair",
    "startAngle": 100.98,
    "endAngle": 105.37,
    "color": "#60a5fa",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Despair",
      "Powerless"
    ]
  },
  "despair": {
    "id": "despair",
    "label": "Despair",
    "tier": 2,
    "coreId": "sad",
    "parentId": "sad",
    "startAngle": 96.59,
    "endAngle": 105.37,
    "color": "#3b82f6",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Despair"
    ],
    "tertiaries": [
      {
        "id": "grief",
        "label": "Grief",
        "tier": 3,
        "coreId": "sad",
        "parentId": "despair",
        "startAngle": 96.59,
        "endAngle": 100.98,
        "color": "#60a5fa",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Despair",
          "Grief"
        ]
      },
      {
        "id": "powerless",
        "label": "Powerless",
        "tier": 3,
        "coreId": "sad",
        "parentId": "despair",
        "startAngle": 100.98,
        "endAngle": 105.37,
        "color": "#60a5fa",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Despair",
          "Powerless"
        ]
      }
    ]
  },
  "ashamed": {
    "id": "ashamed",
    "label": "Ashamed",
    "tier": 3,
    "coreId": "sad",
    "parentId": "guilty",
    "startAngle": 105.37,
    "endAngle": 109.76,
    "color": "#60a5fa",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Guilty",
      "Ashamed"
    ]
  },
  "remorseful": {
    "id": "remorseful",
    "label": "Remorseful",
    "tier": 3,
    "coreId": "sad",
    "parentId": "guilty",
    "startAngle": 109.76,
    "endAngle": 114.15,
    "color": "#60a5fa",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Guilty",
      "Remorseful"
    ]
  },
  "guilty": {
    "id": "guilty",
    "label": "Guilty",
    "tier": 2,
    "coreId": "sad",
    "parentId": "sad",
    "startAngle": 105.37,
    "endAngle": 114.15,
    "color": "#3b82f6",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Guilty"
    ],
    "tertiaries": [
      {
        "id": "ashamed",
        "label": "Ashamed",
        "tier": 3,
        "coreId": "sad",
        "parentId": "guilty",
        "startAngle": 105.37,
        "endAngle": 109.76,
        "color": "#60a5fa",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Guilty",
          "Ashamed"
        ]
      },
      {
        "id": "remorseful",
        "label": "Remorseful",
        "tier": 3,
        "coreId": "sad",
        "parentId": "guilty",
        "startAngle": 109.76,
        "endAngle": 114.15,
        "color": "#60a5fa",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Guilty",
          "Remorseful"
        ]
      }
    ]
  },
  "empty": {
    "id": "empty",
    "label": "Empty",
    "tier": 3,
    "coreId": "sad",
    "parentId": "depressed",
    "startAngle": 114.15,
    "endAngle": 118.54,
    "color": "#60a5fa",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Depressed",
      "Empty"
    ]
  },
  "inferior": {
    "id": "inferior",
    "label": "Inferior",
    "tier": 3,
    "coreId": "sad",
    "parentId": "depressed",
    "startAngle": 118.54,
    "endAngle": 122.93,
    "color": "#60a5fa",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Depressed",
      "Inferior"
    ]
  },
  "depressed": {
    "id": "depressed",
    "label": "Depressed",
    "tier": 2,
    "coreId": "sad",
    "parentId": "sad",
    "startAngle": 114.15,
    "endAngle": 122.93,
    "color": "#3b82f6",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Depressed"
    ],
    "tertiaries": [
      {
        "id": "empty",
        "label": "Empty",
        "tier": 3,
        "coreId": "sad",
        "parentId": "depressed",
        "startAngle": 114.15,
        "endAngle": 118.54,
        "color": "#60a5fa",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Depressed",
          "Empty"
        ]
      },
      {
        "id": "inferior",
        "label": "Inferior",
        "tier": 3,
        "coreId": "sad",
        "parentId": "depressed",
        "startAngle": 118.54,
        "endAngle": 122.93,
        "color": "#60a5fa",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Depressed",
          "Inferior"
        ]
      }
    ]
  },
  "disappointed": {
    "id": "disappointed",
    "label": "Disappointed",
    "tier": 3,
    "coreId": "sad",
    "parentId": "hurt",
    "startAngle": 122.93,
    "endAngle": 127.32,
    "color": "#60a5fa",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Hurt",
      "Disappointed"
    ]
  },
  "embarrassed": {
    "id": "embarrassed",
    "label": "Embarrassed",
    "tier": 3,
    "coreId": "sad",
    "parentId": "hurt",
    "startAngle": 127.32,
    "endAngle": 131.71,
    "color": "#60a5fa",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Hurt",
      "Embarrassed"
    ]
  },
  "hurt": {
    "id": "hurt",
    "label": "Hurt",
    "tier": 2,
    "coreId": "sad",
    "parentId": "sad",
    "startAngle": 122.93,
    "endAngle": 131.71,
    "color": "#3b82f6",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad",
      "Hurt"
    ],
    "tertiaries": [
      {
        "id": "disappointed",
        "label": "Disappointed",
        "tier": 3,
        "coreId": "sad",
        "parentId": "hurt",
        "startAngle": 122.93,
        "endAngle": 127.32,
        "color": "#60a5fa",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Hurt",
          "Disappointed"
        ]
      },
      {
        "id": "embarrassed",
        "label": "Embarrassed",
        "tier": 3,
        "coreId": "sad",
        "parentId": "hurt",
        "startAngle": 127.32,
        "endAngle": 131.71,
        "color": "#60a5fa",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Hurt",
          "Embarrassed"
        ]
      }
    ]
  },
  "sad": {
    "id": "sad",
    "label": "Sad",
    "tier": 1,
    "coreId": "sad",
    "parentId": null,
    "startAngle": 79.02,
    "endAngle": 131.71,
    "color": "#2563eb",
    "lightColor": "#dbeafe",
    "darkColor": "#1e40af",
    "path": [
      "Sad"
    ],
    "secondaries": [
      {
        "id": "lonely",
        "label": "Lonely",
        "tier": 2,
        "coreId": "sad",
        "parentId": "sad",
        "startAngle": 79.02,
        "endAngle": 87.8,
        "color": "#3b82f6",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Lonely"
        ],
        "tertiaries": [
          {
            "id": "isolated",
            "label": "Isolated",
            "tier": 3,
            "coreId": "sad",
            "parentId": "lonely",
            "startAngle": 79.02,
            "endAngle": 83.41,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Lonely",
              "Isolated"
            ]
          },
          {
            "id": "abandoned",
            "label": "Abandoned",
            "tier": 3,
            "coreId": "sad",
            "parentId": "lonely",
            "startAngle": 83.41,
            "endAngle": 87.8,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Lonely",
              "Abandoned"
            ]
          }
        ]
      },
      {
        "id": "vulnerable",
        "label": "Vulnerable",
        "tier": 2,
        "coreId": "sad",
        "parentId": "sad",
        "startAngle": 87.8,
        "endAngle": 96.59,
        "color": "#3b82f6",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Vulnerable"
        ],
        "tertiaries": [
          {
            "id": "victimized",
            "label": "Victimized",
            "tier": 3,
            "coreId": "sad",
            "parentId": "vulnerable",
            "startAngle": 87.8,
            "endAngle": 92.2,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Vulnerable",
              "Victimized"
            ]
          },
          {
            "id": "fragile",
            "label": "Fragile",
            "tier": 3,
            "coreId": "sad",
            "parentId": "vulnerable",
            "startAngle": 92.2,
            "endAngle": 96.59,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Vulnerable",
              "Fragile"
            ]
          }
        ]
      },
      {
        "id": "despair",
        "label": "Despair",
        "tier": 2,
        "coreId": "sad",
        "parentId": "sad",
        "startAngle": 96.59,
        "endAngle": 105.37,
        "color": "#3b82f6",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Despair"
        ],
        "tertiaries": [
          {
            "id": "grief",
            "label": "Grief",
            "tier": 3,
            "coreId": "sad",
            "parentId": "despair",
            "startAngle": 96.59,
            "endAngle": 100.98,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Despair",
              "Grief"
            ]
          },
          {
            "id": "powerless",
            "label": "Powerless",
            "tier": 3,
            "coreId": "sad",
            "parentId": "despair",
            "startAngle": 100.98,
            "endAngle": 105.37,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Despair",
              "Powerless"
            ]
          }
        ]
      },
      {
        "id": "guilty",
        "label": "Guilty",
        "tier": 2,
        "coreId": "sad",
        "parentId": "sad",
        "startAngle": 105.37,
        "endAngle": 114.15,
        "color": "#3b82f6",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Guilty"
        ],
        "tertiaries": [
          {
            "id": "ashamed",
            "label": "Ashamed",
            "tier": 3,
            "coreId": "sad",
            "parentId": "guilty",
            "startAngle": 105.37,
            "endAngle": 109.76,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Guilty",
              "Ashamed"
            ]
          },
          {
            "id": "remorseful",
            "label": "Remorseful",
            "tier": 3,
            "coreId": "sad",
            "parentId": "guilty",
            "startAngle": 109.76,
            "endAngle": 114.15,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Guilty",
              "Remorseful"
            ]
          }
        ]
      },
      {
        "id": "depressed",
        "label": "Depressed",
        "tier": 2,
        "coreId": "sad",
        "parentId": "sad",
        "startAngle": 114.15,
        "endAngle": 122.93,
        "color": "#3b82f6",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Depressed"
        ],
        "tertiaries": [
          {
            "id": "empty",
            "label": "Empty",
            "tier": 3,
            "coreId": "sad",
            "parentId": "depressed",
            "startAngle": 114.15,
            "endAngle": 118.54,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Depressed",
              "Empty"
            ]
          },
          {
            "id": "inferior",
            "label": "Inferior",
            "tier": 3,
            "coreId": "sad",
            "parentId": "depressed",
            "startAngle": 118.54,
            "endAngle": 122.93,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Depressed",
              "Inferior"
            ]
          }
        ]
      },
      {
        "id": "hurt",
        "label": "Hurt",
        "tier": 2,
        "coreId": "sad",
        "parentId": "sad",
        "startAngle": 122.93,
        "endAngle": 131.71,
        "color": "#3b82f6",
        "lightColor": "#dbeafe",
        "darkColor": "#1e40af",
        "path": [
          "Sad",
          "Hurt"
        ],
        "tertiaries": [
          {
            "id": "disappointed",
            "label": "Disappointed",
            "tier": 3,
            "coreId": "sad",
            "parentId": "hurt",
            "startAngle": 122.93,
            "endAngle": 127.32,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Hurt",
              "Disappointed"
            ]
          },
          {
            "id": "embarrassed",
            "label": "Embarrassed",
            "tier": 3,
            "coreId": "sad",
            "parentId": "hurt",
            "startAngle": 127.32,
            "endAngle": 131.71,
            "color": "#60a5fa",
            "lightColor": "#dbeafe",
            "darkColor": "#1e40af",
            "path": [
              "Sad",
              "Hurt",
              "Embarrassed"
            ]
          }
        ]
      }
    ]
  },
  "judgmental": {
    "id": "judgmental",
    "label": "Judgmental",
    "tier": 3,
    "coreId": "disgusted",
    "parentId": "disapproving",
    "startAngle": 131.71,
    "endAngle": 136.1,
    "color": "#34d399",
    "lightColor": "#d1fae5",
    "darkColor": "#065f46",
    "path": [
      "Disgusted",
      "Disapproving",
      "Judgmental"
    ]
  },
  "embarrassed_disgusted": {
    "id": "embarrassed_disgusted",
    "label": "Embarrassed",
    "tier": 3,
    "coreId": "disgusted",
    "parentId": "disapproving",
    "startAngle": 136.1,
    "endAngle": 140.49,
    "color": "#34d399",
    "lightColor": "#d1fae5",
    "darkColor": "#065f46",
    "path": [
      "Disgusted",
      "Disapproving",
      "Embarrassed"
    ]
  },
  "disapproving": {
    "id": "disapproving",
    "label": "Disapproving",
    "tier": 2,
    "coreId": "disgusted",
    "parentId": "disgusted",
    "startAngle": 131.71,
    "endAngle": 140.49,
    "color": "#10b981",
    "lightColor": "#d1fae5",
    "darkColor": "#065f46",
    "path": [
      "Disgusted",
      "Disapproving"
    ],
    "tertiaries": [
      {
        "id": "judgmental",
        "label": "Judgmental",
        "tier": 3,
        "coreId": "disgusted",
        "parentId": "disapproving",
        "startAngle": 131.71,
        "endAngle": 136.1,
        "color": "#34d399",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Disapproving",
          "Judgmental"
        ]
      },
      {
        "id": "embarrassed_disgusted",
        "label": "Embarrassed",
        "tier": 3,
        "coreId": "disgusted",
        "parentId": "disapproving",
        "startAngle": 136.1,
        "endAngle": 140.49,
        "color": "#34d399",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Disapproving",
          "Embarrassed"
        ]
      }
    ]
  },
  "appalled": {
    "id": "appalled",
    "label": "Appalled",
    "tier": 3,
    "coreId": "disgusted",
    "parentId": "disappointed_disgusted",
    "startAngle": 140.49,
    "endAngle": 144.88,
    "color": "#34d399",
    "lightColor": "#d1fae5",
    "darkColor": "#065f46",
    "path": [
      "Disgusted",
      "Disappointed",
      "Appalled"
    ]
  },
  "revolted": {
    "id": "revolted",
    "label": "Revolted",
    "tier": 3,
    "coreId": "disgusted",
    "parentId": "disappointed_disgusted",
    "startAngle": 144.88,
    "endAngle": 149.27,
    "color": "#34d399",
    "lightColor": "#d1fae5",
    "darkColor": "#065f46",
    "path": [
      "Disgusted",
      "Disappointed",
      "Revolted"
    ]
  },
  "disappointed_disgusted": {
    "id": "disappointed_disgusted",
    "label": "Disappointed",
    "tier": 2,
    "coreId": "disgusted",
    "parentId": "disgusted",
    "startAngle": 140.49,
    "endAngle": 149.27,
    "color": "#10b981",
    "lightColor": "#d1fae5",
    "darkColor": "#065f46",
    "path": [
      "Disgusted",
      "Disappointed"
    ],
    "tertiaries": [
      {
        "id": "appalled",
        "label": "Appalled",
        "tier": 3,
        "coreId": "disgusted",
        "parentId": "disappointed_disgusted",
        "startAngle": 140.49,
        "endAngle": 144.88,
        "color": "#34d399",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Disappointed",
          "Appalled"
        ]
      },
      {
        "id": "revolted",
        "label": "Revolted",
        "tier": 3,
        "coreId": "disgusted",
        "parentId": "disappointed_disgusted",
        "startAngle": 144.88,
        "endAngle": 149.27,
        "color": "#34d399",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Disappointed",
          "Revolted"
        ]
      }
    ]
  },
  "nauseated": {
    "id": "nauseated",
    "label": "Nauseated",
    "tier": 3,
    "coreId": "disgusted",
    "parentId": "awful",
    "startAngle": 149.27,
    "endAngle": 153.66,
    "color": "#34d399",
    "lightColor": "#d1fae5",
    "darkColor": "#065f46",
    "path": [
      "Disgusted",
      "Awful",
      "Nauseated"
    ]
  },
  "detestable": {
    "id": "detestable",
    "label": "Detestable",
    "tier": 3,
    "coreId": "disgusted",
    "parentId": "awful",
    "startAngle": 153.66,
    "endAngle": 158.05,
    "color": "#34d399",
    "lightColor": "#d1fae5",
    "darkColor": "#065f46",
    "path": [
      "Disgusted",
      "Awful",
      "Detestable"
    ]
  },
  "awful": {
    "id": "awful",
    "label": "Awful",
    "tier": 2,
    "coreId": "disgusted",
    "parentId": "disgusted",
    "startAngle": 149.27,
    "endAngle": 158.05,
    "color": "#10b981",
    "lightColor": "#d1fae5",
    "darkColor": "#065f46",
    "path": [
      "Disgusted",
      "Awful"
    ],
    "tertiaries": [
      {
        "id": "nauseated",
        "label": "Nauseated",
        "tier": 3,
        "coreId": "disgusted",
        "parentId": "awful",
        "startAngle": 149.27,
        "endAngle": 153.66,
        "color": "#34d399",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Awful",
          "Nauseated"
        ]
      },
      {
        "id": "detestable",
        "label": "Detestable",
        "tier": 3,
        "coreId": "disgusted",
        "parentId": "awful",
        "startAngle": 153.66,
        "endAngle": 158.05,
        "color": "#34d399",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Awful",
          "Detestable"
        ]
      }
    ]
  },
  "horrified": {
    "id": "horrified",
    "label": "Horrified",
    "tier": 3,
    "coreId": "disgusted",
    "parentId": "repelled",
    "startAngle": 158.05,
    "endAngle": 162.44,
    "color": "#34d399",
    "lightColor": "#d1fae5",
    "darkColor": "#065f46",
    "path": [
      "Disgusted",
      "Repelled",
      "Horrified"
    ]
  },
  "hesitant": {
    "id": "hesitant",
    "label": "Hesitant",
    "tier": 3,
    "coreId": "disgusted",
    "parentId": "repelled",
    "startAngle": 162.44,
    "endAngle": 166.83,
    "color": "#34d399",
    "lightColor": "#d1fae5",
    "darkColor": "#065f46",
    "path": [
      "Disgusted",
      "Repelled",
      "Hesitant"
    ]
  },
  "repelled": {
    "id": "repelled",
    "label": "Repelled",
    "tier": 2,
    "coreId": "disgusted",
    "parentId": "disgusted",
    "startAngle": 158.05,
    "endAngle": 166.83,
    "color": "#10b981",
    "lightColor": "#d1fae5",
    "darkColor": "#065f46",
    "path": [
      "Disgusted",
      "Repelled"
    ],
    "tertiaries": [
      {
        "id": "horrified",
        "label": "Horrified",
        "tier": 3,
        "coreId": "disgusted",
        "parentId": "repelled",
        "startAngle": 158.05,
        "endAngle": 162.44,
        "color": "#34d399",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Repelled",
          "Horrified"
        ]
      },
      {
        "id": "hesitant",
        "label": "Hesitant",
        "tier": 3,
        "coreId": "disgusted",
        "parentId": "repelled",
        "startAngle": 162.44,
        "endAngle": 166.83,
        "color": "#34d399",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Repelled",
          "Hesitant"
        ]
      }
    ]
  },
  "disgusted": {
    "id": "disgusted",
    "label": "Disgusted",
    "tier": 1,
    "coreId": "disgusted",
    "parentId": null,
    "startAngle": 131.71,
    "endAngle": 166.83,
    "color": "#059669",
    "lightColor": "#d1fae5",
    "darkColor": "#065f46",
    "path": [
      "Disgusted"
    ],
    "secondaries": [
      {
        "id": "disapproving",
        "label": "Disapproving",
        "tier": 2,
        "coreId": "disgusted",
        "parentId": "disgusted",
        "startAngle": 131.71,
        "endAngle": 140.49,
        "color": "#10b981",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Disapproving"
        ],
        "tertiaries": [
          {
            "id": "judgmental",
            "label": "Judgmental",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "disapproving",
            "startAngle": 131.71,
            "endAngle": 136.1,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Disapproving",
              "Judgmental"
            ]
          },
          {
            "id": "embarrassed_disgusted",
            "label": "Embarrassed",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "disapproving",
            "startAngle": 136.1,
            "endAngle": 140.49,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Disapproving",
              "Embarrassed"
            ]
          }
        ]
      },
      {
        "id": "disappointed_disgusted",
        "label": "Disappointed",
        "tier": 2,
        "coreId": "disgusted",
        "parentId": "disgusted",
        "startAngle": 140.49,
        "endAngle": 149.27,
        "color": "#10b981",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Disappointed"
        ],
        "tertiaries": [
          {
            "id": "appalled",
            "label": "Appalled",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "disappointed_disgusted",
            "startAngle": 140.49,
            "endAngle": 144.88,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Disappointed",
              "Appalled"
            ]
          },
          {
            "id": "revolted",
            "label": "Revolted",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "disappointed_disgusted",
            "startAngle": 144.88,
            "endAngle": 149.27,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Disappointed",
              "Revolted"
            ]
          }
        ]
      },
      {
        "id": "awful",
        "label": "Awful",
        "tier": 2,
        "coreId": "disgusted",
        "parentId": "disgusted",
        "startAngle": 149.27,
        "endAngle": 158.05,
        "color": "#10b981",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Awful"
        ],
        "tertiaries": [
          {
            "id": "nauseated",
            "label": "Nauseated",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "awful",
            "startAngle": 149.27,
            "endAngle": 153.66,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Awful",
              "Nauseated"
            ]
          },
          {
            "id": "detestable",
            "label": "Detestable",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "awful",
            "startAngle": 153.66,
            "endAngle": 158.05,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Awful",
              "Detestable"
            ]
          }
        ]
      },
      {
        "id": "repelled",
        "label": "Repelled",
        "tier": 2,
        "coreId": "disgusted",
        "parentId": "disgusted",
        "startAngle": 158.05,
        "endAngle": 166.83,
        "color": "#10b981",
        "lightColor": "#d1fae5",
        "darkColor": "#065f46",
        "path": [
          "Disgusted",
          "Repelled"
        ],
        "tertiaries": [
          {
            "id": "horrified",
            "label": "Horrified",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "repelled",
            "startAngle": 158.05,
            "endAngle": 162.44,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Repelled",
              "Horrified"
            ]
          },
          {
            "id": "hesitant",
            "label": "Hesitant",
            "tier": 3,
            "coreId": "disgusted",
            "parentId": "repelled",
            "startAngle": 162.44,
            "endAngle": 166.83,
            "color": "#34d399",
            "lightColor": "#d1fae5",
            "darkColor": "#065f46",
            "path": [
              "Disgusted",
              "Repelled",
              "Hesitant"
            ]
          }
        ]
      }
    ]
  },
  "dismissive": {
    "id": "dismissive",
    "label": "Dismissive",
    "tier": 3,
    "coreId": "angry",
    "parentId": "critical",
    "startAngle": 166.83,
    "endAngle": 171.22,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Critical",
      "Dismissive"
    ]
  },
  "skeptical": {
    "id": "skeptical",
    "label": "Skeptical",
    "tier": 3,
    "coreId": "angry",
    "parentId": "critical",
    "startAngle": 171.22,
    "endAngle": 175.61,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Critical",
      "Skeptical"
    ]
  },
  "critical": {
    "id": "critical",
    "label": "Critical",
    "tier": 2,
    "coreId": "angry",
    "parentId": "angry",
    "startAngle": 166.83,
    "endAngle": 175.61,
    "color": "#ef4444",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Critical"
    ],
    "tertiaries": [
      {
        "id": "dismissive",
        "label": "Dismissive",
        "tier": 3,
        "coreId": "angry",
        "parentId": "critical",
        "startAngle": 166.83,
        "endAngle": 171.22,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Critical",
          "Dismissive"
        ]
      },
      {
        "id": "skeptical",
        "label": "Skeptical",
        "tier": 3,
        "coreId": "angry",
        "parentId": "critical",
        "startAngle": 171.22,
        "endAngle": 175.61,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Critical",
          "Skeptical"
        ]
      }
    ]
  },
  "numb": {
    "id": "numb",
    "label": "Numb",
    "tier": 3,
    "coreId": "angry",
    "parentId": "distant",
    "startAngle": 175.61,
    "endAngle": 180.0,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Distant",
      "Numb"
    ]
  },
  "withdrawn": {
    "id": "withdrawn",
    "label": "Withdrawn",
    "tier": 3,
    "coreId": "angry",
    "parentId": "distant",
    "startAngle": 180.0,
    "endAngle": 184.39,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Distant",
      "Withdrawn"
    ]
  },
  "distant": {
    "id": "distant",
    "label": "Distant",
    "tier": 2,
    "coreId": "angry",
    "parentId": "angry",
    "startAngle": 175.61,
    "endAngle": 184.39,
    "color": "#ef4444",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Distant"
    ],
    "tertiaries": [
      {
        "id": "numb",
        "label": "Numb",
        "tier": 3,
        "coreId": "angry",
        "parentId": "distant",
        "startAngle": 175.61,
        "endAngle": 180.0,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Distant",
          "Numb"
        ]
      },
      {
        "id": "withdrawn",
        "label": "Withdrawn",
        "tier": 3,
        "coreId": "angry",
        "parentId": "distant",
        "startAngle": 180.0,
        "endAngle": 184.39,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Distant",
          "Withdrawn"
        ]
      }
    ]
  },
  "annoyed": {
    "id": "annoyed",
    "label": "Annoyed",
    "tier": 3,
    "coreId": "angry",
    "parentId": "frustrated",
    "startAngle": 184.39,
    "endAngle": 188.78,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Frustrated",
      "Annoyed"
    ]
  },
  "infuriated": {
    "id": "infuriated",
    "label": "Infuriated",
    "tier": 3,
    "coreId": "angry",
    "parentId": "frustrated",
    "startAngle": 188.78,
    "endAngle": 193.17,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Frustrated",
      "Infuriated"
    ]
  },
  "frustrated": {
    "id": "frustrated",
    "label": "Frustrated",
    "tier": 2,
    "coreId": "angry",
    "parentId": "angry",
    "startAngle": 184.39,
    "endAngle": 193.17,
    "color": "#ef4444",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Frustrated"
    ],
    "tertiaries": [
      {
        "id": "annoyed",
        "label": "Annoyed",
        "tier": 3,
        "coreId": "angry",
        "parentId": "frustrated",
        "startAngle": 184.39,
        "endAngle": 188.78,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Frustrated",
          "Annoyed"
        ]
      },
      {
        "id": "infuriated",
        "label": "Infuriated",
        "tier": 3,
        "coreId": "angry",
        "parentId": "frustrated",
        "startAngle": 188.78,
        "endAngle": 193.17,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Frustrated",
          "Infuriated"
        ]
      }
    ]
  },
  "hostile": {
    "id": "hostile",
    "label": "Hostile",
    "tier": 3,
    "coreId": "angry",
    "parentId": "aggressive",
    "startAngle": 193.17,
    "endAngle": 197.56,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Aggressive",
      "Hostile"
    ]
  },
  "provoked": {
    "id": "provoked",
    "label": "Provoked",
    "tier": 3,
    "coreId": "angry",
    "parentId": "aggressive",
    "startAngle": 197.56,
    "endAngle": 201.95,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Aggressive",
      "Provoked"
    ]
  },
  "aggressive": {
    "id": "aggressive",
    "label": "Aggressive",
    "tier": 2,
    "coreId": "angry",
    "parentId": "angry",
    "startAngle": 193.17,
    "endAngle": 201.95,
    "color": "#ef4444",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Aggressive"
    ],
    "tertiaries": [
      {
        "id": "hostile",
        "label": "Hostile",
        "tier": 3,
        "coreId": "angry",
        "parentId": "aggressive",
        "startAngle": 193.17,
        "endAngle": 197.56,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Aggressive",
          "Hostile"
        ]
      },
      {
        "id": "provoked",
        "label": "Provoked",
        "tier": 3,
        "coreId": "angry",
        "parentId": "aggressive",
        "startAngle": 197.56,
        "endAngle": 201.95,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Aggressive",
          "Provoked"
        ]
      }
    ]
  },
  "jealous": {
    "id": "jealous",
    "label": "Jealous",
    "tier": 3,
    "coreId": "angry",
    "parentId": "mad",
    "startAngle": 201.95,
    "endAngle": 206.34,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Mad",
      "Jealous"
    ]
  },
  "furious": {
    "id": "furious",
    "label": "Furious",
    "tier": 3,
    "coreId": "angry",
    "parentId": "mad",
    "startAngle": 206.34,
    "endAngle": 210.73,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Mad",
      "Furious"
    ]
  },
  "mad": {
    "id": "mad",
    "label": "Mad",
    "tier": 2,
    "coreId": "angry",
    "parentId": "angry",
    "startAngle": 201.95,
    "endAngle": 210.73,
    "color": "#ef4444",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Mad"
    ],
    "tertiaries": [
      {
        "id": "jealous",
        "label": "Jealous",
        "tier": 3,
        "coreId": "angry",
        "parentId": "mad",
        "startAngle": 201.95,
        "endAngle": 206.34,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Mad",
          "Jealous"
        ]
      },
      {
        "id": "furious",
        "label": "Furious",
        "tier": 3,
        "coreId": "angry",
        "parentId": "mad",
        "startAngle": 206.34,
        "endAngle": 210.73,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Mad",
          "Furious"
        ]
      }
    ]
  },
  "violated": {
    "id": "violated",
    "label": "Violated",
    "tier": 3,
    "coreId": "angry",
    "parentId": "bitter",
    "startAngle": 210.73,
    "endAngle": 215.12,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Bitter",
      "Violated"
    ]
  },
  "indignant": {
    "id": "indignant",
    "label": "Indignant",
    "tier": 3,
    "coreId": "angry",
    "parentId": "bitter",
    "startAngle": 215.12,
    "endAngle": 219.51,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Bitter",
      "Indignant"
    ]
  },
  "bitter": {
    "id": "bitter",
    "label": "Bitter",
    "tier": 2,
    "coreId": "angry",
    "parentId": "angry",
    "startAngle": 210.73,
    "endAngle": 219.51,
    "color": "#ef4444",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Bitter"
    ],
    "tertiaries": [
      {
        "id": "violated",
        "label": "Violated",
        "tier": 3,
        "coreId": "angry",
        "parentId": "bitter",
        "startAngle": 210.73,
        "endAngle": 215.12,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Bitter",
          "Violated"
        ]
      },
      {
        "id": "indignant",
        "label": "Indignant",
        "tier": 3,
        "coreId": "angry",
        "parentId": "bitter",
        "startAngle": 215.12,
        "endAngle": 219.51,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Bitter",
          "Indignant"
        ]
      }
    ]
  },
  "ridiculed": {
    "id": "ridiculed",
    "label": "Ridiculed",
    "tier": 3,
    "coreId": "angry",
    "parentId": "humiliated",
    "startAngle": 219.51,
    "endAngle": 223.9,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Humiliated",
      "Ridiculed"
    ]
  },
  "disrespected": {
    "id": "disrespected",
    "label": "Disrespected",
    "tier": 3,
    "coreId": "angry",
    "parentId": "humiliated",
    "startAngle": 223.9,
    "endAngle": 228.29,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Humiliated",
      "Disrespected"
    ]
  },
  "humiliated": {
    "id": "humiliated",
    "label": "Humiliated",
    "tier": 2,
    "coreId": "angry",
    "parentId": "angry",
    "startAngle": 219.51,
    "endAngle": 228.29,
    "color": "#ef4444",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Humiliated"
    ],
    "tertiaries": [
      {
        "id": "ridiculed",
        "label": "Ridiculed",
        "tier": 3,
        "coreId": "angry",
        "parentId": "humiliated",
        "startAngle": 219.51,
        "endAngle": 223.9,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Humiliated",
          "Ridiculed"
        ]
      },
      {
        "id": "disrespected",
        "label": "Disrespected",
        "tier": 3,
        "coreId": "angry",
        "parentId": "humiliated",
        "startAngle": 223.9,
        "endAngle": 228.29,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Humiliated",
          "Disrespected"
        ]
      }
    ]
  },
  "betrayed": {
    "id": "betrayed",
    "label": "Betrayed",
    "tier": 3,
    "coreId": "angry",
    "parentId": "letdown",
    "startAngle": 228.29,
    "endAngle": 232.68,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Let Down",
      "Betrayed"
    ]
  },
  "resentful": {
    "id": "resentful",
    "label": "Resentful",
    "tier": 3,
    "coreId": "angry",
    "parentId": "letdown",
    "startAngle": 232.68,
    "endAngle": 237.07,
    "color": "#f87171",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Let Down",
      "Resentful"
    ]
  },
  "letdown": {
    "id": "letdown",
    "label": "Let Down",
    "tier": 2,
    "coreId": "angry",
    "parentId": "angry",
    "startAngle": 228.29,
    "endAngle": 237.07,
    "color": "#ef4444",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry",
      "Let Down"
    ],
    "tertiaries": [
      {
        "id": "betrayed",
        "label": "Betrayed",
        "tier": 3,
        "coreId": "angry",
        "parentId": "letdown",
        "startAngle": 228.29,
        "endAngle": 232.68,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Let Down",
          "Betrayed"
        ]
      },
      {
        "id": "resentful",
        "label": "Resentful",
        "tier": 3,
        "coreId": "angry",
        "parentId": "letdown",
        "startAngle": 232.68,
        "endAngle": 237.07,
        "color": "#f87171",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Let Down",
          "Resentful"
        ]
      }
    ]
  },
  "angry": {
    "id": "angry",
    "label": "Angry",
    "tier": 1,
    "coreId": "angry",
    "parentId": null,
    "startAngle": 166.83,
    "endAngle": 237.07,
    "color": "#dc2626",
    "lightColor": "#fee2e2",
    "darkColor": "#991b1b",
    "path": [
      "Angry"
    ],
    "secondaries": [
      {
        "id": "critical",
        "label": "Critical",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 166.83,
        "endAngle": 175.61,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Critical"
        ],
        "tertiaries": [
          {
            "id": "dismissive",
            "label": "Dismissive",
            "tier": 3,
            "coreId": "angry",
            "parentId": "critical",
            "startAngle": 166.83,
            "endAngle": 171.22,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Critical",
              "Dismissive"
            ]
          },
          {
            "id": "skeptical",
            "label": "Skeptical",
            "tier": 3,
            "coreId": "angry",
            "parentId": "critical",
            "startAngle": 171.22,
            "endAngle": 175.61,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Critical",
              "Skeptical"
            ]
          }
        ]
      },
      {
        "id": "distant",
        "label": "Distant",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 175.61,
        "endAngle": 184.39,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Distant"
        ],
        "tertiaries": [
          {
            "id": "numb",
            "label": "Numb",
            "tier": 3,
            "coreId": "angry",
            "parentId": "distant",
            "startAngle": 175.61,
            "endAngle": 180.0,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Distant",
              "Numb"
            ]
          },
          {
            "id": "withdrawn",
            "label": "Withdrawn",
            "tier": 3,
            "coreId": "angry",
            "parentId": "distant",
            "startAngle": 180.0,
            "endAngle": 184.39,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Distant",
              "Withdrawn"
            ]
          }
        ]
      },
      {
        "id": "frustrated",
        "label": "Frustrated",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 184.39,
        "endAngle": 193.17,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Frustrated"
        ],
        "tertiaries": [
          {
            "id": "annoyed",
            "label": "Annoyed",
            "tier": 3,
            "coreId": "angry",
            "parentId": "frustrated",
            "startAngle": 184.39,
            "endAngle": 188.78,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Frustrated",
              "Annoyed"
            ]
          },
          {
            "id": "infuriated",
            "label": "Infuriated",
            "tier": 3,
            "coreId": "angry",
            "parentId": "frustrated",
            "startAngle": 188.78,
            "endAngle": 193.17,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Frustrated",
              "Infuriated"
            ]
          }
        ]
      },
      {
        "id": "aggressive",
        "label": "Aggressive",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 193.17,
        "endAngle": 201.95,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Aggressive"
        ],
        "tertiaries": [
          {
            "id": "hostile",
            "label": "Hostile",
            "tier": 3,
            "coreId": "angry",
            "parentId": "aggressive",
            "startAngle": 193.17,
            "endAngle": 197.56,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Aggressive",
              "Hostile"
            ]
          },
          {
            "id": "provoked",
            "label": "Provoked",
            "tier": 3,
            "coreId": "angry",
            "parentId": "aggressive",
            "startAngle": 197.56,
            "endAngle": 201.95,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Aggressive",
              "Provoked"
            ]
          }
        ]
      },
      {
        "id": "mad",
        "label": "Mad",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 201.95,
        "endAngle": 210.73,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Mad"
        ],
        "tertiaries": [
          {
            "id": "jealous",
            "label": "Jealous",
            "tier": 3,
            "coreId": "angry",
            "parentId": "mad",
            "startAngle": 201.95,
            "endAngle": 206.34,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Mad",
              "Jealous"
            ]
          },
          {
            "id": "furious",
            "label": "Furious",
            "tier": 3,
            "coreId": "angry",
            "parentId": "mad",
            "startAngle": 206.34,
            "endAngle": 210.73,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Mad",
              "Furious"
            ]
          }
        ]
      },
      {
        "id": "bitter",
        "label": "Bitter",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 210.73,
        "endAngle": 219.51,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Bitter"
        ],
        "tertiaries": [
          {
            "id": "violated",
            "label": "Violated",
            "tier": 3,
            "coreId": "angry",
            "parentId": "bitter",
            "startAngle": 210.73,
            "endAngle": 215.12,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Bitter",
              "Violated"
            ]
          },
          {
            "id": "indignant",
            "label": "Indignant",
            "tier": 3,
            "coreId": "angry",
            "parentId": "bitter",
            "startAngle": 215.12,
            "endAngle": 219.51,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Bitter",
              "Indignant"
            ]
          }
        ]
      },
      {
        "id": "humiliated",
        "label": "Humiliated",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 219.51,
        "endAngle": 228.29,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Humiliated"
        ],
        "tertiaries": [
          {
            "id": "ridiculed",
            "label": "Ridiculed",
            "tier": 3,
            "coreId": "angry",
            "parentId": "humiliated",
            "startAngle": 219.51,
            "endAngle": 223.9,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Humiliated",
              "Ridiculed"
            ]
          },
          {
            "id": "disrespected",
            "label": "Disrespected",
            "tier": 3,
            "coreId": "angry",
            "parentId": "humiliated",
            "startAngle": 223.9,
            "endAngle": 228.29,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Humiliated",
              "Disrespected"
            ]
          }
        ]
      },
      {
        "id": "letdown",
        "label": "Let Down",
        "tier": 2,
        "coreId": "angry",
        "parentId": "angry",
        "startAngle": 228.29,
        "endAngle": 237.07,
        "color": "#ef4444",
        "lightColor": "#fee2e2",
        "darkColor": "#991b1b",
        "path": [
          "Angry",
          "Let Down"
        ],
        "tertiaries": [
          {
            "id": "betrayed",
            "label": "Betrayed",
            "tier": 3,
            "coreId": "angry",
            "parentId": "letdown",
            "startAngle": 228.29,
            "endAngle": 232.68,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Let Down",
              "Betrayed"
            ]
          },
          {
            "id": "resentful",
            "label": "Resentful",
            "tier": 3,
            "coreId": "angry",
            "parentId": "letdown",
            "startAngle": 232.68,
            "endAngle": 237.07,
            "color": "#f87171",
            "lightColor": "#fee2e2",
            "darkColor": "#991b1b",
            "path": [
              "Angry",
              "Let Down",
              "Resentful"
            ]
          }
        ]
      }
    ]
  },
  "helpless": {
    "id": "helpless",
    "label": "Helpless",
    "tier": 3,
    "coreId": "fearful",
    "parentId": "scared",
    "startAngle": 237.07,
    "endAngle": 241.46,
    "color": "#a78bfa",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Scared",
      "Helpless"
    ]
  },
  "frightened": {
    "id": "frightened",
    "label": "Frightened",
    "tier": 3,
    "coreId": "fearful",
    "parentId": "scared",
    "startAngle": 241.46,
    "endAngle": 245.85,
    "color": "#a78bfa",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Scared",
      "Frightened"
    ]
  },
  "scared": {
    "id": "scared",
    "label": "Scared",
    "tier": 2,
    "coreId": "fearful",
    "parentId": "fearful",
    "startAngle": 237.07,
    "endAngle": 245.85,
    "color": "#8b5cf6",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Scared"
    ],
    "tertiaries": [
      {
        "id": "helpless",
        "label": "Helpless",
        "tier": 3,
        "coreId": "fearful",
        "parentId": "scared",
        "startAngle": 237.07,
        "endAngle": 241.46,
        "color": "#a78bfa",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Scared",
          "Helpless"
        ]
      },
      {
        "id": "frightened",
        "label": "Frightened",
        "tier": 3,
        "coreId": "fearful",
        "parentId": "scared",
        "startAngle": 241.46,
        "endAngle": 245.85,
        "color": "#a78bfa",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Scared",
          "Frightened"
        ]
      }
    ]
  },
  "overwhelmed_fear": {
    "id": "overwhelmed_fear",
    "label": "Overwhelmed",
    "tier": 3,
    "coreId": "fearful",
    "parentId": "anxious",
    "startAngle": 245.85,
    "endAngle": 250.24,
    "color": "#a78bfa",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Anxious",
      "Overwhelmed"
    ]
  },
  "worried": {
    "id": "worried",
    "label": "Worried",
    "tier": 3,
    "coreId": "fearful",
    "parentId": "anxious",
    "startAngle": 250.24,
    "endAngle": 254.63,
    "color": "#a78bfa",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Anxious",
      "Worried"
    ]
  },
  "anxious": {
    "id": "anxious",
    "label": "Anxious",
    "tier": 2,
    "coreId": "fearful",
    "parentId": "fearful",
    "startAngle": 245.85,
    "endAngle": 254.63,
    "color": "#8b5cf6",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Anxious"
    ],
    "tertiaries": [
      {
        "id": "overwhelmed_fear",
        "label": "Overwhelmed",
        "tier": 3,
        "coreId": "fearful",
        "parentId": "anxious",
        "startAngle": 245.85,
        "endAngle": 250.24,
        "color": "#a78bfa",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Anxious",
          "Overwhelmed"
        ]
      },
      {
        "id": "worried",
        "label": "Worried",
        "tier": 3,
        "coreId": "fearful",
        "parentId": "anxious",
        "startAngle": 250.24,
        "endAngle": 254.63,
        "color": "#a78bfa",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Anxious",
          "Worried"
        ]
      }
    ]
  },
  "inadequate": {
    "id": "inadequate",
    "label": "Inadequate",
    "tier": 3,
    "coreId": "fearful",
    "parentId": "insecure",
    "startAngle": 254.63,
    "endAngle": 259.02,
    "color": "#a78bfa",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Insecure",
      "Inadequate"
    ]
  },
  "inferior_fear": {
    "id": "inferior_fear",
    "label": "Inferior",
    "tier": 3,
    "coreId": "fearful",
    "parentId": "insecure",
    "startAngle": 259.02,
    "endAngle": 263.41,
    "color": "#a78bfa",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Insecure",
      "Inferior"
    ]
  },
  "insecure": {
    "id": "insecure",
    "label": "Insecure",
    "tier": 2,
    "coreId": "fearful",
    "parentId": "fearful",
    "startAngle": 254.63,
    "endAngle": 263.41,
    "color": "#8b5cf6",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Insecure"
    ],
    "tertiaries": [
      {
        "id": "inadequate",
        "label": "Inadequate",
        "tier": 3,
        "coreId": "fearful",
        "parentId": "insecure",
        "startAngle": 254.63,
        "endAngle": 259.02,
        "color": "#a78bfa",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Insecure",
          "Inadequate"
        ]
      },
      {
        "id": "inferior_fear",
        "label": "Inferior",
        "tier": 3,
        "coreId": "fearful",
        "parentId": "insecure",
        "startAngle": 259.02,
        "endAngle": 263.41,
        "color": "#a78bfa",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Insecure",
          "Inferior"
        ]
      }
    ]
  },
  "worthless": {
    "id": "worthless",
    "label": "Worthless",
    "tier": 3,
    "coreId": "fearful",
    "parentId": "weak",
    "startAngle": 263.41,
    "endAngle": 267.8,
    "color": "#a78bfa",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Weak",
      "Worthless"
    ]
  },
  "insignificant": {
    "id": "insignificant",
    "label": "Insignificant",
    "tier": 3,
    "coreId": "fearful",
    "parentId": "weak",
    "startAngle": 267.8,
    "endAngle": 272.2,
    "color": "#a78bfa",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Weak",
      "Insignificant"
    ]
  },
  "weak": {
    "id": "weak",
    "label": "Weak",
    "tier": 2,
    "coreId": "fearful",
    "parentId": "fearful",
    "startAngle": 263.41,
    "endAngle": 272.2,
    "color": "#8b5cf6",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Weak"
    ],
    "tertiaries": [
      {
        "id": "worthless",
        "label": "Worthless",
        "tier": 3,
        "coreId": "fearful",
        "parentId": "weak",
        "startAngle": 263.41,
        "endAngle": 267.8,
        "color": "#a78bfa",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Weak",
          "Worthless"
        ]
      },
      {
        "id": "insignificant",
        "label": "Insignificant",
        "tier": 3,
        "coreId": "fearful",
        "parentId": "weak",
        "startAngle": 267.8,
        "endAngle": 272.2,
        "color": "#a78bfa",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Weak",
          "Insignificant"
        ]
      }
    ]
  },
  "excluded": {
    "id": "excluded",
    "label": "Excluded",
    "tier": 3,
    "coreId": "fearful",
    "parentId": "rejected",
    "startAngle": 272.2,
    "endAngle": 276.59,
    "color": "#a78bfa",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Rejected",
      "Excluded"
    ]
  },
  "persecuted": {
    "id": "persecuted",
    "label": "Persecuted",
    "tier": 3,
    "coreId": "fearful",
    "parentId": "rejected",
    "startAngle": 276.59,
    "endAngle": 280.98,
    "color": "#a78bfa",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Rejected",
      "Persecuted"
    ]
  },
  "rejected": {
    "id": "rejected",
    "label": "Rejected",
    "tier": 2,
    "coreId": "fearful",
    "parentId": "fearful",
    "startAngle": 272.2,
    "endAngle": 280.98,
    "color": "#8b5cf6",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Rejected"
    ],
    "tertiaries": [
      {
        "id": "excluded",
        "label": "Excluded",
        "tier": 3,
        "coreId": "fearful",
        "parentId": "rejected",
        "startAngle": 272.2,
        "endAngle": 276.59,
        "color": "#a78bfa",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Rejected",
          "Excluded"
        ]
      },
      {
        "id": "persecuted",
        "label": "Persecuted",
        "tier": 3,
        "coreId": "fearful",
        "parentId": "rejected",
        "startAngle": 276.59,
        "endAngle": 280.98,
        "color": "#a78bfa",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Rejected",
          "Persecuted"
        ]
      }
    ]
  },
  "nervous": {
    "id": "nervous",
    "label": "Nervous",
    "tier": 3,
    "coreId": "fearful",
    "parentId": "threatened",
    "startAngle": 280.98,
    "endAngle": 285.37,
    "color": "#a78bfa",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Threatened",
      "Nervous"
    ]
  },
  "exposed": {
    "id": "exposed",
    "label": "Exposed",
    "tier": 3,
    "coreId": "fearful",
    "parentId": "threatened",
    "startAngle": 285.37,
    "endAngle": 289.76,
    "color": "#a78bfa",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Threatened",
      "Exposed"
    ]
  },
  "threatened": {
    "id": "threatened",
    "label": "Threatened",
    "tier": 2,
    "coreId": "fearful",
    "parentId": "fearful",
    "startAngle": 280.98,
    "endAngle": 289.76,
    "color": "#8b5cf6",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful",
      "Threatened"
    ],
    "tertiaries": [
      {
        "id": "nervous",
        "label": "Nervous",
        "tier": 3,
        "coreId": "fearful",
        "parentId": "threatened",
        "startAngle": 280.98,
        "endAngle": 285.37,
        "color": "#a78bfa",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Threatened",
          "Nervous"
        ]
      },
      {
        "id": "exposed",
        "label": "Exposed",
        "tier": 3,
        "coreId": "fearful",
        "parentId": "threatened",
        "startAngle": 285.37,
        "endAngle": 289.76,
        "color": "#a78bfa",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Threatened",
          "Exposed"
        ]
      }
    ]
  },
  "fearful": {
    "id": "fearful",
    "label": "Fearful",
    "tier": 1,
    "coreId": "fearful",
    "parentId": null,
    "startAngle": 237.07,
    "endAngle": 289.76,
    "color": "#7c3aed",
    "lightColor": "#ede9fe",
    "darkColor": "#5b21b6",
    "path": [
      "Fearful"
    ],
    "secondaries": [
      {
        "id": "scared",
        "label": "Scared",
        "tier": 2,
        "coreId": "fearful",
        "parentId": "fearful",
        "startAngle": 237.07,
        "endAngle": 245.85,
        "color": "#8b5cf6",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Scared"
        ],
        "tertiaries": [
          {
            "id": "helpless",
            "label": "Helpless",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "scared",
            "startAngle": 237.07,
            "endAngle": 241.46,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Scared",
              "Helpless"
            ]
          },
          {
            "id": "frightened",
            "label": "Frightened",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "scared",
            "startAngle": 241.46,
            "endAngle": 245.85,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Scared",
              "Frightened"
            ]
          }
        ]
      },
      {
        "id": "anxious",
        "label": "Anxious",
        "tier": 2,
        "coreId": "fearful",
        "parentId": "fearful",
        "startAngle": 245.85,
        "endAngle": 254.63,
        "color": "#8b5cf6",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Anxious"
        ],
        "tertiaries": [
          {
            "id": "overwhelmed_fear",
            "label": "Overwhelmed",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "anxious",
            "startAngle": 245.85,
            "endAngle": 250.24,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Anxious",
              "Overwhelmed"
            ]
          },
          {
            "id": "worried",
            "label": "Worried",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "anxious",
            "startAngle": 250.24,
            "endAngle": 254.63,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Anxious",
              "Worried"
            ]
          }
        ]
      },
      {
        "id": "insecure",
        "label": "Insecure",
        "tier": 2,
        "coreId": "fearful",
        "parentId": "fearful",
        "startAngle": 254.63,
        "endAngle": 263.41,
        "color": "#8b5cf6",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Insecure"
        ],
        "tertiaries": [
          {
            "id": "inadequate",
            "label": "Inadequate",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "insecure",
            "startAngle": 254.63,
            "endAngle": 259.02,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Insecure",
              "Inadequate"
            ]
          },
          {
            "id": "inferior_fear",
            "label": "Inferior",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "insecure",
            "startAngle": 259.02,
            "endAngle": 263.41,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Insecure",
              "Inferior"
            ]
          }
        ]
      },
      {
        "id": "weak",
        "label": "Weak",
        "tier": 2,
        "coreId": "fearful",
        "parentId": "fearful",
        "startAngle": 263.41,
        "endAngle": 272.2,
        "color": "#8b5cf6",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Weak"
        ],
        "tertiaries": [
          {
            "id": "worthless",
            "label": "Worthless",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "weak",
            "startAngle": 263.41,
            "endAngle": 267.8,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Weak",
              "Worthless"
            ]
          },
          {
            "id": "insignificant",
            "label": "Insignificant",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "weak",
            "startAngle": 267.8,
            "endAngle": 272.2,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Weak",
              "Insignificant"
            ]
          }
        ]
      },
      {
        "id": "rejected",
        "label": "Rejected",
        "tier": 2,
        "coreId": "fearful",
        "parentId": "fearful",
        "startAngle": 272.2,
        "endAngle": 280.98,
        "color": "#8b5cf6",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Rejected"
        ],
        "tertiaries": [
          {
            "id": "excluded",
            "label": "Excluded",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "rejected",
            "startAngle": 272.2,
            "endAngle": 276.59,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Rejected",
              "Excluded"
            ]
          },
          {
            "id": "persecuted",
            "label": "Persecuted",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "rejected",
            "startAngle": 276.59,
            "endAngle": 280.98,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Rejected",
              "Persecuted"
            ]
          }
        ]
      },
      {
        "id": "threatened",
        "label": "Threatened",
        "tier": 2,
        "coreId": "fearful",
        "parentId": "fearful",
        "startAngle": 280.98,
        "endAngle": 289.76,
        "color": "#8b5cf6",
        "lightColor": "#ede9fe",
        "darkColor": "#5b21b6",
        "path": [
          "Fearful",
          "Threatened"
        ],
        "tertiaries": [
          {
            "id": "nervous",
            "label": "Nervous",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "threatened",
            "startAngle": 280.98,
            "endAngle": 285.37,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Threatened",
              "Nervous"
            ]
          },
          {
            "id": "exposed",
            "label": "Exposed",
            "tier": 3,
            "coreId": "fearful",
            "parentId": "threatened",
            "startAngle": 285.37,
            "endAngle": 289.76,
            "color": "#a78bfa",
            "lightColor": "#ede9fe",
            "darkColor": "#5b21b6",
            "path": [
              "Fearful",
              "Threatened",
              "Exposed"
            ]
          }
        ]
      }
    ]
  },
  "indifferent": {
    "id": "indifferent",
    "label": "Indifferent",
    "tier": 3,
    "coreId": "bad",
    "parentId": "bored",
    "startAngle": 289.76,
    "endAngle": 294.15,
    "color": "#94a3b8",
    "lightColor": "#f1f5f9",
    "darkColor": "#1e293b",
    "path": [
      "Bad",
      "Bored",
      "Indifferent"
    ]
  },
  "apathetic": {
    "id": "apathetic",
    "label": "Apathetic",
    "tier": 3,
    "coreId": "bad",
    "parentId": "bored",
    "startAngle": 294.15,
    "endAngle": 298.54,
    "color": "#94a3b8",
    "lightColor": "#f1f5f9",
    "darkColor": "#1e293b",
    "path": [
      "Bad",
      "Bored",
      "Apathetic"
    ]
  },
  "bored": {
    "id": "bored",
    "label": "Bored",
    "tier": 2,
    "coreId": "bad",
    "parentId": "bad",
    "startAngle": 289.76,
    "endAngle": 298.54,
    "color": "#64748b",
    "lightColor": "#f1f5f9",
    "darkColor": "#1e293b",
    "path": [
      "Bad",
      "Bored"
    ],
    "tertiaries": [
      {
        "id": "indifferent",
        "label": "Indifferent",
        "tier": 3,
        "coreId": "bad",
        "parentId": "bored",
        "startAngle": 289.76,
        "endAngle": 294.15,
        "color": "#94a3b8",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Bored",
          "Indifferent"
        ]
      },
      {
        "id": "apathetic",
        "label": "Apathetic",
        "tier": 3,
        "coreId": "bad",
        "parentId": "bored",
        "startAngle": 294.15,
        "endAngle": 298.54,
        "color": "#94a3b8",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Bored",
          "Apathetic"
        ]
      }
    ]
  },
  "pressured": {
    "id": "pressured",
    "label": "Pressured",
    "tier": 3,
    "coreId": "bad",
    "parentId": "busy",
    "startAngle": 298.54,
    "endAngle": 302.93,
    "color": "#94a3b8",
    "lightColor": "#f1f5f9",
    "darkColor": "#1e293b",
    "path": [
      "Bad",
      "Busy",
      "Pressured"
    ]
  },
  "rushed": {
    "id": "rushed",
    "label": "Rushed",
    "tier": 3,
    "coreId": "bad",
    "parentId": "busy",
    "startAngle": 302.93,
    "endAngle": 307.32,
    "color": "#94a3b8",
    "lightColor": "#f1f5f9",
    "darkColor": "#1e293b",
    "path": [
      "Bad",
      "Busy",
      "Rushed"
    ]
  },
  "busy": {
    "id": "busy",
    "label": "Busy",
    "tier": 2,
    "coreId": "bad",
    "parentId": "bad",
    "startAngle": 298.54,
    "endAngle": 307.32,
    "color": "#64748b",
    "lightColor": "#f1f5f9",
    "darkColor": "#1e293b",
    "path": [
      "Bad",
      "Busy"
    ],
    "tertiaries": [
      {
        "id": "pressured",
        "label": "Pressured",
        "tier": 3,
        "coreId": "bad",
        "parentId": "busy",
        "startAngle": 298.54,
        "endAngle": 302.93,
        "color": "#94a3b8",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Busy",
          "Pressured"
        ]
      },
      {
        "id": "rushed",
        "label": "Rushed",
        "tier": 3,
        "coreId": "bad",
        "parentId": "busy",
        "startAngle": 302.93,
        "endAngle": 307.32,
        "color": "#94a3b8",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Busy",
          "Rushed"
        ]
      }
    ]
  },
  "overwhelmed": {
    "id": "overwhelmed",
    "label": "Overwhelmed",
    "tier": 3,
    "coreId": "bad",
    "parentId": "stressed",
    "startAngle": 307.32,
    "endAngle": 311.71,
    "color": "#94a3b8",
    "lightColor": "#f1f5f9",
    "darkColor": "#1e293b",
    "path": [
      "Bad",
      "Stressed",
      "Overwhelmed"
    ]
  },
  "outofcontrol": {
    "id": "outofcontrol",
    "label": "Out of Control",
    "tier": 3,
    "coreId": "bad",
    "parentId": "stressed",
    "startAngle": 311.71,
    "endAngle": 316.1,
    "color": "#94a3b8",
    "lightColor": "#f1f5f9",
    "darkColor": "#1e293b",
    "path": [
      "Bad",
      "Stressed",
      "Out of Control"
    ]
  },
  "stressed": {
    "id": "stressed",
    "label": "Stressed",
    "tier": 2,
    "coreId": "bad",
    "parentId": "bad",
    "startAngle": 307.32,
    "endAngle": 316.1,
    "color": "#64748b",
    "lightColor": "#f1f5f9",
    "darkColor": "#1e293b",
    "path": [
      "Bad",
      "Stressed"
    ],
    "tertiaries": [
      {
        "id": "overwhelmed",
        "label": "Overwhelmed",
        "tier": 3,
        "coreId": "bad",
        "parentId": "stressed",
        "startAngle": 307.32,
        "endAngle": 311.71,
        "color": "#94a3b8",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Stressed",
          "Overwhelmed"
        ]
      },
      {
        "id": "outofcontrol",
        "label": "Out of Control",
        "tier": 3,
        "coreId": "bad",
        "parentId": "stressed",
        "startAngle": 311.71,
        "endAngle": 316.1,
        "color": "#94a3b8",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Stressed",
          "Out of Control"
        ]
      }
    ]
  },
  "sleepy": {
    "id": "sleepy",
    "label": "Sleepy",
    "tier": 3,
    "coreId": "bad",
    "parentId": "tired",
    "startAngle": 316.1,
    "endAngle": 320.49,
    "color": "#94a3b8",
    "lightColor": "#f1f5f9",
    "darkColor": "#1e293b",
    "path": [
      "Bad",
      "Tired",
      "Sleepy"
    ]
  },
  "unfocused": {
    "id": "unfocused",
    "label": "Unfocused",
    "tier": 3,
    "coreId": "bad",
    "parentId": "tired",
    "startAngle": 320.49,
    "endAngle": 324.88,
    "color": "#94a3b8",
    "lightColor": "#f1f5f9",
    "darkColor": "#1e293b",
    "path": [
      "Bad",
      "Tired",
      "Unfocused"
    ]
  },
  "tired": {
    "id": "tired",
    "label": "Tired",
    "tier": 2,
    "coreId": "bad",
    "parentId": "bad",
    "startAngle": 316.1,
    "endAngle": 324.88,
    "color": "#64748b",
    "lightColor": "#f1f5f9",
    "darkColor": "#1e293b",
    "path": [
      "Bad",
      "Tired"
    ],
    "tertiaries": [
      {
        "id": "sleepy",
        "label": "Sleepy",
        "tier": 3,
        "coreId": "bad",
        "parentId": "tired",
        "startAngle": 316.1,
        "endAngle": 320.49,
        "color": "#94a3b8",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Tired",
          "Sleepy"
        ]
      },
      {
        "id": "unfocused",
        "label": "Unfocused",
        "tier": 3,
        "coreId": "bad",
        "parentId": "tired",
        "startAngle": 320.49,
        "endAngle": 324.88,
        "color": "#94a3b8",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Tired",
          "Unfocused"
        ]
      }
    ]
  },
  "bad": {
    "id": "bad",
    "label": "Bad",
    "tier": 1,
    "coreId": "bad",
    "parentId": null,
    "startAngle": 289.76,
    "endAngle": 324.88,
    "color": "#475569",
    "lightColor": "#f1f5f9",
    "darkColor": "#1e293b",
    "path": [
      "Bad"
    ],
    "secondaries": [
      {
        "id": "bored",
        "label": "Bored",
        "tier": 2,
        "coreId": "bad",
        "parentId": "bad",
        "startAngle": 289.76,
        "endAngle": 298.54,
        "color": "#64748b",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Bored"
        ],
        "tertiaries": [
          {
            "id": "indifferent",
            "label": "Indifferent",
            "tier": 3,
            "coreId": "bad",
            "parentId": "bored",
            "startAngle": 289.76,
            "endAngle": 294.15,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Bored",
              "Indifferent"
            ]
          },
          {
            "id": "apathetic",
            "label": "Apathetic",
            "tier": 3,
            "coreId": "bad",
            "parentId": "bored",
            "startAngle": 294.15,
            "endAngle": 298.54,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Bored",
              "Apathetic"
            ]
          }
        ]
      },
      {
        "id": "busy",
        "label": "Busy",
        "tier": 2,
        "coreId": "bad",
        "parentId": "bad",
        "startAngle": 298.54,
        "endAngle": 307.32,
        "color": "#64748b",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Busy"
        ],
        "tertiaries": [
          {
            "id": "pressured",
            "label": "Pressured",
            "tier": 3,
            "coreId": "bad",
            "parentId": "busy",
            "startAngle": 298.54,
            "endAngle": 302.93,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Busy",
              "Pressured"
            ]
          },
          {
            "id": "rushed",
            "label": "Rushed",
            "tier": 3,
            "coreId": "bad",
            "parentId": "busy",
            "startAngle": 302.93,
            "endAngle": 307.32,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Busy",
              "Rushed"
            ]
          }
        ]
      },
      {
        "id": "stressed",
        "label": "Stressed",
        "tier": 2,
        "coreId": "bad",
        "parentId": "bad",
        "startAngle": 307.32,
        "endAngle": 316.1,
        "color": "#64748b",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Stressed"
        ],
        "tertiaries": [
          {
            "id": "overwhelmed",
            "label": "Overwhelmed",
            "tier": 3,
            "coreId": "bad",
            "parentId": "stressed",
            "startAngle": 307.32,
            "endAngle": 311.71,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Stressed",
              "Overwhelmed"
            ]
          },
          {
            "id": "outofcontrol",
            "label": "Out of Control",
            "tier": 3,
            "coreId": "bad",
            "parentId": "stressed",
            "startAngle": 311.71,
            "endAngle": 316.1,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Stressed",
              "Out of Control"
            ]
          }
        ]
      },
      {
        "id": "tired",
        "label": "Tired",
        "tier": 2,
        "coreId": "bad",
        "parentId": "bad",
        "startAngle": 316.1,
        "endAngle": 324.88,
        "color": "#64748b",
        "lightColor": "#f1f5f9",
        "darkColor": "#1e293b",
        "path": [
          "Bad",
          "Tired"
        ],
        "tertiaries": [
          {
            "id": "sleepy",
            "label": "Sleepy",
            "tier": 3,
            "coreId": "bad",
            "parentId": "tired",
            "startAngle": 316.1,
            "endAngle": 320.49,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Tired",
              "Sleepy"
            ]
          },
          {
            "id": "unfocused",
            "label": "Unfocused",
            "tier": 3,
            "coreId": "bad",
            "parentId": "tired",
            "startAngle": 320.49,
            "endAngle": 324.88,
            "color": "#94a3b8",
            "lightColor": "#f1f5f9",
            "darkColor": "#1e293b",
            "path": [
              "Bad",
              "Tired",
              "Unfocused"
            ]
          }
        ]
      }
    ]
  },
  "shocked": {
    "id": "shocked",
    "label": "Shocked",
    "tier": 3,
    "coreId": "surprised",
    "parentId": "startled",
    "startAngle": 324.88,
    "endAngle": 329.27,
    "color": "#22d3ee",
    "lightColor": "#cffafe",
    "darkColor": "#155e75",
    "path": [
      "Surprised",
      "Startled",
      "Shocked"
    ]
  },
  "dismayed": {
    "id": "dismayed",
    "label": "Dismayed",
    "tier": 3,
    "coreId": "surprised",
    "parentId": "startled",
    "startAngle": 329.27,
    "endAngle": 333.66,
    "color": "#22d3ee",
    "lightColor": "#cffafe",
    "darkColor": "#155e75",
    "path": [
      "Surprised",
      "Startled",
      "Dismayed"
    ]
  },
  "startled": {
    "id": "startled",
    "label": "Startled",
    "tier": 2,
    "coreId": "surprised",
    "parentId": "surprised",
    "startAngle": 324.88,
    "endAngle": 333.66,
    "color": "#06b6d4",
    "lightColor": "#cffafe",
    "darkColor": "#155e75",
    "path": [
      "Surprised",
      "Startled"
    ],
    "tertiaries": [
      {
        "id": "shocked",
        "label": "Shocked",
        "tier": 3,
        "coreId": "surprised",
        "parentId": "startled",
        "startAngle": 324.88,
        "endAngle": 329.27,
        "color": "#22d3ee",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Startled",
          "Shocked"
        ]
      },
      {
        "id": "dismayed",
        "label": "Dismayed",
        "tier": 3,
        "coreId": "surprised",
        "parentId": "startled",
        "startAngle": 329.27,
        "endAngle": 333.66,
        "color": "#22d3ee",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Startled",
          "Dismayed"
        ]
      }
    ]
  },
  "disillusioned": {
    "id": "disillusioned",
    "label": "Disillusioned",
    "tier": 3,
    "coreId": "surprised",
    "parentId": "confused",
    "startAngle": 333.66,
    "endAngle": 338.05,
    "color": "#22d3ee",
    "lightColor": "#cffafe",
    "darkColor": "#155e75",
    "path": [
      "Surprised",
      "Confused",
      "Disillusioned"
    ]
  },
  "perplexed": {
    "id": "perplexed",
    "label": "Perplexed",
    "tier": 3,
    "coreId": "surprised",
    "parentId": "confused",
    "startAngle": 338.05,
    "endAngle": 342.44,
    "color": "#22d3ee",
    "lightColor": "#cffafe",
    "darkColor": "#155e75",
    "path": [
      "Surprised",
      "Confused",
      "Perplexed"
    ]
  },
  "confused": {
    "id": "confused",
    "label": "Confused",
    "tier": 2,
    "coreId": "surprised",
    "parentId": "surprised",
    "startAngle": 333.66,
    "endAngle": 342.44,
    "color": "#06b6d4",
    "lightColor": "#cffafe",
    "darkColor": "#155e75",
    "path": [
      "Surprised",
      "Confused"
    ],
    "tertiaries": [
      {
        "id": "disillusioned",
        "label": "Disillusioned",
        "tier": 3,
        "coreId": "surprised",
        "parentId": "confused",
        "startAngle": 333.66,
        "endAngle": 338.05,
        "color": "#22d3ee",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Confused",
          "Disillusioned"
        ]
      },
      {
        "id": "perplexed",
        "label": "Perplexed",
        "tier": 3,
        "coreId": "surprised",
        "parentId": "confused",
        "startAngle": 338.05,
        "endAngle": 342.44,
        "color": "#22d3ee",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Confused",
          "Perplexed"
        ]
      }
    ]
  },
  "astonished": {
    "id": "astonished",
    "label": "Astonished",
    "tier": 3,
    "coreId": "surprised",
    "parentId": "amazed",
    "startAngle": 342.44,
    "endAngle": 346.83,
    "color": "#22d3ee",
    "lightColor": "#cffafe",
    "darkColor": "#155e75",
    "path": [
      "Surprised",
      "Amazed",
      "Astonished"
    ]
  },
  "awe": {
    "id": "awe",
    "label": "Awe",
    "tier": 3,
    "coreId": "surprised",
    "parentId": "amazed",
    "startAngle": 346.83,
    "endAngle": 351.22,
    "color": "#22d3ee",
    "lightColor": "#cffafe",
    "darkColor": "#155e75",
    "path": [
      "Surprised",
      "Amazed",
      "Awe"
    ]
  },
  "amazed": {
    "id": "amazed",
    "label": "Amazed",
    "tier": 2,
    "coreId": "surprised",
    "parentId": "surprised",
    "startAngle": 342.44,
    "endAngle": 351.22,
    "color": "#06b6d4",
    "lightColor": "#cffafe",
    "darkColor": "#155e75",
    "path": [
      "Surprised",
      "Amazed"
    ],
    "tertiaries": [
      {
        "id": "astonished",
        "label": "Astonished",
        "tier": 3,
        "coreId": "surprised",
        "parentId": "amazed",
        "startAngle": 342.44,
        "endAngle": 346.83,
        "color": "#22d3ee",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Amazed",
          "Astonished"
        ]
      },
      {
        "id": "awe",
        "label": "Awe",
        "tier": 3,
        "coreId": "surprised",
        "parentId": "amazed",
        "startAngle": 346.83,
        "endAngle": 351.22,
        "color": "#22d3ee",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Amazed",
          "Awe"
        ]
      }
    ]
  },
  "eager": {
    "id": "eager",
    "label": "Eager",
    "tier": 3,
    "coreId": "surprised",
    "parentId": "excited",
    "startAngle": 351.22,
    "endAngle": 355.61,
    "color": "#22d3ee",
    "lightColor": "#cffafe",
    "darkColor": "#155e75",
    "path": [
      "Surprised",
      "Excited",
      "Eager"
    ]
  },
  "energetic": {
    "id": "energetic",
    "label": "Energetic",
    "tier": 3,
    "coreId": "surprised",
    "parentId": "excited",
    "startAngle": 355.61,
    "endAngle": 360.0,
    "color": "#22d3ee",
    "lightColor": "#cffafe",
    "darkColor": "#155e75",
    "path": [
      "Surprised",
      "Excited",
      "Energetic"
    ]
  },
  "excited": {
    "id": "excited",
    "label": "Excited",
    "tier": 2,
    "coreId": "surprised",
    "parentId": "surprised",
    "startAngle": 351.22,
    "endAngle": 360.0,
    "color": "#06b6d4",
    "lightColor": "#cffafe",
    "darkColor": "#155e75",
    "path": [
      "Surprised",
      "Excited"
    ],
    "tertiaries": [
      {
        "id": "eager",
        "label": "Eager",
        "tier": 3,
        "coreId": "surprised",
        "parentId": "excited",
        "startAngle": 351.22,
        "endAngle": 355.61,
        "color": "#22d3ee",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Excited",
          "Eager"
        ]
      },
      {
        "id": "energetic",
        "label": "Energetic",
        "tier": 3,
        "coreId": "surprised",
        "parentId": "excited",
        "startAngle": 355.61,
        "endAngle": 360.0,
        "color": "#22d3ee",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Excited",
          "Energetic"
        ]
      }
    ]
  },
  "surprised": {
    "id": "surprised",
    "label": "Surprised",
    "tier": 1,
    "coreId": "surprised",
    "parentId": null,
    "startAngle": 324.88,
    "endAngle": 360.0,
    "color": "#0891b2",
    "lightColor": "#cffafe",
    "darkColor": "#155e75",
    "path": [
      "Surprised"
    ],
    "secondaries": [
      {
        "id": "startled",
        "label": "Startled",
        "tier": 2,
        "coreId": "surprised",
        "parentId": "surprised",
        "startAngle": 324.88,
        "endAngle": 333.66,
        "color": "#06b6d4",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Startled"
        ],
        "tertiaries": [
          {
            "id": "shocked",
            "label": "Shocked",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "startled",
            "startAngle": 324.88,
            "endAngle": 329.27,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Startled",
              "Shocked"
            ]
          },
          {
            "id": "dismayed",
            "label": "Dismayed",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "startled",
            "startAngle": 329.27,
            "endAngle": 333.66,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Startled",
              "Dismayed"
            ]
          }
        ]
      },
      {
        "id": "confused",
        "label": "Confused",
        "tier": 2,
        "coreId": "surprised",
        "parentId": "surprised",
        "startAngle": 333.66,
        "endAngle": 342.44,
        "color": "#06b6d4",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Confused"
        ],
        "tertiaries": [
          {
            "id": "disillusioned",
            "label": "Disillusioned",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "confused",
            "startAngle": 333.66,
            "endAngle": 338.05,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Confused",
              "Disillusioned"
            ]
          },
          {
            "id": "perplexed",
            "label": "Perplexed",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "confused",
            "startAngle": 338.05,
            "endAngle": 342.44,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Confused",
              "Perplexed"
            ]
          }
        ]
      },
      {
        "id": "amazed",
        "label": "Amazed",
        "tier": 2,
        "coreId": "surprised",
        "parentId": "surprised",
        "startAngle": 342.44,
        "endAngle": 351.22,
        "color": "#06b6d4",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Amazed"
        ],
        "tertiaries": [
          {
            "id": "astonished",
            "label": "Astonished",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "amazed",
            "startAngle": 342.44,
            "endAngle": 346.83,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Amazed",
              "Astonished"
            ]
          },
          {
            "id": "awe",
            "label": "Awe",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "amazed",
            "startAngle": 346.83,
            "endAngle": 351.22,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Amazed",
              "Awe"
            ]
          }
        ]
      },
      {
        "id": "excited",
        "label": "Excited",
        "tier": 2,
        "coreId": "surprised",
        "parentId": "surprised",
        "startAngle": 351.22,
        "endAngle": 360.0,
        "color": "#06b6d4",
        "lightColor": "#cffafe",
        "darkColor": "#155e75",
        "path": [
          "Surprised",
          "Excited"
        ],
        "tertiaries": [
          {
            "id": "eager",
            "label": "Eager",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "excited",
            "startAngle": 351.22,
            "endAngle": 355.61,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Excited",
              "Eager"
            ]
          },
          {
            "id": "energetic",
            "label": "Energetic",
            "tier": 3,
            "coreId": "surprised",
            "parentId": "excited",
            "startAngle": 355.61,
            "endAngle": 360.0,
            "color": "#22d3ee",
            "lightColor": "#cffafe",
            "darkColor": "#155e75",
            "path": [
              "Surprised",
              "Excited",
              "Energetic"
            ]
          }
        ]
      }
    ]
  }
};

export const FEELINGS_VERSES = {
  "aroused": [
    {
      "text": "The LORD has done it this very day; let us rejoice today and be glad.",
      "ref": "Psalm 118:24 NIV"
    },
    {
      "text": "You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand.",
      "ref": "Psalm 16:11 NIV"
    },
    {
      "text": "Nehemiah said, \u201cGo and enjoy choice food and sweet drinks, and send some to those who have nothing prepared. This day is holy to our Lord. Do not grieve, for the joy of the LORD is your strength.\u201d",
      "ref": "Nehemiah 8:10 NIV"
    },
    {
      "text": "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
      "ref": "Romans 15:13 NIV"
    },
    {
      "text": "The LORD is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.",
      "ref": "Psalm 28:7 NIV"
    },
    {
      "text": "Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy,",
      "ref": "1 Peter 1:8 NIV"
    },
    {
      "text": "I have told you this so that my joy may be in you and that your joy may be complete.",
      "ref": "John 15:11 NIV"
    },
    {
      "text": "For you make me glad by your deeds, LORD; I sing for joy at what your hands have done.",
      "ref": "Psalm 92:4 NIV"
    }
  ],
  "cheeky": [
    {
      "text": "The LORD has done it this very day; let us rejoice today and be glad.",
      "ref": "Psalm 118:24 NIV"
    },
    {
      "text": "You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand.",
      "ref": "Psalm 16:11 NIV"
    },
    {
      "text": "Nehemiah said, \u201cGo and enjoy choice food and sweet drinks, and send some to those who have nothing prepared. This day is holy to our Lord. Do not grieve, for the joy of the LORD is your strength.\u201d",
      "ref": "Nehemiah 8:10 NIV"
    },
    {
      "text": "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
      "ref": "Romans 15:13 NIV"
    },
    {
      "text": "The LORD is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.",
      "ref": "Psalm 28:7 NIV"
    },
    {
      "text": "Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy,",
      "ref": "1 Peter 1:8 NIV"
    },
    {
      "text": "I have told you this so that my joy may be in you and that your joy may be complete.",
      "ref": "John 15:11 NIV"
    },
    {
      "text": "For you make me glad by your deeds, LORD; I sing for joy at what your hands have done.",
      "ref": "Psalm 92:4 NIV"
    }
  ],
  "playful": [
    {
      "text": "The LORD has done it this very day; let us rejoice today and be glad.",
      "ref": "Psalm 118:24 NIV"
    },
    {
      "text": "You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand.",
      "ref": "Psalm 16:11 NIV"
    },
    {
      "text": "Nehemiah said, \u201cGo and enjoy choice food and sweet drinks, and send some to those who have nothing prepared. This day is holy to our Lord. Do not grieve, for the joy of the LORD is your strength.\u201d",
      "ref": "Nehemiah 8:10 NIV"
    },
    {
      "text": "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
      "ref": "Romans 15:13 NIV"
    },
    {
      "text": "The LORD is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.",
      "ref": "Psalm 28:7 NIV"
    },
    {
      "text": "Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy,",
      "ref": "1 Peter 1:8 NIV"
    },
    {
      "text": "I have told you this so that my joy may be in you and that your joy may be complete.",
      "ref": "John 15:11 NIV"
    },
    {
      "text": "For you make me glad by your deeds, LORD; I sing for joy at what your hands have done.",
      "ref": "Psalm 92:4 NIV"
    }
  ],
  "free": [
    {
      "text": "as far as the east is from the west, so far has he removed our transgressions from us.",
      "ref": "Psalm 103:12 NIV"
    },
    {
      "text": "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
      "ref": "1 John 1:9 NIV"
    },
    {
      "text": "\u201cI, even I, am he who blots out your transgressions, for my own sake, and remembers your sins no more.",
      "ref": "Isaiah 43:25 NIV"
    },
    {
      "text": "Therefore, there is now no condemnation for those who are in Christ Jesus,",
      "ref": "Romans 8:1 NIV"
    },
    {
      "text": "In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God\u2019s grace",
      "ref": "Ephesians 1:7 NIV"
    },
    {
      "text": "When you were dead in your sins and in the uncircumcision of your flesh, God made you alive with Christ. He forgave us all our sins,",
      "ref": "Colossians 2:13 NIV"
    },
    {
      "text": "You will again have compassion on us; you will tread our sins underfoot and hurl all our iniquities into the depths of the sea.",
      "ref": "Micah 7:19 NIV"
    },
    {
      "text": "Blessed is the one whose transgressions are forgiven, whose sins are covered.",
      "ref": "Psalm 32:1 NIV"
    }
  ],
  "joyful": [
    {
      "text": "The LORD has done it this very day; let us rejoice today and be glad.",
      "ref": "Psalm 118:24 NIV"
    },
    {
      "text": "You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand.",
      "ref": "Psalm 16:11 NIV"
    },
    {
      "text": "Nehemiah said, \u201cGo and enjoy choice food and sweet drinks, and send some to those who have nothing prepared. This day is holy to our Lord. Do not grieve, for the joy of the LORD is your strength.\u201d",
      "ref": "Nehemiah 8:10 NIV"
    },
    {
      "text": "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
      "ref": "Romans 15:13 NIV"
    },
    {
      "text": "The LORD is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.",
      "ref": "Psalm 28:7 NIV"
    },
    {
      "text": "Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy,",
      "ref": "1 Peter 1:8 NIV"
    },
    {
      "text": "I have told you this so that my joy may be in you and that your joy may be complete.",
      "ref": "John 15:11 NIV"
    },
    {
      "text": "For you make me glad by your deeds, LORD; I sing for joy at what your hands have done.",
      "ref": "Psalm 92:4 NIV"
    }
  ],
  "content": [
    {
      "text": "I am not saying this because I am in need, for I have learned to be content whatever the circumstances.",
      "ref": "Philippians 4:11 NIV"
    },
    {
      "text": "But godliness with contentment is great gain.",
      "ref": "1 Timothy 6:6 NIV"
    },
    {
      "text": "Keep your lives free from the love of money and be content with what you have, because God has said, \u201cNever will I leave you; never will I forsake you.\u201d",
      "ref": "Hebrews 13:5 NIV"
    },
    {
      "text": "The fear of the LORD leads to life; then one rests content, untouched by trouble.",
      "ref": "Proverbs 19:23 NIV"
    },
    {
      "text": "LORD, you alone are my portion and my cup; you make my lot secure. The boundary lines have fallen for me in pleasant places; surely I have a delightful inheritance.",
      "ref": "Psalm 16:5-6 NIV"
    },
    {
      "text": "The LORD is my shepherd, I lack nothing.",
      "ref": "Psalm 23:1 NIV"
    },
    {
      "text": "Keep falsehood and lies far from me; give me neither poverty nor riches, but give me only my daily bread.",
      "ref": "Proverbs 30:8 NIV"
    },
    {
      "text": "Moreover, when God gives someone wealth and possessions, and the ability to enjoy them, to accept their lot and be happy in their toil\u2014this is a gift of God.",
      "ref": "Ecclesiastes 5:19 NIV"
    }
  ],
  "curious": [
    {
      "text": "I can do all this through him who gives me strength.",
      "ref": "Philippians 4:13 NIV"
    },
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    },
    {
      "text": "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters,",
      "ref": "Colossians 3:23 NIV"
    },
    {
      "text": "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
      "ref": "1 Corinthians 15:58 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "Then I heard the voice of the Lord saying, \u201cWhom shall I send? And who will go for us?\u201d And I said, \u201cHere am I. Send me!\u201d",
      "ref": "Isaiah 6:8 NIV"
    },
    {
      "text": "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      "ref": "Proverbs 3:5-6 NIV"
    }
  ],
  "inquisitive": [
    {
      "text": "I can do all this through him who gives me strength.",
      "ref": "Philippians 4:13 NIV"
    },
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    },
    {
      "text": "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters,",
      "ref": "Colossians 3:23 NIV"
    },
    {
      "text": "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
      "ref": "1 Corinthians 15:58 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "Then I heard the voice of the Lord saying, \u201cWhom shall I send? And who will go for us?\u201d And I said, \u201cHere am I. Send me!\u201d",
      "ref": "Isaiah 6:8 NIV"
    },
    {
      "text": "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      "ref": "Proverbs 3:5-6 NIV"
    }
  ],
  "interested": [
    {
      "text": "I can do all this through him who gives me strength.",
      "ref": "Philippians 4:13 NIV"
    },
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    },
    {
      "text": "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters,",
      "ref": "Colossians 3:23 NIV"
    },
    {
      "text": "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
      "ref": "1 Corinthians 15:58 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "Then I heard the voice of the Lord saying, \u201cWhom shall I send? And who will go for us?\u201d And I said, \u201cHere am I. Send me!\u201d",
      "ref": "Isaiah 6:8 NIV"
    },
    {
      "text": "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      "ref": "Proverbs 3:5-6 NIV"
    }
  ],
  "successful": [
    {
      "text": "But thanks be to God! He gives us the victory through our Lord Jesus Christ.",
      "ref": "1 Corinthians 15:57 NIV"
    },
    {
      "text": "No, in all these things we are more than conquerors through him who loved us.",
      "ref": "Romans 8:37 NIV"
    },
    {
      "text": "For the LORD your God is the one who goes with you to fight for you against your enemies to give you victory.\u201d",
      "ref": "Deuteronomy 20:4 NIV"
    },
    {
      "text": "But thanks be to God, who always leads us as captives in Christ\u2019s triumphal procession and uses us to spread the aroma of the knowledge of him everywhere.",
      "ref": "2 Corinthians 2:14 NIV"
    },
    {
      "text": "for everyone born of God overcomes the world. This is the victory that has overcome the world, even our faith.",
      "ref": "1 John 5:4 NIV"
    },
    {
      "text": "With God we will gain the victory, and he will trample down our enemies.",
      "ref": "Psalm 60:12 NIV"
    },
    {
      "text": "The horse is made ready for the day of battle, but victory rests with the LORD.",
      "ref": "Proverbs 21:31 NIV"
    },
    {
      "text": "Through you we push back our enemies; through your name we trample our foes.",
      "ref": "Psalm 44:5 NIV"
    }
  ],
  "confident": [
    {
      "text": "Let us then approach God\u2019s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.",
      "ref": "Hebrews 4:16 NIV"
    },
    {
      "text": "for the LORD will be at your side and will keep your foot from being snared.",
      "ref": "Proverbs 3:26 NIV"
    },
    {
      "text": "So do not throw away your confidence; it will be richly rewarded.",
      "ref": "Hebrews 10:35 NIV"
    },
    {
      "text": "This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.",
      "ref": "1 John 5:14 NIV"
    },
    {
      "text": "being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.",
      "ref": "Philippians 1:6 NIV"
    },
    {
      "text": "Though an army besiege me, my heart will not fear; though war break out against me, even then I will be confident.",
      "ref": "Psalm 27:3 NIV"
    },
    {
      "text": "Such confidence we have through Christ before God. Not that we are competent in ourselves to claim anything for ourselves, but our competence comes from God.",
      "ref": "2 Corinthians 3:4-5 NIV"
    },
    {
      "text": "In him and through faith in him we may approach God with freedom and confidence.",
      "ref": "Ephesians 3:12 NIV"
    }
  ],
  "proud": [
    {
      "text": "But thanks be to God! He gives us the victory through our Lord Jesus Christ.",
      "ref": "1 Corinthians 15:57 NIV"
    },
    {
      "text": "No, in all these things we are more than conquerors through him who loved us.",
      "ref": "Romans 8:37 NIV"
    },
    {
      "text": "For the LORD your God is the one who goes with you to fight for you against your enemies to give you victory.\u201d",
      "ref": "Deuteronomy 20:4 NIV"
    },
    {
      "text": "But thanks be to God, who always leads us as captives in Christ\u2019s triumphal procession and uses us to spread the aroma of the knowledge of him everywhere.",
      "ref": "2 Corinthians 2:14 NIV"
    },
    {
      "text": "for everyone born of God overcomes the world. This is the victory that has overcome the world, even our faith.",
      "ref": "1 John 5:4 NIV"
    },
    {
      "text": "With God we will gain the victory, and he will trample down our enemies.",
      "ref": "Psalm 60:12 NIV"
    },
    {
      "text": "The horse is made ready for the day of battle, but victory rests with the LORD.",
      "ref": "Proverbs 21:31 NIV"
    },
    {
      "text": "Through you we push back our enemies; through your name we trample our foes.",
      "ref": "Psalm 44:5 NIV"
    }
  ],
  "respected": [
    {
      "text": "The LORD appeared to us in the past, saying: \u201cI have loved you with an everlasting love; I have drawn you with unfailing kindness.",
      "ref": "Jeremiah 31:3 NIV"
    },
    {
      "text": "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
      "ref": "Romans 8:38-39 NIV"
    },
    {
      "text": "See what great love the Father has lavished on us, that we should be called children of God! And that is what we are! The reason the world does not know us is that it did not know him.",
      "ref": "1 John 3:1 NIV"
    },
    {
      "text": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      "ref": "John 3:16 NIV"
    },
    {
      "text": "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.\u201d",
      "ref": "Zephaniah 3:17 NIV"
    },
    {
      "text": "This is how God showed his love among us: He sent his one and only Son into the world that we might live through him.",
      "ref": "1 John 4:9 NIV"
    },
    {
      "text": "But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions\u2014it is by grace you have been saved.",
      "ref": "Ephesians 2:4-5 NIV"
    },
    {
      "text": "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.",
      "ref": "Galatians 2:20 NIV"
    }
  ],
  "valued": [
    {
      "text": "The LORD appeared to us in the past, saying: \u201cI have loved you with an everlasting love; I have drawn you with unfailing kindness.",
      "ref": "Jeremiah 31:3 NIV"
    },
    {
      "text": "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
      "ref": "Romans 8:38-39 NIV"
    },
    {
      "text": "See what great love the Father has lavished on us, that we should be called children of God! And that is what we are! The reason the world does not know us is that it did not know him.",
      "ref": "1 John 3:1 NIV"
    },
    {
      "text": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      "ref": "John 3:16 NIV"
    },
    {
      "text": "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.\u201d",
      "ref": "Zephaniah 3:17 NIV"
    },
    {
      "text": "This is how God showed his love among us: He sent his one and only Son into the world that we might live through him.",
      "ref": "1 John 4:9 NIV"
    },
    {
      "text": "But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions\u2014it is by grace you have been saved.",
      "ref": "Ephesians 2:4-5 NIV"
    },
    {
      "text": "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.",
      "ref": "Galatians 2:20 NIV"
    }
  ],
  "accepted": [
    {
      "text": "The LORD appeared to us in the past, saying: \u201cI have loved you with an everlasting love; I have drawn you with unfailing kindness.",
      "ref": "Jeremiah 31:3 NIV"
    },
    {
      "text": "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
      "ref": "Romans 8:38-39 NIV"
    },
    {
      "text": "See what great love the Father has lavished on us, that we should be called children of God! And that is what we are! The reason the world does not know us is that it did not know him.",
      "ref": "1 John 3:1 NIV"
    },
    {
      "text": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      "ref": "John 3:16 NIV"
    },
    {
      "text": "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.\u201d",
      "ref": "Zephaniah 3:17 NIV"
    },
    {
      "text": "This is how God showed his love among us: He sent his one and only Son into the world that we might live through him.",
      "ref": "1 John 4:9 NIV"
    },
    {
      "text": "But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions\u2014it is by grace you have been saved.",
      "ref": "Ephesians 2:4-5 NIV"
    },
    {
      "text": "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.",
      "ref": "Galatians 2:20 NIV"
    }
  ],
  "courageous": [
    {
      "text": "Let us then approach God\u2019s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.",
      "ref": "Hebrews 4:16 NIV"
    },
    {
      "text": "for the LORD will be at your side and will keep your foot from being snared.",
      "ref": "Proverbs 3:26 NIV"
    },
    {
      "text": "So do not throw away your confidence; it will be richly rewarded.",
      "ref": "Hebrews 10:35 NIV"
    },
    {
      "text": "This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.",
      "ref": "1 John 5:14 NIV"
    },
    {
      "text": "being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.",
      "ref": "Philippians 1:6 NIV"
    },
    {
      "text": "Though an army besiege me, my heart will not fear; though war break out against me, even then I will be confident.",
      "ref": "Psalm 27:3 NIV"
    },
    {
      "text": "Such confidence we have through Christ before God. Not that we are competent in ourselves to claim anything for ourselves, but our competence comes from God.",
      "ref": "2 Corinthians 3:4-5 NIV"
    },
    {
      "text": "In him and through faith in him we may approach God with freedom and confidence.",
      "ref": "Ephesians 3:12 NIV"
    }
  ],
  "creative": [
    {
      "text": "I can do all this through him who gives me strength.",
      "ref": "Philippians 4:13 NIV"
    },
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    },
    {
      "text": "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters,",
      "ref": "Colossians 3:23 NIV"
    },
    {
      "text": "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
      "ref": "1 Corinthians 15:58 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "Then I heard the voice of the Lord saying, \u201cWhom shall I send? And who will go for us?\u201d And I said, \u201cHere am I. Send me!\u201d",
      "ref": "Isaiah 6:8 NIV"
    },
    {
      "text": "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      "ref": "Proverbs 3:5-6 NIV"
    }
  ],
  "powerful": [
    {
      "text": "But thanks be to God! He gives us the victory through our Lord Jesus Christ.",
      "ref": "1 Corinthians 15:57 NIV"
    },
    {
      "text": "No, in all these things we are more than conquerors through him who loved us.",
      "ref": "Romans 8:37 NIV"
    },
    {
      "text": "For the LORD your God is the one who goes with you to fight for you against your enemies to give you victory.\u201d",
      "ref": "Deuteronomy 20:4 NIV"
    },
    {
      "text": "But thanks be to God, who always leads us as captives in Christ\u2019s triumphal procession and uses us to spread the aroma of the knowledge of him everywhere.",
      "ref": "2 Corinthians 2:14 NIV"
    },
    {
      "text": "for everyone born of God overcomes the world. This is the victory that has overcome the world, even our faith.",
      "ref": "1 John 5:4 NIV"
    },
    {
      "text": "With God we will gain the victory, and he will trample down our enemies.",
      "ref": "Psalm 60:12 NIV"
    },
    {
      "text": "The horse is made ready for the day of battle, but victory rests with the LORD.",
      "ref": "Proverbs 21:31 NIV"
    },
    {
      "text": "Through you we push back our enemies; through your name we trample our foes.",
      "ref": "Psalm 44:5 NIV"
    }
  ],
  "loving": [
    {
      "text": "Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God.",
      "ref": "1 John 4:7 NIV"
    },
    {
      "text": "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
      "ref": "1 Corinthians 13:4 NIV"
    },
    {
      "text": "Dear friends, since God so loved us, we also ought to love one another.",
      "ref": "1 John 4:11 NIV"
    },
    {
      "text": "And over all these virtues put on love, which binds them all together in perfect unity.",
      "ref": "Colossians 3:14 NIV"
    },
    {
      "text": "\u201cA new command I give you: Love one another. As I have loved you, so you must love one another.",
      "ref": "John 13:34 NIV"
    },
    {
      "text": "Above all, love each other deeply, because love covers over a multitude of sins.",
      "ref": "1 Peter 4:8 NIV"
    },
    {
      "text": "Be devoted to one another in love. Honor one another above yourselves.",
      "ref": "Romans 12:10 NIV"
    },
    {
      "text": "Dear children, let us not love with words or speech but with actions and in truth.",
      "ref": "1 John 3:18 NIV"
    }
  ],
  "thankful": [
    {
      "text": "give thanks in all circumstances; for this is God\u2019s will for you in Christ Jesus.",
      "ref": "1 Thessalonians 5:18 NIV"
    },
    {
      "text": "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.",
      "ref": "Psalm 100:4 NIV"
    },
    {
      "text": "Give thanks to the LORD, for he is good; his love endures forever.",
      "ref": "Psalm 107:1 NIV"
    },
    {
      "text": "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.",
      "ref": "Colossians 3:15 NIV"
    },
    {
      "text": "always giving thanks to God the Father for everything, in the name of our Lord Jesus Christ.",
      "ref": "Ephesians 5:20 NIV"
    },
    {
      "text": "Through Jesus, therefore, let us continually offer to God a sacrifice of praise\u2014the fruit of lips that openly profess his name.",
      "ref": "Hebrews 13:15 NIV"
    },
    {
      "text": "Let us come before him with thanksgiving and extol him with music and song.",
      "ref": "Psalm 95:2 NIV"
    },
    {
      "text": "Devote yourselves to prayer, being watchful and thankful.",
      "ref": "Colossians 4:2 NIV"
    }
  ],
  "peaceful": [
    {
      "text": "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
      "ref": "Isaiah 26:3 NIV"
    },
    {
      "text": "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
      "ref": "John 14:27 NIV"
    },
    {
      "text": "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
      "ref": "Philippians 4:7 NIV"
    },
    {
      "text": "In peace I will lie down and sleep, for you alone, LORD, make me dwell in safety.",
      "ref": "Psalm 4:8 NIV"
    },
    {
      "text": "The LORD gives strength to his people; the LORD blesses his people with peace.",
      "ref": "Psalm 29:11 NIV"
    },
    {
      "text": "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.",
      "ref": "Colossians 3:15 NIV"
    },
    {
      "text": "Great peace have those who love your law, and nothing can make them stumble.",
      "ref": "Psalm 119:165 NIV"
    },
    {
      "text": "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ,",
      "ref": "Romans 5:1 NIV"
    }
  ],
  "sensitive": [
    {
      "text": "The LORD appeared to us in the past, saying: \u201cI have loved you with an everlasting love; I have drawn you with unfailing kindness.",
      "ref": "Jeremiah 31:3 NIV"
    },
    {
      "text": "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
      "ref": "Romans 8:38-39 NIV"
    },
    {
      "text": "See what great love the Father has lavished on us, that we should be called children of God! And that is what we are! The reason the world does not know us is that it did not know him.",
      "ref": "1 John 3:1 NIV"
    },
    {
      "text": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      "ref": "John 3:16 NIV"
    },
    {
      "text": "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.\u201d",
      "ref": "Zephaniah 3:17 NIV"
    },
    {
      "text": "This is how God showed his love among us: He sent his one and only Son into the world that we might live through him.",
      "ref": "1 John 4:9 NIV"
    },
    {
      "text": "But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions\u2014it is by grace you have been saved.",
      "ref": "Ephesians 2:4-5 NIV"
    },
    {
      "text": "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.",
      "ref": "Galatians 2:20 NIV"
    }
  ],
  "intimate": [
    {
      "text": "The LORD appeared to us in the past, saying: \u201cI have loved you with an everlasting love; I have drawn you with unfailing kindness.",
      "ref": "Jeremiah 31:3 NIV"
    },
    {
      "text": "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
      "ref": "Romans 8:38-39 NIV"
    },
    {
      "text": "See what great love the Father has lavished on us, that we should be called children of God! And that is what we are! The reason the world does not know us is that it did not know him.",
      "ref": "1 John 3:1 NIV"
    },
    {
      "text": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      "ref": "John 3:16 NIV"
    },
    {
      "text": "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.\u201d",
      "ref": "Zephaniah 3:17 NIV"
    },
    {
      "text": "This is how God showed his love among us: He sent his one and only Son into the world that we might live through him.",
      "ref": "1 John 4:9 NIV"
    },
    {
      "text": "But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions\u2014it is by grace you have been saved.",
      "ref": "Ephesians 2:4-5 NIV"
    },
    {
      "text": "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.",
      "ref": "Galatians 2:20 NIV"
    }
  ],
  "trusting": [
    {
      "text": "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the LORD, \u201cHe is my refuge and my fortress, my God, in whom I trust.\u201d",
      "ref": "Psalm 91:1-2 NIV"
    },
    {
      "text": "The name of the LORD is a fortified tower; the righteous run to it and are safe.",
      "ref": "Proverbs 18:10 NIV"
    },
    {
      "text": "The LORD will keep you from all harm\u2014 he will watch over your life; the LORD will watch over your coming and going both now and forevermore.",
      "ref": "Psalm 121:7-8 NIV"
    },
    {
      "text": "You are my hiding place; you will protect me from trouble and surround me with songs of deliverance.",
      "ref": "Psalm 32:7 NIV"
    },
    {
      "text": "Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.",
      "ref": "Proverbs 29:25 NIV"
    },
    {
      "text": "The eternal God is your refuge, and underneath are the everlasting arms. He will drive out your enemies before you, saying, \u2018Destroy them!\u2019",
      "ref": "Deuteronomy 33:27 NIV"
    },
    {
      "text": "A song. God is our refuge and strength, an ever-present help in trouble.",
      "ref": "Psalm 46:1 NIV"
    },
    {
      "text": "but whoever listens to me will live in safety and be at ease, without fear of harm.\u201d",
      "ref": "Proverbs 1:33 NIV"
    }
  ],
  "hopeful": [
    {
      "text": "For I know the plans I have for you,\u201d declares the LORD, \u201cplans to prosper you and not to harm you, plans to give you hope and a future.",
      "ref": "Jeremiah 29:11 NIV"
    },
    {
      "text": "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
      "ref": "Romans 15:13 NIV"
    },
    {
      "text": "We have this hope as an anchor for the soul, firm and secure. It enters the inner sanctuary behind the curtain,",
      "ref": "Hebrews 6:19 NIV"
    },
    {
      "text": "As for me, I will always have hope; I will praise you more and more.",
      "ref": "Psalm 71:14 NIV"
    },
    {
      "text": "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      "ref": "Isaiah 40:31 NIV"
    },
    {
      "text": "I say to myself, \u201cThe LORD is my portion; therefore I will wait for him.\u201d",
      "ref": "Lamentations 3:24 NIV"
    },
    {
      "text": "Be joyful in hope, patient in affliction, faithful in prayer.",
      "ref": "Romans 12:12 NIV"
    },
    {
      "text": "\u201cBut now, Lord, what do I look for? My hope is in you.",
      "ref": "Psalm 39:7 NIV"
    }
  ],
  "inspired": [
    {
      "text": "I can do all this through him who gives me strength.",
      "ref": "Philippians 4:13 NIV"
    },
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    },
    {
      "text": "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters,",
      "ref": "Colossians 3:23 NIV"
    },
    {
      "text": "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
      "ref": "1 Corinthians 15:58 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "Then I heard the voice of the Lord saying, \u201cWhom shall I send? And who will go for us?\u201d And I said, \u201cHere am I. Send me!\u201d",
      "ref": "Isaiah 6:8 NIV"
    },
    {
      "text": "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      "ref": "Proverbs 3:5-6 NIV"
    }
  ],
  "optimistic": [
    {
      "text": "For I know the plans I have for you,\u201d declares the LORD, \u201cplans to prosper you and not to harm you, plans to give you hope and a future.",
      "ref": "Jeremiah 29:11 NIV"
    },
    {
      "text": "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
      "ref": "Romans 15:13 NIV"
    },
    {
      "text": "We have this hope as an anchor for the soul, firm and secure. It enters the inner sanctuary behind the curtain,",
      "ref": "Hebrews 6:19 NIV"
    },
    {
      "text": "As for me, I will always have hope; I will praise you more and more.",
      "ref": "Psalm 71:14 NIV"
    },
    {
      "text": "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      "ref": "Isaiah 40:31 NIV"
    },
    {
      "text": "I say to myself, \u201cThe LORD is my portion; therefore I will wait for him.\u201d",
      "ref": "Lamentations 3:24 NIV"
    },
    {
      "text": "Be joyful in hope, patient in affliction, faithful in prayer.",
      "ref": "Romans 12:12 NIV"
    },
    {
      "text": "\u201cBut now, Lord, what do I look for? My hope is in you.",
      "ref": "Psalm 39:7 NIV"
    }
  ],
  "happy": [
    {
      "text": "The LORD has done it this very day; let us rejoice today and be glad.",
      "ref": "Psalm 118:24 NIV"
    },
    {
      "text": "You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand.",
      "ref": "Psalm 16:11 NIV"
    },
    {
      "text": "Nehemiah said, \u201cGo and enjoy choice food and sweet drinks, and send some to those who have nothing prepared. This day is holy to our Lord. Do not grieve, for the joy of the LORD is your strength.\u201d",
      "ref": "Nehemiah 8:10 NIV"
    },
    {
      "text": "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
      "ref": "Romans 15:13 NIV"
    },
    {
      "text": "The LORD is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.",
      "ref": "Psalm 28:7 NIV"
    },
    {
      "text": "Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy,",
      "ref": "1 Peter 1:8 NIV"
    },
    {
      "text": "I have told you this so that my joy may be in you and that your joy may be complete.",
      "ref": "John 15:11 NIV"
    },
    {
      "text": "For you make me glad by your deeds, LORD; I sing for joy at what your hands have done.",
      "ref": "Psalm 92:4 NIV"
    }
  ],
  "isolated": [
    {
      "text": "Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.\u201d",
      "ref": "Deuteronomy 31:6 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.\u201d",
      "ref": "Matthew 28:20 NIV"
    },
    {
      "text": "Though my father and mother forsake me, the LORD will receive me.",
      "ref": "Psalm 27:10 NIV"
    },
    {
      "text": "Keep your lives free from the love of money and be content with what you have, because God has said, \u201cNever will I leave you; never will I forsake you.\u201d",
      "ref": "Hebrews 13:5 NIV"
    },
    {
      "text": "Turn to me and be gracious to me, for I am lonely and afflicted.",
      "ref": "Psalm 25:16 NIV"
    },
    {
      "text": "I will not leave you as orphans; I will come to you.",
      "ref": "John 14:18 NIV"
    },
    {
      "text": "A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land.",
      "ref": "Psalm 68:5-6 NIV"
    }
  ],
  "abandoned": [
    {
      "text": "Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.\u201d",
      "ref": "Deuteronomy 31:6 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.\u201d",
      "ref": "Matthew 28:20 NIV"
    },
    {
      "text": "Though my father and mother forsake me, the LORD will receive me.",
      "ref": "Psalm 27:10 NIV"
    },
    {
      "text": "Keep your lives free from the love of money and be content with what you have, because God has said, \u201cNever will I leave you; never will I forsake you.\u201d",
      "ref": "Hebrews 13:5 NIV"
    },
    {
      "text": "Turn to me and be gracious to me, for I am lonely and afflicted.",
      "ref": "Psalm 25:16 NIV"
    },
    {
      "text": "I will not leave you as orphans; I will come to you.",
      "ref": "John 14:18 NIV"
    },
    {
      "text": "A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land.",
      "ref": "Psalm 68:5-6 NIV"
    }
  ],
  "lonely": [
    {
      "text": "Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.\u201d",
      "ref": "Deuteronomy 31:6 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.\u201d",
      "ref": "Matthew 28:20 NIV"
    },
    {
      "text": "Though my father and mother forsake me, the LORD will receive me.",
      "ref": "Psalm 27:10 NIV"
    },
    {
      "text": "Keep your lives free from the love of money and be content with what you have, because God has said, \u201cNever will I leave you; never will I forsake you.\u201d",
      "ref": "Hebrews 13:5 NIV"
    },
    {
      "text": "Turn to me and be gracious to me, for I am lonely and afflicted.",
      "ref": "Psalm 25:16 NIV"
    },
    {
      "text": "I will not leave you as orphans; I will come to you.",
      "ref": "John 14:18 NIV"
    },
    {
      "text": "A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land.",
      "ref": "Psalm 68:5-6 NIV"
    }
  ],
  "victimized": [
    {
      "text": "The LORD is close to the brokenhearted and saves those who are crushed in spirit.",
      "ref": "Psalm 34:18 NIV"
    },
    {
      "text": "He heals the brokenhearted and binds up their wounds.",
      "ref": "Psalm 147:3 NIV"
    },
    {
      "text": "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
      "ref": "Psalm 73:26 NIV"
    },
    {
      "text": "The Spirit of the Sovereign LORD is on me, because the LORD has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners,",
      "ref": "Isaiah 61:1 NIV"
    },
    {
      "text": "\u201cDo not let your hearts be troubled. You believe in God ; believe also in me.",
      "ref": "John 14:1 NIV"
    },
    {
      "text": "A bruised reed he will not break, and a smoldering wick he will not snuff out. In faithfulness he will bring forth justice;",
      "ref": "Isaiah 42:3 NIV"
    },
    {
      "text": "\u201cThe Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free,",
      "ref": "Luke 4:18 NIV"
    },
    {
      "text": "I wait for the LORD, my whole being waits, and in his word I put my hope.",
      "ref": "Psalm 130:5 NIV"
    }
  ],
  "fragile": [
    {
      "text": "The LORD is close to the brokenhearted and saves those who are crushed in spirit.",
      "ref": "Psalm 34:18 NIV"
    },
    {
      "text": "He heals the brokenhearted and binds up their wounds.",
      "ref": "Psalm 147:3 NIV"
    },
    {
      "text": "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
      "ref": "Psalm 73:26 NIV"
    },
    {
      "text": "The Spirit of the Sovereign LORD is on me, because the LORD has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners,",
      "ref": "Isaiah 61:1 NIV"
    },
    {
      "text": "\u201cDo not let your hearts be troubled. You believe in God ; believe also in me.",
      "ref": "John 14:1 NIV"
    },
    {
      "text": "A bruised reed he will not break, and a smoldering wick he will not snuff out. In faithfulness he will bring forth justice;",
      "ref": "Isaiah 42:3 NIV"
    },
    {
      "text": "\u201cThe Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free,",
      "ref": "Luke 4:18 NIV"
    },
    {
      "text": "I wait for the LORD, my whole being waits, and in his word I put my hope.",
      "ref": "Psalm 130:5 NIV"
    }
  ],
  "vulnerable": [
    {
      "text": "The LORD is close to the brokenhearted and saves those who are crushed in spirit.",
      "ref": "Psalm 34:18 NIV"
    },
    {
      "text": "He heals the brokenhearted and binds up their wounds.",
      "ref": "Psalm 147:3 NIV"
    },
    {
      "text": "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
      "ref": "Psalm 73:26 NIV"
    },
    {
      "text": "The Spirit of the Sovereign LORD is on me, because the LORD has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners,",
      "ref": "Isaiah 61:1 NIV"
    },
    {
      "text": "\u201cDo not let your hearts be troubled. You believe in God ; believe also in me.",
      "ref": "John 14:1 NIV"
    },
    {
      "text": "A bruised reed he will not break, and a smoldering wick he will not snuff out. In faithfulness he will bring forth justice;",
      "ref": "Isaiah 42:3 NIV"
    },
    {
      "text": "\u201cThe Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free,",
      "ref": "Luke 4:18 NIV"
    },
    {
      "text": "I wait for the LORD, my whole being waits, and in his word I put my hope.",
      "ref": "Psalm 130:5 NIV"
    }
  ],
  "grief": [
    {
      "text": "Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope.",
      "ref": "1 Thessalonians 4:13 NIV"
    },
    {
      "text": "\u2018He will wipe every tear from their eyes. There will be no more death\u2019 or mourning or crying or pain, for the old order of things has passed away.\u201d",
      "ref": "Revelation 21:4 NIV"
    },
    {
      "text": "Blessed are those who mourn, for they will be comforted.",
      "ref": "Matthew 5:4 NIV"
    },
    {
      "text": "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
      "ref": "Psalm 23:4 NIV"
    },
    {
      "text": "Precious in the sight of the LORD is the death of his faithful servants.",
      "ref": "Psalm 116:15 NIV"
    },
    {
      "text": "Though he brings grief, he will show compassion, so great is his unfailing love.",
      "ref": "Lamentations 3:32 NIV"
    },
    {
      "text": "So with you: Now is your time of grief, but I will see you again and you will rejoice, and no one will take away your joy.",
      "ref": "John 16:22 NIV"
    },
    {
      "text": "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
      "ref": "Romans 8:38-39 NIV"
    }
  ],
  "powerless": [
    {
      "text": "From the ends of the earth I call to you, I call as my heart grows faint; lead me to the rock that is higher than I.",
      "ref": "Psalm 61:2 NIV"
    },
    {
      "text": "A song. God is our refuge and strength, an ever-present help in trouble.",
      "ref": "Psalm 46:1 NIV"
    },
    {
      "text": "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
      "ref": "Isaiah 43:2 NIV"
    },
    {
      "text": "Because of the LORD\u2019s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
      "ref": "Lamentations 3:22-23 NIV"
    },
    {
      "text": "Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
      "ref": "Matthew 11:29 NIV"
    },
    {
      "text": "The LORD will fight for you; you need only to be still.\u201d",
      "ref": "Exodus 14:14 NIV"
    },
    {
      "text": "When my spirit grows faint within me, it is you who watch over my way. In the path where I walk people have hidden a snare for me.",
      "ref": "Psalm 142:3 NIV"
    },
    {
      "text": "My soul is weary with sorrow; strengthen me according to your word.",
      "ref": "Psalm 119:28 NIV"
    }
  ],
  "despair": [
    {
      "text": "Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope.",
      "ref": "1 Thessalonians 4:13 NIV"
    },
    {
      "text": "\u2018He will wipe every tear from their eyes. There will be no more death\u2019 or mourning or crying or pain, for the old order of things has passed away.\u201d",
      "ref": "Revelation 21:4 NIV"
    },
    {
      "text": "Blessed are those who mourn, for they will be comforted.",
      "ref": "Matthew 5:4 NIV"
    },
    {
      "text": "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
      "ref": "Psalm 23:4 NIV"
    },
    {
      "text": "Precious in the sight of the LORD is the death of his faithful servants.",
      "ref": "Psalm 116:15 NIV"
    },
    {
      "text": "Though he brings grief, he will show compassion, so great is his unfailing love.",
      "ref": "Lamentations 3:32 NIV"
    },
    {
      "text": "So with you: Now is your time of grief, but I will see you again and you will rejoice, and no one will take away your joy.",
      "ref": "John 16:22 NIV"
    },
    {
      "text": "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
      "ref": "Romans 8:38-39 NIV"
    }
  ],
  "ashamed": [
    {
      "text": "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
      "ref": "1 John 1:9 NIV"
    },
    {
      "text": "as far as the east is from the west, so far has he removed our transgressions from us.",
      "ref": "Psalm 103:12 NIV"
    },
    {
      "text": "\u201cCome now, let us settle the matter,\u201d says the LORD. \u201cThough your sins are like scarlet, they shall be as white as snow; though they are red as crimson, they shall be like wool.",
      "ref": "Isaiah 1:18 NIV"
    },
    {
      "text": "Therefore, there is now no condemnation for those who are in Christ Jesus,",
      "ref": "Romans 8:1 NIV"
    },
    {
      "text": "Then I acknowledged my sin to you and did not cover up my iniquity. I said, \u201cI will confess my transgressions to the LORD.\u201d And you forgave the guilt of my sin.",
      "ref": "Psalm 32:5 NIV"
    },
    {
      "text": "You will again have compassion on us; you will tread our sins underfoot and hurl all our iniquities into the depths of the sea.",
      "ref": "Micah 7:19 NIV"
    },
    {
      "text": "For I will forgive their wickedness and will remember their sins no more.\u201d",
      "ref": "Hebrews 8:12 NIV"
    },
    {
      "text": "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
      "ref": "2 Corinthians 5:17 NIV"
    }
  ],
  "remorseful": [
    {
      "text": "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
      "ref": "1 John 1:9 NIV"
    },
    {
      "text": "as far as the east is from the west, so far has he removed our transgressions from us.",
      "ref": "Psalm 103:12 NIV"
    },
    {
      "text": "\u201cCome now, let us settle the matter,\u201d says the LORD. \u201cThough your sins are like scarlet, they shall be as white as snow; though they are red as crimson, they shall be like wool.",
      "ref": "Isaiah 1:18 NIV"
    },
    {
      "text": "Therefore, there is now no condemnation for those who are in Christ Jesus,",
      "ref": "Romans 8:1 NIV"
    },
    {
      "text": "Then I acknowledged my sin to you and did not cover up my iniquity. I said, \u201cI will confess my transgressions to the LORD.\u201d And you forgave the guilt of my sin.",
      "ref": "Psalm 32:5 NIV"
    },
    {
      "text": "You will again have compassion on us; you will tread our sins underfoot and hurl all our iniquities into the depths of the sea.",
      "ref": "Micah 7:19 NIV"
    },
    {
      "text": "For I will forgive their wickedness and will remember their sins no more.\u201d",
      "ref": "Hebrews 8:12 NIV"
    },
    {
      "text": "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
      "ref": "2 Corinthians 5:17 NIV"
    }
  ],
  "guilty": [
    {
      "text": "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
      "ref": "1 John 1:9 NIV"
    },
    {
      "text": "as far as the east is from the west, so far has he removed our transgressions from us.",
      "ref": "Psalm 103:12 NIV"
    },
    {
      "text": "\u201cCome now, let us settle the matter,\u201d says the LORD. \u201cThough your sins are like scarlet, they shall be as white as snow; though they are red as crimson, they shall be like wool.",
      "ref": "Isaiah 1:18 NIV"
    },
    {
      "text": "Therefore, there is now no condemnation for those who are in Christ Jesus,",
      "ref": "Romans 8:1 NIV"
    },
    {
      "text": "Then I acknowledged my sin to you and did not cover up my iniquity. I said, \u201cI will confess my transgressions to the LORD.\u201d And you forgave the guilt of my sin.",
      "ref": "Psalm 32:5 NIV"
    },
    {
      "text": "You will again have compassion on us; you will tread our sins underfoot and hurl all our iniquities into the depths of the sea.",
      "ref": "Micah 7:19 NIV"
    },
    {
      "text": "For I will forgive their wickedness and will remember their sins no more.\u201d",
      "ref": "Hebrews 8:12 NIV"
    },
    {
      "text": "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
      "ref": "2 Corinthians 5:17 NIV"
    }
  ],
  "empty": [
    {
      "text": "\u201cI have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.\u201d",
      "ref": "John 16:33 NIV"
    },
    {
      "text": "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      "ref": "Romans 8:28 NIV"
    },
    {
      "text": "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
      "ref": "Isaiah 41:10 NIV"
    },
    {
      "text": "who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.",
      "ref": "2 Corinthians 1:4 NIV"
    },
    {
      "text": "Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.",
      "ref": "Psalm 42:5 NIV"
    },
    {
      "text": "Those who sow with tears will reap with songs of joy.",
      "ref": "Psalm 126:5 NIV"
    },
    {
      "text": "For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning.",
      "ref": "Psalm 30:5 NIV"
    },
    {
      "text": "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.\u201d",
      "ref": "Zephaniah 3:17 NIV"
    }
  ],
  "inferior": [
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "But the LORD said to Samuel, \u201cDo not consider his appearance or his height, for I have rejected him. The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.\u201d",
      "ref": "1 Samuel 16:7 NIV"
    },
    {
      "text": "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
      "ref": "1 John 4:18 NIV"
    },
    {
      "text": "\u201cBefore I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.\u201d",
      "ref": "Jeremiah 1:5 NIV"
    },
    {
      "text": "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\u2019s will is\u2014his good, pleasing and perfect will.",
      "ref": "Romans 12:2 NIV"
    },
    {
      "text": "But you are a chosen people, a royal priesthood, a holy nation, God\u2019s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
      "ref": "1 Peter 2:9 NIV"
    },
    {
      "text": "Are not five sparrows sold for two pennies? Yet not one of them is forgotten by God. Indeed, the very hairs of your head are all numbered. Don\u2019t be afraid; you are worth more than many sparrows.",
      "ref": "Luke 12:6-7 NIV"
    }
  ],
  "depressed": [
    {
      "text": "\u201cI have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.\u201d",
      "ref": "John 16:33 NIV"
    },
    {
      "text": "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      "ref": "Romans 8:28 NIV"
    },
    {
      "text": "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
      "ref": "Isaiah 41:10 NIV"
    },
    {
      "text": "who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.",
      "ref": "2 Corinthians 1:4 NIV"
    },
    {
      "text": "Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.",
      "ref": "Psalm 42:5 NIV"
    },
    {
      "text": "Those who sow with tears will reap with songs of joy.",
      "ref": "Psalm 126:5 NIV"
    },
    {
      "text": "For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning.",
      "ref": "Psalm 30:5 NIV"
    },
    {
      "text": "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.\u201d",
      "ref": "Zephaniah 3:17 NIV"
    }
  ],
  "disappointed": [
    {
      "text": "The LORD is close to the brokenhearted and saves those who are crushed in spirit.",
      "ref": "Psalm 34:18 NIV"
    },
    {
      "text": "He heals the brokenhearted and binds up their wounds.",
      "ref": "Psalm 147:3 NIV"
    },
    {
      "text": "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
      "ref": "Psalm 73:26 NIV"
    },
    {
      "text": "The Spirit of the Sovereign LORD is on me, because the LORD has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners,",
      "ref": "Isaiah 61:1 NIV"
    },
    {
      "text": "\u201cDo not let your hearts be troubled. You believe in God ; believe also in me.",
      "ref": "John 14:1 NIV"
    },
    {
      "text": "A bruised reed he will not break, and a smoldering wick he will not snuff out. In faithfulness he will bring forth justice;",
      "ref": "Isaiah 42:3 NIV"
    },
    {
      "text": "\u201cThe Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free,",
      "ref": "Luke 4:18 NIV"
    },
    {
      "text": "I wait for the LORD, my whole being waits, and in his word I put my hope.",
      "ref": "Psalm 130:5 NIV"
    }
  ],
  "embarrassed": [
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "But the LORD said to Samuel, \u201cDo not consider his appearance or his height, for I have rejected him. The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.\u201d",
      "ref": "1 Samuel 16:7 NIV"
    },
    {
      "text": "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
      "ref": "1 John 4:18 NIV"
    },
    {
      "text": "\u201cBefore I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.\u201d",
      "ref": "Jeremiah 1:5 NIV"
    },
    {
      "text": "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\u2019s will is\u2014his good, pleasing and perfect will.",
      "ref": "Romans 12:2 NIV"
    },
    {
      "text": "But you are a chosen people, a royal priesthood, a holy nation, God\u2019s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
      "ref": "1 Peter 2:9 NIV"
    },
    {
      "text": "Are not five sparrows sold for two pennies? Yet not one of them is forgotten by God. Indeed, the very hairs of your head are all numbered. Don\u2019t be afraid; you are worth more than many sparrows.",
      "ref": "Luke 12:6-7 NIV"
    }
  ],
  "hurt": [
    {
      "text": "The LORD is close to the brokenhearted and saves those who are crushed in spirit.",
      "ref": "Psalm 34:18 NIV"
    },
    {
      "text": "He heals the brokenhearted and binds up their wounds.",
      "ref": "Psalm 147:3 NIV"
    },
    {
      "text": "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
      "ref": "Psalm 73:26 NIV"
    },
    {
      "text": "The Spirit of the Sovereign LORD is on me, because the LORD has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners,",
      "ref": "Isaiah 61:1 NIV"
    },
    {
      "text": "\u201cDo not let your hearts be troubled. You believe in God ; believe also in me.",
      "ref": "John 14:1 NIV"
    },
    {
      "text": "A bruised reed he will not break, and a smoldering wick he will not snuff out. In faithfulness he will bring forth justice;",
      "ref": "Isaiah 42:3 NIV"
    },
    {
      "text": "\u201cThe Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free,",
      "ref": "Luke 4:18 NIV"
    },
    {
      "text": "I wait for the LORD, my whole being waits, and in his word I put my hope.",
      "ref": "Psalm 130:5 NIV"
    }
  ],
  "sad": [
    {
      "text": "\u201cI have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.\u201d",
      "ref": "John 16:33 NIV"
    },
    {
      "text": "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      "ref": "Romans 8:28 NIV"
    },
    {
      "text": "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
      "ref": "Isaiah 41:10 NIV"
    },
    {
      "text": "who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.",
      "ref": "2 Corinthians 1:4 NIV"
    },
    {
      "text": "Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.",
      "ref": "Psalm 42:5 NIV"
    },
    {
      "text": "Those who sow with tears will reap with songs of joy.",
      "ref": "Psalm 126:5 NIV"
    },
    {
      "text": "For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning.",
      "ref": "Psalm 30:5 NIV"
    },
    {
      "text": "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.\u201d",
      "ref": "Zephaniah 3:17 NIV"
    }
  ],
  "judgmental": [
    {
      "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      "ref": "Proverbs 15:1 NIV"
    },
    {
      "text": "\u201cIn your anger do not sin\u201d: Do not let the sun go down while you are still angry,",
      "ref": "Ephesians 4:26 NIV"
    },
    {
      "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,",
      "ref": "James 1:19 NIV"
    },
    {
      "text": "Fools give full vent to their rage, but the wise bring calm in the end.",
      "ref": "Proverbs 29:11 NIV"
    },
    {
      "text": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      "ref": "Ecclesiastes 7:9 NIV"
    },
    {
      "text": "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
      "ref": "Proverbs 14:29 NIV"
    },
    {
      "text": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.",
      "ref": "Colossians 3:8 NIV"
    },
    {
      "text": "Refrain from anger and turn from wrath; do not fret\u2014it leads only to evil.",
      "ref": "Psalm 37:8 NIV"
    }
  ],
  "embarrassed_disgusted": [
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "But the LORD said to Samuel, \u201cDo not consider his appearance or his height, for I have rejected him. The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.\u201d",
      "ref": "1 Samuel 16:7 NIV"
    },
    {
      "text": "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
      "ref": "1 John 4:18 NIV"
    },
    {
      "text": "\u201cBefore I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.\u201d",
      "ref": "Jeremiah 1:5 NIV"
    },
    {
      "text": "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\u2019s will is\u2014his good, pleasing and perfect will.",
      "ref": "Romans 12:2 NIV"
    },
    {
      "text": "But you are a chosen people, a royal priesthood, a holy nation, God\u2019s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
      "ref": "1 Peter 2:9 NIV"
    },
    {
      "text": "Are not five sparrows sold for two pennies? Yet not one of them is forgotten by God. Indeed, the very hairs of your head are all numbered. Don\u2019t be afraid; you are worth more than many sparrows.",
      "ref": "Luke 12:6-7 NIV"
    }
  ],
  "disapproving": [
    {
      "text": "See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many.",
      "ref": "Hebrews 12:15 NIV"
    },
    {
      "text": "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice.",
      "ref": "Ephesians 4:31 NIV"
    },
    {
      "text": "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
      "ref": "Ephesians 4:32 NIV"
    },
    {
      "text": "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.",
      "ref": "Colossians 3:13 NIV"
    },
    {
      "text": "But if you harbor bitter envy and selfish ambition in your hearts, do not boast about it or deny the truth.",
      "ref": "James 3:14 NIV"
    },
    {
      "text": "For if you forgive other people when they sin against you, your heavenly Father will also forgive you.",
      "ref": "Matthew 6:14 NIV"
    },
    {
      "text": "Do not repay anyone evil for evil. Be careful to do what is right in the eyes of everyone.",
      "ref": "Romans 12:17 NIV"
    },
    {
      "text": "Each heart knows its own bitterness, and no one else can share its joy.",
      "ref": "Proverbs 14:10 NIV"
    }
  ],
  "appalled": [
    {
      "text": "See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many.",
      "ref": "Hebrews 12:15 NIV"
    },
    {
      "text": "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice.",
      "ref": "Ephesians 4:31 NIV"
    },
    {
      "text": "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
      "ref": "Ephesians 4:32 NIV"
    },
    {
      "text": "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.",
      "ref": "Colossians 3:13 NIV"
    },
    {
      "text": "But if you harbor bitter envy and selfish ambition in your hearts, do not boast about it or deny the truth.",
      "ref": "James 3:14 NIV"
    },
    {
      "text": "For if you forgive other people when they sin against you, your heavenly Father will also forgive you.",
      "ref": "Matthew 6:14 NIV"
    },
    {
      "text": "Do not repay anyone evil for evil. Be careful to do what is right in the eyes of everyone.",
      "ref": "Romans 12:17 NIV"
    },
    {
      "text": "Each heart knows its own bitterness, and no one else can share its joy.",
      "ref": "Proverbs 14:10 NIV"
    }
  ],
  "revolted": [
    {
      "text": "See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many.",
      "ref": "Hebrews 12:15 NIV"
    },
    {
      "text": "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice.",
      "ref": "Ephesians 4:31 NIV"
    },
    {
      "text": "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
      "ref": "Ephesians 4:32 NIV"
    },
    {
      "text": "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.",
      "ref": "Colossians 3:13 NIV"
    },
    {
      "text": "But if you harbor bitter envy and selfish ambition in your hearts, do not boast about it or deny the truth.",
      "ref": "James 3:14 NIV"
    },
    {
      "text": "For if you forgive other people when they sin against you, your heavenly Father will also forgive you.",
      "ref": "Matthew 6:14 NIV"
    },
    {
      "text": "Do not repay anyone evil for evil. Be careful to do what is right in the eyes of everyone.",
      "ref": "Romans 12:17 NIV"
    },
    {
      "text": "Each heart knows its own bitterness, and no one else can share its joy.",
      "ref": "Proverbs 14:10 NIV"
    }
  ],
  "disappointed_disgusted": [
    {
      "text": "The LORD is close to the brokenhearted and saves those who are crushed in spirit.",
      "ref": "Psalm 34:18 NIV"
    },
    {
      "text": "He heals the brokenhearted and binds up their wounds.",
      "ref": "Psalm 147:3 NIV"
    },
    {
      "text": "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
      "ref": "Psalm 73:26 NIV"
    },
    {
      "text": "The Spirit of the Sovereign LORD is on me, because the LORD has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners,",
      "ref": "Isaiah 61:1 NIV"
    },
    {
      "text": "\u201cDo not let your hearts be troubled. You believe in God ; believe also in me.",
      "ref": "John 14:1 NIV"
    },
    {
      "text": "A bruised reed he will not break, and a smoldering wick he will not snuff out. In faithfulness he will bring forth justice;",
      "ref": "Isaiah 42:3 NIV"
    },
    {
      "text": "\u201cThe Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free,",
      "ref": "Luke 4:18 NIV"
    },
    {
      "text": "I wait for the LORD, my whole being waits, and in his word I put my hope.",
      "ref": "Psalm 130:5 NIV"
    }
  ],
  "nauseated": [
    {
      "text": "From the ends of the earth I call to you, I call as my heart grows faint; lead me to the rock that is higher than I.",
      "ref": "Psalm 61:2 NIV"
    },
    {
      "text": "A song. God is our refuge and strength, an ever-present help in trouble.",
      "ref": "Psalm 46:1 NIV"
    },
    {
      "text": "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
      "ref": "Isaiah 43:2 NIV"
    },
    {
      "text": "Because of the LORD\u2019s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
      "ref": "Lamentations 3:22-23 NIV"
    },
    {
      "text": "Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
      "ref": "Matthew 11:29 NIV"
    },
    {
      "text": "The LORD will fight for you; you need only to be still.\u201d",
      "ref": "Exodus 14:14 NIV"
    },
    {
      "text": "When my spirit grows faint within me, it is you who watch over my way. In the path where I walk people have hidden a snare for me.",
      "ref": "Psalm 142:3 NIV"
    },
    {
      "text": "My soul is weary with sorrow; strengthen me according to your word.",
      "ref": "Psalm 119:28 NIV"
    }
  ],
  "detestable": [
    {
      "text": "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
      "ref": "1 John 1:9 NIV"
    },
    {
      "text": "as far as the east is from the west, so far has he removed our transgressions from us.",
      "ref": "Psalm 103:12 NIV"
    },
    {
      "text": "\u201cCome now, let us settle the matter,\u201d says the LORD. \u201cThough your sins are like scarlet, they shall be as white as snow; though they are red as crimson, they shall be like wool.",
      "ref": "Isaiah 1:18 NIV"
    },
    {
      "text": "Therefore, there is now no condemnation for those who are in Christ Jesus,",
      "ref": "Romans 8:1 NIV"
    },
    {
      "text": "Then I acknowledged my sin to you and did not cover up my iniquity. I said, \u201cI will confess my transgressions to the LORD.\u201d And you forgave the guilt of my sin.",
      "ref": "Psalm 32:5 NIV"
    },
    {
      "text": "You will again have compassion on us; you will tread our sins underfoot and hurl all our iniquities into the depths of the sea.",
      "ref": "Micah 7:19 NIV"
    },
    {
      "text": "For I will forgive their wickedness and will remember their sins no more.\u201d",
      "ref": "Hebrews 8:12 NIV"
    },
    {
      "text": "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
      "ref": "2 Corinthians 5:17 NIV"
    }
  ],
  "awful": [
    {
      "text": "\u201cI have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.\u201d",
      "ref": "John 16:33 NIV"
    },
    {
      "text": "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      "ref": "Romans 8:28 NIV"
    },
    {
      "text": "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
      "ref": "Isaiah 41:10 NIV"
    },
    {
      "text": "who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.",
      "ref": "2 Corinthians 1:4 NIV"
    },
    {
      "text": "Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.",
      "ref": "Psalm 42:5 NIV"
    },
    {
      "text": "Those who sow with tears will reap with songs of joy.",
      "ref": "Psalm 126:5 NIV"
    },
    {
      "text": "For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning.",
      "ref": "Psalm 30:5 NIV"
    },
    {
      "text": "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.\u201d",
      "ref": "Zephaniah 3:17 NIV"
    }
  ],
  "horrified": [
    {
      "text": "The LORD is my light and my salvation\u2014 whom shall I fear? The LORD is the stronghold of my life\u2014 of whom shall I be afraid?",
      "ref": "Psalm 27:1 NIV"
    },
    {
      "text": "When I am afraid, I put my trust in you.",
      "ref": "Psalm 56:3 NIV"
    },
    {
      "text": "I sought the LORD, and he answered me; he delivered me from all my fears.",
      "ref": "Psalm 34:4 NIV"
    },
    {
      "text": "Do not be afraid of them; the LORD your God himself will fight for you.\u201d",
      "ref": "Deuteronomy 3:22 NIV"
    },
    {
      "text": "The LORD is with me; I will not be afraid. What can mere mortals do to me?",
      "ref": "Psalm 118:6 NIV"
    },
    {
      "text": "Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.",
      "ref": "Proverbs 29:25 NIV"
    },
    {
      "text": "But now, this is what the LORD says\u2014 he who created you, Jacob, he who formed you, Israel: \u201cDo not fear, for I have redeemed you; I have summoned you by name; you are mine.",
      "ref": "Isaiah 43:1 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    }
  ],
  "hesitant": [
    {
      "text": "But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind.",
      "ref": "James 1:6 NIV"
    },
    {
      "text": "Immediately the boy\u2019s father exclaimed, \u201cI do believe; help me overcome my unbelief!\u201d",
      "ref": "Mark 9:24 NIV"
    },
    {
      "text": "Trust in the LORD with all your heart and lean not on your own understanding;",
      "ref": "Proverbs 3:5 NIV"
    },
    {
      "text": "Now faith is confidence in what we hope for and assurance about what we do not see.",
      "ref": "Hebrews 11:1 NIV"
    },
    {
      "text": "Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.",
      "ref": "Romans 10:17 NIV"
    },
    {
      "text": "Jesus replied, \u201cTruly I tell you, if you have faith and do not doubt, not only can you do what was done to the fig tree, but also you can say to this mountain, \u2018Go, throw yourself into the sea,\u2019 and it will be done.",
      "ref": "Matthew 21:21 NIV"
    },
    {
      "text": "Yet he did not waver through unbelief regarding the promise of God, but was strengthened in his faith and gave glory to God,",
      "ref": "Romans 4:20 NIV"
    },
    {
      "text": "This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.",
      "ref": "1 John 5:14 NIV"
    }
  ],
  "repelled": [
    {
      "text": "The LORD is my light and my salvation\u2014 whom shall I fear? The LORD is the stronghold of my life\u2014 of whom shall I be afraid?",
      "ref": "Psalm 27:1 NIV"
    },
    {
      "text": "When I am afraid, I put my trust in you.",
      "ref": "Psalm 56:3 NIV"
    },
    {
      "text": "I sought the LORD, and he answered me; he delivered me from all my fears.",
      "ref": "Psalm 34:4 NIV"
    },
    {
      "text": "Do not be afraid of them; the LORD your God himself will fight for you.\u201d",
      "ref": "Deuteronomy 3:22 NIV"
    },
    {
      "text": "The LORD is with me; I will not be afraid. What can mere mortals do to me?",
      "ref": "Psalm 118:6 NIV"
    },
    {
      "text": "Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.",
      "ref": "Proverbs 29:25 NIV"
    },
    {
      "text": "But now, this is what the LORD says\u2014 he who created you, Jacob, he who formed you, Israel: \u201cDo not fear, for I have redeemed you; I have summoned you by name; you are mine.",
      "ref": "Isaiah 43:1 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    }
  ],
  "disgusted": [
    {
      "text": "See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many.",
      "ref": "Hebrews 12:15 NIV"
    },
    {
      "text": "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice.",
      "ref": "Ephesians 4:31 NIV"
    },
    {
      "text": "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
      "ref": "Ephesians 4:32 NIV"
    },
    {
      "text": "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.",
      "ref": "Colossians 3:13 NIV"
    },
    {
      "text": "But if you harbor bitter envy and selfish ambition in your hearts, do not boast about it or deny the truth.",
      "ref": "James 3:14 NIV"
    },
    {
      "text": "For if you forgive other people when they sin against you, your heavenly Father will also forgive you.",
      "ref": "Matthew 6:14 NIV"
    },
    {
      "text": "Do not repay anyone evil for evil. Be careful to do what is right in the eyes of everyone.",
      "ref": "Romans 12:17 NIV"
    },
    {
      "text": "Each heart knows its own bitterness, and no one else can share its joy.",
      "ref": "Proverbs 14:10 NIV"
    }
  ],
  "dismissive": [
    {
      "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      "ref": "Proverbs 15:1 NIV"
    },
    {
      "text": "\u201cIn your anger do not sin\u201d: Do not let the sun go down while you are still angry,",
      "ref": "Ephesians 4:26 NIV"
    },
    {
      "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,",
      "ref": "James 1:19 NIV"
    },
    {
      "text": "Fools give full vent to their rage, but the wise bring calm in the end.",
      "ref": "Proverbs 29:11 NIV"
    },
    {
      "text": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      "ref": "Ecclesiastes 7:9 NIV"
    },
    {
      "text": "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
      "ref": "Proverbs 14:29 NIV"
    },
    {
      "text": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.",
      "ref": "Colossians 3:8 NIV"
    },
    {
      "text": "Refrain from anger and turn from wrath; do not fret\u2014it leads only to evil.",
      "ref": "Psalm 37:8 NIV"
    }
  ],
  "skeptical": [
    {
      "text": "But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind.",
      "ref": "James 1:6 NIV"
    },
    {
      "text": "Immediately the boy\u2019s father exclaimed, \u201cI do believe; help me overcome my unbelief!\u201d",
      "ref": "Mark 9:24 NIV"
    },
    {
      "text": "Trust in the LORD with all your heart and lean not on your own understanding;",
      "ref": "Proverbs 3:5 NIV"
    },
    {
      "text": "Now faith is confidence in what we hope for and assurance about what we do not see.",
      "ref": "Hebrews 11:1 NIV"
    },
    {
      "text": "Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.",
      "ref": "Romans 10:17 NIV"
    },
    {
      "text": "Jesus replied, \u201cTruly I tell you, if you have faith and do not doubt, not only can you do what was done to the fig tree, but also you can say to this mountain, \u2018Go, throw yourself into the sea,\u2019 and it will be done.",
      "ref": "Matthew 21:21 NIV"
    },
    {
      "text": "Yet he did not waver through unbelief regarding the promise of God, but was strengthened in his faith and gave glory to God,",
      "ref": "Romans 4:20 NIV"
    },
    {
      "text": "This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.",
      "ref": "1 John 5:14 NIV"
    }
  ],
  "critical": [
    {
      "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      "ref": "Proverbs 15:1 NIV"
    },
    {
      "text": "\u201cIn your anger do not sin\u201d: Do not let the sun go down while you are still angry,",
      "ref": "Ephesians 4:26 NIV"
    },
    {
      "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,",
      "ref": "James 1:19 NIV"
    },
    {
      "text": "Fools give full vent to their rage, but the wise bring calm in the end.",
      "ref": "Proverbs 29:11 NIV"
    },
    {
      "text": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      "ref": "Ecclesiastes 7:9 NIV"
    },
    {
      "text": "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
      "ref": "Proverbs 14:29 NIV"
    },
    {
      "text": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.",
      "ref": "Colossians 3:8 NIV"
    },
    {
      "text": "Refrain from anger and turn from wrath; do not fret\u2014it leads only to evil.",
      "ref": "Psalm 37:8 NIV"
    }
  ],
  "numb": [
    {
      "text": "\u201cI have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.\u201d",
      "ref": "John 16:33 NIV"
    },
    {
      "text": "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      "ref": "Romans 8:28 NIV"
    },
    {
      "text": "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
      "ref": "Isaiah 41:10 NIV"
    },
    {
      "text": "who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.",
      "ref": "2 Corinthians 1:4 NIV"
    },
    {
      "text": "Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.",
      "ref": "Psalm 42:5 NIV"
    },
    {
      "text": "Those who sow with tears will reap with songs of joy.",
      "ref": "Psalm 126:5 NIV"
    },
    {
      "text": "For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning.",
      "ref": "Psalm 30:5 NIV"
    },
    {
      "text": "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.\u201d",
      "ref": "Zephaniah 3:17 NIV"
    }
  ],
  "withdrawn": [
    {
      "text": "Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.\u201d",
      "ref": "Deuteronomy 31:6 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.\u201d",
      "ref": "Matthew 28:20 NIV"
    },
    {
      "text": "Though my father and mother forsake me, the LORD will receive me.",
      "ref": "Psalm 27:10 NIV"
    },
    {
      "text": "Keep your lives free from the love of money and be content with what you have, because God has said, \u201cNever will I leave you; never will I forsake you.\u201d",
      "ref": "Hebrews 13:5 NIV"
    },
    {
      "text": "Turn to me and be gracious to me, for I am lonely and afflicted.",
      "ref": "Psalm 25:16 NIV"
    },
    {
      "text": "I will not leave you as orphans; I will come to you.",
      "ref": "John 14:18 NIV"
    },
    {
      "text": "A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land.",
      "ref": "Psalm 68:5-6 NIV"
    }
  ],
  "distant": [
    {
      "text": "Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.\u201d",
      "ref": "Deuteronomy 31:6 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.\u201d",
      "ref": "Matthew 28:20 NIV"
    },
    {
      "text": "Though my father and mother forsake me, the LORD will receive me.",
      "ref": "Psalm 27:10 NIV"
    },
    {
      "text": "Keep your lives free from the love of money and be content with what you have, because God has said, \u201cNever will I leave you; never will I forsake you.\u201d",
      "ref": "Hebrews 13:5 NIV"
    },
    {
      "text": "Turn to me and be gracious to me, for I am lonely and afflicted.",
      "ref": "Psalm 25:16 NIV"
    },
    {
      "text": "I will not leave you as orphans; I will come to you.",
      "ref": "John 14:18 NIV"
    },
    {
      "text": "A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land.",
      "ref": "Psalm 68:5-6 NIV"
    }
  ],
  "annoyed": [
    {
      "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      "ref": "Proverbs 15:1 NIV"
    },
    {
      "text": "\u201cIn your anger do not sin\u201d: Do not let the sun go down while you are still angry,",
      "ref": "Ephesians 4:26 NIV"
    },
    {
      "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,",
      "ref": "James 1:19 NIV"
    },
    {
      "text": "Fools give full vent to their rage, but the wise bring calm in the end.",
      "ref": "Proverbs 29:11 NIV"
    },
    {
      "text": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      "ref": "Ecclesiastes 7:9 NIV"
    },
    {
      "text": "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
      "ref": "Proverbs 14:29 NIV"
    },
    {
      "text": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.",
      "ref": "Colossians 3:8 NIV"
    },
    {
      "text": "Refrain from anger and turn from wrath; do not fret\u2014it leads only to evil.",
      "ref": "Psalm 37:8 NIV"
    }
  ],
  "infuriated": [
    {
      "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      "ref": "Proverbs 15:1 NIV"
    },
    {
      "text": "\u201cIn your anger do not sin\u201d: Do not let the sun go down while you are still angry,",
      "ref": "Ephesians 4:26 NIV"
    },
    {
      "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,",
      "ref": "James 1:19 NIV"
    },
    {
      "text": "Fools give full vent to their rage, but the wise bring calm in the end.",
      "ref": "Proverbs 29:11 NIV"
    },
    {
      "text": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      "ref": "Ecclesiastes 7:9 NIV"
    },
    {
      "text": "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
      "ref": "Proverbs 14:29 NIV"
    },
    {
      "text": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.",
      "ref": "Colossians 3:8 NIV"
    },
    {
      "text": "Refrain from anger and turn from wrath; do not fret\u2014it leads only to evil.",
      "ref": "Psalm 37:8 NIV"
    }
  ],
  "frustrated": [
    {
      "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      "ref": "Proverbs 15:1 NIV"
    },
    {
      "text": "\u201cIn your anger do not sin\u201d: Do not let the sun go down while you are still angry,",
      "ref": "Ephesians 4:26 NIV"
    },
    {
      "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,",
      "ref": "James 1:19 NIV"
    },
    {
      "text": "Fools give full vent to their rage, but the wise bring calm in the end.",
      "ref": "Proverbs 29:11 NIV"
    },
    {
      "text": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      "ref": "Ecclesiastes 7:9 NIV"
    },
    {
      "text": "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
      "ref": "Proverbs 14:29 NIV"
    },
    {
      "text": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.",
      "ref": "Colossians 3:8 NIV"
    },
    {
      "text": "Refrain from anger and turn from wrath; do not fret\u2014it leads only to evil.",
      "ref": "Psalm 37:8 NIV"
    }
  ],
  "hostile": [
    {
      "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      "ref": "Proverbs 15:1 NIV"
    },
    {
      "text": "\u201cIn your anger do not sin\u201d: Do not let the sun go down while you are still angry,",
      "ref": "Ephesians 4:26 NIV"
    },
    {
      "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,",
      "ref": "James 1:19 NIV"
    },
    {
      "text": "Fools give full vent to their rage, but the wise bring calm in the end.",
      "ref": "Proverbs 29:11 NIV"
    },
    {
      "text": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      "ref": "Ecclesiastes 7:9 NIV"
    },
    {
      "text": "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
      "ref": "Proverbs 14:29 NIV"
    },
    {
      "text": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.",
      "ref": "Colossians 3:8 NIV"
    },
    {
      "text": "Refrain from anger and turn from wrath; do not fret\u2014it leads only to evil.",
      "ref": "Psalm 37:8 NIV"
    }
  ],
  "provoked": [
    {
      "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      "ref": "Proverbs 15:1 NIV"
    },
    {
      "text": "\u201cIn your anger do not sin\u201d: Do not let the sun go down while you are still angry,",
      "ref": "Ephesians 4:26 NIV"
    },
    {
      "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,",
      "ref": "James 1:19 NIV"
    },
    {
      "text": "Fools give full vent to their rage, but the wise bring calm in the end.",
      "ref": "Proverbs 29:11 NIV"
    },
    {
      "text": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      "ref": "Ecclesiastes 7:9 NIV"
    },
    {
      "text": "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
      "ref": "Proverbs 14:29 NIV"
    },
    {
      "text": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.",
      "ref": "Colossians 3:8 NIV"
    },
    {
      "text": "Refrain from anger and turn from wrath; do not fret\u2014it leads only to evil.",
      "ref": "Psalm 37:8 NIV"
    }
  ],
  "aggressive": [
    {
      "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      "ref": "Proverbs 15:1 NIV"
    },
    {
      "text": "\u201cIn your anger do not sin\u201d: Do not let the sun go down while you are still angry,",
      "ref": "Ephesians 4:26 NIV"
    },
    {
      "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,",
      "ref": "James 1:19 NIV"
    },
    {
      "text": "Fools give full vent to their rage, but the wise bring calm in the end.",
      "ref": "Proverbs 29:11 NIV"
    },
    {
      "text": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      "ref": "Ecclesiastes 7:9 NIV"
    },
    {
      "text": "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
      "ref": "Proverbs 14:29 NIV"
    },
    {
      "text": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.",
      "ref": "Colossians 3:8 NIV"
    },
    {
      "text": "Refrain from anger and turn from wrath; do not fret\u2014it leads only to evil.",
      "ref": "Psalm 37:8 NIV"
    }
  ],
  "jealous": [
    {
      "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      "ref": "Proverbs 15:1 NIV"
    },
    {
      "text": "\u201cIn your anger do not sin\u201d: Do not let the sun go down while you are still angry,",
      "ref": "Ephesians 4:26 NIV"
    },
    {
      "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,",
      "ref": "James 1:19 NIV"
    },
    {
      "text": "Fools give full vent to their rage, but the wise bring calm in the end.",
      "ref": "Proverbs 29:11 NIV"
    },
    {
      "text": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      "ref": "Ecclesiastes 7:9 NIV"
    },
    {
      "text": "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
      "ref": "Proverbs 14:29 NIV"
    },
    {
      "text": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.",
      "ref": "Colossians 3:8 NIV"
    },
    {
      "text": "Refrain from anger and turn from wrath; do not fret\u2014it leads only to evil.",
      "ref": "Psalm 37:8 NIV"
    }
  ],
  "furious": [
    {
      "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      "ref": "Proverbs 15:1 NIV"
    },
    {
      "text": "\u201cIn your anger do not sin\u201d: Do not let the sun go down while you are still angry,",
      "ref": "Ephesians 4:26 NIV"
    },
    {
      "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,",
      "ref": "James 1:19 NIV"
    },
    {
      "text": "Fools give full vent to their rage, but the wise bring calm in the end.",
      "ref": "Proverbs 29:11 NIV"
    },
    {
      "text": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      "ref": "Ecclesiastes 7:9 NIV"
    },
    {
      "text": "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
      "ref": "Proverbs 14:29 NIV"
    },
    {
      "text": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.",
      "ref": "Colossians 3:8 NIV"
    },
    {
      "text": "Refrain from anger and turn from wrath; do not fret\u2014it leads only to evil.",
      "ref": "Psalm 37:8 NIV"
    }
  ],
  "mad": [
    {
      "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      "ref": "Proverbs 15:1 NIV"
    },
    {
      "text": "\u201cIn your anger do not sin\u201d: Do not let the sun go down while you are still angry,",
      "ref": "Ephesians 4:26 NIV"
    },
    {
      "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,",
      "ref": "James 1:19 NIV"
    },
    {
      "text": "Fools give full vent to their rage, but the wise bring calm in the end.",
      "ref": "Proverbs 29:11 NIV"
    },
    {
      "text": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      "ref": "Ecclesiastes 7:9 NIV"
    },
    {
      "text": "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
      "ref": "Proverbs 14:29 NIV"
    },
    {
      "text": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.",
      "ref": "Colossians 3:8 NIV"
    },
    {
      "text": "Refrain from anger and turn from wrath; do not fret\u2014it leads only to evil.",
      "ref": "Psalm 37:8 NIV"
    }
  ],
  "violated": [
    {
      "text": "If an enemy were insulting me, I could endure it; if a foe were rising against me, I could hide. But it is you, a man like myself, my companion, my close friend,",
      "ref": "Psalm 55:12-13 NIV"
    },
    {
      "text": "Even my close friend, someone I trusted, one who shared my bread, has turned against me.",
      "ref": "Psalm 41:9 NIV"
    },
    {
      "text": "Do not take revenge, my dear friends, but leave room for God\u2019s wrath, for it is written: \u201cIt is mine to avenge; I will repay,\u201d says the Lord.",
      "ref": "Romans 12:19 NIV"
    },
    {
      "text": "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.",
      "ref": "Genesis 50:20 NIV"
    },
    {
      "text": "At my first defense, no one came to my support, but everyone deserted me. May it not be held against them.",
      "ref": "2 Timothy 4:16 NIV"
    },
    {
      "text": "One who has unreliable friends soon comes to ruin, but there is a friend who sticks closer than a brother.",
      "ref": "Proverbs 18:24 NIV"
    },
    {
      "text": "When they hurled their insults at him, he did not retaliate; when he suffered, he made no threats. Instead, he entrusted himself to him who judges justly.",
      "ref": "1 Peter 2:23 NIV"
    },
    {
      "text": "But I tell you, love your enemies and pray for those who persecute you,",
      "ref": "Matthew 5:44 NIV"
    }
  ],
  "indignant": [
    {
      "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      "ref": "Proverbs 15:1 NIV"
    },
    {
      "text": "\u201cIn your anger do not sin\u201d: Do not let the sun go down while you are still angry,",
      "ref": "Ephesians 4:26 NIV"
    },
    {
      "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,",
      "ref": "James 1:19 NIV"
    },
    {
      "text": "Fools give full vent to their rage, but the wise bring calm in the end.",
      "ref": "Proverbs 29:11 NIV"
    },
    {
      "text": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      "ref": "Ecclesiastes 7:9 NIV"
    },
    {
      "text": "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
      "ref": "Proverbs 14:29 NIV"
    },
    {
      "text": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.",
      "ref": "Colossians 3:8 NIV"
    },
    {
      "text": "Refrain from anger and turn from wrath; do not fret\u2014it leads only to evil.",
      "ref": "Psalm 37:8 NIV"
    }
  ],
  "bitter": [
    {
      "text": "See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many.",
      "ref": "Hebrews 12:15 NIV"
    },
    {
      "text": "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice.",
      "ref": "Ephesians 4:31 NIV"
    },
    {
      "text": "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
      "ref": "Ephesians 4:32 NIV"
    },
    {
      "text": "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.",
      "ref": "Colossians 3:13 NIV"
    },
    {
      "text": "But if you harbor bitter envy and selfish ambition in your hearts, do not boast about it or deny the truth.",
      "ref": "James 3:14 NIV"
    },
    {
      "text": "For if you forgive other people when they sin against you, your heavenly Father will also forgive you.",
      "ref": "Matthew 6:14 NIV"
    },
    {
      "text": "Do not repay anyone evil for evil. Be careful to do what is right in the eyes of everyone.",
      "ref": "Romans 12:17 NIV"
    },
    {
      "text": "Each heart knows its own bitterness, and no one else can share its joy.",
      "ref": "Proverbs 14:10 NIV"
    }
  ],
  "ridiculed": [
    {
      "text": "If an enemy were insulting me, I could endure it; if a foe were rising against me, I could hide. But it is you, a man like myself, my companion, my close friend,",
      "ref": "Psalm 55:12-13 NIV"
    },
    {
      "text": "Even my close friend, someone I trusted, one who shared my bread, has turned against me.",
      "ref": "Psalm 41:9 NIV"
    },
    {
      "text": "Do not take revenge, my dear friends, but leave room for God\u2019s wrath, for it is written: \u201cIt is mine to avenge; I will repay,\u201d says the Lord.",
      "ref": "Romans 12:19 NIV"
    },
    {
      "text": "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.",
      "ref": "Genesis 50:20 NIV"
    },
    {
      "text": "At my first defense, no one came to my support, but everyone deserted me. May it not be held against them.",
      "ref": "2 Timothy 4:16 NIV"
    },
    {
      "text": "One who has unreliable friends soon comes to ruin, but there is a friend who sticks closer than a brother.",
      "ref": "Proverbs 18:24 NIV"
    },
    {
      "text": "When they hurled their insults at him, he did not retaliate; when he suffered, he made no threats. Instead, he entrusted himself to him who judges justly.",
      "ref": "1 Peter 2:23 NIV"
    },
    {
      "text": "But I tell you, love your enemies and pray for those who persecute you,",
      "ref": "Matthew 5:44 NIV"
    }
  ],
  "disrespected": [
    {
      "text": "If an enemy were insulting me, I could endure it; if a foe were rising against me, I could hide. But it is you, a man like myself, my companion, my close friend,",
      "ref": "Psalm 55:12-13 NIV"
    },
    {
      "text": "Even my close friend, someone I trusted, one who shared my bread, has turned against me.",
      "ref": "Psalm 41:9 NIV"
    },
    {
      "text": "Do not take revenge, my dear friends, but leave room for God\u2019s wrath, for it is written: \u201cIt is mine to avenge; I will repay,\u201d says the Lord.",
      "ref": "Romans 12:19 NIV"
    },
    {
      "text": "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.",
      "ref": "Genesis 50:20 NIV"
    },
    {
      "text": "At my first defense, no one came to my support, but everyone deserted me. May it not be held against them.",
      "ref": "2 Timothy 4:16 NIV"
    },
    {
      "text": "One who has unreliable friends soon comes to ruin, but there is a friend who sticks closer than a brother.",
      "ref": "Proverbs 18:24 NIV"
    },
    {
      "text": "When they hurled their insults at him, he did not retaliate; when he suffered, he made no threats. Instead, he entrusted himself to him who judges justly.",
      "ref": "1 Peter 2:23 NIV"
    },
    {
      "text": "But I tell you, love your enemies and pray for those who persecute you,",
      "ref": "Matthew 5:44 NIV"
    }
  ],
  "humiliated": [
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "But the LORD said to Samuel, \u201cDo not consider his appearance or his height, for I have rejected him. The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.\u201d",
      "ref": "1 Samuel 16:7 NIV"
    },
    {
      "text": "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
      "ref": "1 John 4:18 NIV"
    },
    {
      "text": "\u201cBefore I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.\u201d",
      "ref": "Jeremiah 1:5 NIV"
    },
    {
      "text": "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\u2019s will is\u2014his good, pleasing and perfect will.",
      "ref": "Romans 12:2 NIV"
    },
    {
      "text": "But you are a chosen people, a royal priesthood, a holy nation, God\u2019s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
      "ref": "1 Peter 2:9 NIV"
    },
    {
      "text": "Are not five sparrows sold for two pennies? Yet not one of them is forgotten by God. Indeed, the very hairs of your head are all numbered. Don\u2019t be afraid; you are worth more than many sparrows.",
      "ref": "Luke 12:6-7 NIV"
    }
  ],
  "betrayed": [
    {
      "text": "If an enemy were insulting me, I could endure it; if a foe were rising against me, I could hide. But it is you, a man like myself, my companion, my close friend,",
      "ref": "Psalm 55:12-13 NIV"
    },
    {
      "text": "Even my close friend, someone I trusted, one who shared my bread, has turned against me.",
      "ref": "Psalm 41:9 NIV"
    },
    {
      "text": "Do not take revenge, my dear friends, but leave room for God\u2019s wrath, for it is written: \u201cIt is mine to avenge; I will repay,\u201d says the Lord.",
      "ref": "Romans 12:19 NIV"
    },
    {
      "text": "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.",
      "ref": "Genesis 50:20 NIV"
    },
    {
      "text": "At my first defense, no one came to my support, but everyone deserted me. May it not be held against them.",
      "ref": "2 Timothy 4:16 NIV"
    },
    {
      "text": "One who has unreliable friends soon comes to ruin, but there is a friend who sticks closer than a brother.",
      "ref": "Proverbs 18:24 NIV"
    },
    {
      "text": "When they hurled their insults at him, he did not retaliate; when he suffered, he made no threats. Instead, he entrusted himself to him who judges justly.",
      "ref": "1 Peter 2:23 NIV"
    },
    {
      "text": "But I tell you, love your enemies and pray for those who persecute you,",
      "ref": "Matthew 5:44 NIV"
    }
  ],
  "resentful": [
    {
      "text": "See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many.",
      "ref": "Hebrews 12:15 NIV"
    },
    {
      "text": "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice.",
      "ref": "Ephesians 4:31 NIV"
    },
    {
      "text": "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
      "ref": "Ephesians 4:32 NIV"
    },
    {
      "text": "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.",
      "ref": "Colossians 3:13 NIV"
    },
    {
      "text": "But if you harbor bitter envy and selfish ambition in your hearts, do not boast about it or deny the truth.",
      "ref": "James 3:14 NIV"
    },
    {
      "text": "For if you forgive other people when they sin against you, your heavenly Father will also forgive you.",
      "ref": "Matthew 6:14 NIV"
    },
    {
      "text": "Do not repay anyone evil for evil. Be careful to do what is right in the eyes of everyone.",
      "ref": "Romans 12:17 NIV"
    },
    {
      "text": "Each heart knows its own bitterness, and no one else can share its joy.",
      "ref": "Proverbs 14:10 NIV"
    }
  ],
  "letdown": [
    {
      "text": "If an enemy were insulting me, I could endure it; if a foe were rising against me, I could hide. But it is you, a man like myself, my companion, my close friend,",
      "ref": "Psalm 55:12-13 NIV"
    },
    {
      "text": "Even my close friend, someone I trusted, one who shared my bread, has turned against me.",
      "ref": "Psalm 41:9 NIV"
    },
    {
      "text": "Do not take revenge, my dear friends, but leave room for God\u2019s wrath, for it is written: \u201cIt is mine to avenge; I will repay,\u201d says the Lord.",
      "ref": "Romans 12:19 NIV"
    },
    {
      "text": "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.",
      "ref": "Genesis 50:20 NIV"
    },
    {
      "text": "At my first defense, no one came to my support, but everyone deserted me. May it not be held against them.",
      "ref": "2 Timothy 4:16 NIV"
    },
    {
      "text": "One who has unreliable friends soon comes to ruin, but there is a friend who sticks closer than a brother.",
      "ref": "Proverbs 18:24 NIV"
    },
    {
      "text": "When they hurled their insults at him, he did not retaliate; when he suffered, he made no threats. Instead, he entrusted himself to him who judges justly.",
      "ref": "1 Peter 2:23 NIV"
    },
    {
      "text": "But I tell you, love your enemies and pray for those who persecute you,",
      "ref": "Matthew 5:44 NIV"
    }
  ],
  "angry": [
    {
      "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      "ref": "Proverbs 15:1 NIV"
    },
    {
      "text": "\u201cIn your anger do not sin\u201d: Do not let the sun go down while you are still angry,",
      "ref": "Ephesians 4:26 NIV"
    },
    {
      "text": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,",
      "ref": "James 1:19 NIV"
    },
    {
      "text": "Fools give full vent to their rage, but the wise bring calm in the end.",
      "ref": "Proverbs 29:11 NIV"
    },
    {
      "text": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
      "ref": "Ecclesiastes 7:9 NIV"
    },
    {
      "text": "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
      "ref": "Proverbs 14:29 NIV"
    },
    {
      "text": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.",
      "ref": "Colossians 3:8 NIV"
    },
    {
      "text": "Refrain from anger and turn from wrath; do not fret\u2014it leads only to evil.",
      "ref": "Psalm 37:8 NIV"
    }
  ],
  "helpless": [
    {
      "text": "The LORD is my light and my salvation\u2014 whom shall I fear? The LORD is the stronghold of my life\u2014 of whom shall I be afraid?",
      "ref": "Psalm 27:1 NIV"
    },
    {
      "text": "When I am afraid, I put my trust in you.",
      "ref": "Psalm 56:3 NIV"
    },
    {
      "text": "I sought the LORD, and he answered me; he delivered me from all my fears.",
      "ref": "Psalm 34:4 NIV"
    },
    {
      "text": "Do not be afraid of them; the LORD your God himself will fight for you.\u201d",
      "ref": "Deuteronomy 3:22 NIV"
    },
    {
      "text": "The LORD is with me; I will not be afraid. What can mere mortals do to me?",
      "ref": "Psalm 118:6 NIV"
    },
    {
      "text": "Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.",
      "ref": "Proverbs 29:25 NIV"
    },
    {
      "text": "But now, this is what the LORD says\u2014 he who created you, Jacob, he who formed you, Israel: \u201cDo not fear, for I have redeemed you; I have summoned you by name; you are mine.",
      "ref": "Isaiah 43:1 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    }
  ],
  "frightened": [
    {
      "text": "The LORD is my light and my salvation\u2014 whom shall I fear? The LORD is the stronghold of my life\u2014 of whom shall I be afraid?",
      "ref": "Psalm 27:1 NIV"
    },
    {
      "text": "When I am afraid, I put my trust in you.",
      "ref": "Psalm 56:3 NIV"
    },
    {
      "text": "I sought the LORD, and he answered me; he delivered me from all my fears.",
      "ref": "Psalm 34:4 NIV"
    },
    {
      "text": "Do not be afraid of them; the LORD your God himself will fight for you.\u201d",
      "ref": "Deuteronomy 3:22 NIV"
    },
    {
      "text": "The LORD is with me; I will not be afraid. What can mere mortals do to me?",
      "ref": "Psalm 118:6 NIV"
    },
    {
      "text": "Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.",
      "ref": "Proverbs 29:25 NIV"
    },
    {
      "text": "But now, this is what the LORD says\u2014 he who created you, Jacob, he who formed you, Israel: \u201cDo not fear, for I have redeemed you; I have summoned you by name; you are mine.",
      "ref": "Isaiah 43:1 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    }
  ],
  "scared": [
    {
      "text": "The LORD is my light and my salvation\u2014 whom shall I fear? The LORD is the stronghold of my life\u2014 of whom shall I be afraid?",
      "ref": "Psalm 27:1 NIV"
    },
    {
      "text": "When I am afraid, I put my trust in you.",
      "ref": "Psalm 56:3 NIV"
    },
    {
      "text": "I sought the LORD, and he answered me; he delivered me from all my fears.",
      "ref": "Psalm 34:4 NIV"
    },
    {
      "text": "Do not be afraid of them; the LORD your God himself will fight for you.\u201d",
      "ref": "Deuteronomy 3:22 NIV"
    },
    {
      "text": "The LORD is with me; I will not be afraid. What can mere mortals do to me?",
      "ref": "Psalm 118:6 NIV"
    },
    {
      "text": "Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.",
      "ref": "Proverbs 29:25 NIV"
    },
    {
      "text": "But now, this is what the LORD says\u2014 he who created you, Jacob, he who formed you, Israel: \u201cDo not fear, for I have redeemed you; I have summoned you by name; you are mine.",
      "ref": "Isaiah 43:1 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    }
  ],
  "overwhelmed_fear": [
    {
      "text": "From the ends of the earth I call to you, I call as my heart grows faint; lead me to the rock that is higher than I.",
      "ref": "Psalm 61:2 NIV"
    },
    {
      "text": "A song. God is our refuge and strength, an ever-present help in trouble.",
      "ref": "Psalm 46:1 NIV"
    },
    {
      "text": "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
      "ref": "Isaiah 43:2 NIV"
    },
    {
      "text": "Because of the LORD\u2019s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
      "ref": "Lamentations 3:22-23 NIV"
    },
    {
      "text": "Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
      "ref": "Matthew 11:29 NIV"
    },
    {
      "text": "The LORD will fight for you; you need only to be still.\u201d",
      "ref": "Exodus 14:14 NIV"
    },
    {
      "text": "When my spirit grows faint within me, it is you who watch over my way. In the path where I walk people have hidden a snare for me.",
      "ref": "Psalm 142:3 NIV"
    },
    {
      "text": "My soul is weary with sorrow; strengthen me according to your word.",
      "ref": "Psalm 119:28 NIV"
    }
  ],
  "worried": [
    {
      "text": "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
      "ref": "Philippians 4:6 NIV"
    },
    {
      "text": "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
      "ref": "Matthew 6:34 NIV"
    },
    {
      "text": "Cast all your anxiety on him because he cares for you.",
      "ref": "1 Peter 5:7 NIV"
    },
    {
      "text": "When anxiety was great within me, your consolation brought me joy.",
      "ref": "Psalm 94:19 NIV"
    },
    {
      "text": "Anxiety weighs down the heart, but a kind word cheers it up.",
      "ref": "Proverbs 12:25 NIV"
    },
    {
      "text": "say to those with fearful hearts, \u201cBe strong, do not fear; your God will come, he will come with vengeance; with divine retribution he will come to save you.\u201d",
      "ref": "Isaiah 35:4 NIV"
    },
    {
      "text": "Cast your cares on the LORD and he will sustain you; he will never let the righteous be shaken.",
      "ref": "Psalm 55:22 NIV"
    },
    {
      "text": "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
      "ref": "John 14:27 NIV"
    }
  ],
  "anxious": [
    {
      "text": "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
      "ref": "Philippians 4:6 NIV"
    },
    {
      "text": "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
      "ref": "Matthew 6:34 NIV"
    },
    {
      "text": "Cast all your anxiety on him because he cares for you.",
      "ref": "1 Peter 5:7 NIV"
    },
    {
      "text": "When anxiety was great within me, your consolation brought me joy.",
      "ref": "Psalm 94:19 NIV"
    },
    {
      "text": "Anxiety weighs down the heart, but a kind word cheers it up.",
      "ref": "Proverbs 12:25 NIV"
    },
    {
      "text": "say to those with fearful hearts, \u201cBe strong, do not fear; your God will come, he will come with vengeance; with divine retribution he will come to save you.\u201d",
      "ref": "Isaiah 35:4 NIV"
    },
    {
      "text": "Cast your cares on the LORD and he will sustain you; he will never let the righteous be shaken.",
      "ref": "Psalm 55:22 NIV"
    },
    {
      "text": "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
      "ref": "John 14:27 NIV"
    }
  ],
  "inadequate": [
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "But the LORD said to Samuel, \u201cDo not consider his appearance or his height, for I have rejected him. The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.\u201d",
      "ref": "1 Samuel 16:7 NIV"
    },
    {
      "text": "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
      "ref": "1 John 4:18 NIV"
    },
    {
      "text": "\u201cBefore I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.\u201d",
      "ref": "Jeremiah 1:5 NIV"
    },
    {
      "text": "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\u2019s will is\u2014his good, pleasing and perfect will.",
      "ref": "Romans 12:2 NIV"
    },
    {
      "text": "But you are a chosen people, a royal priesthood, a holy nation, God\u2019s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
      "ref": "1 Peter 2:9 NIV"
    },
    {
      "text": "Are not five sparrows sold for two pennies? Yet not one of them is forgotten by God. Indeed, the very hairs of your head are all numbered. Don\u2019t be afraid; you are worth more than many sparrows.",
      "ref": "Luke 12:6-7 NIV"
    }
  ],
  "inferior_fear": [
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "But the LORD said to Samuel, \u201cDo not consider his appearance or his height, for I have rejected him. The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.\u201d",
      "ref": "1 Samuel 16:7 NIV"
    },
    {
      "text": "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
      "ref": "1 John 4:18 NIV"
    },
    {
      "text": "\u201cBefore I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.\u201d",
      "ref": "Jeremiah 1:5 NIV"
    },
    {
      "text": "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\u2019s will is\u2014his good, pleasing and perfect will.",
      "ref": "Romans 12:2 NIV"
    },
    {
      "text": "But you are a chosen people, a royal priesthood, a holy nation, God\u2019s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
      "ref": "1 Peter 2:9 NIV"
    },
    {
      "text": "Are not five sparrows sold for two pennies? Yet not one of them is forgotten by God. Indeed, the very hairs of your head are all numbered. Don\u2019t be afraid; you are worth more than many sparrows.",
      "ref": "Luke 12:6-7 NIV"
    }
  ],
  "insecure": [
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "But the LORD said to Samuel, \u201cDo not consider his appearance or his height, for I have rejected him. The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.\u201d",
      "ref": "1 Samuel 16:7 NIV"
    },
    {
      "text": "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
      "ref": "1 John 4:18 NIV"
    },
    {
      "text": "\u201cBefore I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.\u201d",
      "ref": "Jeremiah 1:5 NIV"
    },
    {
      "text": "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\u2019s will is\u2014his good, pleasing and perfect will.",
      "ref": "Romans 12:2 NIV"
    },
    {
      "text": "But you are a chosen people, a royal priesthood, a holy nation, God\u2019s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
      "ref": "1 Peter 2:9 NIV"
    },
    {
      "text": "Are not five sparrows sold for two pennies? Yet not one of them is forgotten by God. Indeed, the very hairs of your head are all numbered. Don\u2019t be afraid; you are worth more than many sparrows.",
      "ref": "Luke 12:6-7 NIV"
    }
  ],
  "worthless": [
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "But the LORD said to Samuel, \u201cDo not consider his appearance or his height, for I have rejected him. The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.\u201d",
      "ref": "1 Samuel 16:7 NIV"
    },
    {
      "text": "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
      "ref": "1 John 4:18 NIV"
    },
    {
      "text": "\u201cBefore I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.\u201d",
      "ref": "Jeremiah 1:5 NIV"
    },
    {
      "text": "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\u2019s will is\u2014his good, pleasing and perfect will.",
      "ref": "Romans 12:2 NIV"
    },
    {
      "text": "But you are a chosen people, a royal priesthood, a holy nation, God\u2019s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
      "ref": "1 Peter 2:9 NIV"
    },
    {
      "text": "Are not five sparrows sold for two pennies? Yet not one of them is forgotten by God. Indeed, the very hairs of your head are all numbered. Don\u2019t be afraid; you are worth more than many sparrows.",
      "ref": "Luke 12:6-7 NIV"
    }
  ],
  "insignificant": [
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "But the LORD said to Samuel, \u201cDo not consider his appearance or his height, for I have rejected him. The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.\u201d",
      "ref": "1 Samuel 16:7 NIV"
    },
    {
      "text": "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
      "ref": "1 John 4:18 NIV"
    },
    {
      "text": "\u201cBefore I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.\u201d",
      "ref": "Jeremiah 1:5 NIV"
    },
    {
      "text": "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\u2019s will is\u2014his good, pleasing and perfect will.",
      "ref": "Romans 12:2 NIV"
    },
    {
      "text": "But you are a chosen people, a royal priesthood, a holy nation, God\u2019s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
      "ref": "1 Peter 2:9 NIV"
    },
    {
      "text": "Are not five sparrows sold for two pennies? Yet not one of them is forgotten by God. Indeed, the very hairs of your head are all numbered. Don\u2019t be afraid; you are worth more than many sparrows.",
      "ref": "Luke 12:6-7 NIV"
    }
  ],
  "weak": [
    {
      "text": "\u201cCome to me, all you who are weary and burdened, and I will give you rest.",
      "ref": "Matthew 11:28 NIV"
    },
    {
      "text": "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      "ref": "Isaiah 40:31 NIV"
    },
    {
      "text": "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
      "ref": "Galatians 6:9 NIV"
    },
    {
      "text": "I will refresh the weary and satisfy the faint.\u201d",
      "ref": "Jeremiah 31:25 NIV"
    },
    {
      "text": "In peace I will lie down and sleep, for you alone, LORD, make me dwell in safety.",
      "ref": "Psalm 4:8 NIV"
    },
    {
      "text": "The LORD replied, \u201cMy Presence will go with you, and I will give you rest.\u201d",
      "ref": "Exodus 33:14 NIV"
    },
    {
      "text": "And as for you, brothers and sisters, never tire of doing what is good.",
      "ref": "2 Thessalonians 3:13 NIV"
    },
    {
      "text": "He gives strength to the weary and increases the power of the weak.",
      "ref": "Isaiah 40:29 NIV"
    }
  ],
  "excluded": [
    {
      "text": "Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.\u201d",
      "ref": "Deuteronomy 31:6 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.\u201d",
      "ref": "Matthew 28:20 NIV"
    },
    {
      "text": "Though my father and mother forsake me, the LORD will receive me.",
      "ref": "Psalm 27:10 NIV"
    },
    {
      "text": "Keep your lives free from the love of money and be content with what you have, because God has said, \u201cNever will I leave you; never will I forsake you.\u201d",
      "ref": "Hebrews 13:5 NIV"
    },
    {
      "text": "Turn to me and be gracious to me, for I am lonely and afflicted.",
      "ref": "Psalm 25:16 NIV"
    },
    {
      "text": "I will not leave you as orphans; I will come to you.",
      "ref": "John 14:18 NIV"
    },
    {
      "text": "A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land.",
      "ref": "Psalm 68:5-6 NIV"
    }
  ],
  "persecuted": [
    {
      "text": "But thanks be to God! He gives us the victory through our Lord Jesus Christ.",
      "ref": "1 Corinthians 15:57 NIV"
    },
    {
      "text": "No, in all these things we are more than conquerors through him who loved us.",
      "ref": "Romans 8:37 NIV"
    },
    {
      "text": "For the LORD your God is the one who goes with you to fight for you against your enemies to give you victory.\u201d",
      "ref": "Deuteronomy 20:4 NIV"
    },
    {
      "text": "But thanks be to God, who always leads us as captives in Christ\u2019s triumphal procession and uses us to spread the aroma of the knowledge of him everywhere.",
      "ref": "2 Corinthians 2:14 NIV"
    },
    {
      "text": "for everyone born of God overcomes the world. This is the victory that has overcome the world, even our faith.",
      "ref": "1 John 5:4 NIV"
    },
    {
      "text": "With God we will gain the victory, and he will trample down our enemies.",
      "ref": "Psalm 60:12 NIV"
    },
    {
      "text": "The horse is made ready for the day of battle, but victory rests with the LORD.",
      "ref": "Proverbs 21:31 NIV"
    },
    {
      "text": "Through you we push back our enemies; through your name we trample our foes.",
      "ref": "Psalm 44:5 NIV"
    }
  ],
  "rejected": [
    {
      "text": "Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.\u201d",
      "ref": "Deuteronomy 31:6 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.\u201d",
      "ref": "Matthew 28:20 NIV"
    },
    {
      "text": "Though my father and mother forsake me, the LORD will receive me.",
      "ref": "Psalm 27:10 NIV"
    },
    {
      "text": "Keep your lives free from the love of money and be content with what you have, because God has said, \u201cNever will I leave you; never will I forsake you.\u201d",
      "ref": "Hebrews 13:5 NIV"
    },
    {
      "text": "Turn to me and be gracious to me, for I am lonely and afflicted.",
      "ref": "Psalm 25:16 NIV"
    },
    {
      "text": "I will not leave you as orphans; I will come to you.",
      "ref": "John 14:18 NIV"
    },
    {
      "text": "A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land.",
      "ref": "Psalm 68:5-6 NIV"
    }
  ],
  "nervous": [
    {
      "text": "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
      "ref": "Philippians 4:6 NIV"
    },
    {
      "text": "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
      "ref": "Matthew 6:34 NIV"
    },
    {
      "text": "Cast all your anxiety on him because he cares for you.",
      "ref": "1 Peter 5:7 NIV"
    },
    {
      "text": "When anxiety was great within me, your consolation brought me joy.",
      "ref": "Psalm 94:19 NIV"
    },
    {
      "text": "Anxiety weighs down the heart, but a kind word cheers it up.",
      "ref": "Proverbs 12:25 NIV"
    },
    {
      "text": "say to those with fearful hearts, \u201cBe strong, do not fear; your God will come, he will come with vengeance; with divine retribution he will come to save you.\u201d",
      "ref": "Isaiah 35:4 NIV"
    },
    {
      "text": "Cast your cares on the LORD and he will sustain you; he will never let the righteous be shaken.",
      "ref": "Psalm 55:22 NIV"
    },
    {
      "text": "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
      "ref": "John 14:27 NIV"
    }
  ],
  "exposed": [
    {
      "text": "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the LORD, \u201cHe is my refuge and my fortress, my God, in whom I trust.\u201d",
      "ref": "Psalm 91:1-2 NIV"
    },
    {
      "text": "The name of the LORD is a fortified tower; the righteous run to it and are safe.",
      "ref": "Proverbs 18:10 NIV"
    },
    {
      "text": "The LORD will keep you from all harm\u2014 he will watch over your life; the LORD will watch over your coming and going both now and forevermore.",
      "ref": "Psalm 121:7-8 NIV"
    },
    {
      "text": "You are my hiding place; you will protect me from trouble and surround me with songs of deliverance.",
      "ref": "Psalm 32:7 NIV"
    },
    {
      "text": "Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.",
      "ref": "Proverbs 29:25 NIV"
    },
    {
      "text": "The eternal God is your refuge, and underneath are the everlasting arms. He will drive out your enemies before you, saying, \u2018Destroy them!\u2019",
      "ref": "Deuteronomy 33:27 NIV"
    },
    {
      "text": "A song. God is our refuge and strength, an ever-present help in trouble.",
      "ref": "Psalm 46:1 NIV"
    },
    {
      "text": "but whoever listens to me will live in safety and be at ease, without fear of harm.\u201d",
      "ref": "Proverbs 1:33 NIV"
    }
  ],
  "threatened": [
    {
      "text": "The LORD is my light and my salvation\u2014 whom shall I fear? The LORD is the stronghold of my life\u2014 of whom shall I be afraid?",
      "ref": "Psalm 27:1 NIV"
    },
    {
      "text": "When I am afraid, I put my trust in you.",
      "ref": "Psalm 56:3 NIV"
    },
    {
      "text": "I sought the LORD, and he answered me; he delivered me from all my fears.",
      "ref": "Psalm 34:4 NIV"
    },
    {
      "text": "Do not be afraid of them; the LORD your God himself will fight for you.\u201d",
      "ref": "Deuteronomy 3:22 NIV"
    },
    {
      "text": "The LORD is with me; I will not be afraid. What can mere mortals do to me?",
      "ref": "Psalm 118:6 NIV"
    },
    {
      "text": "Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.",
      "ref": "Proverbs 29:25 NIV"
    },
    {
      "text": "But now, this is what the LORD says\u2014 he who created you, Jacob, he who formed you, Israel: \u201cDo not fear, for I have redeemed you; I have summoned you by name; you are mine.",
      "ref": "Isaiah 43:1 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    }
  ],
  "fearful": [
    {
      "text": "The LORD is my light and my salvation\u2014 whom shall I fear? The LORD is the stronghold of my life\u2014 of whom shall I be afraid?",
      "ref": "Psalm 27:1 NIV"
    },
    {
      "text": "When I am afraid, I put my trust in you.",
      "ref": "Psalm 56:3 NIV"
    },
    {
      "text": "I sought the LORD, and he answered me; he delivered me from all my fears.",
      "ref": "Psalm 34:4 NIV"
    },
    {
      "text": "Do not be afraid of them; the LORD your God himself will fight for you.\u201d",
      "ref": "Deuteronomy 3:22 NIV"
    },
    {
      "text": "The LORD is with me; I will not be afraid. What can mere mortals do to me?",
      "ref": "Psalm 118:6 NIV"
    },
    {
      "text": "Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.",
      "ref": "Proverbs 29:25 NIV"
    },
    {
      "text": "But now, this is what the LORD says\u2014 he who created you, Jacob, he who formed you, Israel: \u201cDo not fear, for I have redeemed you; I have summoned you by name; you are mine.",
      "ref": "Isaiah 43:1 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    }
  ],
  "indifferent": [
    {
      "text": "I can do all this through him who gives me strength.",
      "ref": "Philippians 4:13 NIV"
    },
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    },
    {
      "text": "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters,",
      "ref": "Colossians 3:23 NIV"
    },
    {
      "text": "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
      "ref": "1 Corinthians 15:58 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "Then I heard the voice of the Lord saying, \u201cWhom shall I send? And who will go for us?\u201d And I said, \u201cHere am I. Send me!\u201d",
      "ref": "Isaiah 6:8 NIV"
    },
    {
      "text": "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      "ref": "Proverbs 3:5-6 NIV"
    }
  ],
  "apathetic": [
    {
      "text": "I can do all this through him who gives me strength.",
      "ref": "Philippians 4:13 NIV"
    },
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    },
    {
      "text": "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters,",
      "ref": "Colossians 3:23 NIV"
    },
    {
      "text": "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
      "ref": "1 Corinthians 15:58 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "Then I heard the voice of the Lord saying, \u201cWhom shall I send? And who will go for us?\u201d And I said, \u201cHere am I. Send me!\u201d",
      "ref": "Isaiah 6:8 NIV"
    },
    {
      "text": "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      "ref": "Proverbs 3:5-6 NIV"
    }
  ],
  "bored": [
    {
      "text": "I can do all this through him who gives me strength.",
      "ref": "Philippians 4:13 NIV"
    },
    {
      "text": "For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    },
    {
      "text": "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters,",
      "ref": "Colossians 3:23 NIV"
    },
    {
      "text": "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
      "ref": "1 Corinthians 15:58 NIV"
    },
    {
      "text": "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.\u201d",
      "ref": "Joshua 1:9 NIV"
    },
    {
      "text": "Then I heard the voice of the Lord saying, \u201cWhom shall I send? And who will go for us?\u201d And I said, \u201cHere am I. Send me!\u201d",
      "ref": "Isaiah 6:8 NIV"
    },
    {
      "text": "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      "ref": "Proverbs 3:5-6 NIV"
    }
  ],
  "pressured": [
    {
      "text": "\u201cMartha, Martha,\u201d the Lord answered, \u201cyou are worried and upset about many things, but few things are needed\u2014or indeed only one. Mary has chosen what is better, and it will not be taken away from her.\u201d",
      "ref": "Luke 10:41-42 NIV"
    },
    {
      "text": "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
      "ref": "Isaiah 26:3 NIV"
    },
    {
      "text": "Trouble and distress have come upon me, but your commands give me delight.",
      "ref": "Psalm 119:143 NIV"
    },
    {
      "text": "Return to your rest, my soul, for the LORD has been good to you.",
      "ref": "Psalm 116:7 NIV"
    },
    {
      "text": "I sought the LORD, and he answered me; he delivered me from all my fears.",
      "ref": "Psalm 34:4 NIV"
    },
    {
      "text": "\u201cTherefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?",
      "ref": "Matthew 6:25 NIV"
    },
    {
      "text": "Commit to the LORD whatever you do, and he will establish your plans.",
      "ref": "Proverbs 16:3 NIV"
    },
    {
      "text": "The fruit of that righteousness will be peace; its effect will be quietness and confidence forever.",
      "ref": "Isaiah 32:17 NIV"
    }
  ],
  "rushed": [
    {
      "text": "\u201cMartha, Martha,\u201d the Lord answered, \u201cyou are worried and upset about many things, but few things are needed\u2014or indeed only one. Mary has chosen what is better, and it will not be taken away from her.\u201d",
      "ref": "Luke 10:41-42 NIV"
    },
    {
      "text": "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
      "ref": "Isaiah 26:3 NIV"
    },
    {
      "text": "Trouble and distress have come upon me, but your commands give me delight.",
      "ref": "Psalm 119:143 NIV"
    },
    {
      "text": "Return to your rest, my soul, for the LORD has been good to you.",
      "ref": "Psalm 116:7 NIV"
    },
    {
      "text": "I sought the LORD, and he answered me; he delivered me from all my fears.",
      "ref": "Psalm 34:4 NIV"
    },
    {
      "text": "\u201cTherefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?",
      "ref": "Matthew 6:25 NIV"
    },
    {
      "text": "Commit to the LORD whatever you do, and he will establish your plans.",
      "ref": "Proverbs 16:3 NIV"
    },
    {
      "text": "The fruit of that righteousness will be peace; its effect will be quietness and confidence forever.",
      "ref": "Isaiah 32:17 NIV"
    }
  ],
  "busy": [
    {
      "text": "\u201cMartha, Martha,\u201d the Lord answered, \u201cyou are worried and upset about many things, but few things are needed\u2014or indeed only one. Mary has chosen what is better, and it will not be taken away from her.\u201d",
      "ref": "Luke 10:41-42 NIV"
    },
    {
      "text": "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
      "ref": "Isaiah 26:3 NIV"
    },
    {
      "text": "Trouble and distress have come upon me, but your commands give me delight.",
      "ref": "Psalm 119:143 NIV"
    },
    {
      "text": "Return to your rest, my soul, for the LORD has been good to you.",
      "ref": "Psalm 116:7 NIV"
    },
    {
      "text": "I sought the LORD, and he answered me; he delivered me from all my fears.",
      "ref": "Psalm 34:4 NIV"
    },
    {
      "text": "\u201cTherefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?",
      "ref": "Matthew 6:25 NIV"
    },
    {
      "text": "Commit to the LORD whatever you do, and he will establish your plans.",
      "ref": "Proverbs 16:3 NIV"
    },
    {
      "text": "The fruit of that righteousness will be peace; its effect will be quietness and confidence forever.",
      "ref": "Isaiah 32:17 NIV"
    }
  ],
  "overwhelmed": [
    {
      "text": "From the ends of the earth I call to you, I call as my heart grows faint; lead me to the rock that is higher than I.",
      "ref": "Psalm 61:2 NIV"
    },
    {
      "text": "A song. God is our refuge and strength, an ever-present help in trouble.",
      "ref": "Psalm 46:1 NIV"
    },
    {
      "text": "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
      "ref": "Isaiah 43:2 NIV"
    },
    {
      "text": "Because of the LORD\u2019s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
      "ref": "Lamentations 3:22-23 NIV"
    },
    {
      "text": "Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
      "ref": "Matthew 11:29 NIV"
    },
    {
      "text": "The LORD will fight for you; you need only to be still.\u201d",
      "ref": "Exodus 14:14 NIV"
    },
    {
      "text": "When my spirit grows faint within me, it is you who watch over my way. In the path where I walk people have hidden a snare for me.",
      "ref": "Psalm 142:3 NIV"
    },
    {
      "text": "My soul is weary with sorrow; strengthen me according to your word.",
      "ref": "Psalm 119:28 NIV"
    }
  ],
  "outofcontrol": [
    {
      "text": "From the ends of the earth I call to you, I call as my heart grows faint; lead me to the rock that is higher than I.",
      "ref": "Psalm 61:2 NIV"
    },
    {
      "text": "A song. God is our refuge and strength, an ever-present help in trouble.",
      "ref": "Psalm 46:1 NIV"
    },
    {
      "text": "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
      "ref": "Isaiah 43:2 NIV"
    },
    {
      "text": "Because of the LORD\u2019s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
      "ref": "Lamentations 3:22-23 NIV"
    },
    {
      "text": "Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
      "ref": "Matthew 11:29 NIV"
    },
    {
      "text": "The LORD will fight for you; you need only to be still.\u201d",
      "ref": "Exodus 14:14 NIV"
    },
    {
      "text": "When my spirit grows faint within me, it is you who watch over my way. In the path where I walk people have hidden a snare for me.",
      "ref": "Psalm 142:3 NIV"
    },
    {
      "text": "My soul is weary with sorrow; strengthen me according to your word.",
      "ref": "Psalm 119:28 NIV"
    }
  ],
  "stressed": [
    {
      "text": "\u201cMartha, Martha,\u201d the Lord answered, \u201cyou are worried and upset about many things, but few things are needed\u2014or indeed only one. Mary has chosen what is better, and it will not be taken away from her.\u201d",
      "ref": "Luke 10:41-42 NIV"
    },
    {
      "text": "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
      "ref": "Isaiah 26:3 NIV"
    },
    {
      "text": "Trouble and distress have come upon me, but your commands give me delight.",
      "ref": "Psalm 119:143 NIV"
    },
    {
      "text": "Return to your rest, my soul, for the LORD has been good to you.",
      "ref": "Psalm 116:7 NIV"
    },
    {
      "text": "I sought the LORD, and he answered me; he delivered me from all my fears.",
      "ref": "Psalm 34:4 NIV"
    },
    {
      "text": "\u201cTherefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?",
      "ref": "Matthew 6:25 NIV"
    },
    {
      "text": "Commit to the LORD whatever you do, and he will establish your plans.",
      "ref": "Proverbs 16:3 NIV"
    },
    {
      "text": "The fruit of that righteousness will be peace; its effect will be quietness and confidence forever.",
      "ref": "Isaiah 32:17 NIV"
    }
  ],
  "sleepy": [
    {
      "text": "\u201cCome to me, all you who are weary and burdened, and I will give you rest.",
      "ref": "Matthew 11:28 NIV"
    },
    {
      "text": "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      "ref": "Isaiah 40:31 NIV"
    },
    {
      "text": "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
      "ref": "Galatians 6:9 NIV"
    },
    {
      "text": "I will refresh the weary and satisfy the faint.\u201d",
      "ref": "Jeremiah 31:25 NIV"
    },
    {
      "text": "In peace I will lie down and sleep, for you alone, LORD, make me dwell in safety.",
      "ref": "Psalm 4:8 NIV"
    },
    {
      "text": "The LORD replied, \u201cMy Presence will go with you, and I will give you rest.\u201d",
      "ref": "Exodus 33:14 NIV"
    },
    {
      "text": "And as for you, brothers and sisters, never tire of doing what is good.",
      "ref": "2 Thessalonians 3:13 NIV"
    },
    {
      "text": "He gives strength to the weary and increases the power of the weak.",
      "ref": "Isaiah 40:29 NIV"
    }
  ],
  "unfocused": [
    {
      "text": "\u201cCome to me, all you who are weary and burdened, and I will give you rest.",
      "ref": "Matthew 11:28 NIV"
    },
    {
      "text": "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      "ref": "Isaiah 40:31 NIV"
    },
    {
      "text": "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
      "ref": "Galatians 6:9 NIV"
    },
    {
      "text": "I will refresh the weary and satisfy the faint.\u201d",
      "ref": "Jeremiah 31:25 NIV"
    },
    {
      "text": "In peace I will lie down and sleep, for you alone, LORD, make me dwell in safety.",
      "ref": "Psalm 4:8 NIV"
    },
    {
      "text": "The LORD replied, \u201cMy Presence will go with you, and I will give you rest.\u201d",
      "ref": "Exodus 33:14 NIV"
    },
    {
      "text": "And as for you, brothers and sisters, never tire of doing what is good.",
      "ref": "2 Thessalonians 3:13 NIV"
    },
    {
      "text": "He gives strength to the weary and increases the power of the weak.",
      "ref": "Isaiah 40:29 NIV"
    }
  ],
  "tired": [
    {
      "text": "\u201cCome to me, all you who are weary and burdened, and I will give you rest.",
      "ref": "Matthew 11:28 NIV"
    },
    {
      "text": "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      "ref": "Isaiah 40:31 NIV"
    },
    {
      "text": "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
      "ref": "Galatians 6:9 NIV"
    },
    {
      "text": "I will refresh the weary and satisfy the faint.\u201d",
      "ref": "Jeremiah 31:25 NIV"
    },
    {
      "text": "In peace I will lie down and sleep, for you alone, LORD, make me dwell in safety.",
      "ref": "Psalm 4:8 NIV"
    },
    {
      "text": "The LORD replied, \u201cMy Presence will go with you, and I will give you rest.\u201d",
      "ref": "Exodus 33:14 NIV"
    },
    {
      "text": "And as for you, brothers and sisters, never tire of doing what is good.",
      "ref": "2 Thessalonians 3:13 NIV"
    },
    {
      "text": "He gives strength to the weary and increases the power of the weak.",
      "ref": "Isaiah 40:29 NIV"
    }
  ],
  "bad": [
    {
      "text": "\u201cCome to me, all you who are weary and burdened, and I will give you rest.",
      "ref": "Matthew 11:28 NIV"
    },
    {
      "text": "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      "ref": "Isaiah 40:31 NIV"
    },
    {
      "text": "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
      "ref": "Galatians 6:9 NIV"
    },
    {
      "text": "I will refresh the weary and satisfy the faint.\u201d",
      "ref": "Jeremiah 31:25 NIV"
    },
    {
      "text": "In peace I will lie down and sleep, for you alone, LORD, make me dwell in safety.",
      "ref": "Psalm 4:8 NIV"
    },
    {
      "text": "The LORD replied, \u201cMy Presence will go with you, and I will give you rest.\u201d",
      "ref": "Exodus 33:14 NIV"
    },
    {
      "text": "And as for you, brothers and sisters, never tire of doing what is good.",
      "ref": "2 Thessalonians 3:13 NIV"
    },
    {
      "text": "He gives strength to the weary and increases the power of the weak.",
      "ref": "Isaiah 40:29 NIV"
    }
  ],
  "shocked": [
    {
      "text": "When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is mankind that you are mindful of them, human beings that you care for them?",
      "ref": "Psalm 8:3-4 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "\u201cAh, Sovereign LORD, you have made the heavens and the earth by your great power and outstretched arm. Nothing is too hard for you.",
      "ref": "Jeremiah 32:17 NIV"
    },
    {
      "text": "\u201cListen to this, Job; stop and consider God\u2019s wonders.",
      "ref": "Job 37:14 NIV"
    },
    {
      "text": "You are the God who performs miracles; you display your power among the peoples.",
      "ref": "Psalm 77:14 NIV"
    },
    {
      "text": "LORD, I have heard of your fame; I stand in awe of your deeds, LORD. Repeat them in our day, in our time make them known; in wrath remember mercy.",
      "ref": "Habakkuk 3:2 NIV"
    },
    {
      "text": "Come and see what God has done, his awesome deeds for mankind!",
      "ref": "Psalm 66:5 NIV"
    },
    {
      "text": "and sang the song of God\u2019s servant Moses and of the Lamb: \u201cGreat and marvelous are your deeds, Lord God Almighty. Just and true are your ways, King of the nations.",
      "ref": "Revelation 15:3 NIV"
    }
  ],
  "dismayed": [
    {
      "text": "The LORD is my light and my salvation\u2014 whom shall I fear? The LORD is the stronghold of my life\u2014 of whom shall I be afraid?",
      "ref": "Psalm 27:1 NIV"
    },
    {
      "text": "When I am afraid, I put my trust in you.",
      "ref": "Psalm 56:3 NIV"
    },
    {
      "text": "I sought the LORD, and he answered me; he delivered me from all my fears.",
      "ref": "Psalm 34:4 NIV"
    },
    {
      "text": "Do not be afraid of them; the LORD your God himself will fight for you.\u201d",
      "ref": "Deuteronomy 3:22 NIV"
    },
    {
      "text": "The LORD is with me; I will not be afraid. What can mere mortals do to me?",
      "ref": "Psalm 118:6 NIV"
    },
    {
      "text": "Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.",
      "ref": "Proverbs 29:25 NIV"
    },
    {
      "text": "But now, this is what the LORD says\u2014 he who created you, Jacob, he who formed you, Israel: \u201cDo not fear, for I have redeemed you; I have summoned you by name; you are mine.",
      "ref": "Isaiah 43:1 NIV"
    },
    {
      "text": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7 NIV"
    }
  ],
  "startled": [
    {
      "text": "When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is mankind that you are mindful of them, human beings that you care for them?",
      "ref": "Psalm 8:3-4 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "\u201cAh, Sovereign LORD, you have made the heavens and the earth by your great power and outstretched arm. Nothing is too hard for you.",
      "ref": "Jeremiah 32:17 NIV"
    },
    {
      "text": "\u201cListen to this, Job; stop and consider God\u2019s wonders.",
      "ref": "Job 37:14 NIV"
    },
    {
      "text": "You are the God who performs miracles; you display your power among the peoples.",
      "ref": "Psalm 77:14 NIV"
    },
    {
      "text": "LORD, I have heard of your fame; I stand in awe of your deeds, LORD. Repeat them in our day, in our time make them known; in wrath remember mercy.",
      "ref": "Habakkuk 3:2 NIV"
    },
    {
      "text": "Come and see what God has done, his awesome deeds for mankind!",
      "ref": "Psalm 66:5 NIV"
    },
    {
      "text": "and sang the song of God\u2019s servant Moses and of the Lamb: \u201cGreat and marvelous are your deeds, Lord God Almighty. Just and true are your ways, King of the nations.",
      "ref": "Revelation 15:3 NIV"
    }
  ],
  "disillusioned": [
    {
      "text": "But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind.",
      "ref": "James 1:6 NIV"
    },
    {
      "text": "Immediately the boy\u2019s father exclaimed, \u201cI do believe; help me overcome my unbelief!\u201d",
      "ref": "Mark 9:24 NIV"
    },
    {
      "text": "Trust in the LORD with all your heart and lean not on your own understanding;",
      "ref": "Proverbs 3:5 NIV"
    },
    {
      "text": "Now faith is confidence in what we hope for and assurance about what we do not see.",
      "ref": "Hebrews 11:1 NIV"
    },
    {
      "text": "Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.",
      "ref": "Romans 10:17 NIV"
    },
    {
      "text": "Jesus replied, \u201cTruly I tell you, if you have faith and do not doubt, not only can you do what was done to the fig tree, but also you can say to this mountain, \u2018Go, throw yourself into the sea,\u2019 and it will be done.",
      "ref": "Matthew 21:21 NIV"
    },
    {
      "text": "Yet he did not waver through unbelief regarding the promise of God, but was strengthened in his faith and gave glory to God,",
      "ref": "Romans 4:20 NIV"
    },
    {
      "text": "This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.",
      "ref": "1 John 5:14 NIV"
    }
  ],
  "perplexed": [
    {
      "text": "But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind.",
      "ref": "James 1:6 NIV"
    },
    {
      "text": "Immediately the boy\u2019s father exclaimed, \u201cI do believe; help me overcome my unbelief!\u201d",
      "ref": "Mark 9:24 NIV"
    },
    {
      "text": "Trust in the LORD with all your heart and lean not on your own understanding;",
      "ref": "Proverbs 3:5 NIV"
    },
    {
      "text": "Now faith is confidence in what we hope for and assurance about what we do not see.",
      "ref": "Hebrews 11:1 NIV"
    },
    {
      "text": "Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.",
      "ref": "Romans 10:17 NIV"
    },
    {
      "text": "Jesus replied, \u201cTruly I tell you, if you have faith and do not doubt, not only can you do what was done to the fig tree, but also you can say to this mountain, \u2018Go, throw yourself into the sea,\u2019 and it will be done.",
      "ref": "Matthew 21:21 NIV"
    },
    {
      "text": "Yet he did not waver through unbelief regarding the promise of God, but was strengthened in his faith and gave glory to God,",
      "ref": "Romans 4:20 NIV"
    },
    {
      "text": "This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.",
      "ref": "1 John 5:14 NIV"
    }
  ],
  "confused": [
    {
      "text": "But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind.",
      "ref": "James 1:6 NIV"
    },
    {
      "text": "Immediately the boy\u2019s father exclaimed, \u201cI do believe; help me overcome my unbelief!\u201d",
      "ref": "Mark 9:24 NIV"
    },
    {
      "text": "Trust in the LORD with all your heart and lean not on your own understanding;",
      "ref": "Proverbs 3:5 NIV"
    },
    {
      "text": "Now faith is confidence in what we hope for and assurance about what we do not see.",
      "ref": "Hebrews 11:1 NIV"
    },
    {
      "text": "Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.",
      "ref": "Romans 10:17 NIV"
    },
    {
      "text": "Jesus replied, \u201cTruly I tell you, if you have faith and do not doubt, not only can you do what was done to the fig tree, but also you can say to this mountain, \u2018Go, throw yourself into the sea,\u2019 and it will be done.",
      "ref": "Matthew 21:21 NIV"
    },
    {
      "text": "Yet he did not waver through unbelief regarding the promise of God, but was strengthened in his faith and gave glory to God,",
      "ref": "Romans 4:20 NIV"
    },
    {
      "text": "This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.",
      "ref": "1 John 5:14 NIV"
    }
  ],
  "astonished": [
    {
      "text": "When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is mankind that you are mindful of them, human beings that you care for them?",
      "ref": "Psalm 8:3-4 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "\u201cAh, Sovereign LORD, you have made the heavens and the earth by your great power and outstretched arm. Nothing is too hard for you.",
      "ref": "Jeremiah 32:17 NIV"
    },
    {
      "text": "\u201cListen to this, Job; stop and consider God\u2019s wonders.",
      "ref": "Job 37:14 NIV"
    },
    {
      "text": "You are the God who performs miracles; you display your power among the peoples.",
      "ref": "Psalm 77:14 NIV"
    },
    {
      "text": "LORD, I have heard of your fame; I stand in awe of your deeds, LORD. Repeat them in our day, in our time make them known; in wrath remember mercy.",
      "ref": "Habakkuk 3:2 NIV"
    },
    {
      "text": "Come and see what God has done, his awesome deeds for mankind!",
      "ref": "Psalm 66:5 NIV"
    },
    {
      "text": "and sang the song of God\u2019s servant Moses and of the Lamb: \u201cGreat and marvelous are your deeds, Lord God Almighty. Just and true are your ways, King of the nations.",
      "ref": "Revelation 15:3 NIV"
    }
  ],
  "awe": [
    {
      "text": "When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is mankind that you are mindful of them, human beings that you care for them?",
      "ref": "Psalm 8:3-4 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "\u201cAh, Sovereign LORD, you have made the heavens and the earth by your great power and outstretched arm. Nothing is too hard for you.",
      "ref": "Jeremiah 32:17 NIV"
    },
    {
      "text": "\u201cListen to this, Job; stop and consider God\u2019s wonders.",
      "ref": "Job 37:14 NIV"
    },
    {
      "text": "You are the God who performs miracles; you display your power among the peoples.",
      "ref": "Psalm 77:14 NIV"
    },
    {
      "text": "LORD, I have heard of your fame; I stand in awe of your deeds, LORD. Repeat them in our day, in our time make them known; in wrath remember mercy.",
      "ref": "Habakkuk 3:2 NIV"
    },
    {
      "text": "Come and see what God has done, his awesome deeds for mankind!",
      "ref": "Psalm 66:5 NIV"
    },
    {
      "text": "and sang the song of God\u2019s servant Moses and of the Lamb: \u201cGreat and marvelous are your deeds, Lord God Almighty. Just and true are your ways, King of the nations.",
      "ref": "Revelation 15:3 NIV"
    }
  ],
  "amazed": [
    {
      "text": "When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is mankind that you are mindful of them, human beings that you care for them?",
      "ref": "Psalm 8:3-4 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "\u201cAh, Sovereign LORD, you have made the heavens and the earth by your great power and outstretched arm. Nothing is too hard for you.",
      "ref": "Jeremiah 32:17 NIV"
    },
    {
      "text": "\u201cListen to this, Job; stop and consider God\u2019s wonders.",
      "ref": "Job 37:14 NIV"
    },
    {
      "text": "You are the God who performs miracles; you display your power among the peoples.",
      "ref": "Psalm 77:14 NIV"
    },
    {
      "text": "LORD, I have heard of your fame; I stand in awe of your deeds, LORD. Repeat them in our day, in our time make them known; in wrath remember mercy.",
      "ref": "Habakkuk 3:2 NIV"
    },
    {
      "text": "Come and see what God has done, his awesome deeds for mankind!",
      "ref": "Psalm 66:5 NIV"
    },
    {
      "text": "and sang the song of God\u2019s servant Moses and of the Lamb: \u201cGreat and marvelous are your deeds, Lord God Almighty. Just and true are your ways, King of the nations.",
      "ref": "Revelation 15:3 NIV"
    }
  ],
  "eager": [
    {
      "text": "Never be lacking in zeal, but keep your spiritual fervor, serving the Lord.",
      "ref": "Romans 12:11 NIV"
    },
    {
      "text": "I rejoiced with those who said to me, \u201cLet us go to the house of the LORD.\u201d",
      "ref": "Psalm 122:1 NIV"
    },
    {
      "text": "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      "ref": "Isaiah 40:31 NIV"
    },
    {
      "text": "The path of the righteous is like the morning sun, shining ever brighter till the full light of day.",
      "ref": "Proverbs 4:18 NIV"
    },
    {
      "text": "Take delight in the LORD, and he will give you the desires of your heart.",
      "ref": "Psalm 37:4 NIV"
    },
    {
      "text": "However, as it is written: \u201cWhat no eye has seen, what no ear has heard, and what no human mind has conceived\u201d\u2014 the things God has prepared for those who love him\u2014",
      "ref": "1 Corinthians 2:9 NIV"
    },
    {
      "text": "I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus.",
      "ref": "Philippians 3:14 NIV"
    },
    {
      "text": "I rejoice in your promise like one who finds great spoil.",
      "ref": "Psalm 119:162 NIV"
    }
  ],
  "energetic": [
    {
      "text": "Never be lacking in zeal, but keep your spiritual fervor, serving the Lord.",
      "ref": "Romans 12:11 NIV"
    },
    {
      "text": "I rejoiced with those who said to me, \u201cLet us go to the house of the LORD.\u201d",
      "ref": "Psalm 122:1 NIV"
    },
    {
      "text": "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      "ref": "Isaiah 40:31 NIV"
    },
    {
      "text": "The path of the righteous is like the morning sun, shining ever brighter till the full light of day.",
      "ref": "Proverbs 4:18 NIV"
    },
    {
      "text": "Take delight in the LORD, and he will give you the desires of your heart.",
      "ref": "Psalm 37:4 NIV"
    },
    {
      "text": "However, as it is written: \u201cWhat no eye has seen, what no ear has heard, and what no human mind has conceived\u201d\u2014 the things God has prepared for those who love him\u2014",
      "ref": "1 Corinthians 2:9 NIV"
    },
    {
      "text": "I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus.",
      "ref": "Philippians 3:14 NIV"
    },
    {
      "text": "I rejoice in your promise like one who finds great spoil.",
      "ref": "Psalm 119:162 NIV"
    }
  ],
  "excited": [
    {
      "text": "Never be lacking in zeal, but keep your spiritual fervor, serving the Lord.",
      "ref": "Romans 12:11 NIV"
    },
    {
      "text": "I rejoiced with those who said to me, \u201cLet us go to the house of the LORD.\u201d",
      "ref": "Psalm 122:1 NIV"
    },
    {
      "text": "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
      "ref": "Isaiah 40:31 NIV"
    },
    {
      "text": "The path of the righteous is like the morning sun, shining ever brighter till the full light of day.",
      "ref": "Proverbs 4:18 NIV"
    },
    {
      "text": "Take delight in the LORD, and he will give you the desires of your heart.",
      "ref": "Psalm 37:4 NIV"
    },
    {
      "text": "However, as it is written: \u201cWhat no eye has seen, what no ear has heard, and what no human mind has conceived\u201d\u2014 the things God has prepared for those who love him\u2014",
      "ref": "1 Corinthians 2:9 NIV"
    },
    {
      "text": "I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus.",
      "ref": "Philippians 3:14 NIV"
    },
    {
      "text": "I rejoice in your promise like one who finds great spoil.",
      "ref": "Psalm 119:162 NIV"
    }
  ],
  "surprised": [
    {
      "text": "When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is mankind that you are mindful of them, human beings that you care for them?",
      "ref": "Psalm 8:3-4 NIV"
    },
    {
      "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      "ref": "Psalm 139:14 NIV"
    },
    {
      "text": "\u201cAh, Sovereign LORD, you have made the heavens and the earth by your great power and outstretched arm. Nothing is too hard for you.",
      "ref": "Jeremiah 32:17 NIV"
    },
    {
      "text": "\u201cListen to this, Job; stop and consider God\u2019s wonders.",
      "ref": "Job 37:14 NIV"
    },
    {
      "text": "You are the God who performs miracles; you display your power among the peoples.",
      "ref": "Psalm 77:14 NIV"
    },
    {
      "text": "LORD, I have heard of your fame; I stand in awe of your deeds, LORD. Repeat them in our day, in our time make them known; in wrath remember mercy.",
      "ref": "Habakkuk 3:2 NIV"
    },
    {
      "text": "Come and see what God has done, his awesome deeds for mankind!",
      "ref": "Psalm 66:5 NIV"
    },
    {
      "text": "and sang the song of God\u2019s servant Moses and of the Lamb: \u201cGreat and marvelous are your deeds, Lord God Almighty. Just and true are your ways, King of the nations.",
      "ref": "Revelation 15:3 NIV"
    }
  ]
};

export const verseDB = FEELINGS_VERSES;
