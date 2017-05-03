# generator-tidal-midi-synth 

## Installation

First, install [Yeoman](http://yeoman.io) and generator-tidal-midi-synth using 
[npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-tidal-midi-synth
```

## Usage

Generate your new project:

```bash
yo tidal-midi-synth
```

The generator will prompt you for a synth name:

```bash
? What is the name of your module? EpicSynth
module name: EpicSynth
   create EpicSynth.cabal
   create EpicSynth.hs
```

Then you can immediately install the generated tidal-midi synth:

```bash
cabal install
```

...but you'll probably want to edit the synth in the `.hs` file and add custom MIDI CC mappings.

After `cabal install`, your synth will then be available in your TidalCycles editor 
(Atom, Emacs, etc) to use with a MIDI device.

## License

MIT © [Mike Hodnick]()

