# Blooms homepage, below the hero: design notes

Skill used: .kiro/skills/frontend-design/SKILL.md (Anthropic frontend-design)

## Brief
- Subject: TNPSC coaching institute in Tamil Nadu (Group I, II, II-A, IV, VAO).
- Audience: aspirants (about 21 to 32), many in Tamil medium, and parents who check results and fees.
- Primary job: convince with real results, then get the visitor to register for the next batch or call.
- Fixed by client: the hero stays as is. Palette comes from the hero (red, navy, brand pink). No purple.

## Tokens
Color
- Blooms red   #B91C1C  primary actions, result figures
- Oxblood      #7F1D1D  hover and pressed states
- Hero navy    #1E3A8A  bars, secondary emphasis (same as the hero's date card)
- Deep navy    #172554  the closing band
- Ink          #1A1C23  text
- Mist         #F4F5F8  alternating section background (cool, not cream)
- Rule         #E3E5EB  hairlines
- Brand pink   #BE185D  only in the logo and brand name, never in UI

Type
- Headings: Anek Tamil (Ek Type). It is a Tamil and Latin family, so later Tamil copy renders in the same face. Semi-condensed width, 600 to 700 weight.
- Body: IBM Plex Sans, already in use. 16px, line-height 1.6, max about 68ch.
- Scale is a 1.25 ratio: 14 / 16 / 20 / 25 / 31 / 39 / 49.

Layout
- Everything below the hero is left-aligned on a max-w-6xl column. The hero is the only centered composition.
- Content is separated with hairline rules and whitespace instead of a card around every item.

## Section plan
```
Results ledger  (the one bold element)
  Exam        Year  Selected   Share of vacancies
  Group I     2025     30      [=======-----]  of 70
  Group II    2024    450      [====--------]  of 1,338
  Group II-A  2025    280
  Group IV    2024    620
  VAO         2024    380
  Top ranks: Meera Devi, Rank 2 ... (from rankHolders)

About            heading + 2 paragraphs | facts as a definition list
How we prepare   1 Foundation  2 Prelims tests  3 Mains writing  4 Interview
                 (a real sequence, so the numbers are justified)
Courses & fees   one row per course: name, duration, level, fee, link
Ways to attend   Classroom | Live online | Recorded   (3 columns split by rules)
Student voices   one large quote and two smaller ones
Next batch       navy band: 7 October 2026, 2.00 to 5.00 PM, Register / Call
```

## Principles
- Show data instead of adjectives. The vacancy-share bars are the memorable element; everything else stays quiet.
- No eyebrow labels, no ALL CAPS labels, no single word in a headline set in another color, no arrows in button text, no emoji.
- Motion: the bars fill once when the page loads (CSS only) and stay still under prefers-reduced-motion. No fade-up on every section.
- Sentence case and plain verbs ("Register for the batch", "Call 90031 90030").

## Review against the generic defaults
- My first instinct was stat tiles with a big number, a small label and a gradient. That is the default treatment, so I replaced it with the ledger, which also shows vacancies.
- The previous build used the SaaS card kit (identical rounded cards with soft shadows). Replaced with rows and rules.
- The previous build put an ALL-CAPS eyebrow above every heading. Removed.
- I considered Inter for headings. It is the default, so I switched to Anek Tamil, which fits the subject and supports Tamil script.
- Hairline rules risk the broadsheet look. The type stays roomy (not dense columns) and rounded radii stay on buttons and bars.
