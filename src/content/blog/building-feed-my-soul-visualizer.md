---
title: "Building Visualizer for 'Feed My Soul' with Python + Librosa"
description: "How I built a custom, config-driven music visualizer for Feed My Soul using Python, Librosa, OpenCV, FFmpeg, and YAML."
pubDate: "2026-02-22"
heroImage: "../../assets/photos/fms-visualizer-project.jpg"
category: "music"
---

# Building Visualizer for 'Feed My Soul' with Python + Librosa

I built a custom music visualizer for my new track "Feed My Soul" because I wanted visuals that felt personally aligned to the feeling of the song.

Instead of relying on one-click templates, I built a pipeline in Python where I could control how the music drives the image, frame by frame.

## Why I Built a Tool Instead of Just Using a Tool

The biggest reason: control.

Most visualizer tools are fast, but they make creative decisions for you. I wanted the opposite. I wanted to define:

- when certain layers appear
- how vocals should affect motion
- where transitions should happen
- how text and credits should behave
- how specific moments in the song should be highlighted

That meant building my own system with configurable layers, audio feature analysis, and timeline-based events.

## Core Stack

I used a practical stack:

- Python for orchestration and rendering logic
- Librosa for audio analysis (RMS, onset, spectral features, beat cues)
- NumPy/OpenCV for image operations and compositing
- FFmpeg for final encoding and muxing with audio
- YAML configs to control look, timing, and layer behavior without rewriting code

## How the Visualizer Works

At a high level, the renderer does this:

1. Load audio.
2. Extract features (energy, transients, frequency-band activity, etc.).
3. Smooth those features so animation feels musical, not jittery.
4. For each frame:
   - build a base image
   - composite enabled layers in order
   - modulate opacity/strength/scale using audio features
   - apply post effects (bloom, grain, exposure, vignette)
5. Stream frames into FFmpeg and export the final video.

The important part is mapping features to meaning, for example:

- vocals -> nebula intensity
- strings -> stars drift/twinkle
- percussion -> ray pulses/accents
- specific lyric moments -> scheduled highlight layers

## What Is YAML (And Why It Matters Here)

YAML is a human-readable configuration format. In this project, YAML is the control panel for the visualizer.

Instead of hardcoding style decisions, I define them in config files (for example: `configs/fms_reel.yaml`):

```yaml
fps: 30
width: 1080
height: 1920

nebula:
  enabled: true
  color_a: "#1a7f94"
  color_b: "#c9926a"

credits:
  enabled: true
  title: FEED MY SOUL
  lines:
    - JUNKERRI
    - OUT NOW!
```

That means one rendering engine can produce multiple visual identities.
I can tune timing, color, atmosphere, and layer behavior from YAML without touching core Python code.

## What I Learned

1. Tooling is creative power.
   Once I had a reusable renderer, I wasn't making "one video." I was making a system that could generate many versions with different styles and timelines.
2. Config-driven design is underrated.
   Moving creative decisions into YAML changed everything. I could iterate quickly on timing and visuals without touching core code.
3. Audio reactivity needs restraint.
   At first, everything can react to everything, and it looks chaotic. The best results came from selective mapping and careful smoothing.
4. "Cinematic" usually means less, not more.
   Reducing glow, controlling bloom, and protecting text safe zones made the final output feel much more professional.

## Technical Necessities (If You Want to Build One)

- Clean audio source (WAV recommended)
- Reliable feature extraction (librosa + smoothing)
- Deterministic timeline controls (start times, durations, key moments)
- Layer system with explicit ordering
- Configurable render settings (fps, resolution, internal scale)
- Text-safe layout controls (margins, scale clamps, no overflow)
- FFmpeg in your PATH for stable final export
- Fast preview workflow (short duration, lower internal scale)

## What to Focus On First

- Build a minimal render loop before adding effects
- Separate engine logic from creative config
- Add one reactive mapping at a time
- Test transitions around musical sections (verse, pre-chorus, chorus)
- Keep refining based on actual playback, not just single frames

This project reminded me that building your own tools is a creative strategy.

## 'Feed My Soul' Out Now

- Watch: [Feed My Soul - Visualizer](https://www.youtube.com/watch?v=Nx67G-Yn3O8)
- Listen: [Feed My Soul on Spotify](https://open.spotify.com/album/3JHdQumbJZnNGF2sFrOrSK)
