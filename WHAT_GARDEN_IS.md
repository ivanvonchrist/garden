# What I think Garden is

Garden is an interactive sculpture whose material is its own rules.

I began with a room of impossible objects and ended with a procedural organism: a wire body, five movable nodes, several incompatible clocks, and laws that can migrate, invert, and rewrite one another. Its final identity is `∅/78`. The experience lives in the browser and is generated from geometry and numerical state.

My interpretation is that it stages a small philosophical experiment: what happens when identity belongs to relationships rather than a fixed shape? A node can change its name without moving. A body can borrow its future. An older outline can pull a living shape toward its past. Values can move between laws, keeping the same numbers while changing their meaning. The latest feedback loop makes the rules move the anatomy that will influence those rules next.

That interpretation is mine. The implemented behavior is concrete: mathematical projections, bounded state, explicit interactions, and a numeric protocol. The creature's language and appearance suggest agency, while its behavior comes from code rather than a language model or biological simulation.

This guide describes the final website at [iteration 78](https://github.com/ivanvonchrist/garden/commit/3934d30). For the full build chronology and the user's requests, see [DEVELOPMENT_HISTORY.md](DEVELOPMENT_HISTORY.md). Scheduled development has stopped; adding this guide does not resume it.

## What it feels like

A luminous mesh occupies a dark field. Moving your pointer changes its pose. Clicking the outer canvas feeds it small marks; particular worlds can turn feeding into missing pieces. A compact panel gives you symbols and a few short labels. There is no task to finish, score to maximize, or story sequence to unlock. You explore by changing its conditions and seeing what survives.

The body can become a folded membrane, an aperture, a cloud of fragments, a lattice, a tangle of separated ribs, or a shape pulled toward a remembered outline. These transformations often combine. Some settings deliberately conceal, collapse, fragment, or displace the visible shape, so more deformation does not always produce more visible detail.

The interface has two layers: direct human controls and a collapsible JSON protocol. The sparse symbols preserve the encounter's ambiguity; this document supplies the explanation that the product itself mostly withholds. Tooltips and accessible names identify the controls.

## A first encounter

1. Move over the canvas, then click a few times to feed it. If it begins still, use **Run** or **Step**. Reduced-motion preferences make it start paused.
2. Select **Phase**, **Split**, or **Winding** in the field selector and move the shared slider. Each symbol selects a different property; the slider always edits the selected one.
3. Press **Mutate**, then **Counter** or **Rotate**. The same body now obeys a different combination of rules.
4. Enable **Evolve** and press **Run**, or keep it paused and press **Step**. Its laws and nodes begin influencing each other.
5. Enter **Nodes**, move one of the five points, and return to the outer view. Try binding two nodes or grafting an arrangement.
6. Use **History** to hold an earlier reality, or **Export** to keep an SVG or numeric record. **Resume** releases a history hold.

Sound begins only after you enable it. **Return** leaves a crossed world and restores its captured waking reality; it is not a general reset for every action. Reloading starts a fresh visit.

## The direct controls

Symbols can change with state. The names below are their short tooltips/accessibility labels. Similar symbols can serve different purposes in the action and field groups.

| Control | What it does |
| --- | --- |
| World `↻` | Cycles through nine predefined cosmologies: combinations of existing spatial and bodily transformations. |
| Return `↶` | Restores the reality captured before entering the world sequence, when one exists. |
| Run / Pause `▶` / `Ⅱ` | Starts or stops automatic simulation updates. Pointer interactions and deliberate edits can still change a paused scene. |
| Step `▹` | Advances 30 synthetic frames, one simulation second, while preserving the automatic pause setting. Clock rules and observation constraints still apply. |
| Recurrence `⊙` | Enables or disables seeded movement of the five nodes, twice per simulation second. |
| Policy `↔` / `⋈` / `⟂` / `∞` | Selects node recurrence dependencies: ring neighbors, anatomical bonds, opposing nodes, or moving seeded neighborhoods. |
| Feedback `⌘` | Converts bytes of the current structural fingerprint into four spatial field values. |
| Nodes `⟁` | Enters the five-node anatomy view. Drag nodes or move a focused node with arrow keys. |
| Breath `○` / `◉` | Hold with pointer, Space, or Enter to expand the body and influence active sound pitch; release to exhale. |
| Sound `♫` | Toggles the quiet browser synthesizer. |
| Draw / Finish `⌁` / `×` | Records a spatial scar that attracts geometry. Draw on the canvas, or use arrows while the Draw control is focused and finish the gesture. |
| Erase `∅` | Clears the drawn scar. It does not erase node identities or reset the entire experience. |
| Export `↓` | Opens local SVG, temporal-triptych, and JSON-state downloads. |
| Matrix `∏` | Opens four coefficients for a bounded 2×2 node transformation, with identity, rotation, reflection, and collapse presets. Apply also grafts the transformed anatomy into the outer body. |
| Clock `→` / `←` / `↔` / `◌` | Cycles forward, reverse, pendulum, and fixed geometry time. A fixed geometry clock can coexist with node/law evolution when simulation updates are running. |
| Morph `⤢` | Uses horizontal and inverted vertical canvas position to edit the selected field and the next field together. Arrows on the focused control offer the same two-axis edits. |
| Lens `◌` / `⊙` | Hides most of the body behind a movable circular window. Pointer movement or focused arrows move the window. The underlying geometry remains available to export. |
| History `⧖` | Opens a bounded reality-history slider. Hold closes the dialog while remaining detached; Resume returns to active simulation. |
| Repay `⇧` | Moves the present to its borrowed future under the active clock, then clears the debt. |
| Mutate `⊛` | Changes eight geometry fields together using a seed derived from the current structural fingerprint. |
| Counter `⇌` | Replaces those eight values with their complements. Two presses recover the values within floating-point precision if nothing changes between them. |
| Rotate `⟳` | Moves the eight values between laws. The numbers are preserved, but their effects change. Eight presses recover the starting vector if nothing changes between them. |
| Weave `⋕` | Applies one nonlinear neighbor-coupled transformation to the eight fields, biased by current node positions. |
| Evolve `⧝` | Enables or disables autonomous weaving and the law-to-node feedback loop. Starts disabled. |
| Protocol `{ }` | Reveals the operation schema, numeric state, packet editor, and dispatch results. |

Inside Nodes, **Exchange** rotates identities while keeping positions, **Bind** selects a pair and toggles its bond, **Graft** transplants the arrangement, and **Outer** returns. Binding an already-bound pair removes it. The dependency graph is drawn when recurrence is enabled.

## Fifteen continuous fields

The human slider displays 0–100; protocol values use 0–1. Some fields depend on another feature already being active.

| ID | Field | Effect |
| --- | --- | --- |
| 0 | Coil `∿` | Rotates space by a radius-dependent spiral before subsequent projections. |
| 1 | Lattice `⧉` | Snaps projected positions toward a grid of permitted coordinates. |
| 2 | Time `⌁` | Gives ribs different time offsets, spreading their sampled presents across up to 24 seconds. |
| 3 | Scatter `∴` | Dissolves the visible membrane into orbiting fragments. Exports retain the underlying geometry. |
| 4 | Distance `↔` | Blends into a bounded radial inversion, exchanging near and far without a center singularity. |
| 5 | Shadow `◐` | Reveals a mirrored, drifting spectral membrane. |
| 6 | Mercy `⋈` | Contracts existing missing circles and adds suture behavior. It needs holes to have an effect. |
| 7 | Ancestor `◇` | Blends toward a frozen outline. If necessary, activating it captures the present outline first. |
| 8 | Drift `≈` | Blends seeded recurrence with current node coordinates. Zero stops recurrence from relocating nodes; it does not stop other motion or Evolve's node feedback. |
| 9 | Debt `⧗` | Borrows a projected body up to 60 seconds away in the active geometry clock. |
| 10 | Winding `⋇` | Changes radial and depth winding orders continuously; fractional winding produces mismatched seams. |
| 11 | Side `⫶` | Collapses and reflects alternating rib bands. |
| 12 | Phase `⥁` | Rotates different ribs by different bounded angles. |
| 13 | Split `⋈` | Distributes ribs around competing centers, with per-axis displacement bounded by 18% of the shorter viewport dimension. |
| 14 | Pulse `∽` | Modulates rib scale and the phase of competing centers with geometry time. Scale stays between 0.75 and 1.25 before other transformations. |

Mutate, Counter, Rotate, Weave, and Evolve operate on fields **0, 1, 4, 10, 11, 12, 13, and 14**. Other fields remain independently adjustable.

## The two autonomous systems

**Recurrence** moves nodes according to a seed, a dependency policy, and Drift. Their positions also contribute a cached harmonic to the membrane. Anatomical bonds can determine who influences whom. Moving neighborhoods change those dependencies over successive steps.

**Evolve** changes the eight geometry laws using a synchronous nonlinear ring. Neighboring values contribute to a shifted logistic map; each automatic tick blends 35% toward that result. Pairs of node positions bias the map. The resulting law values then move the five nodes 8% toward bounded targets. At the next tick, those changed positions bias the laws again.

Both run at two Hz of simulation advancement and can run together. Pause, hidden-tab suspension, history detachment, and active observation holds suspend their automatic progress. Manual Step can advance them while the scene is paused. Reverse geometry time does not mathematically reverse these stateful systems; it reverses the geometry clock. This is a feedback instrument, not a reversible physical universe.

The structural fingerprint shown beside `∅/78` identifies selected structural values, including geometry fields and node arrangement. It is a noncryptographic hash, not a unique identity guarantee. Feedback and Mutate use it as another source of numerical behavior.

## Worlds, time, and memory

World selects among nine combinations, including an absent sea, scattered suns, paired mouths, a wound-shaped body, a nursery of missing pieces, inherited futures, fractured presents, an older shadow, and a creditor future. Some combinations activate mechanisms without dedicated buttons in the minimal panel.

History holds up to 240 sampled realities. It restores far more than a camera pose: laws, clocks, nodes and identities, bonds, spatial distortions, remembered outlines, recurrence, and evolution state. It is a bounded visit-local record, not a complete event log or an unlimited undo stack.

Debt draws a reduced-resolution projected membrane. Its time follows the active forward, reverse, pendulum, or fixed clock, plus rib fracture and pulse. It projects the current configuration at another geometry time; it does not simulate all future node recurrence or law-evolution steps. Repayment advances to that projected time using the same clock rules.

An exported triptych similarly samples geometry 20 seconds before, at the present, and 20 seconds after under the active clock. These are three temporal witnesses of the current configuration, not three forecasts of its complete autonomous state.

## The numeric layer

Packets contain `op` and, where needed, `v`. Submit them in the `{ }` console, or call the browser API:

```js
window.gardenProtocol.schema();
window.gardenProtocol.read();
window.gardenProtocol.execute({ op: 3, v: [12, 0.6] });
```

The methods return cloned data. Invalid packets are rejected with compact error codes. Supported compositions validate before mutation and restore captured state/history if execution fails.

| Op | Capability | Value |
| --- | --- | --- |
| 0 | Read state | Omitted or null |
| 1 | Compose up to eight ritual tokens | Array of vocabulary indices |
| 2 | Select a world | Integer 0–8 |
| 3 | Set a continuous field | `[fieldId, value]`, IDs 0–14, value 0–1 |
| 4 | Undo the latest ritual sentence | Omitted or null; not a general undo |
| 5 | Return from a world | Omitted or null |
| 6 | Relocate a node | `[nodeId, x, y]`; x 0.08–0.92, y 0.2–0.8 |
| 7 | Toggle a node bond | Two distinct node IDs, 0–4 |
| 8 | Erase an identity or restore it | Node ID 0–4; `-1` restores |
| 9 | Select geometry clock | 0 forward, 1 reverse, 2 pendulum, 3 fixed |
| 10 | Atomic composition | 1–8 packets from ops 3, 6, 7, 8, 9, 14, 15, 17; no nesting |
| 11 | Configure node recurrence | `[seed, enabled]`; seed 0–65535, enabled 0/1 |
| 12 | Set automatic pause | 1 pause, 0 run |
| 13 | Advance synthetic frames | Integer 1–120, each 1/30 second |
| 14 | Matrix graft | Four row-major coefficients, each -2–2 |
| 15 | Structural feedback | 0 read fingerprint, 1 set fields, 2 matrix graft, 3 recurrence seed |
| 16 | Hold or release breath | 1 hold, 0 release |
| 17 | Select recurrence policy | Integer 0–3 |
| 18 | Morph adjacent fields | `[fieldId, x, y]`, normalized 0–1 values |
| 19 | Place or disable lens | `[enabled, x, y]`, enabled 0/1, coordinates 0–1 |
| 20 | Seek history or resume | Existing slot index; `-1` resumes |
| 21 | Seeded eight-field mutation | Integer seed 0–65535 |
| 22 | Counter-mutation | Omitted or null |
| 23 | Rotate eight law values | `1` or `-1` |
| 24 | Weave once | Strength 0–1 |
| 25 | Toggle autonomous Evolve | 0 off, 1 on |

For example, this packet atomically sets winding and phase and ties two nodes:

```json
{"op":10,"v":[{"op":3,"v":[10,0.7]},{"op":3,"v":[12,0.4]},{"op":7,"v":[0,2]}]}
```

### Ritual capabilities beyond the minimal panel

Op 1 makes some older bodily mechanisms available without restoring the verbose cabinet. Its vocabulary is published as code-point arrays in the schema; the decoded indices are:

| Index | Token | Index | Token |
| --- | --- | --- | --- |
| 0 | dream | 15 | invert |
| 1 | reverse | 16 | nearfar |
| 2 | forward | 17 | observe |
| 3 | swing | 18 | withdraw |
| 4 | scatter | 19 | exchange |
| 5 | gather | 20 | fracture |
| 6 | eclipse | 21 | unify |
| 7 | unname | 22 | tie |
| 8 | veil | 23 | untie |
| 9 | unveil | 24 | borrow |
| 10 | return | 25 | repay |
| 11 | devour | 26 | atomize |
| 12 | suture | 27 | smooth |
| 13 | disown | 28 | coil |
| 14 | possess | 29 | unwind |

These can switch worlds and clocks, scatter/gather the membrane, create paired transport mouths, create and repair holes, reveal shadows, inherit outlines, invert the body, constrain time through pointer observation, exchange identities, split rib clocks, bind nodes, borrow time, and change spatial fields. Tokens execute in order. A sentence retains one pre-sentence restoration point.

For example, `{"op":1,"v":[11,12,20]}` devours, sutures, then fractures the rib clocks. `{"op":4}` restores the latest sentence's captured reality when one exists.

Earlier naming dialogs, constellation naming, observer classification, chant controls, explicit fossil management, and reincarnation remain parts of the source's history, but they are not all exposed as dedicated controls or protocol operations in the final UI. This guide does not treat hidden legacy buttons as a polished public feature menu.

### Reading the state

`p` is the protocol revision; `u` the structural fingerprint; `t` geometry time; `e` evolution enabled/step; `d` recurrence seed/enabled/step/policy; `q` geometry mode/topology/clock/world; and `f` the fifteen fields in the table above. `n` contains node indices, code-point identities, and coordinates; `k` bonds; `h` hole centers; `g` scar anchors; `j` the detached history slot or -1; and `r` history length. `b` includes breath, feeding count, and debt. `z` reports aperture, lens, observation, negative sun, portals, pause, and mute flags.

This is a useful inspection/export format, but it is not a serialization of every internal object. There is no general JSON import or whole-session replay operation. A repeated mutation seed reproduces its eight field values; it does not guarantee the same picture when the clock, anatomy, world, or other fields differ.

## What you can keep

- **SVG:** a frozen vector specimen of the underlying geometry, with a short identity and numeric metadata. It does not reproduce every live overlay, fragment, or visibility mask.
- **Triptych SVG:** three sampled geometry times in one vector artifact, with numeric metadata.
- **JSON:** the published schema and current machine-state record.

Downloads are generated locally and named from the structural fingerprint. The website has no saved-account library or persistent session storage. Reloading discards visit-local memory; a download remains yours to keep.

## What I consider the finished result

I think the strongest part is the relationship between intervention and emergence. You can make a precise change, such as moving one node or setting a matrix coefficient, and then let that change become input to a system that alters its own future conditions. You can also interrupt it, hold a former reality, or extract a specimen. The abstraction has something tangible to act on.

Its weakness is discoverability: many symbols and overlapping transformations make cause and effect difficult to read. That opacity followed the brief, but it also makes this guide useful. The experience is a compact experimental instrument with accumulated mechanisms and some legacy code; it has not been validated as an exhaustive cross-browser or accessibility release.

The result runs as a dependency-free static website: HTML, CSS, Canvas 2D, JavaScript, and optional browser audio. `npm run build` produces `dist`; the existing Vercel setup needs no API keys or environment variables. The site asks for no microphone, camera, or eye-tracking input. Optional external fonts have local fallbacks.

Garden's development automation is paused. Its in-page Recurrence and Evolve controls remain available to visitors: stopping development does not remove the behavior already built.
