import json, re, os

# 1. Parse existing verses from feelingsData.js
with open('src/data/feelingsData.js') as f:
    content = f.read()

pattern = r'(\b[a-z_]+):\s*\[\s*(\{[\s\S]*?\})\s*\]'
matches = re.findall(pattern, content)
raw_verses = {}
for k, block in matches:
    v_pattern = r'\{\s*text:\s*\"(.*?)\"\s*,\s*ref:\s*\"(.*?)\"\s*\}'
    v_matches = re.findall(v_pattern, block)
    if v_matches:
        raw_verses[k] = [{'text': t, 'ref': r} for t, r in v_matches]

# Color palettes for the 7 cores:
CORE_THEMES = {
  "happy": {
    "color": "#d97706",         # Warm amber
    "secColor": "#f59e0b",      # Golden amber
    "tertColor": "#fbbf24",     # Soft sunlight
    "lightColor": "#fef3c7",    # Background tint
    "darkColor": "#92400e"      # Deep text
  },
  "sad": {
    "color": "#2563eb",         # Royal blue
    "secColor": "#3b82f6",      # Steel blue
    "tertColor": "#60a5fa",      # Soft sky
    "lightColor": "#dbeafe",    # Background tint
    "darkColor": "#1e40af"      # Deep text
  },
  "disgusted": {
    "color": "#059669",         # Emerald
    "secColor": "#10b981",      # Jade green
    "tertColor": "#34d399",     # Sage mint
    "lightColor": "#d1fae5",    # Background tint
    "darkColor": "#065f46"      # Deep text
  },
  "angry": {
    "color": "#dc2626",         # Crimson
    "secColor": "#ef4444",      # Terracotta red
    "tertColor": "#f87171",     # Soft coral
    "lightColor": "#fee2e2",    # Background tint
    "darkColor": "#991b1b"      # Deep text
  },
  "fearful": {
    "color": "#7c3aed",         # Violet
    "secColor": "#8b5cf6",      # Purple
    "tertColor": "#a78bfa",     # Soft lavender
    "lightColor": "#ede9fe",    # Background tint
    "darkColor": "#5b21b6"      # Deep text
  },
  "bad": {
    "color": "#475569",         # Slate
    "secColor": "#64748b",      # Medium slate
    "tertColor": "#94a3b8",     # Light slate
    "lightColor": "#f1f5f9",    # Background tint
    "darkColor": "#1e293b"      # Deep text
  },
  "surprised": {
    "color": "#0891b2",         # Cyan / Teal
    "secColor": "#06b6d4",      # Sky cyan
    "tertColor": "#22d3ee",     # Soft teal
    "lightColor": "#cffafe",    # Background tint
    "darkColor": "#155e75"      # Deep text
  }
}

