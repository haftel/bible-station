#!/usr/bin/env python3
"""
generate-niv-data.py
Generates clean, normalized JSON for NIV (2011) and NIV (1984) translations.
Structure: public/data/translations/{translation}/{BOOK_OSIS}.json
Format: { "chapter": { "verse": "verse text without verse number or section heading" } }
"""

import os
import json
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_2011 = os.path.join(BASE_DIR, 'public', 'data', 'translations', 'niv2011')
OUT_1984 = os.path.join(BASE_DIR, 'public', 'data', 'translations', 'niv1984')

os.makedirs(OUT_2011, exist_ok=True)
os.makedirs(OUT_1984, exist_ok=True)

# OSIS codes in canonical biblical order (1 to 66)
BOOKS = [
    ("GEN", "Genesis"),
    ("EXO", "Exodus"),
    ("LEV", "Leviticus"),
    ("NUM", "Numbers"),
    ("DEU", "Deuteronomy"),
    ("JOS", "Joshua"),
    ("JDG", "Judges"),
    ("RUT", "Ruth"),
    ("1SA", "1 Samuel"),
    ("2SA", "2 Samuel"),
    ("1KI", "1 Kings"),
    ("2KI", "2 Kings"),
    ("1CH", "1 Chronicles"),
    ("2CH", "2 Chronicles"),
    ("EZR", "Ezra"),
    ("NEH", "Nehemiah"),
    ("EST", "Esther"),
    ("JOB", "Job"),
    ("PSA", "Psalms"),
    ("PRO", "Proverbs"),
    ("ECC", "Ecclesiastes"),
    ("SNG", "Song Of Solomon"),
    ("ISA", "Isaiah"),
    ("JER", "Jeremiah"),
    ("LAM", "Lamentations"),
    ("EZK", "Ezekiel"),
    ("DAN", "Daniel"),
    ("HOS", "Hosea"),
    ("JOL", "Joel"),
    ("AMO", "Amos"),
    ("OBA", "Obadiah"),
    ("JON", "Jonah"),
    ("MIC", "Micah"),
    ("NAM", "Nahum"),
    ("HAB", "Habakkuk"),
    ("ZEP", "Zephaniah"),
    ("HAG", "Haggai"),
    ("ZEC", "Zechariah"),
    ("MAL", "Malachi"),
    ("MAT", "Matthew"),
    ("MRK", "Mark"),
    ("LUK", "Luke"),
    ("JHN", "John"),
    ("ACT", "Acts"),
    ("ROM", "Romans"),
    ("1CO", "1 Corinthians"),
    ("2CO", "2 Corinthians"),
    ("GAL", "Galatians"),
    ("EPH", "Ephesians"),
    ("PHP", "Philippians"),
    ("COL", "Colossians"),
    ("1TH", "1 Thessalonians"),
    ("2TH", "2 Thessalonians"),
    ("1TI", "1 Timothy"),
    ("2TI", "2 Timothy"),
    ("TIT", "Titus"),
    ("PHM", "Philemon"),
    ("HEB", "Hebrews"),
    ("JAS", "James"),
    ("1PE", "1 Peter"),
    ("2PE", "2 Peter"),
    ("1JN", "1 John"),
    ("2JN", "2 John"),
    ("3JN", "3 John"),
    ("JUD", "Jude"),
    ("REV", "Revelation")
]

print("=== 1. Fetching & Generating NIV (2011) ===")
# Store 2011 verse texts for reference comparison when cleaning 1984
data_2011_store = {}

for osis, book_name in BOOKS:
    out_file = os.path.join(OUT_2011, f"{osis}.json")
    encoded_name = urllib.parse.quote(book_name)
    url = f"https://raw.githubusercontent.com/aruljohn/Bible-niv/master/{encoded_name}.json"
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            raw_data = json.load(resp)
        
        compact = {}
        for ch in raw_data.get('chapters', []):
            ch_str = str(ch.get('chapter', ''))
            compact[ch_str] = {}
            for v in ch.get('verses', []):
                v_str = str(v.get('verse', ''))
                text = v.get('text', '').strip()
                # Ensure clean whitespace
                text = ' '.join(text.split())
                compact[ch_str][v_str] = text
        
        data_2011_store[osis] = compact
        with open(out_file, 'w', encoding='utf-8') as f:
            json.dump(compact, f, ensure_ascii=False)
        print(f"  [NIV 2011] Saved {osis} ({book_name}) - {len(compact)} chapters")
    except Exception as e:
        print(f"  [ERROR] Failed to fetch 2011 {book_name}: {e}")

print("\n=== 2. Fetching & Generating NIV (1984) ===")
xml_url = "https://raw.githubusercontent.com/sajeevavahini/bibles/main/New%20International%20Version%20(1984)%20(US).xml"
req = urllib.request.Request(xml_url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    tree = ET.parse(resp)
root = tree.getroot()
books_1984_xml = root.findall('BIBLEBOOK')

def clean_1984_verse(v_text, v2011_text, is_psalm_v1=False):
    text = v_text.strip()
    # Strip any leading quote or extra whitespace
    if text.startswith('"') and not text.endswith('"'):
        # Only leading quote without closing quote
        text = text[1:].strip()
    
    # In Psalms verse 1, strip superscriptions by matching where the verse body starts
    if is_psalm_v1 and v2011_text:
        words_1984 = text.split()
        words_2011 = [w.lower().strip('",.?!:;') for w in v2011_text.split()[:3]]
        
        # Try 3-word match
        matched = False
        for i in range(len(words_1984)):
            cand = [w.lower().strip('",.?!:;') for w in words_1984[i:i+3]]
            if cand == words_2011:
                text = ' '.join(words_1984[i:])
                matched = True
                break
        
        # Try 2-word match if not matched
        if not matched:
            words_2011_2 = [w.lower().strip('",.?!:;') for w in v2011_text.split()[:2]]
            for i in range(len(words_1984)):
                cand = [w.lower().strip('",.?!:;') for w in words_1984[i:i+2]]
                if cand == words_2011_2:
                    text = ' '.join(words_1984[i:])
                    matched = True
                    break

    # Strip any remaining leading quote or whitespace
    text = text.strip()
    if text.startswith('"') and not text.endswith('"'):
        text = text[1:].strip()
    return ' '.join(text.split())

for idx, (osis, book_name) in enumerate(BOOKS):
    b_xml = books_1984_xml[idx]
    out_file = os.path.join(OUT_1984, f"{osis}.json")
    
    compact = {}
    for ch_xml in b_xml.findall('CHAPTER'):
        ch_str = str(ch_xml.attrib.get('cnumber', ''))
        compact[ch_str] = {}
        for v_xml in ch_xml.findall('VERS'):
            v_str = str(v_xml.attrib.get('vnumber', ''))
            raw_v_text = v_xml.text or ''
            
            # Get corresponding 2011 verse text for comparison
            v2011_text = ""
            if osis in data_2011_store and ch_str in data_2011_store[osis]:
                v2011_text = data_2011_store[osis][ch_str].get(v_str, "")
            
            is_psalm_v1 = (osis == "PSA" and v_str == "1")
            cleaned_text = clean_1984_verse(raw_v_text, v2011_text, is_psalm_v1)
            compact[ch_str][v_str] = cleaned_text
            
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(compact, f, ensure_ascii=False)
    print(f"  [NIV 1984] Saved {osis} ({book_name}) - {len(compact)} chapters")

print("\n=== Generation Complete! ===")
