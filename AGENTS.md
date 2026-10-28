# AGENTS.md

Notes for anyone, human or AI agent, changing this code. `README.md` documents the `UIElement` and `UIInteraction`
shapes and every public method; this file covers how the code fits together and how to change it safely.

## What this is

FormGen is a small TypeScript library that builds an HTML data-entry form from an array of `UIElement` definitions.
It can read the form's values back, fill it again, score it and validate it. It runs in the browser with no
framework or dependencies. `index.html` is a test page that exercises each feature. There is no build system,
server or package manager.

## Commands

```bash
tsc                           # compiles FormGen.ts to FormGen.js (and .js.map) using tsconfig.json; needs TypeScript installed
python3 -m http.server 8000   # serves the folder, so the test page's "Form Definition from URL" button can fetch SampleForm.json
```

Open `index.html` in a browser (from that server, for the URL button). There are no tests.

## Layout

- `FormGen.ts`: the whole library, as global classes.
  - `FormGen` takes a container element id, the elements and a version string. `HydrateForm` writes the form into
    the container as HTML.
  - The public methods read, set, score and validate the form, load a definition over HTTP
    (`GetFormDefinitionFrom`), and run show and hide interactions (`DoFormGenInteraction`).
  - `UIElement` describes one field, of type TEXT, NARRATIVE, DATE, RADIO, DROPDOWN or CHECKBOX.
  - `UIInteraction` shows or hides a target element when a source takes a value. `UIValue` is one field's value.
- `FormGen.js` and `FormGen.js.map`: the compiled output, committed so the page runs without a build.
- `index.html`: the test page. It builds a sample form as `FG` and has a button for each method.
- `SampleForm.json`: a form definition in the same shape as `UIElement[]`, for the load-from-URL test.
- `ScreenShots/`: a picture of the test page.

## Rules that keep it working

- **Edit the TypeScript, then compile.** `FormGen.js` is generated. Change `FormGen.ts`, run `tsc`, and commit both.
- **The page must provide `DoFormGenInteraction`.** The generated inputs call a global
  `DoFormGenInteraction(this)` from `onchange`. The host page defines that function to forward to the instance
  (`FG.DoFormGenInteraction(e)`), so there is one interactive form per page as things stand.
- **Element ids are the contract.** Values are keyed by `elID`. Options of radio and check-box fields get
  `<elID>_<n>` ids (`3_3`, `6_1`), so saved values depend on the order of `elContent`.
- **The version string travels with the data.** `GetFormData` adds it as a `FORMVERSIONSTRING` value, and
  `SetFormData` reads it back. Keep it when you change the data format.
- **Keep the README in step.** It is the API reference, so update it with any change to a public method or to a
  definition class.