RAW_HIERARCHY = [
  {
    "id": "happy",
    "label": "Happy",
    "secondaries": [
      { "id": "playful", "label": "Playful", "tertiaries": [{ "id": "aroused", "label": "Aroused" }, { "id": "cheeky", "label": "Cheeky" }] },
      { "id": "content", "label": "Content", "tertiaries": [{ "id": "free", "label": "Free" }, { "id": "joyful", "label": "Joyful" }] },
      { "id": "interested", "label": "Interested", "tertiaries": [{ "id": "curious", "label": "Curious" }, { "id": "inquisitive", "label": "Inquisitive" }] },
      { "id": "proud", "label": "Proud", "tertiaries": [{ "id": "successful", "label": "Successful" }, { "id": "confident", "label": "Confident" }] },
      { "id": "accepted", "label": "Accepted", "tertiaries": [{ "id": "respected", "label": "Respected" }, { "id": "valued", "label": "Valued" }] },
      { "id": "powerful", "label": "Powerful", "tertiaries": [{ "id": "courageous", "label": "Courageous" }, { "id": "creative", "label": "Creative" }] },
      { "id": "peaceful", "label": "Peaceful", "tertiaries": [{ "id": "loving", "label": "Loving" }, { "id": "thankful", "label": "Thankful" }] },
      { "id": "trusting", "label": "Trusting", "tertiaries": [{ "id": "sensitive", "label": "Sensitive" }, { "id": "intimate", "label": "Intimate" }] },
      { "id": "optimistic", "label": "Optimistic", "tertiaries": [{ "id": "hopeful", "label": "Hopeful" }, { "id": "inspired", "label": "Inspired" }] }
    ]
  },
  {
    "id": "sad",
    "label": "Sad",
    "secondaries": [
      { "id": "lonely", "label": "Lonely", "tertiaries": [{ "id": "isolated", "label": "Isolated" }, { "id": "abandoned", "label": "Abandoned" }] },
      { "id": "vulnerable", "label": "Vulnerable", "tertiaries": [{ "id": "victimized", "label": "Victimized" }, { "id": "fragile", "label": "Fragile" }] },
      { "id": "despair", "label": "Despair", "tertiaries": [{ "id": "grief", "label": "Grief" }, { "id": "powerless", "label": "Powerless" }] },
      { "id": "guilty", "label": "Guilty", "tertiaries": [{ "id": "ashamed", "label": "Ashamed" }, { "id": "remorseful", "label": "Remorseful" }] },
      { "id": "depressed", "label": "Depressed", "tertiaries": [{ "id": "empty", "label": "Empty" }, { "id": "inferior", "label": "Inferior" }] },
      { "id": "hurt", "label": "Hurt", "tertiaries": [{ "id": "disappointed", "label": "Disappointed" }, { "id": "embarrassed", "label": "Embarrassed" }] }
    ]
  },
  {
    "id": "disgusted",
    "label": "Disgusted",
    "secondaries": [
      { "id": "disapproving", "label": "Disapproving", "tertiaries": [{ "id": "judgmental", "label": "Judgmental" }, { "id": "embarrassed_disgusted", "label": "Embarrassed" }] },
      { "id": "disappointed_disgusted", "label": "Disappointed", "tertiaries": [{ "id": "appalled", "label": "Appalled" }, { "id": "revolted", "label": "Revolted" }] },
      { "id": "awful", "label": "Awful", "tertiaries": [{ "id": "nauseated", "label": "Nauseated" }, { "id": "detestable", "label": "Detestable" }] },
      { "id": "repelled", "label": "Repelled", "tertiaries": [{ "id": "horrified", "label": "Horrified" }, { "id": "hesitant", "label": "Hesitant" }] }
    ]
  },
  {
    "id": "angry",
    "label": "Angry",
    "secondaries": [
      { "id": "critical", "label": "Critical", "tertiaries": [{ "id": "dismissive", "label": "Dismissive" }, { "id": "skeptical", "label": "Skeptical" }] },
      { "id": "distant", "label": "Distant", "tertiaries": [{ "id": "numb", "label": "Numb" }, { "id": "withdrawn", "label": "Withdrawn" }] },
      { "id": "frustrated", "label": "Frustrated", "tertiaries": [{ "id": "annoyed", "label": "Annoyed" }, { "id": "infuriated", "label": "Infuriated" }] },
      { "id": "aggressive", "label": "Aggressive", "tertiaries": [{ "id": "hostile", "label": "Hostile" }, { "id": "provoked", "label": "Provoked" }] },
      { "id": "mad", "label": "Mad", "tertiaries": [{ "id": "jealous", "label": "Jealous" }, { "id": "furious", "label": "Furious" }] },
      { "id": "bitter", "label": "Bitter", "tertiaries": [{ "id": "violated", "label": "Violated" }, { "id": "indignant", "label": "Indignant" }] },
      { "id": "humiliated", "label": "Humiliated", "tertiaries": [{ "id": "ridiculed", "label": "Ridiculed" }, { "id": "disrespected", "label": "Disrespected" }] },
      { "id": "letdown", "label": "Let Down", "tertiaries": [{ "id": "betrayed", "label": "Betrayed" }, { "id": "resentful", "label": "Resentful" }] }
    ]
  },
  {
    "id": "fearful",
    "label": "Fearful",
    "secondaries": [
      { "id": "scared", "label": "Scared", "tertiaries": [{ "id": "helpless", "label": "Helpless" }, { "id": "frightened", "label": "Frightened" }] },
      { "id": "anxious", "label": "Anxious", "tertiaries": [{ "id": "overwhelmed_fear", "label": "Overwhelmed" }, { "id": "worried", "label": "Worried" }] },
      { "id": "insecure", "label": "Insecure", "tertiaries": [{ "id": "inadequate", "label": "Inadequate" }, { "id": "inferior_fear", "label": "Inferior" }] },
      { "id": "weak", "label": "Weak", "tertiaries": [{ "id": "worthless", "label": "Worthless" }, { "id": "insignificant", "label": "Insignificant" }] },
      { "id": "rejected", "label": "Rejected", "tertiaries": [{ "id": "excluded", "label": "Excluded" }, { "id": "persecuted", "label": "Persecuted" }] },
      { "id": "threatened", "label": "Threatened", "tertiaries": [{ "id": "nervous", "label": "Nervous" }, { "id": "exposed", "label": "Exposed" }] }
    ]
  },
  {
    "id": "bad",
    "label": "Bad",
    "secondaries": [
      { "id": "bored", "label": "Bored", "tertiaries": [{ "id": "indifferent", "label": "Indifferent" }, { "id": "apathetic", "label": "Apathetic" }] },
      { "id": "busy", "label": "Busy", "tertiaries": [{ "id": "pressured", "label": "Pressured" }, { "id": "rushed", "label": "Rushed" }] },
      { "id": "stressed", "label": "Stressed", "tertiaries": [{ "id": "overwhelmed", "label": "Overwhelmed" }, { "id": "outofcontrol", "label": "Out of Control" }] },
      { "id": "tired", "label": "Tired", "tertiaries": [{ "id": "sleepy", "label": "Sleepy" }, { "id": "unfocused", "label": "Unfocused" }] }
    ]
  },
  {
    "id": "surprised",
    "label": "Surprised",
    "secondaries": [
      { "id": "startled", "label": "Startled", "tertiaries": [{ "id": "shocked", "label": "Shocked" }, { "id": "dismayed", "label": "Dismayed" }] },
      { "id": "confused", "label": "Confused", "tertiaries": [{ "id": "disillusioned", "label": "Disillusioned" }, { "id": "perplexed", "label": "Perplexed" }] },
      { "id": "amazed", "label": "Amazed", "tertiaries": [{ "id": "astonished", "label": "Astonished" }, { "id": "awe", "label": "Awe" }] },
      { "id": "excited", "label": "Excited", "tertiaries": [{ "id": "eager", "label": "Eager" }, { "id": "energetic", "label": "Energetic" }] }
    ]
  }
]

total_leaves = sum(sum(len(t["tertiaries"]) for t in c["secondaries"]) for c in RAW_HIERARCHY)
deg_per_leaf = 360.0 / total_leaves

curr_angle = 0.0
hierarchy = []
feelings_index = {}

for core in RAW_HIERARCHY:
    c_id = core["id"]
    theme = CORE_THEMES[c_id]
    c_start = curr_angle
    sec_list = []
    
    for sec in core["secondaries"]:
        s_id = sec["id"]
        s_start = curr_angle
        tert_list = []
        
        for tert in sec["tertiaries"]:
            t_id = tert["id"]
            t_start = curr_angle
            t_end = curr_angle + deg_per_leaf
            curr_angle = t_end
            
            tert_obj = {
                "id": t_id,
                "label": tert["label"],
                "tier": 3,
                "coreId": c_id,
                "parentId": s_id,
                "startAngle": round(t_start, 2),
                "endAngle": round(t_end, 2),
                "color": theme["tertColor"],
                "lightColor": theme["lightColor"],
                "darkColor": theme["darkColor"],
                "path": [core["label"], sec["label"], tert["label"]]
            }
            tert_list.append(tert_obj)
            feelings_index[t_id] = tert_obj
            
        s_end = curr_angle
        sec_obj = {
            "id": s_id,
            "label": sec["label"],
            "tier": 2,
            "coreId": c_id,
            "parentId": c_id,
            "startAngle": round(s_start, 2),
            "endAngle": round(s_end, 2),
            "color": theme["secColor"],
            "lightColor": theme["lightColor"],
            "darkColor": theme["darkColor"],
            "path": [core["label"], sec["label"]],
            "tertiaries": tert_list
        }
        sec_list.append(sec_obj)
        feelings_index[s_id] = sec_obj
        
    c_end = curr_angle
    core_obj = {
        "id": c_id,
        "label": core["label"],
        "tier": 1,
        "coreId": c_id,
        "parentId": None,
        "startAngle": round(c_start, 2),
        "endAngle": round(c_end, 2),
        "color": theme["color"],
        "lightColor": theme["lightColor"],
        "darkColor": theme["darkColor"],
        "path": [core["label"]],
        "secondaries": sec_list
    }
    hierarchy.append(core_obj)
    feelings_index[c_id] = core_obj

FEELING_VERSE_SOURCES = {
  # Cores
  "happy": ["joyful", "blessed", "thankful", "content"],
  "sad": ["sad", "heartbroken", "grieving", "lonely"],
  "angry": ["angry", "bitter", "betrayed"],
  "fearful": ["afraid", "anxious", "doubtful", "insecure"],
  "bad": ["tired", "stressed", "overwhelmed"],
  "surprised": ["amazed", "excited"],
  "disgusted": ["bitter", "guilty", "insecure"],

  # Happy branch
  "playful": ["joyful", "excited"],
  "aroused": ["joyful", "loving"],
  "cheeky": ["joyful", "excited"],
  "content": ["content"],
  "free": ["forgiven", "content"],
  "joyful": ["joyful"],
  "interested": ["inspired", "amazed"],
  "curious": ["inspired", "amazed"],
  "inquisitive": ["inspired", "hopeful"],
  "proud": ["victorious", "confident"],
  "successful": ["victorious", "confident"],
  "confident": ["confident"],
  "accepted": ["loved", "forgiven"],
  "respected": ["loved", "confident"],
  "valued": ["loved", "insecure"],
  "powerful": ["victorious", "inspired"],
  "courageous": ["confident", "afraid"],
  "creative": ["inspired", "amazed"],
  "peaceful": ["peaceful"],
  "loving": ["loving"],
  "thankful": ["thankful"],
  "trusting": ["safe", "peaceful"],
  "sensitive": ["loved", "loving"],
  "intimate": ["loved", "peaceful"],
  "optimistic": ["hopeful"],
  "hopeful": ["hopeful"],
  "inspired": ["inspired"],

  # Sad branch
  "lonely": ["lonely"],
  "isolated": ["lonely", "afraid"],
  "abandoned": ["lonely", "betrayed"],
  "vulnerable": ["heartbroken", "safe"],
  "victimized": ["heartbroken", "betrayed"],
  "fragile": ["heartbroken", "tired"],
  "despair": ["grieving", "hopeful"],
  "grief": ["grieving"],
  "powerless": ["overwhelmed", "inspired"],
  "guilty": ["guilty"],
  "ashamed": ["guilty", "forgiven"],
  "remorseful": ["guilty", "forgiven"],
  "depressed": ["sad", "heartbroken"],
  "empty": ["sad", "lonely"],
  "inferior": ["insecure", "loved"],
  "hurt": ["heartbroken", "betrayed"],
  "disappointed": ["heartbroken", "doubtful"],
  "embarrassed": ["insecure", "guilty"],

  # Disgusted branch
  "disapproving": ["bitter", "angry"],
  "judgmental": ["angry", "loving"],
  "embarrassed_disgusted": ["insecure", "guilty"],
  "disappointed_disgusted": ["heartbroken", "doubtful"],
  "appalled": ["bitter", "sad"],
  "revolted": ["bitter", "angry"],
  "awful": ["sad", "tired"],
  "nauseated": ["overwhelmed", "safe"],
  "detestable": ["guilty", "forgiven"],
  "repelled": ["afraid", "safe"],
  "horrified": ["afraid", "safe"],
  "hesitant": ["doubtful", "confident"],

  # Angry branch
  "critical": ["angry", "bitter"],
  "dismissive": ["angry", "loving"],
  "skeptical": ["doubtful"],
  "distant": ["lonely", "peaceful"],
  "numb": ["sad", "peaceful"],
  "withdrawn": ["lonely", "safe"],
  "frustrated": ["angry", "stressed"],
  "annoyed": ["angry", "peaceful"],
  "infuriated": ["angry"],
  "aggressive": ["angry"],
  "hostile": ["angry", "peaceful"],
  "provoked": ["angry", "peaceful"],
  "mad": ["angry"],
  "jealous": ["angry", "content"],
  "furious": ["angry"],
  "bitter": ["bitter"],
  "violated": ["betrayed", "safe"],
  "indignant": ["angry", "victorious"],
  "humiliated": ["insecure", "loved"],
  "ridiculed": ["betrayed", "loved"],
  "disrespected": ["betrayed", "confident"],
  "letdown": ["betrayed", "heartbroken"],
  "betrayed": ["betrayed"],
  "resentful": ["bitter", "angry"],

  # Fearful branch
  "scared": ["afraid"],
  "helpless": ["afraid", "safe"],
  "frightened": ["afraid"],
  "anxious": ["anxious"],
  "overwhelmed_fear": ["overwhelmed", "anxious"],
  "worried": ["anxious"],
  "insecure": ["insecure"],
  "inadequate": ["insecure", "confident"],
  "inferior_fear": ["insecure", "loved"],
  "weak": ["tired", "inspired"],
  "worthless": ["insecure", "loved"],
  "insignificant": ["insecure", "loved"],
  "rejected": ["lonely", "loved"],
  "excluded": ["lonely", "loved"],
  "persecuted": ["victorious", "safe"],
  "threatened": ["afraid", "safe"],
  "nervous": ["anxious", "safe"],
  "exposed": ["safe", "loved"],

  # Bad branch
  "bored": ["inspired", "joyful"],
  "indifferent": ["inspired", "loving"],
  "apathetic": ["inspired", "peaceful"],
  "busy": ["stressed", "tired"],
  "pressured": ["stressed", "peaceful"],
  "rushed": ["stressed", "peaceful"],
  "stressed": ["stressed"],
  "overwhelmed": ["overwhelmed"],
  "outofcontrol": ["overwhelmed", "peaceful"],
  "tired": ["tired"],
  "sleepy": ["tired", "peaceful"],
  "unfocused": ["tired", "inspired"],

  # Surprised branch
  "startled": ["amazed", "afraid"],
  "shocked": ["amazed", "peaceful"],
  "dismayed": ["afraid", "hopeful"],
  "confused": ["doubtful", "peaceful"],
  "disillusioned": ["doubtful", "hopeful"],
  "perplexed": ["doubtful", "inspired"],
  "amazed": ["amazed"],
  "astonished": ["amazed"],
  "awe": ["amazed", "blessed"],
  "excited": ["excited"],
  "eager": ["excited", "hopeful"],
  "energetic": ["excited", "inspired"]
}

feelings_verses = {}
for f_id in feelings_index:
    sources = FEELING_VERSE_SOURCES.get(f_id, ["peaceful", "hopeful"])
    combined = []
    seen = set()
    for src in sources:
        for v in raw_verses.get(src, []):
            if v["ref"] not in seen:
                seen.add(v["ref"])
                combined.append(v)
    feelings_verses[f_id] = combined[:8]

out_path = 'src/data/feelingsWheelData.js'
with open(out_path, 'w') as f:
    f.write('// Standard 3-Tier Feelings Wheel Taxonomy & Encouraging NIV 2011 Scriptures\n')
    f.write('// Pre-calculated angles and harmonic color palettes for seamless SVG rendering\n\n')
    f.write('export const FEELINGS_HIERARCHY = ' + json.dumps(hierarchy, indent=2) + ';\n\n')
    f.write('export const FEELINGS_INDEX = ' + json.dumps(feelings_index, indent=2) + ';\n\n')
    f.write('export const FEELINGS_VERSES = ' + json.dumps(feelings_verses, indent=2) + ';\n\n')
    f.write('export const verseDB = FEELINGS_VERSES;\n')

print(f"Generated {out_path} with {len(feelings_index)} feelings.")
